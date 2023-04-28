import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => <Checkbox />
};

export const isChecked: Story = {
  render: () => <Checkbox isChecked />
};

export const WithChildren: Story = {
  render: () => (
    <Checkbox>
      <span>이것은 체크박스입니다</span>
    </Checkbox>
  )
};
