import Icon from '@components/icon/Icon';
import { S } from '@components/icon-button/styles';

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
