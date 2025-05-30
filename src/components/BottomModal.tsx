import React from 'react';
import {View, Modal, Platform, Pressable} from 'react-native';

interface Props {
  visible: boolean;
  children: React.ReactNode;
  closeModal: () => void;
}
const BottomModal: React.FC<Props> = ({visible, children, closeModal}) => {
  return (
    <Modal animationType="slide" transparent visible={visible}>
      <View
        style={{
          flex: 1,
          backgroundColor: Platform.select({
            android: 'rgba(0,0,0,0.1)',
            ios: 'rgba(0,0,0,0.7)',
          }),
          justifyContent: 'flex-end',
        }}>
        <Pressable onPress={closeModal} style={{flex: 2}} />
        <View
          style={{
            flex: 3,
            borderTopEndRadius: 12,
            borderTopStartRadius: 12,
            backgroundColor: '#292929',
            overflow: 'hidden',
          }}>
          <View
            style={{
              height: '10%',
              backgroundColor: '#424242',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 5,
                width: '20%',
                backgroundColor: '#292929',
                borderRadius: 8,
              }}
            />
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default BottomModal;
