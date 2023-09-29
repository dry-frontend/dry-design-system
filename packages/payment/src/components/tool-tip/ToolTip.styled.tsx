import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;

  border-radius: 50%;
  overflow: hidden;
  object-fit: contain;
`;

export const DescriptionWrapper = styled.div<{
  position: 'top' | 'left' | 'right' | 'bottom';
  gap: string;
}>`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.TOOLTIP_BOX};

  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out;

  ${({ position, gap }) =>
    (position === 'top' &&
      css`
        top: ${gap};
      `) ||
    (position === 'left' &&
      css`
        left: ${gap};
      `) ||
    (position === 'right' &&
      css`
        right: ${gap};
      `) ||
    (position === 'bottom' &&
      css`
        bottom: ${gap};
      `)}

  &.is-visible {
    opacity: 1;
    visibility: visible;
  }
`;
