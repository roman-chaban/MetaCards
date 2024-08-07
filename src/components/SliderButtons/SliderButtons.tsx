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
  backgroundInline?: string;
}

export const SliderButtons: FC<SliderButtonsProps> = ({
  swiperRef,
  backgroundInline
}) => {
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
      <div
        className={styles.sliderButtons}
        style={{ background: backgroundInline }}
      >
        <Button
          title="Prev Slide"
          type="button"
          className={styles.prev__button}
          onClick={handlePrev}
        >
          <FormPreviousLink
            className={styles.arrowLink__icon}
            color={currentIndex > 0 ? '#23262f' : 'gray'}
          />
        </Button>
        <span className={styles.slider__decoration}></span>
        <Button
          title="Next Slide"
          type="button"
          className={styles.next__button}
          onClick={handleNext}
        >
          <FormNextLink
            className={styles.arrowLink__icon}
            color={
              currentIndex === totalSlides - 1 || currentIndex > 0
                ? 'gray'
                : '#23262f'
            }
          />
        </Button>
      </div>
    </div>
  );
};
