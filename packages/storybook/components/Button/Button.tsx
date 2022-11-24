import { Button } from '@ui-kitten/components';
import React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { MyInput } from '../input/input';
interface MyButtonProps {
  onPress: () => void;
  text?: string;
  bgColor?: string;
  textColor?: string;
  variant?: number;
  isDisabled?: boolean;
}

export const MyButton = ({
  onPress,
  text,
  bgColor,
  textColor,
  variant,
  isDisabled,
}: MyButtonProps) => {
  const [simpltxt, setSimpltxt] = React.useState('');
  const handleChange = (val: any) => {
    setSimpltxt(val);
    console.log(simpltxt, 'xxxxxxxxxx');
  };

  return (
    <>
      <Button status="danger" onPress={onPress}>
        Button
      </Button>
      <MyInput
        value={simpltxt}
        onChangeText={(val: any) => handleChange(val)}
        background="black"
        keyboardTypeargs="numeric"
        placeholder="*************"
      />
      <Text>{simpltxt}</Text>

      <ActivityIndicator color="#b49494" size="small" />
    </>
  );
};
