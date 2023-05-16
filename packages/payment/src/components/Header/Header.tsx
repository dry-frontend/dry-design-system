import { PropsWithChildren } from 'react';
import { Wrapper } from './Header.styled';

interface Props extends PropsWithChildren {
  backColor?: string;
}

const Header = ({ backColor, children }: Props) => {
  return <Wrapper backColor={backColor}>{children}</Wrapper>;
};

export default Header;
