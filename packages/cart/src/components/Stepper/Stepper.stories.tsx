import type { Meta, StoryObj } from '@storybook/react';
import Stepper from './Stepper';
import { useRef, useState } from 'react';

const meta: Meta<typeof Stepper> = {
  title: 'Stepper',
  component: Stepper
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const ControlPanel: Story = {
  render: args => {
    return <Stepper {...args} />;
  }
};

export const 제어_컴포넌트_예시: Story = {
  render: () => {
    const [value, setValue] = useState(5);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
      setValue(Number(event.currentTarget.value));
    };

    return (
      <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
        <Stepper
          value={value}
          max={10}
          min={5}
          onChange={handleChange}
          onIncrease={() => setValue(value + 1)}
          onDecrease={() => setValue(value - 1)}
        />

        <button type="button" onClick={() => alert(value)} style={{ width: '100%' }}>
          상태 확인
        </button>

        <button type="button" onClick={() => setValue(10)} style={{ width: '100%' }}>
          값 10으로 변경
        </button>
      </div>
    );
  }
};

export const 비제어_컴포넌트_예시: Story = {
  render: () => {
    const ref = useRef<HTMLInputElement>(null);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
      const formData = new FormData(event.currentTarget);

      alert(`현재 값 : ${formData.get('stepper')}`);

      event.preventDefault();
    };

    return (
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}
      >
        <Stepper ref={ref} min={1} max={10} defaultValue={1} name="stepper" />
        <button type="submit" style={{ width: '100%' }}>
          전송
        </button>

        <button type="button" style={{ width: '100%' }} onClick={() => console.log(ref.current)}>
          ref 연결 console log 확인
        </button>
      </form>
    );
  }
};
