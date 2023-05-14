import { PropsWithChildren, Ref, forwardRef } from 'react';
import * as S from './CardNumberInput.styled';
import { InputAttributesType } from '../inputType';

const Number = forwardRef(({ ...rest }: InputAttributesType, forwardRef: Ref<HTMLInputElement>) => {
  return <S.CardNumberInput type="number" ref={forwardRef} {...rest} />;
});

const Dash = () => {
  return <S.Dash>-</S.Dash>;
};

const Container = forwardRef(({ children }: PropsWithChildren, forwardRef: Ref<HTMLDivElement>) => (
  <S.CardNumberContainer ref={forwardRef}>{children}</S.CardNumberContainer>
));

const CardNumberInput = Object.assign(Container, {
  Number,
  Dash
});

export default CardNumberInput;
