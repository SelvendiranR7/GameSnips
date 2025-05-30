import useGamesStore from '../../zustand';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const useFeed = () => {
  const data = useGamesStore(state => state.feeds);
  const safe = useSafeAreaInsets();
  const navigation = useNavigation();
  //@ts-ignore
  const handleAddSnippet = () => navigation.navigate('CreateSnippet');
  const feedHeight = height - (safe.top + safe.bottom);
  return {
    handleAddSnippet,
    feedHeight,
    data,
  };
};

export default useFeed;
