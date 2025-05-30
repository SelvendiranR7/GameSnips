import React, {useState} from 'react';
import {View, StyleSheet, Pressable, Text, Image} from 'react-native';
import ActionButton from './ActionButton';
import {
  COMMAND_ICON,
  LIKE_ICON,
  LIKED_ICON,
  MORE_ICON,
  SHARE_ICON,
  USER_ICON,
} from '../assets';
import BottomModal from './BottomModal';
import {FeedType} from '../data';
import useGamesStore from '../zustand';

interface Props {
  item: FeedType;
}

const FeedActionView: React.FC<Props> = ({item}) => {
  const [showTextModal, setShowTextModal] = useState(false);
  const handleTextPress = () => setShowTextModal(true);
  const closeModal = () => setShowTextModal(false);
  const likePost = useGamesStore(state => state.likeFeed);

  return (
    <View style={style.mainView}>
      <View style={style.innerView}>
        <View style={style.descriptionView}>
          <View style={style.profileView}>
            <Image source={USER_ICON} style={style.profileIcon} />
            <Text style={style.userName}>{item.name}</Text>
          </View>
          <Pressable onPress={handleTextPress}>
            <Text style={style.gameTitle}>{item.title}</Text>
            <Text numberOfLines={1} style={style.description}>
              {item.description}
            </Text>
          </Pressable>
        </View>
        <View style={style.actionView}>
          <View style={{alignItems: 'center'}}>
            <ActionButton
              onPress={() => likePost(item)}
              icon={item.liked ? LIKED_ICON : LIKE_ICON}
            />
            <Text style={{color: '#fff'}}>{item.likeCount}</Text>
          </View>
          <ActionButton icon={COMMAND_ICON} />
          <ActionButton icon={SHARE_ICON} />
          <ActionButton icon={MORE_ICON} />
        </View>
      </View>
      <BottomModal closeModal={closeModal} visible={showTextModal}>
        <View style={style.modalView}>
          <Text style={style.modalTitle}>{item.title}</Text>
          <Text style={style.modalDescription}>{item.description}</Text>
        </View>
      </BottomModal>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    padding: 12,
  },
  actionView: {
    gap: 50,
  },
  descriptionView: {flex: 1, justifyContent: 'flex-end'},
  description: {
    color: '#fff',
    fontSize: 14,
  },
  innerView: {
    flexDirection: 'row',
  },
  modalView: {flex: 1, paddingHorizontal: 10, paddingTop: 10},
  modalDescription: {
    color: '#fff',
    fontSize: 15,
  },
  profileView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  },
  profileIcon: {height: 35, width: 35},
  userName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    paddingLeft: 20,
  },
  gameTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  modalTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
});

export default FeedActionView;
