import PlainButton from '@components/Button/PlainButton';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const InputWrappedFlexBox = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
  overflow: hidden;

  border: 1px solid #ddd;
  border-right: none;
  overflow: hidden;
`;

export const CurrentNumberTextField = styled(motion.input)`
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

  &:active:not(:disabled) {
    background-color: #f3f3f3;
  }

  &:disabled {
    color: #ccc;
  }
`;
