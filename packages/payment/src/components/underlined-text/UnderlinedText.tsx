import React, { PropsWithChildren } from 'react';
import * as S from './UnderlinedText.styled';

export interface UnderlinedTextProps {
  lineColor?: string;
  fontWeight?: React.CSSProperties['fontWeight'];
}

const UnderlinedText = ({ children, ...rest }: PropsWithChildren<UnderlinedTextProps>) => {
  return (
    <S.Container>
      <S.Text {...rest}>{children}</S.Text>
    </S.Container>
  );
};

export default UnderlinedText;
