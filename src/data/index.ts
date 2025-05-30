export const mockFeeds = require('./data.json');

export interface FeedType {
  description: string;
  name: string;
  previews: string[];
  title: string;
  likeCount: number;
  id: number
  liked : boolean;
}

export type FeedListType = FeedType[];
