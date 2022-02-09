package main

import (
	"log"
	"io"
	"os"
	"fmt"
	"net/http"
	"errors"
	"math/big"
	"encoding/json"
	"strconv"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/ethereum/go-ethereum/ethclient"
	"github.com/ethereum/go-ethereum/common"

)

/*
 * The metadata server generates and serves the token metadata
 * It needs to take in a tokenId and return that token's json metadata
 */

const (
	description = "Generative adventure stories in the lootverse"
	baseExternalURI = "https://avenluutn.squad.games/story"
)

var (
	APIbaseURI string
)

// main serves token metadata by token id /tokens/:tokenId -> Token
func main() {
	log.Println("Starting Avenluutn Metadata Server")

	pubHexAddress := os.Getenv("AVENLUUTN_PUB_ADDR")
	if pubHexAddress == "" {
		log.Fatal("Missing required AVENLUUTN_PUB_ADDR envar")
	}
	log.Println("Publisher address", pubHexAddress)

	provider := os.Getenv("AVENLUUTN_PROVIDER")
	if provider == "" {
		log.Fatal("Missing required AVENLUUTN_PROVIDER envar")
	}
	log.Println("Provider", provider)

	APIbaseURI = os.Getenv("AVENLUUTN_API_BASE_URI")
	if APIbaseURI == "" {
		log.Fatal("Missing requiredAVENLUUTN_API_BASE_URI")
	}

	client, err := ethclient.Dial(provider)
	if err != nil {
		log.Fatal(err)
	}
	pubAddress := common.HexToAddress(pubHexAddress)
	pub, err := NewPublisher(pubAddress, client)
	if err != nil {
		log.Fatal(err)
	}

	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.CORS())

	e.GET("tokens/:tokenID", pub.getTokenMetadata)
	e.GET("stories/:tokenID", pub.getStoryData)

	e.Logger.Fatal(e.Start(":8000"))
}

func (p *Publisher) getStoryData(c echo.Context) error {
	tokenID, err := getInt64Param(c, "tokenID")
	if err != nil {
		e := errors.New("Invalid tokenID, expecting int64")
		return badRequest(e);
	}

	storyInfo, err := p.getStoryInfo(tokenID)
	if err != nil {
		e := errors.New(fmt.Sprintf("Could not get story\n%v", err))
		return serverError(e);
	}

	run, err := p.GetRun(storyInfo)
	if err != nil {
		e := errors.New(fmt.Sprintf("Could not get run\n%v"))
		return serverError(e)
	}

	data, err := json.MarshalIndent(
		run.Stories[storyInfo.Index],
		"",
		"<span style='color: lightgray'>|</span>  ",
	)
	if err != nil {
		e := errors.New(fmt.Sprintf("Could not unmarshal story\n%v", err))
		return serverError(e)
	}
	return c.HTML(
		http.StatusOK,
		fmt.Sprintf(
			"<pre>%v</pre>",
			string(data),
		),
	)
}

// getTokenMetadata handler to get token metadata
func (p *Publisher) getTokenMetadata(c echo.Context) error {
	tokenID, err := getInt64Param(c, "tokenID")
	if err != nil {
		e := errors.New("Invalid tokenID, expecting int64")
		return badRequest(e);
	}

	storyInfo, err := p.getStoryInfo(tokenID)
	if err != nil {
		e := errors.New(fmt.Sprintf("Could not get story\n%v", err))
		return serverError(e);
	}

	run, err := p.GetRun(storyInfo)
	if err != nil {
		e := errors.New(fmt.Sprintf("Could not get run\n%v", err))
		return serverError(e)
	}

	meta, err := newStoryMeta(run.Stories[storyInfo.Index], storyInfo)
	if err != nil {
		e := errors.New(
			fmt.Sprintf(
				"Could not make metadata from story\n%v",
				err,
			),
		)
		return serverError(e)
	}
	tokenMetadata, err := json.Marshal(meta)
	if err != nil {
		e := errors.New(fmt.Sprintf(
			"Could not marshal storyMeta\n%v",
			err,
		))
		return serverError(e)
	}

	return c.HTML(http.StatusOK, string(tokenMetadata))
}

// fmtStoryMetadata returns StoryMeta given a story
func newStoryMeta(s Story, si StoryInfo) (StoryMeta, error) {
	guildName, err := findGuildName(s.RichText.Beginning)
	if err != nil {
		guildName = "A guild"
	}
	numAdventurers := countAdventurers(s.RichText.Beginning)
	var adventurerQuantity string
	if numAdventurers == 0 {
		adventurerQuantity = "some"
	} else {
		adventurerQuantity = strconv.Itoa(numAdventurers)
	}

	questText, err := makeQuestText(s.RichText.Beginning)
	if err != nil {
		questText = "do something daring and mighty!"
	}
	summary := fmt.Sprintf(
		"In the name of %s,\n %s adventurers accept their quest to\n %s",
		guildName,
		adventurerQuantity,
		questText,
	)

	questConjunctive, err := findQuestConjunctive(s.RichText.Beginning)
	if err != nil {
		questConjunctive = "a"
	}

	questObjective, err := findQuestObjective(s.RichText.Beginning)
	if err != nil {
		questObjective = "a difficult problem"
	}

	name := fmt.Sprintf(
		"%v and %v %v [%v-%v-%v]",
		guildName,
		questConjunctive, // the conjunctive right after questType
		questObjective,
		si.NarratorIndex,
		si.CollectionIndex,
		si.Index,
	)

	imageSVG := makeImageSVG(name, summary)

	var storyMeta StoryMeta
	storyMeta.Name = name
	storyMeta.Description = description
	storyMeta.Image = imageSVG
	storyMeta.AnimationURL = "Not Implemented" // imageHTML
	storyMeta.ExternalURL = "Not Implemented" // externalURL
	storyMeta.Attributes = []Attribute{} // attributes

	return storyMeta, nil
}

// *Publisher.getStoryInfo gets a StoryInfo by tokenID
func (p *Publisher) getStoryInfo(tokenID int64) (StoryInfo, error) {

	storyID, err := p.MintedStories(nil, big.NewInt(tokenID))
	if err != nil {
		return StoryInfo{}, errors.New(fmt.Sprintf(
			"Could not get StoryInfo for tokenID %v\n%v",
			tokenID,
			err,
		))
	}

	s, err := p.Stories(nil, storyID)
	if err != nil {
		return StoryInfo{}, errors.New(
			fmt.Sprintf("Could not find story %v", storyID),
		)
	}

	return StoryInfo{
		s.NarratorIndex.Int64(),
		s.CollectionIndex.Int64(),
		s.Index.Int64(),
		s.Minted,
		s.NftId.Int64(),
	}, nil
}

// GetRun gets run data from the runs api by narrator index and collection index
func (p *Publisher) GetRun(s StoryInfo) (Run, error) {
	runURL := fmt.Sprintf(
		"%v/runs/%v.%v.json",
		APIbaseURI,
		s.NarratorIndex,
		s.CollectionIndex,
	)

	res, err := http.Get(runURL)
	if err != nil {
		return Run{}, errors.New(
			fmt.Sprintf("Could not get run %v (%v)", runURL, err),
		)
	}

	body, err := io.ReadAll(res.Body)
	res.Body.Close()
	if res.StatusCode > 299 {
		return Run{}, errors.New(fmt.Sprintf(
			"Get run error (%v)\n%v",
			res.StatusCode,
			string(body),
		))
	}
	if err != nil {
		return Run{}, errors.New(
			fmt.Sprintf("Get run error\n%v", err),
		)
	}

	var run Run
	err = json.Unmarshal(body, &run)
	if err != nil {
		return Run{}, errors.New(
			fmt.Sprintf("Get run json error\n%v", err),
		)
	}

	return run, nil
}
