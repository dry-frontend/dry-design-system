import { getButtonPadding } from '@components/Button/getButtonSize';
import { S } from '@components/Button/styles';
import { ButtonSize, ButtonType, ButtonVariant } from '@components/Button/types';
import Icon from '@components/Icon/Icon';
import LoadingSpinner from '@components/LoadingSpinner/LoadingSpinner';
import Chip from '@components/Chip/Chip';
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
  const initialRight = { x: 10, opacity: 0 };
  const initialLeft = { x: -10, opacity: 0 };
  const animateAppear = { x: 0, opacity: 1 };

  return (
    <S.Button
      variant={variant}
      size={size}
      type={type}
      disabled={disabled || loading}
      prefixIcon={hasPrefix}
      whileHover={{ opacity: 0.7 }}
      whileTap={disabled ? { scale: 1 } : { scale: 0.95 }}
      padding={getButtonPadding({
        variant,
        size,
        hasPrefix,
        hasSuffix
      })}
      {...props}
    >
      {loading && (
        <S.LoadingWrapper
          variant={variant}
          size={size}
          initial={initialRight}
          animate={animateAppear}
        >
          <LoadingSpinner />
        </S.LoadingWrapper>
      )}
      {!loading && prefixIconURL && (
        <S.PrefixIconWrapper variant={variant} size={size}>
          <Icon src={prefixIconURL} />
        </S.PrefixIconWrapper>
      )}

      <S.ButtonTextWrapper>
        {children}
        {suffix && (
          <Chip variant={variant} initial={initialLeft} animate={animateAppear}>
            {suffix}
          </Chip>
        )}
      </S.ButtonTextWrapper>
    </S.Button>
  );
}

export default Button;
