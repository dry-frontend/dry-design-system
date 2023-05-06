import { StoryFn, Meta } from '@storybook/react';
import PasswordInput from './PasswordInput';

export default {
  title: 'payments/Input/Password',
  component: PasswordInput
} as Meta;

const Template: StoryFn = () => (
  <PasswordInput>
    <PasswordInput.Input />
    <PasswordInput.Input />
  </PasswordInput>
);

export const Default = Template.bind({});

Default.args = {};
