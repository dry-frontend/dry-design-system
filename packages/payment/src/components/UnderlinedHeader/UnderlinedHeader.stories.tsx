import type { Meta, StoryObj } from '@storybook/react';
import UnderlinedHeader from './UnderlinedHeader';
import { theme } from 'styles/theme';

const meta: Meta<typeof UnderlinedHeader> = {
  title: 'UnderlinedHeader',
  component: UnderlinedHeader,
  argTypes: {
    fontWeight: {
      options: ['normal', 'bold'],
      control: { type: 'radio' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof UnderlinedHeader>;

export const Default: Story = {
  render: args => {
    return <UnderlinedHeader {...args}>UnderlinedHeader</UnderlinedHeader>;
  }
};

Default.args = {
  width: 'auto',
  lineColor: theme.colors.GRAY_200,
  fontWeight: 'normal'
};
