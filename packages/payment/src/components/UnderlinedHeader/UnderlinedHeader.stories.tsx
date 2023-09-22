import type { Meta, StoryObj } from '@storybook/react';
import UnderlinedHeader from './UnderlinedHeader';
import { theme } from '../../styles/theme';

const meta: Meta<typeof UnderlinedHeader> = {
  title: 'UnderlinedHeader',
  component: UnderlinedHeader,
  argTypes: {
    width: {
      control: 'text',
      table: {
        defaultValue: { summary: 'auto' }
      }
    },
    fontWeight: {
      options: ['normal', 'bold'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'normal' }
      }
    },
    textAlign: {
      control: 'text',
      table: {
        defaultValue: { summary: 'start' }
      }
    },
    lineColor: {
      table: {
        defaultValue: { summary: theme.colors.GRAY_200 }
      }
    },
    fontColor: {
      table: {
        defaultValue: { summary: theme.colors.BLACK_450 }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof UnderlinedHeader>;

export const Default: Story = {
  render: args => {
    return <UnderlinedHeader {...args}>UnderlinedHeader</UnderlinedHeader>;
  }
};

Default.args = {
  width: 'auto',
  fontWeight: 'normal',
  lineColor: theme.colors.GRAY_200,
  fontColor: theme.colors.BLACK_450
};

export const Width: Story = {
  render: args => {
    return (
      <>
        <UnderlinedHeader {...args} width={'auto'}>
          width: auto
        </UnderlinedHeader>
        <br />
        <UnderlinedHeader {...args} width={'fit-content'}>
          width: fit-content
        </UnderlinedHeader>
        <br />
        <UnderlinedHeader {...args} width={'25%'}>
          width: 25%
        </UnderlinedHeader>{' '}
        <br />
        <UnderlinedHeader {...args} width={'50%'}>
          width: 50%
        </UnderlinedHeader>
        <br />
        <UnderlinedHeader {...args} width={'75%'}>
          width: 75%
        </UnderlinedHeader>
        <br />
        <UnderlinedHeader {...args} width={'100%'}>
          width: 100%
        </UnderlinedHeader>
      </>
    );
  }
};

export const TextAlign: Story = {
  render: args => {
    return (
      <>
        <UnderlinedHeader {...args} textAlign={'start'}>
          textAlign: start
        </UnderlinedHeader>
        <br />
        <UnderlinedHeader {...args} textAlign={'center'}>
          textAlign: center
        </UnderlinedHeader>
        <br />
        <UnderlinedHeader {...args} textAlign={'end'}>
          textAlign: end
        </UnderlinedHeader>
        <br />
        <UnderlinedHeader {...args} textAlign={'left'}>
          textAlign: left
        </UnderlinedHeader>
        <br />
        <UnderlinedHeader {...args} textAlign={'right'}>
          textAlign: right
        </UnderlinedHeader>
        <br />
      </>
    );
  }
};
