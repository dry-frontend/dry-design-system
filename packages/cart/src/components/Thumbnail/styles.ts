import styled, { css } from 'styled-components';
import { ThumbnailSize, ThumbnailObjectFit } from 'components/Thumbnail/types';

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
  },
  ObjectFit: {
    fill: css`
      object-fit: fill;
    `,
    contain: css`
      object-fit: contain;
    `,
    cover: css`
      object-fit: cover;
    `,
    none: css`
      object-fit: none;
    `,
    scaleDown: css`
      object-fit: scale-dow;
    `
  }
};

export const S = {
  Thumbnail: styled.img<{
    size: ThumbnailSize;
    objectFit: ThumbnailObjectFit;
    isTransparent: boolean;
    isCursorPointer: boolean;
  }>`
    border: 1px solid #f5f5f5;
    ${({ isTransparent }) =>
      isTransparent &&
      css`
        opacity: 0.5;
      `};
    ${({ isCursorPointer }) =>
      isCursorPointer &&
      css`
        cursor: pointer;
      `}
    ${({ size }) => ThumbnailStyles.Size[size]};
    ${({ objectFit }) => ThumbnailStyles.ObjectFit[objectFit]};
  `
};
