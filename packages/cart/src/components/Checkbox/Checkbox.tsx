import { forwardRef, InputHTMLAttributes, PropsWithChildren } from 'react';
import { S } from './styles';

type Props = PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>;

function Checkbox({ children, ...props }: Props, ref: React.ForwardedRef<HTMLInputElement | null>) {
  return (
    <S.Label>
      <S.Input type="checkbox" ref={ref} {...props} />
      <S.CheckImg />
      {children}
    </S.Label>
  );
}

export default forwardRef(Checkbox);
