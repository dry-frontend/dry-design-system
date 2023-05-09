import styled from 'styled-components';
import { ButtonState, ButtonStylesAttributeConfig } from './Button';

interface ButtonProps {
  buttonStyles: ButtonStylesAttributeConfig;
  padding: string;
  isDisabled: ButtonState;
}

interface TextProps {
  textStyles: ButtonStylesAttributeConfig;
  fontSize: number;
  isDisabled: ButtonState;
}

export const Wrapper = styled.button<ButtonProps>`
  :hover {
    opacity: 0.8;
  }

  ${({ padding, buttonStyles, isDisabled, theme }) => `
    padding: ${padding};
    background: ${theme.colors[buttonStyles.back[isDisabled]]};
    border: ${
      buttonStyles.line[isDisabled] === 'none'
        ? 'none'
        : `1px solid ${theme.colors[buttonStyles.line[isDisabled]]}`
    };
    cursor: ${isDisabled === 'disabled' ? ' not-allowed' : 'pointer'};
  `}
`;

export const Text = styled.p<TextProps>`
  ${({ textStyles, fontSize, isDisabled, theme }) => `
    color: ${theme.colors[textStyles.text[isDisabled]]};
    font-size: ${fontSize}px;
  `}
`;
