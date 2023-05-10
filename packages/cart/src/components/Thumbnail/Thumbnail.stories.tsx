import type { Meta, StoryObj } from '@storybook/react';
import Thumbnail from './Thumbnail';

const SampleImage = 'https://i.pinimg.com/736x/b9/25/0f/b9250fb3ac723b0828048371beee9056.jpg';

const meta: Meta<typeof Thumbnail> = {
  title: 'Thumbnail',
  component: Thumbnail
};

export default meta;
type Story = StoryObj<typeof Thumbnail>;

export const Large: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Thumbnail src={SampleImage} size="large" objectFit="fill" isTransparent={false} />
    </div>
  )
};

export const Medium: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Thumbnail src={SampleImage} size="medium" objectFit="fill" isTransparent={false} />
    </div>
  )
};

export const Small: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Thumbnail src={SampleImage} size="small" objectFit="fill" isTransparent={false} />
    </div>
  )
};

export const ObjectFitFill: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Thumbnail src={SampleImage} size="medium" objectFit="fill" isTransparent={false} />
    </div>
  )
};

export const ObjectFitContain: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Thumbnail src={SampleImage} size="medium" objectFit="contain" isTransparent={false} />
    </div>
  )
};

export const ObjectFitNone: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Thumbnail src={SampleImage} size="medium" objectFit="none" isTransparent={false} />
    </div>
  )
};

export const ObjectFitScaleDown: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Thumbnail src={SampleImage} size="medium" objectFit="scale-down" isTransparent={false} />
    </div>
  )
};

export const Transparent: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Thumbnail src={SampleImage} size="medium" objectFit="fill" isTransparent={true} />
    </div>
  )
};

export const CursorPointer: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Thumbnail
        src={SampleImage}
        size="medium"
        objectFit="fill"
        isTransparent={false}
        isCursorPointer={true}
      />
    </div>
  )
};
