import { StoryFn, Meta } from '@storybook/react';
import ExpirationDateInput, { ExpirationDateInputProps } from './ExpirationDateInput';

export default {
  title: 'payments/Input/ExpirationDate',
  component: ExpirationDateInput
} as Meta;

const Template: StoryFn<ExpirationDateInputProps> = args => (
  <ExpirationDateInput month={<ExpirationDateInput.Month />} year={<ExpirationDateInput.Year />} />
);

export const Default = Template.bind({});
