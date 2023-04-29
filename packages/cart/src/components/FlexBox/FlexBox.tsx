import styled from 'styled-components';

export interface FlexBoxProps {
  direction?: React.CSSProperties['flexDirection'];
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignItems'];
  gap?: 'small' | 'medium' | 'large';
}

const GAP: Record<Required<FlexBoxProps>['gap'], `${number}px`> = {
  small: '12px',
  medium: '24px',
  large: '36px'
};

const FlexBox = styled.div<FlexBoxProps>`
  display: flex;

  flex-direction: ${({ direction }) => direction || 'initial'};
  justify-content: ${({ justify }) => justify || 'initial'};
  align-items: ${({ align }) => align || 'initial'};
  gap: ${({ gap }) => GAP[gap || 'small']};
`;

export default FlexBox;
