import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import cartIcon from 'assets/cart.svg';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Large: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Button variant="primary" size="large">
        324,500원 결제하기
      </Button>

      <Button variant="secondary" size="large">
        324,500원 결제하기
      </Button>

      <Button variant="plain" size="large">
        324,500원 결제하기
      </Button>
    </div>
  )
};

export const Medium: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Button variant="primary" size="medium">
        장바구니
      </Button>

      <Button variant="secondary" size="medium">
        장바구니
      </Button>

      <Button variant="plain" size="medium">
        장바구니
      </Button>
    </div>
  )
};

export const Small: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Button variant="primary" size="small">
        장바구니
      </Button>

      <Button variant="secondary" size="small">
        장바구니
      </Button>

      <Button variant="plain" size="small">
        장바구니
      </Button>
    </div>
  )
};

export const Tiny: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Button variant="primary" size="tiny">
        상품삭제
      </Button>

      <Button variant="secondary" size="tiny">
        상품삭제
      </Button>

      <Button variant="plain" size="tiny">
        상품삭제
      </Button>
    </div>
  )
};

export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Button variant="primary" size="large" loading={true}>
        로딩중
      </Button>

      <Button variant="secondary" size="medium" loading={true}>
        로딩중
      </Button>

      <Button variant="plain" size="small" loading={true}>
        로딩중
      </Button>

      <Button variant="primary" size="tiny" loading={true}>
        로딩중
      </Button>
    </div>
  )
};

export const PrefixIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Button variant="primary" size="large" prefixIconURL={cartIcon}>
        장바구니
      </Button>

      <Button variant="secondary" size="medium" prefixIconURL={cartIcon}>
        장바구니
      </Button>

      <Button variant="plain" size="small" prefixIconURL={cartIcon}>
        장바구니
      </Button>

      <Button variant="primary" size="tiny" prefixIconURL={cartIcon}>
        장바구니
      </Button>
    </div>
  )
};
