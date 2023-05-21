import { PropsWithChildren, Ref, forwardRef } from 'react';
import { InputAttributesType } from '../inputType';

import * as S from './PasswordInput.styled';
import { theme } from 'styles/theme';

const Input = forwardRef(({ ...rest }: InputAttributesType, forwardRef: Ref<HTMLInputElement>) => {
  return (
    <S.PasswordWrapper>
      <S.PasswordInput type="password" ref={forwardRef} maxLength={1} {...rest} />
    </S.PasswordWrapper>
  );
});

const Dot = ({ color = theme.colors.PRIMARY }: { color?: string }) => (
  <S.DotWrapper>
    <S.Dot dotColor={color} />
  </S.DotWrapper>
);

const Container = forwardRef(({ children }: PropsWithChildren, forwardRef: Ref<HTMLDivElement>) => {
  return <S.PasswordContainer ref={forwardRef}>{children}</S.PasswordContainer>;
});

const PasswordInput = Object.assign(Container, {
  Input,
  Dot
});

export default PasswordInput;
