import { ButtonSize, ButtonVariant } from 'components/Button/types';
import styled, { css } from 'styled-components';

export const ButtonStyles = {
  Type: {
    primary: css`
      background-color: #2bc1bc;
      color: #ffffff;
      border: none;
    `,

    secondary: css`
      background-color: #73675c;
      color: #ffffff;
      border: none;
    `,

    plain: css`
      background-color: #ffffff;
      color: #333333;
      border: 1px solid #bbbbbb;
    `
  },

  Size: {
    large: css`
      min-width: 638px;
      min-height: 98px;
      font-size: 32px;
      font-weight: 700;
      line-height: 89%;
    `,

    medium: css`
      min-width: 388px;
      min-height: 73px;
      font-size: 24px;
      font-weight: 400;
      line-height: 89%;
    `,

    small: css`
      min-width: 138px;
      min-height: 47px;
      font-size: 20px;
      font-weight: 400;
      line-height: 100%;
    `,

    tiny: css`
      min-width: 117px;
      min-height: 50px;
      font-size: 16px;
      font-weight: 400;
      line-height: 89%;
    `
  }
};

export const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `,

  PrefixIcon: styled.img`
    width: 25px;
    height: 25px;
  `,

  Button: styled.button<{ size: ButtonSize; variant: ButtonVariant; disabled: boolean }>`
    all: unset;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 10px 20px;
    cursor: pointer;

    ${({ variant }) => {
      switch (variant) {
        case 'primary':
          return ButtonStyles.Type.primary;
        case 'secondary':
          return ButtonStyles.Type.secondary;
        case 'plain':
          return ButtonStyles.Type.plain;
      }
    }}

    ${({ size }) => {
      switch (size) {
        case 'tiny':
          return ButtonStyles.Size.tiny;
        case 'small':
          return ButtonStyles.Size.small;
        case 'medium':
          return ButtonStyles.Size.medium;
        case 'large':
          return ButtonStyles.Size.large;
      }
    }}

    ${({ disabled }) => {
      if (disabled) {
        return css`
          cursor: not-allowed;
          opacity: 0.6;
        `;
      }
    }}

    &:hover {
      opacity: ${({ disabled }) => (disabled ? 0.6 : 0.6)};
    }

    &:active {
      transform: scale(${({ disabled }) => (disabled ? 1 : 0.98)});
    }
  `,

  ButtonText: styled.p`
    margin: 0;
  `
};
