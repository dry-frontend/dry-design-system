import { PropsWithChildren } from 'react';
import * as S from './Drawer.styled';

export interface DrawerProps {
  isOpen: boolean;
  anchor: 'left' | 'right' | 'top' | 'bottom';
  handleDimmerClickEvent?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Drawer = ({
  isOpen,
  anchor,
  handleDimmerClickEvent,
  children
}: PropsWithChildren<DrawerProps>) => {
  return (
    <S.Dimmed className={isOpen ? 'is-open' : ''} onClick={handleDimmerClickEvent}>
      <S.Container className={isOpen ? 'is-open' : ''} anchor={anchor}>
        {children}
      </S.Container>
    </S.Dimmed>
  );
};

export default Drawer;
