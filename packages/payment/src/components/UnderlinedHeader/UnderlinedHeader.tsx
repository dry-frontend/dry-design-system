import React from 'react';
import * as S from './UnderlinedHeader.styled';

export interface UnderlinedHeaderProps {
  width?: React.CSSProperties['width'];
  lineColor?: string;
  fontWeight?: React.CSSProperties['fontWeight'];
}

const UnderlinedHeader = (props: UnderlinedHeaderProps) => {
  return <S.Header {...props}>UnderlinedHeader</S.Header>;
};

export default UnderlinedHeader;
