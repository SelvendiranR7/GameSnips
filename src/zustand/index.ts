import {create} from 'zustand';
import {FeedType} from '../data';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface GameStore {
  feeds: FeedType[];
  addFeed: (feed: FeedType) => void;
  likeFeed: (feed: FeedType) => void;
  setupFeed: (feed: FeedType[]) => void;
}
const useGamesStore = create<GameStore>(set => ({
  feeds: [],
  addFeed: feed => {
    feed.id = new Date().getTime();
    set(state => {
      const feeds = [...state.feeds, feed];
      AsyncStorage.setItem('@feedsList', JSON.stringify(feeds));
      return {
        feeds,
      };
    });
  },
  likeFeed: feed => {
    set(state => {
      const index = state.feeds.findIndex(
        (item: FeedType) => item.id === feed.id,
      );
      if (index === -1) {
        return {feeds: [...state.feeds]};
      }
      const feeds = [...state.feeds];
      if (feed.liked) {
        feeds[index].liked = false;
        feeds[index].likeCount--;
      } else {
        feeds[index].liked = true;
        feeds[index].likeCount++;
      }
      AsyncStorage.setItem('@feedsList', JSON.stringify(feeds));

      return {feeds: feeds};
    });
  },
  setupFeed: feeds => {
    set(() => ({
      feeds,
    }));
  },
}));

export default useGamesStore;
