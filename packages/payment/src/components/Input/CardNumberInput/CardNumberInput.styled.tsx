import styled from 'styled-components';
import { Container, Input } from '../Input.styled';

export const CardNumberContainer = styled(Container)`
  width: 100%;
`;

export const CardNumberInput = styled(Input)`
  width: 20%;
  text-align: center;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
`;

export const Dash = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.BLACK_300};
  margin: 0 4px;
`;
