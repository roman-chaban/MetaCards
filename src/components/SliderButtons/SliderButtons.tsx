'use client';

import { FC, useEffect, useState } from 'react';
import { Button } from '../UI/Button/Button';
import { FormNextLink, FormPreviousLink } from 'grommet-icons';
import styles from '@/components/Hero/Hero.module.scss';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setSwiperIndex } from '@/store/slices/swiperSlice';
import Swiper from 'swiper';

interface SliderButtonsProps {
  swiperRef: React.MutableRefObject<Swiper | null>;
}

export const SliderButtons: FC<SliderButtonsProps> = ({ swiperRef }) => {
  const dispatch = useAppDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    const swiperInstance = swiperRef.current;
    if (swiperInstance) {
      setTotalSlides(swiperInstance.slides.length);
      const handleSlideChange = () => {
        const newIndex = swiperInstance.activeIndex;
        setCurrentIndex(newIndex);
        dispatch(setSwiperIndex(newIndex));
      };
      swiperInstance.on('slideChange', handleSlideChange);

      return () => {
        swiperInstance.off('slideChange', handleSlideChange);
      };
    }
  }, [swiperRef, dispatch]);

  const handleNext = () => swiperRef.current?.slideNext();
  const handlePrev = () => swiperRef.current?.slidePrev();

  return (
    <div className={styles.sliderButtons__container}>
      <div className={styles.sliderButtons}>
        <Button
          title="Prev Slide"
          type="button"
          className={styles.prev__button}
          onClick={handlePrev}
        >
          <FormPreviousLink color={currentIndex > 0 ? 'black' : 'gray'} />
        </Button>
        <span className={styles.slider__decoration}></span>
        <Button
          title="Next Slide"
          type="button"
          className={styles.next__button}
          onClick={handleNext}
        >
          <FormNextLink
            color={
              currentIndex === totalSlides - 1 || currentIndex > 0
                ? 'gray'
                : 'black'
            }
          />
        </Button>
      </div>
    </div>
  );
};
