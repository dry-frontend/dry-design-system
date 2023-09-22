import type { Meta, StoryObj } from '@storybook/react';
import UnderlinedText from './UnderlinedText';
import { theme } from '../../styles/theme';

const meta: Meta<typeof UnderlinedText> = {
  title: 'UnderlinedText',
  component: UnderlinedText,
  argTypes: {
    fontWeight: {
      options: ['normal', 'bold'],
      control: { type: 'radio' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof UnderlinedText>;

export const Default: Story = {
  render: args => {
    return <UnderlinedText {...args}>UnderlinedText</UnderlinedText>;
  }
};

Default.args = {
  lineColor: theme.colors.PRIMARY + '80',
  fontWeight: 'normal'
};
