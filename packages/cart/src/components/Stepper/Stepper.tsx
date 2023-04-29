import 'styles/globals.css';

import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FlexBox from 'components/FlexBox/FlexBox';
import React, { forwardRef, useRef, useState } from 'react';

import * as S from './styles';

export interface StepperProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> {
  min?: number;
  max?: number;
  textFieldDisabled?: boolean;

  value?: React.InputHTMLAttributes<HTMLInputElement>['value'];

  onIncrease?: React.MouseEventHandler<HTMLButtonElement>;
  onDecrease?: React.MouseEventHandler<HTMLButtonElement>;
}
export type Actions = 'INCREASE' | 'DECREASE';

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

  const [previousAction, setPreviousAction] = useState<{
    action: Actions;
    value: number;
  }>();

  const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = event => {
    const { key } = event;
    const isNumber = Boolean(key.match(/[\d]/g));

    if (!isNumber) {
      event.preventDefault();
    }

    rest.onKeyPress?.(event);
  };

  const handleClickToChange =
    (action: 'INCREASE' | 'DECREASE'): React.MouseEventHandler<HTMLButtonElement> =>
    event => {
      if (!textFieldRef.current) return;

      const currentNumber = Number(textFieldRef.current.value);
      const isInRange: boolean = (() => {
        if (action === 'INCREASE' && max && currentNumber >= max) return false;
        if (action === 'DECREASE' && currentNumber <= min) return false;

        return true;
      })();

      if (!isInRange) return;

      setPreviousAction({ action, value: currentNumber });

      if (!isControlComponent) {
        textFieldRef.current.value = String(
          action === 'INCREASE' ? currentNumber + 1 : currentNumber - 1
        );

        return;
      }

      action === 'INCREASE' ? onIncrease?.(event) : onDecrease?.(event);
    };

  const setRefs = (element: HTMLInputElement | null) => {
    textFieldRef.current = element;

    if (parentRef && 'current' in parentRef) {
      parentRef.current = element;
    }
  };

  return (
    <FlexBox direction="row">
      <S.InputWrappedFlexBox>
        <S.CurrentNumberTextField
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

        {previousAction && (
          <S.SpringAnimation
            status={previousAction.action}
            count={previousAction.value}
            onAnimationEnd={() => setPreviousAction(undefined)}
          />
        )}
      </S.InputWrappedFlexBox>

      <FlexBox>
        <S.ControlButton type="button" onClick={handleClickToChange('INCREASE')}>
          <FontAwesomeIcon icon={faCaretUp} />
        </S.ControlButton>

        <S.ControlButton type="button" onClick={handleClickToChange('DECREASE')}>
          <FontAwesomeIcon icon={faCaretDown} />
        </S.ControlButton>
      </FlexBox>
    </FlexBox>
  );
}

export default forwardRef(Stepper);