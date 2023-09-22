import styled from 'styled-components';
import { UnderlinedHeaderProps } from './UnderlinedHeader';
import { theme } from '../../styles/theme';

export const Header = styled.h3<UnderlinedHeaderProps>`
  width: ${({ width }) => width || 'auto'};
  margin: 0;
  padding: 0 4px;

  color: ${({ fontColor }) => fontColor || theme.colors.BLACK_450};
  font-size: 16px;
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  text-align: ${({ textAlign }) => textAlign || 'start'};

  border: 0;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-bottom-color: ${({ lineColor }) => lineColor || theme.colors.GRAY_200};
`;
