import styled, { css } from 'styled-components';

export const Dimmed = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  opacity: 0;
  visibility: hidden;

  background-color: rgba(0, 0, 0, 0.5);

  z-index: ${({ theme }) => theme.zIndex.DRAWER};

  &.is-open {
    opacity: 1;
    visibility: visible;
  }
`;

export const Container = styled.div<{ anchor: 'left' | 'right' | 'top' | 'bottom' }>`
  position: absolute;

  background-color: ${({ theme }) => theme.colors.WHITE};
  box-sizing: border-box;

  ${({ anchor }) =>
    ((anchor === 'left' || anchor === 'right') &&
      css`
        transition: width 1s ease-in-out;
      `) ||
    ((anchor === 'top' || anchor === 'bottom') &&
      css`
        transition: height 1s ease-in-out;
      `)}

  &.is-open {
    ${({ anchor }) =>
      (anchor === 'top' &&
        css`
          width: 100%;
          height: 50%;
          border-radius: 0 0 10px 10px;
          top: 0;
        `) ||
      (anchor === 'left' &&
        css`
          width: 50%;
          height: 100%;
          border-radius: 0 10px 10px 0;
          left: 0;
        `) ||
      (anchor === 'right' &&
        css`
          width: 50%;
          height: 100%;
          border-radius: 0 10px 10px 0;
          right: 0;
        `) ||
      (anchor === 'bottom' &&
        css`
          width: 100%;
          height: 50%;
          bottom: 0;
          border-radius: 10px 10px 0 0;
        `)}
  }
`;
