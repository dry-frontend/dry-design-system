import { PropsWithChildren } from 'react';
import * as S from './Drawer.styled';

export interface DrawerProps {
  isOpen: boolean;
  anchor: 'left' | 'right' | 'top' | 'bottom';
}

const Drawer = ({ isOpen, anchor, children }: PropsWithChildren<DrawerProps>) => {
  return (
    <S.Dimmed className={isOpen ? 'is-open' : ''}>
      <S.Container className={isOpen ? 'is-open' : ''} anchor={anchor}>
        {children}
      </S.Container>
    </S.Dimmed>
  );
};

export default Drawer;
