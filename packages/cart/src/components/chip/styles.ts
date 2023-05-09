import { ButtonVariant } from 'components/Button/types';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const S = {
  Chip: styled(motion.div)<{ variant: ButtonVariant }>`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 30px;
    width: fit-content;
    height: 22px;
    padding: 0 10px;
    border-radius: 21px;
    font-weight: 600;
    font-size: 12px;
    line-height: 14.52px;
    background: #317172;
    color: #ffffff;

    ${({ variant }) =>
      variant === 'primary' &&
      css`
        background-color: #ffffff;
        color: #317172;
      `}
  `
};
