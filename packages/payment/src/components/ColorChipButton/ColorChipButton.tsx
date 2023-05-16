import React, { ButtonHTMLAttributes } from 'react';
import * as S from './ColorChipButton.styled';

export interface ColorChipButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  chipColor: string;
  text: string;
  gradient?: boolean;
}

const ColorChipButton = ({ chipColor, text, gradient = false, ...rest }: ColorChipButtonProps) => {
  return (
    <S.Button {...rest}>
      <S.Circle chipColor={chipColor} gradient={gradient} />
      <S.Text>{text}</S.Text>
    </S.Button>
  );
};

export default ColorChipButton;
