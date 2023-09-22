import styled, { css } from 'styled-components';
import { ThumbnailSize } from '@components/Thumbnail/types';

export const ThumbnailStyles = {
  Size: {
    large: css`
      width: 478px;
      height: 478px;
    `,
    medium: css`
      width: 180px;
      height: 180px;
    `,
    small: css`
      width: 100px;
      height: 100px;
    `
  }
};

export const S = {
  Thumbnail: styled.img<{
    size: ThumbnailSize;
    objectFit: React.CSSProperties['objectFit'];
    isTransparent: boolean;
    isCursorPointer: boolean;
  }>`
    border: 1px solid #f5f5f5;

    opacity: ${({ isTransparent }) => isTransparent && '0.5'};
    cursor: ${({ isCursorPointer }) => isCursorPointer && 'pointer'};
    object-fit: ${({ objectFit }) => objectFit || 'initial'}
      ${({ size }) => ThumbnailStyles.Size[size]};
  `
};
