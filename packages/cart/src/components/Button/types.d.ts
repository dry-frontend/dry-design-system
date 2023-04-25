import { ButtonStyles } from './styles';

export declare type ButtonVariant = keyof typeof ButtonStyles.Type;
export declare type ButtonSize = keyof typeof ButtonStyles.Size;
export declare type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
