import type { Meta, StoryObj } from '@storybook/react';
import Icon from '@components/Icon/Icon';
import fillCartIcon from '@assets/fillCart.svg';

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  render: () => <Icon src={fillCartIcon} />
};
