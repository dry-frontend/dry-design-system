import type { Meta, StoryObj } from '@storybook/react';

import { TextButton } from './TextButton';

const meta: Meta<typeof TextButton> = {
  title: 'Button/TextButton',
  component: TextButton
};

export default meta;
type Story = StoryObj<typeof TextButton>;

export const Contained: Story = {
  render: () => <TextButton variant="contained">{'Contained Button'}</TextButton>
};

export const DisabledContained: Story = {
  render: () => (
    <TextButton variant="contained" isDisabled={true}>
      {'Disabled Contained Button'}
    </TextButton>
  )
};

export const Outlined: Story = {
  render: () => <TextButton variant="outlined">{'Outlined Button'}</TextButton>
};

export const DisabledOutlined: Story = {
  render: () => (
    <TextButton variant="outlined" isDisabled={true}>
      {'Disabled Outlined Button'}
    </TextButton>
  )
};

export const Text: Story = {
  render: () => <TextButton variant="text">{'Text Button'}</TextButton>
};

export const DisabledText: Story = {
  render: () => (
    <TextButton variant="text" isDisabled={true}>
      {'Disabled Text Button'}
    </TextButton>
  )
};
