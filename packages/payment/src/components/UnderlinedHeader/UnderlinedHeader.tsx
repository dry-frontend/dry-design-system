import React from 'react';
import * as S from './UnderlinedHeader.styled';

export interface UnderlinedHeaderProps {
  width?: React.CSSProperties['width'];
  fontWeight?: React.CSSProperties['fontWeight'];
  textAlign?: React.CSSProperties['textAlign'];
  lineColor?: string;
  fontColor?: string;
}

const UnderlinedHeader = ({
  children,
  ...rest
}: React.PropsWithChildren<UnderlinedHeaderProps>) => {
  return <S.Header {...rest}>{children}</S.Header>;
};

export default UnderlinedHeader;
