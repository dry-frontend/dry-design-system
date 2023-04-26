import { getButtonPadding } from 'components/Button/getButtonSize';
import { S } from 'components/Button/styles';
import { ButtonSize, ButtonType, ButtonVariant } from 'components/Button/types';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  prefixIconURL?: string;
  suffix?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  type?: ButtonType;
  loading?: boolean;
  disabled?: boolean;
}

function Button({
  variant = 'primary',
  size = 'medium',
  type = 'button',
  loading = false,
  disabled = false,
  children,
  prefixIconURL,
  suffix,
  ...props
}: ButtonProps) {
  if (loading) disabled = true;

  return (
    <S.Button
      variant={variant}
      size={size}
      type={type}
      disabled={disabled}
      prefixIcon={prefixIconURL ? true : false}
      suffix={suffix ? true : false}
      padding={getButtonPadding({
        variant,
        size,
        hasPrefix: prefixIconURL || loading ? true : false,
        hasSuffix: suffix ? true : false
      })}
      loading={loading}
      {...props}
    >
      {loading && (
        <S.LoadingWrapper variant={variant} size={size}>
          <LoadingSpinner />
        </S.LoadingWrapper>
      )}
      {!loading && prefixIconURL && (
        <S.PrefixIconWrapper variant={variant} size={size}>
          <S.PrefixIcon src={prefixIconURL} />
        </S.PrefixIconWrapper>
      )}

      <S.ButtonTextWrapper>
        <S.ButtonText>{children}</S.ButtonText>
        {suffix && (
          <S.SuffixWrapper size={size} variant={variant}>
            {suffix}
          </S.SuffixWrapper>
        )}
      </S.ButtonTextWrapper>
    </S.Button>
  );
}

export default Button;
