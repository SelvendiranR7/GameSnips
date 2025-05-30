import {useState} from 'react';
import useAttachmentPicker from '../../customHooks/useAttachmentPicker';
import {useNavigation} from '@react-navigation/native';
import useGamesStore from '../../zustand';

const useCreateSnippet = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    title: '',
    description: '',
    attachment: '',
  });
  type errorType = typeof errorMessage;
  type errorKeys = keyof errorType;
  const {selectImages, selectedImages, removeImage} = useAttachmentPicker({
    mediaType: 'photo',
    cropping: true,
    multiple: true,
  });
  const navigation = useNavigation();
  const onBack = () => navigation.goBack();
  const addPost = useGamesStore(state => state.addFeed);

  const validate = () => {
    const errorData = {
      isValidated: true,
      name: '',
      title: '',
      description: '',
      attachment: '',
    };

    if (name === '') {
      errorData.isValidated = false;
      errorData.name = 'Name is mandatory';
    }

    if (title === '') {
      errorData.isValidated = false;
      errorData.title = 'Title is mandatory';
    }

    if (description === '') {
      errorData.isValidated = false;
      errorData.description = 'Description is mandatory';
    }

    if (selectedImages.length == 0) {
      errorData.isValidated = false;
      errorData.attachment = 'Attachments are mandatory';
    }
    setErrorMessage(errorData);
    return errorData.isValidated;
  };

  const postSnippet = () => {
    if (validate()) {
      addPost({
        description,
        name,
        previews: selectedImages.map(image => image.path),
        title,
        likeCount: 0,
        id: new Date().getTime(),
        liked: false,
      });
      onBack();
    }
  };

  const clearError = (key: errorKeys) => {
    if (errorMessage[key]) {
      setErrorMessage(message => ({
        ...message,
        [key]: '',
      }));
    }
  };
  const onChangeName = (name: string) => {
    clearError('name');
    setName(name);
  };

  const onChangeTitle = (title: string) => {
    clearError('title');
    setTitle(title);
  };

  const onChangeDescription = (description: string) => {
    clearError('description');
    setDescription(description);
  };

  return {
    onChangeDescription,
    onChangeTitle,
    onChangeName,
    postSnippet,
    selectImages,
    removeImage,
    onBack,
    selectedImages,
    name,
    description,
    title,
    errorMessage,
  };
};

export default useCreateSnippet;
