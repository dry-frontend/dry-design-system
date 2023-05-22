import styled from 'styled-components';

interface ButtonProps {
  width: number;
  height: number;
  isDisabled: boolean;
}

export const Button = styled.button<ButtonProps>`
  background: none;
  border: none;

  ${({ width, height, isDisabled }) => `
    width: ${width}px;
    height: ${height}px;
    cursor: ${isDisabled ? ' not-allowed' : 'pointer'};
    opacity ${isDisabled ? '0.6' : '1'};
  `}
`;
