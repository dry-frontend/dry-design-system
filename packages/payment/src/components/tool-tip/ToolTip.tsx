import { PropsWithChildren, useContext, useState } from 'react';
import ToolTipContext from './TooltipContext';

import * as S from './ToolTip.styled';

export const IconWrapper = ({ children }: PropsWithChildren) => {
  const context = useContext(ToolTipContext);
  if (!context) {
    throw new Error('ToolTip context error');
  }

  const { handleMouseEnterEvent, handleMouseLeaveEvent } = context;

  return (
    <S.ImgWrapper onMouseEnter={handleMouseEnterEvent} onMouseLeave={handleMouseLeaveEvent}>
      {children}
    </S.ImgWrapper>
  );
};

export const DescriptionWrapper = ({ children }: PropsWithChildren) => {
  const context = useContext(ToolTipContext);
  if (!context) {
    throw new Error('ToolTip context error');
  }
  const { isHover, position, gap } = context;

  return (
    <S.DescriptionWrapper className={isHover ? 'is-visible' : ''} gap={gap} position={position}>
      {children}
    </S.DescriptionWrapper>
  );
};

export interface ToolTipProps {
  position: 'top' | 'left' | 'right' | 'bottom';
  gap: string;
}

const Container = ({ position, gap, children }: PropsWithChildren<ToolTipProps>) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnterEvent = () => {
    setIsHover(true);
  };
  const handleMouseLeaveEvent = () => {
    setIsHover(false);
  };

  return (
    <S.Container>
      <ToolTipContext.Provider
        value={{ handleMouseEnterEvent, handleMouseLeaveEvent, position, gap, isHover }}
      >
        {children}
      </ToolTipContext.Provider>
    </S.Container>
  );
};

const ToolTip = Object.assign(Container, {
  IconWrapper,
  DescriptionWrapper
});

export default ToolTip;
