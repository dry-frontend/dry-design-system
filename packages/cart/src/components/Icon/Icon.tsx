import { S } from '@components/Icon/styles';

interface IconProps {
  src: string;
}

function Icon({ src }: IconProps) {
  return <S.Icon src={src} alt="icon" />;
}

export default Icon;
