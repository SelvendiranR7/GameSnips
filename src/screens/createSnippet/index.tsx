import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import InputBox from '../../components/InputBox';
import {
  ADD_ICON,
  ATTACHMENT_ICON,
  BACK_ICON,
  CLOSE_ICON,
} from '../../assets';
import useCreateSnippet from './useCreateSnippet';

const CreateSnippet: React.FC = () => {
  const {
    onChangeDescription,
    onChangeName,
    onChangeTitle,
    postSnippet,
    removeImage,
    selectImages,
    onBack,
    selectedImages,
    name,
    description,
    title,
    errorMessage,
  } = useCreateSnippet();
  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.fieldContainer}>
        <View style={{paddingVertical: 10}}>
          <Text style={style.headerText}>Create Snippet</Text>
          <TouchableOpacity
            onPress={onBack}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 20,
              justifyContent: 'center',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={BACK_ICON}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={
            selectedImages.length % 2 === 0
              ? selectedImages
              : [...selectedImages, null]
          }
          ListHeaderComponent={
            <View
              style={{
                gap: 10,
              }}>
              <InputBox
                value={name}
                showError
                errorMessage={errorMessage.name}
                placeholder="John"
                onChangeText={onChangeName}
                label={'Enter your name'}
              />
              <InputBox
                value={title}
                onChangeText={onChangeTitle}
                errorMessage={errorMessage.title}
                placeholder="Game of knights"
                label={'Game title'}
              />
              <InputBox
                value={description}
                onChangeText={onChangeDescription}
                errorMessage={errorMessage.description}
                placeholder="Game of knights"
                textInputProps={{
                  multiline: true,
                }}
                textInputStyle={style.textInputStyle}
                label={'Description'}
              />
              <View style={style.previewContainer}>
                <Text style={style.labelText}>Previews</Text>
                {selectedImages.length ? (
                  <TouchableOpacity onPress={selectImages}>
                    <Image source={ADD_ICON} style={style.addIcon} />
                  </TouchableOpacity>
                ) : null}
              </View>
              {selectedImages.length ? null : (
                <>
                  <TouchableOpacity
                    onPress={selectImages}
                    style={[
                      style.attachmentButton,
                      errorMessage.attachment !== '' && {borderColor: 'red'},
                    ]}>
                    <Text style={style.addAttachmentText}>Add attachment</Text>
                    <Image
                      resizeMode="contain"
                      style={style.attachmentIcon}
                      source={ATTACHMENT_ICON}
                    />
                  </TouchableOpacity>
                  <Text style={style.attachmentError}>
                    {errorMessage.attachment}
                  </Text>
                </>
              )}
            </View>
          }
          renderItem={({item, index}) => {
            if (item)
              return (
                <View style={style.imageContainer}>
                  <Image
                    style={style.selectedImage}
                    source={{uri: item.path}}
                  />
                  <TouchableOpacity
                    onPress={() => removeImage(index)}
                    style={style.removeImage}>
                    <Image
                      resizeMode="contain"
                      style={style.closeIcon}
                      source={CLOSE_ICON}
                    />
                  </TouchableOpacity>
                </View>
              );
            return <View style={style.imageContainer} />;
          }}
          numColumns={2}
          columnWrapperStyle={{gap: 10}}
          ItemSeparatorComponent={() => <View style={{height: 10}} />}
          contentContainerStyle={{
            flexGrow: 1,
            padding: 10,
          }}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <TouchableOpacity
              onPress={postSnippet}
              style={{
                backgroundColor: '#ccc',
                padding: 15,
                borderRadius: 8,
                marginTop: 10,
                flexGrow: 1,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Share
              </Text>
            </TouchableOpacity>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateSnippet;

const style = StyleSheet.create({
  headerText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  fieldContainer: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  textInputStyle: {
    height: 150,
  },
  labelText: {color: '#fff', fontSize: 14, paddingBottom: 10, flex: 1},
  attachmentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 8,
  },
  addAttachmentText: {
    fontSize: 14,
    color: '#fff',
    flex: 1,
  },
  attachmentIcon: {
    height: 30,
    width: 20,
  },
  removeImage: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#ccc',
    borderRadius: 10,
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    height: 15,
    width: 15,
  },
  selectedImage: {
    flex: 1,
    borderRadius: 10,
  },
  imageContainer: {
    aspectRatio: 1,
    flex: 1,
  },
  addIcon: {
    height: 20,
    width: 20,
  },
  previewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  attachmentError: {
    color: 'red',
    fontSize: 14,
  },
});
