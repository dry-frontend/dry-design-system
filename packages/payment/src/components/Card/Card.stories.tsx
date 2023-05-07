import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card
};

export default meta;
type Story = StoryObj<typeof Card>;

export const SmallCard: Story = {
  render: () => (
    <Card
      size="small"
      cardNumber={11112}
      expirationDate={{ month: '04', year: '24' }}
      ownerName={'김윤진'}
      cardType={{ name: '하나카드', color: 'green' }}
    ></Card>
  )
};

export const MediumCard: Story = {
  render: () => (
    <Card
      size="medium"
      cardNumber={1111222233}
      expirationDate={{ month: '04', year: '24' }}
      ownerName={'김윤진'}
      cardType={{ name: '하나카드', color: 'green' }}
    ></Card>
  )
};
export const LargeCard: Story = {
  render: () => (
    <Card
      size="large"
      cardNumber={1111222233334444}
      expirationDate={{ month: '04', year: '24' }}
      ownerName={'김윤진'}
      cardType={{ name: '하나카드', color: 'green' }}
    ></Card>
  )
};
