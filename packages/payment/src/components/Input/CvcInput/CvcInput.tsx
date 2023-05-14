import { Ref, forwardRef } from 'react';
import { InputAttributesType } from '../inputType';
import * as S from './CvcInput.styled';

const CvcInput = forwardRef(
  ({ ...rest }: InputAttributesType, forwardRef: Ref<HTMLInputElement>) => {
    return (
      <S.CvcContainer>
        <S.CvcInput type="password" ref={forwardRef} maxLength={3} {...rest} autoFocus />
      </S.CvcContainer>
    );
  }
);

export default CvcInput;