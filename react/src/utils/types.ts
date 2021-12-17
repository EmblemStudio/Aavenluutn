import { BigNumber } from '@ethersproject/bignumber'
import { ScriptResult, Story as StoryText } from '../../../scripts/src'

export type NetworkName = "mainnet" | "ropsten" | "polygon" | "localhost" | "goerli"

export interface Notifications {
  warnings: string[];
  errors: string[];
  status: string[];
}

export type NotificationFunction = (type: "errors" | "warnings" | "status", text: string) => void

export interface NarratorParams { network: string; narratorIndex: number }

export interface NarratorState {
  narrator: Narrator,
  updateNarrator: () => void,
  lastUpdate: number
}

export interface Narrator {
  NFTAddress: string;
  NFTId: BigNumber;
  start: BigNumber;
  totalCollections: BigNumber;
  collectionLength: BigNumber;
  collectionSpacing: BigNumber;
  collectionSize: BigNumber;
  collections: Collection[];
  stories: StoriesByGuild;
}

export interface Collection {
  collectionIndex: number;
  scriptResult: ScriptResult;
}

export interface StoriesByGuild { [guildId: number]: CategorizedStories };

export interface CategorizedStories {
  upcoming: Story[];
  inProgress: Story[];
  onAuction: Story[];
  completed: Story[];
}

export interface Story {
  narratorIndex: number;
  collectionIndex: number;
  storyIndex: number;
  id: string;
  startTime: BigNumber;
  endTime: BigNumber;
  auction: Auction;
  minted: boolean;
  nftId: BigNumber;
  text: StoryText;
}

export interface Auction {
  amount: BigNumber;
  bidder: string;
  duration: BigNumber;
}