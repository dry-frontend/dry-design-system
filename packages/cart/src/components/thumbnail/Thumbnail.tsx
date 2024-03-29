import { S } from '@components/thumbnail/styles';
import { ThumbnailSize } from '@components/thumbnail/types';

interface ThumbnailProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: ThumbnailSize;
  objectFit?: React.CSSProperties['objectFit'];
  isTransparent?: boolean;
  isCursorPointer?: boolean;
}

function Thumbnail({
  size = 'medium',
  objectFit = 'fill',
  isTransparent = false,
  isCursorPointer = false,
  ...props
}: ThumbnailProps) {
  return (
    <S.Thumbnail
      size={size}
      objectFit={objectFit}
      isTransparent={isTransparent}
      isCursorPointer={isCursorPointer}
      {...props}
    />
  );
}

export default Thumbnail;
