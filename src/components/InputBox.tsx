import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from 'react-native';

interface Props {
  label: string;
  onChangeText: (text: string) => void;
  value: string;
  textInputProps?: TextInputProps;
  placeholder?: string;
  textInputStyle?: StyleProp<TextStyle>;
  showError?: boolean;
  errorMessage?: string | undefined;
}

const InputBox: React.FC<Props> = ({
  label = '',
  value,
  placeholder,
  onChangeText,
  textInputProps,
  textInputStyle,
  errorMessage,
}) => {
  return (
    <View>
      <Text style={style.label}>{label}</Text>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={[style.textInput, errorMessage && style.error, textInputStyle]}
        placeholder={placeholder}
        {...textInputProps}
      />
      <Text style={style.errorMessage}>{errorMessage}</Text>
    </View>
  );
};

export default InputBox;

const style = StyleSheet.create({
  textInput: {
    backgroundColor: '#ccc',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  label: {
    color: '#fff',
    fontSize: 14,
    paddingBottom: 10,
  },
  error: {borderWidth: 1, borderColor: 'red'},
  errorMessage: {color: 'red', fontSize: 14, marginTop: 5},
});
