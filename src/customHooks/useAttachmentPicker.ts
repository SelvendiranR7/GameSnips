import {useState} from 'react';
import ImageCropPicker, {Options} from 'react-native-image-crop-picker';

const useAttachmentPicker = (config: Options) => {
  const [selectedImages, setSelectedImages] = useState<any[]>([]);

  const selectImages = async () => {
    const images = await ImageCropPicker.openPicker(config);
    if (Array.isArray(images)) {
      setSelectedImages(selectedImage => [...selectedImage, ...images]);
    }
  };

  const removeImage = (index: number) => {
    setSelectedImages(images => {
      return images.filter((_, selectedIndex) => selectedIndex !== index);
    });
  };

  return {
    selectedImages,
    selectImages,
    removeImage,
  };
};

export default useAttachmentPicker;
