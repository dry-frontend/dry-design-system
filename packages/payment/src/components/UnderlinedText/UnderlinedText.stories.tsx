import type { Meta, StoryObj } from '@storybook/react';
import UnderlinedText from './UnderlinedText';

const meta: Meta<typeof UnderlinedText> = {
  title: 'UnderlinedText',
  component: UnderlinedText
};

export default meta;
type Story = StoryObj<typeof UnderlinedText>;

export const Default: Story = {
  render: args => {
    return <UnderlinedText {...args}>UnderlinedText</UnderlinedText>;
  }
};
