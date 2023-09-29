import { PropsWithChildren } from 'react';
import { Wrapper } from './Header.styled';

interface Props extends PropsWithChildren {
  backgroundColor?: string;
}

const Header = ({ backgroundColor, children }: Props) => {
  return <Wrapper backgroundColor={backgroundColor}>{children}</Wrapper>;
};

export default Header;
