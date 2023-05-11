import { Meta, StoryObj } from '@storybook/react';
import Carousel from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Carousel',
  component: Carousel,
  argTypes: {
    onClickNextButton: {
      control: '-'
    },
    onClickPrevButton: {
      control: '-'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: args => {
    return (
      <Carousel {...args}>
        <div>테스트0</div>
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100px',
            height: '50%',
            background: 'red'
          }}
        >
          테스트1
        </div>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '120px',
            height: '50%',
            background: 'yellow'
          }}
        >
          테스트2
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '120px',
            height: '50%',
            background: 'green'
          }}
        >
          테스트3
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '120px',
            height: '50%',
            background: 'blue'
          }}
        >
          테스트4
        </div>
      </Carousel>
    );
  }
};
