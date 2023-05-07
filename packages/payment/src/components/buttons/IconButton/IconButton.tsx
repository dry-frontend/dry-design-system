import { Button } from './style';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number;
  height?: number;
  isDisabled?: boolean;
  children: string;
  onClick?(): void;
}

export const IconButton = ({
  width = 10,
  height = 10,
  isDisabled = false,
  children,
  ...props
}: IconButtonProps) => {
  return (
    <Button width={width} height={height} isDisabled={isDisabled} {...props}>
      <img src={children} />
    </Button>
  );
};
