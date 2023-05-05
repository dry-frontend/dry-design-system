import React, { useState } from 'react';
import * as S from './Checkbox.styled';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  color: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  return <S.Checkbox type={'checkbox'} ref={ref} {...props} />;
});

export default Checkbox;
