import styled from 'styled-components';
import { UnderlinedTextProps } from './UnderlinedText';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  position: relative;

  width: fit-content;
  padding: 0 2px;
`;

export const Text = styled.p<UnderlinedTextProps>`
  width: fit-content;
  margin: auto;

  font-size: 14px;
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};

  &:before {
    content: '';

    position: absolute;
    left: -2px;
    bottom: 3px;
    z-index: -1;

    width: calc(100% + 4px);
    height: 3px;

    background: ${({ lineColor }) => lineColor || theme.colors.PRIMARY + '80'};
  }
`;
