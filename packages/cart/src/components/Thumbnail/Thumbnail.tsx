import { S } from 'components/Thumbnail/styles';
import { ThumbnailSize, ThumbnailObjectFit } from 'components/Thumbnail/types';

interface ThumbnailProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: ThumbnailSize;
  objectFit?: ThumbnailObjectFit;
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
