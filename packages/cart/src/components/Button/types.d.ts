import { ButtonPadding, ButtonSizes, ButtonStyles } from './styles';

export declare type ButtonVariant = keyof typeof ButtonStyles.Type;
export declare type ButtonSize = keyof typeof ButtonPadding;
export declare type ButtonAffix = keyof typeof ButtonPadding.large;

export declare type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
