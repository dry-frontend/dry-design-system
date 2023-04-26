import { ButtonSizes, ButtonStyles } from './styles';

export declare type ButtonVariant = keyof typeof ButtonStyles.Type;
export declare type ButtonSize = keyof typeof ButtonStyles.Size;
export declare type ButtonAffix = keyof typeof ButtonSizes.plain.large;

export declare type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
