import { StoryFn, Meta } from '@storybook/react';
import CardNumberInput from './CardNumberInput';
import { PropsWithChildren } from 'react';

export default {
  title: 'payments/Input/CardNumber',
  component: CardNumberInput
} as Meta;

const Template: StoryFn<PropsWithChildren> = args => (
  <CardNumberInput>
    <CardNumberInput.Number />
    <CardNumberInput.Slash />
    <CardNumberInput.Number />
    <CardNumberInput.Slash />
    <CardNumberInput.Number />
    <CardNumberInput.Slash />
    <CardNumberInput.Number />
  </CardNumberInput>
);

export const Default = Template.bind({});
