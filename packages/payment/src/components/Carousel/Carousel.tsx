import React, { useState } from 'react';
import * as S from './Carousel.styled';

interface CarouselProps extends React.PropsWithChildren {}

const Carousel = ({ children }: CarouselProps) => {
  const [index, setIndex] = useState(0);
  const childrenCount = React.Children.count(children);

  const handleClickPrev: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIndex(prev => {
      if (prev === 0) {
        return prev;
      }
      return prev - 1;
    });
  };

  const handleClickNext: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIndex(prev => {
      if (prev === childrenCount - 1) {
        return prev;
      }
      return prev + 1;
    });
  };

  return (
    <S.Container>
      <S.LeftButton onClick={handleClickPrev} />
      <S.ContentBackground>
        <S.ContentList index={index} totalCount={childrenCount}>
          {React.Children.toArray(children).map(item => (
            <li>{item}</li>
          ))}
        </S.ContentList>
      </S.ContentBackground>
      <S.RightButton onClick={handleClickNext} />
    </S.Container>
  );
};

export default Carousel;
