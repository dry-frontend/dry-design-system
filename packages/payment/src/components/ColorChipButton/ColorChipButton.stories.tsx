import type { Meta, StoryObj } from '@storybook/react';
import { theme } from 'styles/theme';
import ColorChipButton from './ColorChipButton';

const meta: Meta<typeof ColorChipButton> = {
  title: 'ColorChipButton',
  component: ColorChipButton
};

export default meta;
type Story = StoryObj<typeof ColorChipButton>;

export const Default: Story = {
  render: args => {
    return <ColorChipButton {...args}>ColorChipButton</ColorChipButton>;
  }
};

Default.args = {
  chipColor: theme.colors.PRIMARY,
  text: '컬러 칩 버튼',
  gradient: false
};

export const Gradient: Story = {
  render: args => {
    return <ColorChipButton {...args}>ColorChipButton</ColorChipButton>;
  }
};

Gradient.args = {
  chipColor: theme.colors.PRIMARY,
  text: '컬러 칩 버튼',
  gradient: true
};
