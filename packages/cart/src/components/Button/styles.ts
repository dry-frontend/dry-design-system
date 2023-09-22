import { ButtonSize, ButtonVariant } from '@components/Button/types';
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
  large: {
    normal: {
      topBottom: 15,
      left: 18,
      right: 18
    },
    prefix: {
      topBottom: 9,
      left: 18,
      right: 18
    },
    suffix: {
      topBottom: 13,
      left: 9,
      right: 9
    },
    affix: {
      topBottom: 9,
      left: 18,
      right: 18
    }
  },
  medium: {
    normal: {
      topBottom: 10,
      left: 15,
      right: 15
    },
    prefix: {
      topBottom: 7,
      left: 15,
      right: 15
    },
    suffix: {
      topBottom: 8,
      left: 15,
      right: 5
    },
    affix: {
      topBottom: 7,
      left: 15,
      right: 15
    }
  },
  small: {
    normal: {
      topBottom: 6,
      left: 12,
      right: 12
    },
    prefix: {
      topBottom: 3,
      left: 10,
      right: 18.35
    },
    suffix: {
      topBottom: 3,
      left: 34,
      right: 3
    },
    affix: {
      topBottom: 3,
      left: 10,
      right: 3
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
