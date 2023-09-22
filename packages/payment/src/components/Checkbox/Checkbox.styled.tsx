import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { CheckboxProps } from './Checkbox';

export const Checkbox = styled.input<CheckboxProps>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 20px;
  height: 20px;
  border: 0;
  border-radius: 50%;

  background: ${theme.colors.GRAY_200};

  cursor: pointer;

  &:checked {
    border: 3px solid ${theme.colors.GRAY_200};
    background-color: ${({ color }) => color || theme.colors.PRIMARY};
  }
`;
