import { S } from '@components/icon/styles';

interface IconProps {
  src: string;
}

function Icon({ src }: IconProps) {
  return <S.Icon src={src} alt="icon" />;
}

export default Icon;
