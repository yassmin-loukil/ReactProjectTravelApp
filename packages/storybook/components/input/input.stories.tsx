import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { MyInput } from './input';

const MyInputMeta: ComponentMeta<typeof MyInput> = {
  title: 'MyInput',
  component: MyInput,
  argTypes: {
    onChangeText: { action: 'change the value of the input' },
    background: { control: { type: 'select' }, options: ['red', 'green', 'blue'] },
    type: { control: { type: 'select' }, options: ['text', 'password', 'email', 'file'] },
    keyboardTypeargs: { options: ['default', 'numeric'], control: { type: 'radio' } },
  },
  args: {
    placeholder: 'write some text here',
  },
};

export default MyInputMeta;
type MyInputStory = ComponentStory<typeof MyInput>;

export const Basic: MyInputStory = (args) => {
  return <MyInput {...args} />;
};
Basic.args = {
  placeholder: 'this is nejah neji',
  background: 'black',
  type: 'text',
  keyboardTypeargs: 'numeric',
};
