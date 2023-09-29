import styled from 'styled-components';
import { Container, Input } from '../Input.styled';
import { theme } from '../../../styles/theme';

export const ExpirationDateContainer = styled(Container)`
  width: 140px;
`;

export const ExpirationDateInput = styled(Input)`
  width: 40%;
  text-align: center;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
`;

export const Slash = styled.p`
  font-size: 18px;
  color: ${theme.colors.BLACK_300};
`;
