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
        padding: 16px 18.35px 14px 18px;
      `,
      prefix: css`
        padding: 9px 18.35px 9px 18px;
      `,
      suffix: css`
        padding: 14px 8.35px 12px 9px;
      `,
      affix: css`
        padding: 9px 18.35px 9px 18px;
      `
    },
    medium: {
      normal: css`
        padding: 10px 14.72px 10px 15px;
      `,
      prefix: css`
        padding: 7px 14.72px 7px 15px;
      `,
      suffix: css`
        padding: 8px 4.72px 8px 15px;
      `,
      affix: css`
        padding: 7px 14.72px 7px 15px;
      `
    },
    small: {
      normal: css`
        padding: 7px 12px 5px 12px;
      `,
      prefix: css`
        padding: 3px 18.35px 3px 10px;
      `,
      suffix: css`
        padding: 3px 3px 3px 44px;
      `,
      affix: css`
        padding: 3px 3px 3px 10px;
      `
    }
  },
  secondary: {
    large: {
      normal: css`
        padding: 15px 18.35px 13px 18px;
      `,
      prefix: css`
        padding: 8px 18.35px 8px 18px;
      `,
      suffix: css`
        padding: 13px 8.35px 11px 9px;
      `,
      affix: css`
        padding: 8px 18.35px 8px 18px;
      `
    },
    medium: {
      normal: css`
        padding: 9px 14.72px 9px 15px;
      `,
      prefix: css`
        padding: 6px 14.72px 6px 15px;
      `,
      suffix: css`
        padding: 7px 4.72px 7px 15px;
      `,
      affix: css`
        padding: 6px 14.72px 6px 15px;
      `
    },
    small: {
      normal: css`
        padding: 7px 12px 4px 12px;
      `,
      prefix: css`
        padding: 2px 18.35px 2px 10px;
      `,
      suffix: css`
        padding: 2px 3px 2px 44px;
      `,
      affix: css`
        padding: 2px 3px 2px 10px;
      `
    }
  },
  plain: {
    large: {
      normal: css`
        padding: 16px 18.35px 14px 18px;
      `,
      prefix: css`
        padding: 9px 18.35px 9px 18px;
      `,
      suffix: css`
        padding: 14px 8.35px 12px 9px;
      `,
      affix: css`
        padding: 9px 18.35px 9px 18px;
      `
    },
    medium: {
      normal: css`
        padding: 10px 14.72px 10px 15px;
      `,
      prefix: css`
        padding: 7px 14.72px 7px 15px;
      `,
      suffix: css`
        padding: 8px 4.72px 8px 15px;
      `,
      affix: css`
        padding: 7px 14.72px 7px 15px;
      `
    },
    small: {
      normal: css`
        padding: 7px 12px 5px 12px;
      `,
      prefix: css`
        padding: 3px 18.35px 3px 10px;
      `,
      suffix: css`
        padding: 3px 3px 3px 44px;
      `,
      affix: css`
        padding: 3px 3px 3px 10px;
      `
    }
  }
};

export const S = {
  Button: styled.button<{
    size: ButtonSize;
    variant: ButtonVariant;
    padding: FlattenSimpleInterpolation;
    disabled: boolean;
    prefixIcon: boolean;
    suffix: boolean;
    loading: boolean;
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
        opacity: 0.6;
      `}

    &:hover {
      opacity: ${({ disabled }) => (disabled ? 0.6 : 0.6)};
    }

    &:active {
      transform: scale(${({ disabled }) => (disabled ? 1 : 0.98)});
    }
  `,

  PrefixIcon: styled.img`
    width: 15px;
    height: 15px;
  `,

  LoadingWrapper: styled(motion.div)<{ variant: ButtonVariant; size: ButtonSize }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0);

    ${({ size }) =>
      (size === 'small' &&
        css`
          width: 22px;
          height: 22px;
        `) ||
      (size === 'medium' &&
        css`
          width: 24px;
          height: 24px;
        `)}
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

    ${({ size }) =>
      (size === 'small' &&
        css`
          width: 22px;
          height: 22px;
        `) ||
      (size === 'medium' &&
        css`
          width: 24px;
          height: 24px;
        `)}
  `,

  ButtonTextWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `,

  ButtonText: styled.p`
    margin: 0;
  `,

  SuffixWrapper: styled(motion.div)<{ size: ButtonSize; variant: ButtonVariant }>`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 30px;
    height: 22px;
    border-radius: 21px;
    font-weight: 600;
    font-size: 12px;
    line-height: 14.52px;

    ${({ variant }) =>
      variant === 'primary'
        ? css`
            background-color: #ffffff;
            color: #317172;
          `
        : css`
            background: #317172;
            color: #ffffff;
          `}
  `
};
