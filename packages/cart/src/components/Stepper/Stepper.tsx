import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PlainButton from 'components/Button/PlainButton';
import FlexBox from 'components/FlexBox/FlexBox';
import React, { forwardRef, useRef } from 'react';
import styled from 'styled-components';

export interface StepperProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> {
  min?: number;
  max?: number;
  textFieldDisabled?: boolean;

  value?: React.InputHTMLAttributes<HTMLInputElement>['value'];

  onIncrease?: React.MouseEventHandler<HTMLButtonElement>;
  onDecrease?: React.MouseEventHandler<HTMLButtonElement>;
}

function Stepper(
  {
    min = 0,
    max,
    textFieldDisabled,
    defaultValue = 1,
    value,
    onIncrease,
    onDecrease,
    ...rest
  }: StepperProps,
  parentRef: React.ForwardedRef<HTMLInputElement | null>
) {
  const isControlComponent = Boolean(value);
  const textFieldRef = useRef<HTMLInputElement | null>(null);

  const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = event => {
    const { key } = event;
    const isNumber = Boolean(key.match(/[\d]/g));

    if (!isNumber) {
      event.preventDefault();
    }

    rest.onKeyPress?.(event);
  };

  const handleClickToChange =
    (targetEvent: 'INCREASE' | 'DECREASE'): React.MouseEventHandler<HTMLButtonElement> =>
    event => {
      if (!textFieldRef.current) return;

      const currentNumber = Number(textFieldRef.current.value);

      if (targetEvent === 'INCREASE' && max && currentNumber >= max) return;
      if (targetEvent === 'DECREASE' && currentNumber <= min) return;

      if (!isControlComponent) {
        textFieldRef.current.value = String(
          targetEvent === 'INCREASE' ? currentNumber + 1 : currentNumber - 1
        );

        return;
      }

      targetEvent === 'INCREASE' ? onIncrease?.(event) : onDecrease?.(event);
    };

  const setRefs = (element: HTMLInputElement | null) => {
    textFieldRef.current = element;

    if (parentRef && 'current' in parentRef) {
      parentRef.current = element;
    }
  };

  return (
    <FlexBox direction="row">
      <CurrentNumberTextField
        ref={setRefs}
        type="number"
        min={min}
        max={max}
        value={value ? value : undefined}
        defaultValue={defaultValue}
        disabled={textFieldDisabled}
        onKeyPress={handleKeyPress}
        {...rest}
      />

      <FlexBox>
        <ControlButton type="button" onClick={handleClickToChange('INCREASE')}>
          <FontAwesomeIcon icon={faCaretUp} />
        </ControlButton>

        <ControlButton type="button" onClick={handleClickToChange('DECREASE')}>
          <FontAwesomeIcon icon={faCaretDown} />
        </ControlButton>
      </FlexBox>
    </FlexBox>
  );
}

const CurrentNumberTextField = styled.input`
  appearance: textfield;
  width: 100%;
  background-color: #fff;

  border: 1px solid #ddd;
  border-right: none;

  text-align: center;
  font-size: 18px;

  &:focus {
    outline: none;
  }

  &:disabled {
    color: #000;
    background-color: #fff;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
    appearance: none;
    margin: 0;
  }
`;

const ControlButton = styled(PlainButton)`
  background-color: #fff;

  padding: 3px 14px;
  font-size: 14px;
  border: 1px solid #ddd;

  &:last-child {
    border-top: none;
  }

  &:active {
    background-color: #f3f3f3;
  }
`;

export default forwardRef(Stepper);
