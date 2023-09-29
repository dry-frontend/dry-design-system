import { PropsWithChildren } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import ToolTip, { ToolTipProps } from './ToolTip';

export default {
  title: 'payments/ToolTip',
  component: ToolTip
} as Meta;

const Template: StoryFn<PropsWithChildren<ToolTipProps>> = args => (
  <div
    style={{
      width: '500px',
      height: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#2AC1BC',
      borderRadius: '10px'
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        width: '80%',
        height: '100px',
        gap: '20px'
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '4px',
          padding: '4px'
        }}
      >
        toolTip컴포넌트를 감싸는 컴포넌트에
        <br />
        display relative를 적용해주세요
      </div>
      <ToolTip {...args}>
        <ToolTip.IconWrapper>
          <div
            style={{
              backgroundColor: '#dddddd',
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            ?
          </div>
        </ToolTip.IconWrapper>
        <ToolTip.DescriptionWrapper>
          <div
            style={{
              width: '200px',
              borderRadius: '4px',
              padding: '8px',
              backgroundColor: '#ddd'
            }}
          >
            hover시 보여질 컴포넌트를 직접 custom해서 넣어주세요
          </div>
        </ToolTip.DescriptionWrapper>
      </ToolTip>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  position: 'right',
  gap: '-150px'
};
