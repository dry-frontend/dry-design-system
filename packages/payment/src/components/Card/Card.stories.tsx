import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card
};

export default meta;
type Story = StoryObj<typeof Card>;

export const CardSample: Story = {
  render: args => <Card {...args} />
};

CardSample.args = {
  size: 'small',
  cardNumber: 11112,
  expirationDate: { month: '04', year: '24' },
  ownerName: '김윤진',
  cardType: { name: '하나카드', color: 'green' }
};
