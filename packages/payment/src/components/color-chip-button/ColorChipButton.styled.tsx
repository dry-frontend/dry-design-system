import styled from 'styled-components';
import { ColorChipButtonProps } from './ColorChipButton';
import { theme } from '../../styles/theme';

type CircleProps = Pick<ColorChipButtonProps, 'chipColor' | 'gradient'>;

const radialGradientGenerator = (hexColorCode: string) => {
  return `radial-gradient(50% 50% at 50% 50%, ${
    hexColorCode + '4D,' + hexColorCode + '66,' + hexColorCode + 'FF'
  })`;
};

export const Button = styled.button`
  padding: 0;
  border: 0;
  background: transparent;

  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const Circle = styled.div<CircleProps>`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  margin-bottom: 10px;

  background: ${({ gradient, chipColor }) =>
    gradient ? radialGradientGenerator(chipColor) : chipColor};
`;

export const Text = styled.span`
  font-size: 12px;
  color: ${theme.colors.BLACK_400};
`;
