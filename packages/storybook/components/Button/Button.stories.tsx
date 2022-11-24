import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { MyButton } from './Button';

const MyButtonMeta: ComponentMeta<typeof MyButton> = {
  title: 'MyButton',
  component: MyButton,
  argTypes: {
    onPress: { action: 'pressed the button' },
    variant: {
      options: [30, 40, 50],
      control: { type: 'radio' },
    },
    bgColor: {
      control: { type: 'select' },
      options: ['white', 'black', 'gray'],
    },
  },
  args: {
    text: 'Hello world',
    //bgColor: "#ffffff",
    textColor: 'red',
    isDisabled: true,
  },
};

export default MyButtonMeta;

type MyButtonStory = ComponentStory<typeof MyButton>;

export const Basic: MyButtonStory = (args) => <MyButton {...args} />;
Basic.args = {
  text: 'this is nejah neji',
  bgColor: 'black',
  textColor: 'white',
};
