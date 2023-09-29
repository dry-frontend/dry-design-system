import styled from 'styled-components';
import { CardSize } from './Card';
import { theme } from '../../styles/theme';

interface WrapperProps extends SizeProps {
  size: CardSize;
  color: string | undefined;
}

interface SizeProps {
  size: CardSize;
}

const cardSizeConfig = {
  small: {
    width: 152,
    height: 100,
    padding: 10,
    fontSize: 10
  },
  medium: {
    width: 208,
    height: 130,
    padding: 14,
    fontSize: 14
  },
  large: {
    width: 300,
    height: 183,
    padding: 20,
    fontSize: 18
  }
};

const icChipConfig = {
  small: {
    width: 30,
    height: 20
  },
  medium: {
    width: 40,
    height: 26
  },
  large: {
    width: 55,
    height: 35
  }
};

export const Wrapper = styled.div<WrapperProps>`
  display: grid;
  grid-template-rows: 1.7fr 1.5fr 1fr auto;
  border-radius: 5px;
  cursor: pointer;

  ${({ size, color }) => `
    width: ${cardSizeConfig[size].width}px;
    height: ${cardSizeConfig[size].height}px;
    padding: ${cardSizeConfig[size].padding}px;
    background-color: ${color || theme.colors.GRAY_600}
  `}
`;

export const IcChip = styled.div<SizeProps>`
  background-color: ${({ theme }) => theme.colors.YELLOW_800};
  border-radius: 4px;

  ${({ size }) => `
    width: ${icChipConfig[size].width}px;
    height: ${icChipConfig[size].height}px;
  `}
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.p<SizeProps>`
  margin: 0;
  font-weight: 500;

  ${({ size }) => `
    font-size: ${cardSizeConfig[size].fontSize}px;
  `}
`;

export const CardNumberWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 10px;
  letter-spacing: 3px;
`;

export const CardNumber = styled.span<SizeProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-weight: 500;

  ${({ size }) => `
    font-size: ${cardSizeConfig[size].fontSize}px;
  `}
`;
