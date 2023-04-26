import { ButtonSizes } from 'components/Button/styles';
import { ButtonAffix, ButtonSize, ButtonVariant } from 'components/Button/types';
import { FlattenSimpleInterpolation } from 'styled-components';

export const getButtonPadding = ({
  variant,
  size,
  hasPrefix,
  hasSuffix
}: getButtonPaddingParams): FlattenSimpleInterpolation => {
  let affix: ButtonAffix = 'normal';
  if (hasPrefix && hasSuffix) affix = 'affix';
  if (hasPrefix && !hasSuffix) affix = 'prefix';
  if (!hasPrefix && hasSuffix) affix = 'suffix';

  return ButtonSizes[variant][size][affix];
};
interface getButtonPaddingParams {
  variant: ButtonVariant;
  size: ButtonSize;
  hasPrefix: boolean;
  hasSuffix: boolean;
}
