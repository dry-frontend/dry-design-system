import { ButtonPadding, ButtonStyles } from './styles';

export type ButtonVariant = keyof typeof ButtonStyles.Type;
export type ButtonSize = keyof typeof ButtonPadding;
export type ButtonAffix = keyof typeof ButtonPadding.large;

export type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
