import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: args => {
    return (
      <Header {...args}>
        <h1>header</h1>
      </Header>
    );
  }
};

Default.args = {
  // backColor: 'green'
};
