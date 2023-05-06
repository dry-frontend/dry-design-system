import { PropsWithChildren, Ref, forwardRef } from 'react';
import { InputAttributesType } from '../inputType';

import * as S from './PasswordInput.styled';

const Input = forwardRef(({ ...rest }: InputAttributesType, forwardRef: Ref<HTMLInputElement>) => {
  return (
    <S.PasswordWrapper>
      <S.PasswordInput type="password" ref={forwardRef} maxLength={1} {...rest} />
    </S.PasswordWrapper>
  );
});

const Dot = () => (
  <S.DotWrapper>
    <S.Dot />
  </S.DotWrapper>
);

const Container = forwardRef(({ children }: PropsWithChildren, forwardRef: Ref<HTMLDivElement>) => {
  return (
    <S.PasswordContainer ref={forwardRef}>
      {children}
      <Dot />
      <Dot />
    </S.PasswordContainer>
  );
});

const PasswordInput = Object.assign(Container, {
  Input
});

export default PasswordInput;
