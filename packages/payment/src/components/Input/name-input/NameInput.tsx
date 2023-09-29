import { Ref, forwardRef } from 'react';
import { InputAttributesType } from '../inputType';

import * as S from './NameInput.styled';

const NameInput = forwardRef(
  ({ ...rest }: InputAttributesType, forwardRef: Ref<HTMLInputElement>) => {
    return (
      <S.NameContainer>
        <S.NameInput type="text" ref={forwardRef} {...rest} />
      </S.NameContainer>
    );
  }
);

export default NameInput;
