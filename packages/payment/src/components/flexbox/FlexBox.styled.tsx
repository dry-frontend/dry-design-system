import styled from 'styled-components';

import { FlexBoxProps } from './FlexBox';

export const Container = styled.div<FlexBoxProps>`
  display: flex;

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
`;
