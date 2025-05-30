import React, {useState} from 'react';
import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native';
import FeedActionView from './FeedActionView';
import {FeedType} from '../data';
import ImageReachComponent from './ImageReachComponent';

const {width} = Dimensions.get('screen');
interface Props {
  item: FeedType;
}

const ImageListingView: React.FC<Props> = ({item}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={style.main}>
      <FlatList
        data={item.previews}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        scrollEventThrottle={1}
        onViewableItemsChanged={({viewableItems}) => {
          if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index ?? 0);
          }
        }}
        renderItem={({item}) => {
          return (
            <Image
              resizeMode="stretch"
              style={style.gameImage}
              source={{uri: item}}
            />
          );
        }}
      />
      <View style={style.dotContainer}>
        <View style={style.dotView}>
          <ImageReachComponent
            currentIndex={currentIndex}
            data={item.previews}
          />
        </View>
      </View>
      <FeedActionView item={item} />
    </View>
  );
};

const style = StyleSheet.create({
  main: {flex: 1},
  gameImage: {height: '100%', width: width, backgroundColor: '#000'},
  dotView: {flexDirection: 'row', justifyContent: 'center', gap: 15},
  dotContainer: {position: 'absolute', left: 0, right: 0, bottom: 50},
});
export default ImageListingView;
