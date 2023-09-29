import type { Meta, StoryObj } from '@storybook/react';
import IconButton from './IconButton';
import fillCartIcon from '@assets/fillCart.svg';

const meta: Meta<typeof IconButton> = {
  title: 'IconButton',
  component: IconButton
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  render: () => <IconButton iconUrl={fillCartIcon} />
};
