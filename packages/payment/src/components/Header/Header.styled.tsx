import styled from 'styled-components';

interface WrapperProps {
  backColor: string | undefined;
}

export const Wrapper = styled.header<WrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  background-color: ${({ backColor }) => (backColor ? backColor : 'none')};
`;
