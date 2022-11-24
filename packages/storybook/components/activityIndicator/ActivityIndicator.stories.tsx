import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { ActivityIndicator } from 'react-native';

const MySpinnerMeta: ComponentMeta<typeof ActivityIndicator> = {
  title: 'MySpinner',
  component: ActivityIndicator,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'largge'],
    },
    color: {
      control: {
        type: 'color',
      },
    },
  },
  args: {},
};

export default MySpinnerMeta;

type MySpinnerStory = ComponentStory<typeof ActivityIndicator>;

export const Basic: MySpinnerStory = (args) => (
  <ActivityIndicator size={args.size} color={args.color} />
);
Basic.args = {
  color: 'red',
  size: 'large',
};
