import {useEffect, useState} from 'react';
import useGamesStore from '../zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {mockFeeds} from '../data';

const useStoreSetup = () => {
  const [ready, setReady] = useState(false);
  const setupFeed = useGamesStore(state => state.setupFeed);
  useEffect(() => {
    (async () => {
      const feeds = await AsyncStorage.getItem('@feedsList');
      if (feeds) {
        setupFeed(JSON.parse(feeds));
      } else {
        await AsyncStorage.setItem('@feedsList', JSON.stringify(mockFeeds));
        setupFeed(mockFeeds);
      }
    })().finally(() => {
      setReady(true);
    });
  }, [setupFeed]);

  return {ready};
};

export default useStoreSetup;
