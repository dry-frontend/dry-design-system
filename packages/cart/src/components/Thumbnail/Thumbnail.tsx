import { S } from 'components/Thumbnail/styles';
import { ThumbnailSize, ThumbnailObjectFit } from 'components/Thumbnail/types';

interface ThumbnailProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: ThumbnailSize;
  objectFit?: ThumbnailObjectFit;
  isTransparent?: boolean;
}

function Thumbnail({
  size = 'medium',
  objectFit = 'fill',
  isTransparent = false,
  ...props
}: ThumbnailProps) {
  return <S.Thumbnail size={size} objectFit={objectFit} isTransparent={isTransparent} {...props} />;
}

export default Thumbnail;
