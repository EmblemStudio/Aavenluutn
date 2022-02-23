import React from 'react'

import Countdown from './Countdown'
import { Story, storyName, getTimeLeft } from '../utils'
import { WAITING_FOR_SERVER } from '../constants'
import LoadingAnimation from './LoadingAnimation'
import useNarratorState from '../hooks/useNarratorState';

interface StoryBoxProps { story: Story }


function label(text: { label: string, string: string }, key: number) {
  return (
    <span key={key} className={text.label}>{text.string}</span>
  )
}

export default ({ story }: StoryBoxProps) => {
  const narratorState = useNarratorState()
    console.log("rendering StoryBox", story)
    console.log("story end time", new Date(story.endTime.toNumber() * 1000).toLocaleString())
  return (
    <section className="section pt-2 pb-5">
      <div className="container outer-border">
        <div className="container inner-border">
          <section className="section pt-5 pb-5">
            <div className="block beginning">
             {story?.text?.richText?.beginning?.map(label) ?? "no beginning found"}
            </div>
            <div className="block middle">
              {story.text.richText.middle.obstacleText?.map((obText, i) => {
                console.log("rendering obstacle", obText)
                return (
                  <div className="block middle obstacle" key={i}>
                    <div className="block outcome main">
                      {obText?.map(label)}
                    </div>
                    <div className="block outcome main">
                      {story.text.richText.middle.outcomeText[i]?.main?.map(label) ?? "no main text found"}
                    </div>
                    <div className="block outcome triggers">
                      {story.text.richText.middle.outcomeText[i]?.triggerTexts?.map((t, i) => {
                        return <div key={i}>{t?.map(label)}</div>
                      }) ?? "no trigger texts found"}
                    </div>
                    <div className="block outcome results">
                      {story.text.richText.middle.outcomeText[i]?.resultTexts?.map((r, i) => {
                        return <div key={i}>{r?.map(label)}</div>
                      }) ?? "no result texts found"}
                    </div>
                  </div>
                )
              }) ?? "no obstacle text found"}
            </div>
            <div className="block ending">
              <div className="block ending main">
                {story.text.richText.ending.main?.map(label)}
              </div>
              <div className="block ending results">
                {story.text.richText.ending?.map((r, i) => {
                  return <div key={i}>{r?.map(label) ?? "no r found"}</div>
                }) ?? "no ending results texts found"}
              </div>
            </div>
            {story.text.nextUpdateTime !== -1 &&
              <div className="block">
                <LoadingAnimation />
              </div>
            }
            {getTimeLeft(story.text.nextUpdateTime) > 0 ?
              <div className="block">
                <Countdown
                  to={story.text.nextUpdateTime}
                />
              </div>
            :
              story.text.nextUpdateTime !== -1 &&
              <div className="block has-text-grey">
                {narratorState.queryUntilUpdate(narratorState)}
                {WAITING_FOR_SERVER}
              </div>
            }
          </section>
        </div>
      </div>
      <div className="container has-text-right is-garamond is-italic is-size-5 pr-1">
        {`NFT ${storyName(story)}`}
      </div>
    </section>
  )
}
