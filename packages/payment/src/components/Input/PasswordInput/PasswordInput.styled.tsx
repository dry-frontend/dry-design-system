import styled from 'styled-components';
import { Container, Input } from '../Input.styled';

export const PasswordContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 7px;
`;

export const PasswordWrapper = styled(Container)`
  width: 45px;
`;

export const PasswordInput = styled(Input)`
  width: 100%;
  text-align: center;
`;

export const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
`;

export const Dot = styled.div<{ dotColor: string }>`
  width: 5px;
  height: 5px;
  border-radius: 50%;

  background-color: ${({ dotColor }) => dotColor};
`;
