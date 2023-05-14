import { ButtonSize, ButtonVariant } from 'components/Button/types';
import { motion } from 'framer-motion';
import styled, { FlattenSimpleInterpolation, css } from 'styled-components';

export const ButtonStyles = {
  Type: {
    primary: css`
      background-color: #317172;
      color: #ffffff;
      border: none;
    `,

    secondary: css`
      background-color: #f5f5f5;
      color: #576363;
      border: 1px solid #e4eeee;
    `,

    plain: css`
      background-color: #f3f3f3;
      color: #626262;
    `
  },

  Font: {
    large: css`
      font-size: 16px;
      font-weight: 600;
      line-height: 18px;
    `,

    medium: css`
      font-size: 16px;
      font-weight: 400;
      line-height: 18px;
    `,

    small: css`
      font-size: 14px;
      font-weight: 400;
      border-radius: 25px;
      line-height: 16px;
    `
  }
};

export const ButtonPadding = {
  primary: {
    large: {
      normal: css`
        padding: 15px 18px;
      `,
      prefix: css`
        padding: 9px 18px;
      `,
      suffix: css`
        padding: 13px 9px;
      `,
      affix: css`
        padding: 9px 18px;
      `
    },
    medium: {
      normal: css`
        padding: 10px 15px;
      `,
      prefix: css`
        padding: 7px 15px;
      `,
      suffix: css`
        padding: 8px 5px 8px 15px;
      `,
      affix: css`
        padding: 7px 15px;
      `
    },
    small: {
      normal: css`
        padding: 6px 12px;
      `,
      prefix: css`
        padding: 3px 18.35px 3px 10px;
      `,
      suffix: css`
        padding: 3px 3px 3px 34px;
      `,
      affix: css`
        padding: 3px 3px 3px 10px;
      `
    }
  },
  secondary: {
    large: {
      normal: css`
        padding: 14px 18px;
      `,
      prefix: css`
        padding: 8px 18px;
      `,
      suffix: css`
        padding: 12px 9px;
      `,
      affix: css`
        padding: 8px 18px;
      `
    },
    medium: {
      normal: css`
        padding: 9px 15px;
      `,
      prefix: css`
        padding: 6px 15px;
      `,
      suffix: css`
        padding: 7px 4.72px 7px 15px;
      `,
      affix: css`
        padding: 6px 15px;
      `
    },
    small: {
      normal: css`
        padding: 5px 12px;
      `,
      prefix: css`
        padding: 2px 18.35px 2px 10px;
      `,
      suffix: css`
        padding: 2px 3px 2px 34px;
      `,
      affix: css`
        padding: 2px 3px 2px 10px;
      `
    }
  },
  plain: {
    large: {
      normal: css`
        padding: 15px 18px;
      `,
      prefix: css`
        padding: 9px 18px;
      `,
      suffix: css`
        padding: 13px 9px;
      `,
      affix: css`
        padding: 9px 18px;
      `
    },
    medium: {
      normal: css`
        padding: 10px 15px;
      `,
      prefix: css`
        padding: 7px 15px;
      `,
      suffix: css`
        padding: 8px 4.72px 8px 15px;
      `,
      affix: css`
        padding: 7px 15px;
      `
    },
    small: {
      normal: css`
        padding: 6px 12px;
      `,
      prefix: css`
        padding: 3px 18.35px 3px 10px;
      `,
      suffix: css`
        padding: 3px 3px 3px 34px;
      `,
      affix: css`
        padding: 3px 3px 3px 10px;
      `
    }
  }
};

export const PrefixSize = {
  large: css`
    width: 30px;
    height: 30px;
  `,
  medium: css`
    width: 24px;
    height: 24px;
  `,
  small: css`
    width: 22px;
    height: 22px;
  `
};

export const S = {
  Button: styled(motion.button)<{
    size: ButtonSize;
    variant: ButtonVariant;
    padding: FlattenSimpleInterpolation;
    disabled: boolean;
    prefixIcon: boolean;
  }>`
    all: unset;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    gap: 10px;
    cursor: pointer;

    ${({ variant }) => ButtonStyles.Type[variant]}
    ${({ size }) => ButtonStyles.Font[size]}
    ${({ padding }) => padding}

    ${({ prefixIcon }) =>
      prefixIcon &&
      css`
        justify-content: space-between;
      `}

    ${({ disabled }) =>
      disabled &&
      css`
        cursor: not-allowed;
        opacity: 0.7;
      `}
  `,
  LoadingWrapper: styled(motion.div)<{ variant: ButtonVariant; size: ButtonSize }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0);

    ${({ size }) => size === 'small' && PrefixSize.small}
    ${({ size }) => size === 'medium' && PrefixSize.medium}
  `,

  PrefixIconWrapper: styled.div<{ variant: ButtonVariant; size: ButtonSize }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0);

    ${({ variant }) => variant === 'primary' && 'background-color: #ffffff;'}

    ${({ size }) => size === 'small' && PrefixSize.small}
    ${({ size }) => size === 'medium' && PrefixSize.medium}
  `,

  ButtonTextWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `
};
