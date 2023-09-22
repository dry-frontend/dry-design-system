import { ButtonPadding } from '@components/Button/styles';
import { ButtonAffix, ButtonSize, ButtonVariant } from '@components/Button/types';
import { FlattenSimpleInterpolation, css } from 'styled-components';

interface getButtonPaddingParams {
  variant: ButtonVariant;
  size: ButtonSize;
  hasPrefix: boolean;
  hasSuffix: boolean;
}

export const getButtonPadding = ({
  variant,
  size,
  hasPrefix,
  hasSuffix
}: getButtonPaddingParams): FlattenSimpleInterpolation => {
  const paddingSubtraction = variant === 'secondary' ? 1 : 0;

  let affix: ButtonAffix = 'normal';
  if (hasPrefix && hasSuffix) affix = 'affix';
  if (hasPrefix && !hasSuffix) affix = 'prefix';
  if (!hasPrefix && hasSuffix) affix = 'suffix';

  const top = ButtonPadding[size][affix].topBottom - paddingSubtraction;
  const bottom = ButtonPadding[size][affix].topBottom - paddingSubtraction;
  const left = ButtonPadding[size][affix].left;
  const right = ButtonPadding[size][affix].right;

  return css`
    padding: ${top}px ${right}px ${bottom}px ${left}px;
  `;
};
