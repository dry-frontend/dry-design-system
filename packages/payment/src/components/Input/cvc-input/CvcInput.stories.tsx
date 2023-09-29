import { StoryFn, Meta } from '@storybook/react';
import CvcInput from './CvcInput';
import { InputAttributesType } from '../inputType';

export default {
  title: 'payments/Input/Cvc',
  component: CvcInput
} as Meta;

const Template: StoryFn<InputAttributesType> = args => <CvcInput {...args} />;

export const Default = Template.bind({});
