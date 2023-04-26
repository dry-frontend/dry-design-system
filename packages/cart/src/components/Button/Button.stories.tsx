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
      <Button variant="primary" size="large" style={{ width: '313px' }}>
        장바구니 담기
      </Button>

      <Button variant="secondary" size="large" style={{ width: '313px' }}>
        상품 더 담기
      </Button>

      <Button variant="plain" size="large" style={{ width: '313px' }}>
        장바구니
      </Button>
    </div>
  )
};

export const Medium: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Button variant="primary" size="medium" style={{ width: '184px' }}>
        장바구니 담기
      </Button>

      <Button variant="secondary" size="medium" style={{ width: '184px' }}>
        상품 더 담기
      </Button>

      <Button variant="plain" size="medium" style={{ width: '184px' }}>
        장바구니
      </Button>
    </div>
  )
};

export const Small: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Button variant="primary" size="small" style={{ width: '138px' }}>
        장바구니 담기
      </Button>

      <Button variant="secondary" size="small" style={{ width: '138px' }}>
        상품 더 담기
      </Button>

      <Button variant="plain" size="small" style={{ width: '138px' }}>
        장바구니
      </Button>
    </div>
  )
};

export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Button variant="primary" size="large" loading={true} style={{ width: '313px' }}>
        로딩중
      </Button>

      <Button variant="primary" size="medium" loading={true} style={{ width: '184px' }}>
        로딩중
      </Button>

      <Button variant="primary" size="small" loading={true} style={{ width: '138px' }}>
        로딩중
      </Button>

      <Button variant="secondary" size="large" loading={true} style={{ width: '313px' }}>
        로딩중
      </Button>

      <Button variant="secondary" size="medium" loading={true} style={{ width: '184px' }}>
        로딩중
      </Button>

      <Button variant="secondary" size="small" loading={true} style={{ width: '138px' }}>
        로딩중
      </Button>

      <Button variant="plain" size="large" loading={true} style={{ width: '313px' }}>
        로딩중
      </Button>

      <Button variant="plain" size="medium" loading={true} style={{ width: '184px' }}>
        로딩중
      </Button>

      <Button variant="plain" size="small" loading={true} style={{ width: '138px' }}>
        로딩중
      </Button>
    </div>
  )
};

export const PrefixIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Button variant="primary" size="large" prefixIconURL={cartIcon} style={{ width: '313px' }}>
        장바구니 담기
      </Button>
      <Button variant="primary" size="medium" prefixIconURL={cartIcon} style={{ width: '184px' }}>
        상품 더 담기
      </Button>
      <Button variant="primary" size="small" prefixIconURL={cartIcon} style={{ width: '138px' }}>
        장바구니
      </Button>

      <Button variant="secondary" size="large" prefixIconURL={cartIcon} style={{ width: '313px' }}>
        장바구니 담기
      </Button>
      <Button variant="secondary" size="medium" prefixIconURL={cartIcon} style={{ width: '184px' }}>
        상품 더 담기
      </Button>
      <Button variant="secondary" size="small" prefixIconURL={cartIcon} style={{ width: '138px' }}>
        장바구니
      </Button>

      <Button variant="plain" size="large" prefixIconURL={cartIcon} style={{ width: '313px' }}>
        장바구니 담기
      </Button>
      <Button variant="plain" size="medium" prefixIconURL={cartIcon} style={{ width: '184px' }}>
        상품 더 담기
      </Button>
      <Button variant="plain" size="small" prefixIconURL={cartIcon} style={{ width: '138px' }}>
        장바구니
      </Button>
    </div>
  )
};

export const SuffixIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Button variant="primary" size="large" suffix="15" style={{ width: '313px' }}>
        장바구니 담기
      </Button>
      <Button variant="primary" size="medium" suffix="15" style={{ width: '184px' }}>
        상품 더 담기
      </Button>
      <Button variant="primary" size="small" suffix="15" style={{ width: '138px' }}>
        장바구니
      </Button>

      <Button variant="secondary" size="large" suffix="15" style={{ width: '313px' }}>
        장바구니 담기
      </Button>
      <Button variant="secondary" size="medium" suffix="15" style={{ width: '184px' }}>
        상품 더 담기
      </Button>
      <Button variant="secondary" size="small" suffix="15" style={{ width: '138px' }}>
        장바구니
      </Button>

      <Button variant="plain" size="large" suffix="15" style={{ width: '313px' }}>
        장바구니 담기
      </Button>
      <Button variant="plain" size="medium" suffix="15" style={{ width: '184px' }}>
        상품 더 담기
      </Button>
      <Button variant="plain" size="small" suffix="15" style={{ width: '138px' }}>
        장바구니
      </Button>
    </div>
  )
};

export const FullIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Button
        variant="primary"
        size="large"
        prefixIconURL={cartIcon}
        suffix="12"
        style={{ width: '313px' }}
      >
        장바구니 담기
      </Button>

      <Button
        variant="primary"
        size="medium"
        prefixIconURL={cartIcon}
        suffix="12"
        style={{ width: 'fit-content' }}
      >
        상품 더 담기
      </Button>

      <Button
        variant="primary"
        size="small"
        prefixIconURL={cartIcon}
        suffix="12"
        style={{ width: '138px' }}
      >
        장바구니
      </Button>

      <Button
        variant="secondary"
        size="medium"
        prefixIconURL={cartIcon}
        suffix="12"
        style={{ width: '184px' }}
      >
        상품 더 담기
      </Button>

      <Button
        variant="plain"
        size="small"
        prefixIconURL={cartIcon}
        suffix="12"
        style={{ width: '138px' }}
      >
        장바구니
      </Button>
    </div>
  )
};

export const FullIconLoading: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Button
        variant="primary"
        size="large"
        prefixIconURL={cartIcon}
        suffix="12"
        loading={true}
        style={{ width: '313px' }}
      >
        장바구니 담기
      </Button>

      <Button
        variant="primary"
        size="medium"
        prefixIconURL={cartIcon}
        suffix="12"
        loading={true}
        style={{ width: 'fit-content' }}
      >
        장바구니 담기
      </Button>

      <Button
        variant="primary"
        size="small"
        prefixIconURL={cartIcon}
        suffix="12"
        loading={true}
        style={{ width: 'fit-content' }}
      >
        장바구니 담기
      </Button>

      <Button
        variant="secondary"
        size="medium"
        prefixIconURL={cartIcon}
        suffix="12"
        loading={true}
        style={{ width: '184px' }}
      >
        상품 더 담기
      </Button>

      <Button
        variant="plain"
        size="small"
        prefixIconURL={cartIcon}
        suffix="12"
        loading={true}
        style={{ width: '138px' }}
      >
        장바구니
      </Button>
    </div>
  )
};
