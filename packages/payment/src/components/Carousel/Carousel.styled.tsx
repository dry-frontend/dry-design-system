import styled from 'styled-components';
import { theme } from '../../styles/theme';
import arrowSrc from '@assets/arrow.svg';

interface ContentListProps {
  index: number;
  totalCount: number;
}

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: fit-content;
`;

const StepButton = styled.button`
  width: 20px;
  height: 20px;
  border: 0;
  padding: 0;

  background-color: transparent;
  background-size: 40% 70%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url(${arrowSrc});

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: default;

    opacity: 0.5;
  }
`;

export const LeftButton = styled(StepButton)``;
export const RightButton = styled(StepButton)`
  transform: rotate(0.5turn);
`;

export const ContentBackground = styled.div`
  width: 200px;
  height: 140px;
  margin: 0 10px;

  background: ${theme.colors.GRAY_100};

  overflow: hidden;
`;

export const ContentList = styled.ul<ContentListProps>`
  list-style-type: none;

  display: flex;
  align-items: center;

  width: max-content;
  height: 100%;
  margin: 0;
  padding: 0;

  transform: translateX(-${({ index, totalCount }) => (index / totalCount) * 100}%);
  transition-duration: 1s;

  & > li {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 200px;
    height: 100%;
  }
`;
