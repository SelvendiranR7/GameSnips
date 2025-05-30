import React from 'react';
import {TouchableOpacity, Image, ImageSourcePropType} from 'react-native';

interface Props {
  onPress?: () => void;
  icon: ImageSourcePropType;
}

const ActionButton: React.FC<Props> = ({icon, onPress = () => {}}) => (
  <TouchableOpacity onPress={onPress}>
    <Image style={{height: 30, width: 30}} source={icon} />
  </TouchableOpacity>
);

export default ActionButton;
