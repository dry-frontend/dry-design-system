import { StoryFn, Meta } from '@storybook/react';
import PasswordInput from './PasswordInput';
import { theme } from 'styles/theme';

export default {
  title: 'payments/Input/Password',
  component: PasswordInput
} as Meta;

const Template: StoryFn = args => (
  <PasswordInput>
    <PasswordInput.Input />
    <PasswordInput.Input />
    <PasswordInput.Dot {...args} />
    <PasswordInput.Dot {...args} />
  </PasswordInput>
);

export const Default = Template.bind({});

Default.args = {
  color: theme.colors.PRIMARY
};
