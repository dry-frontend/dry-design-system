import type { Meta, StoryObj } from '@storybook/react';
import FlexBox from './FlexBox';

const meta: Meta<typeof FlexBox> = {
  title: 'FlexBox',
  component: FlexBox
};

export default meta;
type Story = StoryObj<typeof FlexBox>;

export const ControlPanel: Story = {
  render: args => {
    return (
      <FlexBox {...args}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>중복된 flex 스타일링을 방지하기 위한 컴포넌트입니다.</div>
      </FlexBox>
    );
  }
};
