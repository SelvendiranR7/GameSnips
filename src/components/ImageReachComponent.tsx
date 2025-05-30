import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  data: any[];
  currentIndex: number;
}
const ImageReachComponent: React.FC<Props> = ({data, currentIndex}) => {
  if (data.length > 1) {
    return data.map((_, index) => {
      if (currentIndex === index)
        return <View key={index} style={[styles.dot, styles.selectedDot]} />;
      return <View key={index} style={styles.dot} />;
    });
  }
  return null;
};

export default ImageReachComponent;

const styles = StyleSheet.create({
  dot: {
    height: 10,
    width: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  selectedDot: {backgroundColor: 'red'},
});
