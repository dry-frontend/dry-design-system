import { forwardRef, InputHTMLAttributes, PropsWithChildren, LabelHTMLAttributes } from 'react';
import * as S from './styles';

type Props = PropsWithChildren<Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>> & {
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
};

function Checkbox(
  { labelProps, children, ...inputProps }: Props,
  parentRef: React.ForwardedRef<HTMLInputElement | null>
) {
  return (
    <S.Label {...labelProps}>
      <S.Input type="checkbox" ref={parentRef} {...inputProps} />
      <S.CheckImg />
      {children}
    </S.Label>
  );
}

export default forwardRef(Checkbox);
