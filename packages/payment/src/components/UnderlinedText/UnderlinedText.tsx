import React, { PropsWithChildren } from 'react';
import * as S from './UnderlinedText.styled';

export interface UnderlinedTextProps {
  lineColor?: string;
}

const UnderlinedText = ({ children, lineColor }: PropsWithChildren<UnderlinedTextProps>) => {
  return (
    <S.Container>
      <S.Text lineColor={lineColor}>{children}</S.Text>
    </S.Container>
  );
};

export default UnderlinedText;
