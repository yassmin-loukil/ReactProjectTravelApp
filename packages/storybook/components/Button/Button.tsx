import { Button } from '@ui-kitten/components';
import React from 'react';
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
 

  return (
    <>
      <Button status="danger" onPress={onPress}>
        Button
      </Button>
    
    </>
  );
};
