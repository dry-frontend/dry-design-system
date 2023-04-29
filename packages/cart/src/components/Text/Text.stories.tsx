import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Text',
  component: Text
};

export default meta;
type Story = StoryObj<typeof Text>;

export const ControlPanel: Story = {
  render: args => {
    return <Text {...args}>일반 텍스트를 출력해주는 컴포넌트입니다.</Text>;
  }
};
