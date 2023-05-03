import { forwardRef, InputHTMLAttributes, PropsWithChildren, Ref } from 'react';
import checkImage from '../../assets/check.svg';
import { S } from './styles';

type Props = PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>;

const Checkbox = forwardRef(function Checkbox(
  { children, ...props }: Props,
  ref: Ref<HTMLInputElement>
) {
  return (
    <S.Label>
      <S.Input type="checkbox" ref={ref} {...props} />
      <S.ImageWrapper>
        <img src={checkImage} />
      </S.ImageWrapper>
      {children}
    </S.Label>
  );
});

export default Checkbox;
