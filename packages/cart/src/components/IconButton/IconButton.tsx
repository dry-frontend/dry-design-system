import Icon from '@components/Icon/Icon';
import { S } from '@components/IconButton/styles';

interface IconButtonProps {
  iconUrl: string;
}

function IconButton({ iconUrl }: IconButtonProps) {
  return (
    <S.IconButton variant="secondary" size="small">
      <Icon src={iconUrl} />
    </S.IconButton>
  );
}

export default IconButton;
