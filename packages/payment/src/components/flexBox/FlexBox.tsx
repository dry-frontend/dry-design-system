import { HTMLAttributes, PropsWithChildren, Ref, forwardRef } from 'react';

import * as S from './FlexBox.styles';

interface FlexProps {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justifyContent?:
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'left'
    | 'right';
  alignItems?: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
  gap?: string;
  width?: string;
  height?: string;
}

export interface FlexBoxProps extends FlexProps, HTMLAttributes<HTMLDivElement> {}

const FlexBox = forwardRef(
  (
    {
      children,
      direction = 'column',
      justifyContent = 'center',
      alignItems = 'center',
      gap = '0',
      width = '100%',
      height = '100%',
      ...rest
    }: PropsWithChildren<FlexBoxProps>,
    forwardRef: Ref<HTMLDivElement>
  ) => {
    return (
      <S.Container
        ref={forwardRef}
        width={width}
        height={height}
        direction={direction}
        justifyContent={justifyContent}
        alignItems={alignItems}
        gap={gap}
        {...rest}
      >
        {children}
      </S.Container>
    );
  }
);

export default FlexBox;
