import { StoryFn, Meta } from '@storybook/react';
import NameInput from './NameInput';
import { InputAttributesType } from '../inputType';

export default {
  title: 'payments/Input/Name',
  component: NameInput
} as Meta;

const Template: StoryFn<InputAttributesType> = args => <NameInput {...args} />;

export const Default = Template.bind({});

Default.args = {
  placeholder: '이름을 입력해주세요'
};
