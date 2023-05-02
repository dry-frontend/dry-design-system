import { S } from 'components/IconButton/styles';

interface IconButtonProps {
  iconUrl: string;
}

function IconButton({ iconUrl }: IconButtonProps) {
  return (
    <S.IconButton variant="secondary" size="small">
      <S.Icon src={iconUrl} />
    </S.IconButton>
  );
}

export default IconButton;
