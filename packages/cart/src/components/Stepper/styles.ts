import PlainButton from 'components/Button/PlainButton';
import styled, { Keyframes, css, keyframes } from 'styled-components';
import { Actions } from './Stepper';

export const InputWrappedFlexBox = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
  overflow: hidden;

  border: 1px solid #ddd;
  border-right: none;
  overflow: hidden;
`;

export const CurrentNumberTextField = styled.input`
  appearance: textfield;
  width: 100%;
  height: 100%;

  border: none;
  outline: none;
  padding: 0;
  background-color: unset;

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

export const ControlButton = styled(PlainButton)`
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

const SPRING_ANIMATION_KEYFRAMES: Record<Actions, Keyframes> = {
  INCREASE: keyframes`
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(-100%);
    }
  `,
  DECREASE: keyframes`
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(100%);
    }
`
};

export const SpringAnimation = styled.div<{ status: Actions; count: number }>`
  &,
  &::before,
  &::after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 18px;
    background-color: #fff;
  }

  ${({ count, status }) => css`
    &::before {
      top: 0%;
      content: '${count}';
    }

    &::after {
      top: ${status === 'INCREASE' ? '100%' : '-100%'};
      content: '${status === 'INCREASE' ? count + 1 : count - 1}';
    }
  `}

  animation: ease 0.2s ${({ status }) => SPRING_ANIMATION_KEYFRAMES[status]};
  animation-fill-mode: forwards;
`;
