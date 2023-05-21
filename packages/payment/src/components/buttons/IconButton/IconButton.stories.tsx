import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from './IconButton';

import ArrowIcon from '../../../assets/arrow.svg';
import ArrowImg from '../../../assets/arrow1.png';

const meta: Meta<typeof IconButton> = {
  title: 'Button/IconButton',
  component: IconButton
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const SvgIconButton: Story = {
  render: () => <IconButton>{ArrowIcon}</IconButton>
};

export const DisabledSvgIconButton: Story = {
  render: () => <IconButton isDisabled={true}>{ArrowIcon}</IconButton>
};

export const PngIconButton: Story = {
  render: () => <IconButton>{ArrowImg}</IconButton>
};

export const DisabledPngIconButton: Story = {
  render: () => <IconButton isDisabled={true}>{ArrowImg}</IconButton>
};
