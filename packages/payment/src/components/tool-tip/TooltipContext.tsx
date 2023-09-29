import { createContext } from 'react';

const ToolTipContext = createContext<{
  handleMouseEnterEvent: () => void;
  handleMouseLeaveEvent: () => void;
  position: 'top' | 'left' | 'right' | 'bottom';
  isHover: boolean;
  gap: string;
} | null>(null);

export default ToolTipContext;
