import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ImageListingView from '../../components/ImageListingView';
import {ADD_ICON} from '../../assets';
import useFeed from './useFeed';

const Feed: React.FC = () => {
  const {data,feedHeight,handleAddSnippet} = useFeed();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.main}>
        <FlatList
          data={data}
          pagingEnabled
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View
                style={[
                  {
                    height: feedHeight,
                  },
                  styles.feedStyle,
                ]}>
                <ImageListingView item={item} />
              </View>
            );
          }}
        />
        <TouchableOpacity onPress={handleAddSnippet} style={styles.addButton}>
          <Image source={ADD_ICON} style={styles.addIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Feed;

const styles = StyleSheet.create({
  main: {flex: 1},
  addIcon: {
    height: 30,
    width: 30,
  },
  addButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  safeArea: {flex: 1, backgroundColor: '#000'},
  feedStyle: {width: '100%', backgroundColor: '#fff'},
});
