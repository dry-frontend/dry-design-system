import { forwardRef, InputHTMLAttributes, PropsWithChildren } from 'react';
import checkImage from '../../assets/check.svg';
import { S } from './styles';

type Props = PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>;

function Checkbox({ children, ...props }: Props, ref: React.ForwardedRef<HTMLInputElement | null>) {
  return (
    <S.Label>
      <S.Input type="checkbox" ref={ref} {...props} />
      <S.ImageWrapper>
        <img src={checkImage} />
      </S.ImageWrapper>
      {children}
    </S.Label>
  );
}

export default forwardRef(Checkbox);
