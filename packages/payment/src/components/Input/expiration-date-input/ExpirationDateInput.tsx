import { ReactElement, Ref, forwardRef } from 'react';
import * as S from './ExpirationDateInput.styled';
import { InputAttributesType } from '../inputType';

const Date = forwardRef(({ ...rest }: InputAttributesType, forwardRef: Ref<HTMLInputElement>) => {
  return <S.ExpirationDateInput type="number" ref={forwardRef} {...rest} />;
});

export interface ExpirationDateInputProps {
  month: ReactElement;
  year: ReactElement;
}

const Container = forwardRef(
  ({ month, year }: ExpirationDateInputProps, forwardRef: Ref<HTMLDivElement>) => {
    return (
      <S.ExpirationDateContainer ref={forwardRef}>
        {month}
        <S.Slash>/</S.Slash>
        {year}
      </S.ExpirationDateContainer>
    );
  }
);

const ExpirationDateInput = Object.assign(Container, {
  Month: Date,
  Year: Date
});

export default ExpirationDateInput;
