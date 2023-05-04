import { getButtonPadding } from 'components/Button/getButtonSize';
import { S } from 'components/Button/styles';
import { ButtonSize, ButtonType, ButtonVariant } from 'components/Button/types';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import { motion } from 'framer-motion';
import React from 'react';

interface ButtonProps extends React.ComponentPropsWithRef<typeof motion.button> {
  children: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  type?: ButtonType;
  prefixIconURL?: string;
  suffix?: number | null;
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
  const hasPrefix = prefixIconURL || loading ? true : false;
  const hasSuffix = suffix ? true : false;

  return (
    <S.Button
      variant={variant}
      size={size}
      type={type}
      disabled={disabled || loading}
      prefixIcon={hasPrefix}
      suffix={hasSuffix}
      loading={loading}
      padding={getButtonPadding({
        variant,
        size,
        hasPrefix,
        hasSuffix
      })}
      whileHover={{ opacity: 0.7 }}
      whileTap={disabled ? { scale: 1 } : { scale: 0.95 }}
      {...props}
    >
      {loading && (
        <S.LoadingWrapper
          variant={variant}
          size={size}
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
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
          <S.SuffixWrapper
            size={size}
            variant={variant}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            {suffix}
          </S.SuffixWrapper>
        )}
      </S.ButtonTextWrapper>
    </S.Button>
  );
}

export default Button;
