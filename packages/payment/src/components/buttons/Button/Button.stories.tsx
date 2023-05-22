import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button/default',
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Contained: Story = {
  render: () => <Button variant="contained">{'Contained Button'}</Button>
};

export const DisabledContained: Story = {
  render: () => (
    <Button variant="contained" isDisabled={true}>
      {'Disabled Contained Button'}
    </Button>
  )
};

export const Outlined: Story = {
  render: () => <Button variant="outlined">{'Outlined Button'}</Button>
};

export const DisabledOutlined: Story = {
  render: () => (
    <Button variant="outlined" isDisabled={true}>
      {'Disabled Outlined Button'}
    </Button>
  )
};

export const Text: Story = {
  render: () => <Button variant="text">{'Text Button'}</Button>
};

export const DisabledText: Story = {
  render: () => (
    <Button variant="text" isDisabled={true}>
      {'Disabled Text Button'}
    </Button>
  )
};
