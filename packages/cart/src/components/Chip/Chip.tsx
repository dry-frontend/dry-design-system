import { ButtonVariant } from '@components/Button/types';
import { S } from '@components/Chip/styles';
import { motion } from 'framer-motion';

interface ChipProps extends React.ComponentPropsWithRef<typeof motion.div> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

function Chip({ variant = 'plain', children, ...props }: ChipProps) {
  return (
    <S.Chip variant={variant} {...props}>
      {children}
    </S.Chip>
  );
}

export default Chip;
