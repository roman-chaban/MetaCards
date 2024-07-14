'use client';

import { FC, useEffect } from 'react';
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

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on('slideChange', () => {
        dispatch(setSwiperIndex(swiperRef.current!.activeIndex));
      });
    }
  }, [swiperRef, dispatch]);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className={styles.sliderButtons__container}>
      <div className={styles.sliderButtons}>
        <Button
          title="Prev Slide"
          type="button"
          className={styles.prev__button}
          onClick={handlePrev}
        >
          <FormPreviousLink />
        </Button>
        <span className={styles.slider__decoration}></span>
        <Button
          title="Next Slide"
          type="button"
          className={styles.next__button}
          onClick={handleNext}
        >
          <FormNextLink />
        </Button>
      </div>
    </div>
  );
};
