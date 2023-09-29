import { Meta, StoryFn } from '@storybook/react';
import Drawer, { DrawerProps } from './Drawer';
import { PropsWithChildren } from 'react';

export default {
  title: 'payments/Drawer',
  component: Drawer,
  argTypes: {
    isOpen: {
      defaultValue: true,
      description: 'props 값으로 넘겨주어 drawer의 열고 닫음을 조작할 수 있습니다',
      control: {
        type: 'boolean'
      }
    },
    anchor: {
      defaultValue: 'bottom',
      description: 'drawer가 열리는 방향에 따라서 값을 조정할 수 있습니다',
      control: {
        type: 'radio'
      },
      options: ['top', 'bottom', 'left', 'right']
    }
  }
} as Meta;

const Template: StoryFn<PropsWithChildren<DrawerProps>> = args => (
  <div
    style={{
      width: '500px',
      height: '500px',
      position: 'relative',
      border: '1px solid black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <div style={{ border: '1px solid red', width: '100px', height: '100px' }}>
      Example Component
    </div>
    <Drawer {...args}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '20px'
        }}
      >
        <div>drawer를 감싸는 상위 부모 컴포넌트의 position을 relative로 해주세요</div>
        <div>drawer로 덮어주고 싶은 컴포넌트와 동일 레벨에 컴포넌트를 위치 시켜주세요</div>
        <div>drawer의 z-index 값은 500입니다</div>
      </div>
    </Drawer>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  isOpen: true,
  anchor: 'bottom'
};
