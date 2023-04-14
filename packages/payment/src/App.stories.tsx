import { Meta, StoryObj } from '@storybook/react';
import App from './App';

const meta = {
  component: App
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => <App />
};
