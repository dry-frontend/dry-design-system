import { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';
import { theme } from '../styles/theme';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    color: {
      table: {
        type: { summary: 'color hex code string' },
        defaultValue: { summary: theme.colors.PRIMARY }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: args => {
    return <Checkbox {...args} />;
  }
};

Default.args = {};

export const Checked: Story = {
  render: args => {
    return <Checkbox {...args} />;
  }
};

Checked.args = {
  checked: true
};
