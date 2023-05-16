import { Colors, theme } from 'styles/theme';
import { Wrapper, Text } from './Button.styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  primaryColor?: string;
  fontSize?: number;
  padding?: string;
  isDisabled?: boolean;
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSubmit?: React.MouseEventHandler<HTMLButtonElement>;
}

type ButtonVariant = 'contained' | 'outlined' | 'text';

type ButtonStyleAttribute = 'text' | 'back' | 'line';

export type ButtonState = 'default' | 'disabled';

type ButtonStylesConfig = {
  [key in ButtonVariant]: ButtonStylesAttributeConfig;
};

export type ButtonStylesAttributeConfig = {
  [key in ButtonStyleAttribute]: {
    [key2 in ButtonState]: Colors | string | 'none';
  };
};

export const getButtonStylesConfig = (primaryColor: string | undefined): ButtonStylesConfig => {
  return {
    contained: {
      text: {
        default: theme.colors['WHITE'],
        disabled: theme.colors['WHITE']
      },
      back: {
        default: primaryColor || theme.colors['PRIMARY'],
        disabled: theme.colors['GRAY_200']
      },
      line: {
        default: 'none',
        disabled: 'none'
      }
    },
    outlined: {
      text: {
        default: primaryColor || theme.colors['PRIMARY'],
        disabled: theme.colors['GRAY_200']
      },
      back: {
        default: theme.colors['WHITE'],
        disabled: theme.colors['WHITE']
      },
      line: {
        default: primaryColor || theme.colors['PRIMARY'],
        disabled: theme.colors['GRAY_200']
      }
    },
    text: {
      text: {
        default: primaryColor || theme.colors['PRIMARY'],
        disabled: theme.colors['GRAY_200']
      },
      back: {
        default: 'none',
        disabled: 'none'
      },
      line: {
        default: 'none',
        disabled: 'none'
      }
    }
  };
};

export const Button = ({
  variant = 'contained',
  primaryColor,
  padding = '8px 28px 8px 28px',
  fontSize = 16,
  isDisabled = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <Wrapper
      buttonStyles={getButtonStylesConfig(primaryColor)[variant]}
      padding={padding}
      isDisabled={isDisabled ? 'disabled' : 'default'}
      primaryColor={primaryColor}
      {...props}
    >
      <Text
        textStyles={getButtonStylesConfig(primaryColor)[variant]}
        fontSize={fontSize}
        isDisabled={isDisabled ? 'disabled' : 'default'}
      >
        {children}
      </Text>
    </Wrapper>
  );
};
