import { forwardRef, InputHTMLAttributes, PropsWithChildren, LabelHTMLAttributes } from 'react';
import * as S from './styles';

type Props = PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> & {
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
};

function Checkbox(
  { labelProps, children, ...inputProps }: Props,
  parentRef: React.ForwardedRef<HTMLInputElement | null>
) {
  const { type, ...usingInputProps } = inputProps;

  return (
    <S.Label {...labelProps}>
      <S.Input type="checkbox" ref={parentRef} {...usingInputProps} />
      <S.CheckImg />
      {children}
    </S.Label>
  );
}

export default forwardRef(Checkbox);
