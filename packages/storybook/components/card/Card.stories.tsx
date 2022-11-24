import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import CustomCard from './Card';

const MyCustomCardMeta: ComponentMeta<typeof CustomCard> = {
  title: 'CustomCard',
  component: CustomCard,
  argTypes: {
    withTag: { control: { type: 'boolean' } },
    tagColor1: { control: { type: 'color' } },
    tagColor2: { control: { type: 'color' } },
  },
  args: {
    title: 'hello this is title',
    description: 'this is description',
    image: 'https://picsum.photos/200',
    tagText: 'this is tag text',
  },
};

export default MyCustomCardMeta;

type MyCustomCardStory = ComponentStory<typeof CustomCard>;

export const Basic: MyCustomCardStory = (args) => <CustomCard {...args} />;
Basic.args = {
  title: 'hello this is title',
  description: 'this is description',
  image: 'https://picsum.photos/200',
  tagText: 'this is tag text',
};
export const CardwithTag: MyCustomCardStory = (args) => <CustomCard {...args} />;
CardwithTag.args = {
  ...Basic.args,
  withTag: true,
  tagColor1: '#ecd15c',
  tagColor2: '#dbae27',
};
