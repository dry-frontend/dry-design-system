import type { Meta, StoryObj } from '@storybook/react';
import Chip from 'components/Chip/Chip';
import fillCartIcon from 'assets/fillCart.svg';

const meta: Meta<typeof Chip> = {
  title: 'Chip',
  component: Chip
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Primary: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Chip variant="primary">Chip White</Chip>

      <Chip variant="primary">15</Chip>
    </div>
  )
};

export const Other: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Chip variant="secondary">Chip Other</Chip>

      <Chip variant="secondary">15</Chip>
    </div>
  )
};
