import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
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

export const DefaultChecked: Story = {
  render: () => <Checkbox defaultChecked />
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return <Checkbox checked={checked} onChange={() => setChecked(!checked)} />;
  }
};

export const WithText: Story = {
  render: () => (
    <Checkbox>
      <span>전체 선택</span>
    </Checkbox>
  )
};

export const WithCustomLabelProps: Story = {
  render: () => {
    const labelProps = {
      htmlFor: 'custom',
      style: {
        color: 'green'
      }
    };

    return (
      <Checkbox labelProps={labelProps} id="custom">
        <span>전체 선택</span>
      </Checkbox>
    );
  }
};
