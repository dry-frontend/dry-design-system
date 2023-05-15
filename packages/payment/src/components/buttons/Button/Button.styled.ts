import styled from 'styled-components';
import { ButtonState, ButtonStylesAttributeConfig } from './Button';

interface ButtonProps {
  buttonStyles: ButtonStylesAttributeConfig;
  padding: string;
  isDisabled: ButtonState;
  primaryColor: string | undefined;
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

  ${({ padding, buttonStyles, isDisabled }) => `
    padding: ${padding};
    background: ${buttonStyles.back[isDisabled]};
    border: ${
      buttonStyles.line[isDisabled] === 'none'
        ? 'none'
        : `1px solid ${buttonStyles.line[isDisabled]}`
    };
    cursor: ${isDisabled === 'disabled' ? ' not-allowed' : 'pointer'};
  `}
`;

export const Text = styled.p<TextProps>`
  ${({ textStyles, fontSize, isDisabled }) => `
    color: ${textStyles.text[isDisabled]};
    font-size: ${fontSize}px;
  `}
`;
