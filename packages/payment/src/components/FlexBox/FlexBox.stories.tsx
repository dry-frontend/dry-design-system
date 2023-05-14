import { Meta, Story } from '@storybook/react';
import FlexBox, { FlexBoxProps } from './FlexBox';
import { PropsWithChildren, Ref } from 'react';

export default {
  title: 'payments/FlexBox',
  component: FlexBox
} as Meta;

const Template: Story<PropsWithChildren<FlexBoxProps>> = args => (
  <FlexBox {...args} style={{ border: '1px solid black' }}>
    <div>아래의 controls의 옵션을 수정해주세요 :) </div>
    <div style={{ border: '1px solid black' }}>element1</div>
    <div style={{ border: '1px solid black' }}>element2</div>
  </FlexBox>
);

export const Default = Template.bind({});

Default.args = {
  width: '300px',
  height: '300px',
  gap: '10px'
};
