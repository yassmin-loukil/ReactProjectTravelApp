import React from 'react';
import { KeyboardTypeOptions, StyleSheet, TextInput } from 'react-native';

interface MyInputProps {
  onChangeText: (val: any) => void;
  placeholder?: string;
  background?: string;
  type?: string;
  keyboardTypeargs?: KeyboardTypeOptions;
  value?: string;
}

export const MyInput = ({
  placeholder,
  background,
  type,
  keyboardTypeargs,
  onChangeText,
  value,
}: MyInputProps) => {
  return (
    <>
      {/*    <MyButton
  bgColor="black"
//  isDisabled
  onPress={handlePress}
  text="this is nejah neji"
  textColor="white"
/> */}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[styles.container, { borderColor: background }]}
        placeholder={placeholder}
        keyboardType={keyboardTypeargs}
        //multiline
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    placeholderTextColor: 'gray',
  },
  text: { color: 'black' },
});
