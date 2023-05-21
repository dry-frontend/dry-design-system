import styled from 'styled-components';

interface WrapperProps {
  backgroundColor?: string;
}

export const Wrapper = styled.header<WrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'none')};
`;
