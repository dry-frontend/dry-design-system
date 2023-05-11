import React, { useState } from 'react';
import * as S from './Carousel.styled';

interface CarouselProps extends React.PropsWithChildren {
  onClickPrevButton?: React.MouseEventHandler<HTMLButtonElement>;
  onClickNextButton?: React.MouseEventHandler<HTMLButtonElement>;
}

const Carousel = ({ children, onClickPrevButton, onClickNextButton }: CarouselProps) => {
  const [index, setIndex] = useState(0);
  const childrenCount = React.Children.count(children);

  const handleClickPrev: React.MouseEventHandler<HTMLButtonElement> = e => {
    setIndex(prev => {
      if (prev === 0) {
        return prev;
      }
      return prev - 1;
    });

    onClickPrevButton && onClickPrevButton(e);
  };

  const handleClickNext: React.MouseEventHandler<HTMLButtonElement> = e => {
    setIndex(prev => {
      if (prev === childrenCount - 1) {
        return prev;
      }
      return prev + 1;
    });

    onClickNextButton && onClickNextButton(e);
  };

  return (
    <S.Container>
      <S.LeftButton onClick={handleClickPrev} disabled={index === 0} />
      <S.ContentBackground>
        <S.ContentList index={index} totalCount={childrenCount}>
          {React.Children.toArray(children).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </S.ContentList>
      </S.ContentBackground>
      <S.RightButton onClick={handleClickNext} disabled={index === childrenCount - 1} />
    </S.Container>
  );
};

export default Carousel;
