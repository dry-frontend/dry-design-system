import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FlexBox from '@components/FlexBox/FlexBox';
import React, { forwardRef, useRef, useState } from 'react';

import * as S from './styles';

import { HTMLMotionProps } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export interface StepperProps extends HTMLMotionProps<'input'> {
  min?: number;
  max?: number;
  textFieldDisabled?: boolean;

  onIncrease?: React.MouseEventHandler<HTMLButtonElement>;
  onDecrease?: React.MouseEventHandler<HTMLButtonElement>;
}
export type Actions = 'INCREASE' | 'DECREASE';

function Stepper(
  {
    min,
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
  const isControlledComponent = Boolean(value);
  const textFieldRef = useRef<HTMLInputElement | null>(null);

  const [previousAction, setPreviousAction] = useState<{
    type: Actions;
    value: number;
  }>();
  const springAnimationControl = useAnimation();

  useEffect(
    function triggerSpringAnimation() {
      if (!previousAction) return;

      const transition = {
        type: 'spring',
        stiffness: 2000,
        damping: 100
      };

      springAnimationControl.set({
        translateY: previousAction?.type === 'INCREASE' ? '100%' : '-100%',
        transition
      });
      springAnimationControl.start({ translateY: '0%', transition });
    },
    [previousAction, springAnimationControl]
  );

  const handleDisableNumericInput: React.KeyboardEventHandler<HTMLInputElement> = event => {
    const { key } = event;
    const isNumber = Boolean(key.match(/[\d]/g));

    if (!isNumber) {
      event.preventDefault();
    }

    rest.onKeyPress?.(event);
  };

  const handleUpdateNumber =
    (action: Actions): React.MouseEventHandler<HTMLButtonElement> =>
    event => {
      if (!textFieldRef.current) return;

      const currentNumber = Number(textFieldRef.current.value);
      const isInRange: boolean = (() => {
        if (action === 'INCREASE' && max && currentNumber >= max) return false;
        if (action === 'DECREASE' && min && currentNumber <= min) return false;

        return true;
      })();

      if (!isInRange) return;

      setPreviousAction({ type: action, value: currentNumber });

      if (!isControlledComponent) {
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

  const isIncreaseDisabled: boolean = (() => {
    if (!max) return false;

    if (!textFieldRef.current && Number(defaultValue) >= max) return true;
    if (textFieldRef.current?.value && Number(textFieldRef.current.value) >= max) return true;

    return false;
  })();

  const isDecreaseDisabled: boolean = (() => {
    if (!min) return false;

    if (!textFieldRef.current && Number(defaultValue) <= min) return true;
    if (textFieldRef.current?.value && Number(textFieldRef.current.value) <= min) return true;

    return false;
  })();

  return (
    <FlexBox direction="row">
      <S.InputWrappedFlexBox>
        <S.CurrentNumberTextField
          ref={setRefs}
          type="number"
          animate={springAnimationControl}
          min={min}
          max={max}
          value={value}
          defaultValue={defaultValue}
          disabled={textFieldDisabled}
          onKeyPress={handleDisableNumericInput}
          onAnimationComplete={() => setPreviousAction(undefined)}
          {...rest}
        />
      </S.InputWrappedFlexBox>

      <FlexBox>
        <S.ControlButton
          type="button"
          disabled={isIncreaseDisabled}
          onClick={handleUpdateNumber('INCREASE')}
        >
          <FontAwesomeIcon icon={faCaretUp} />
        </S.ControlButton>

        <S.ControlButton
          type="button"
          disabled={isDecreaseDisabled}
          onClick={handleUpdateNumber('DECREASE')}
        >
          <FontAwesomeIcon icon={faCaretDown} />
        </S.ControlButton>
      </FlexBox>
    </FlexBox>
  );
}

export default forwardRef(Stepper);
