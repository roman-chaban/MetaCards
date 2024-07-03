'use client'

import { useEffect, useRef, type FC } from 'react'
import { Button } from '../UI/Button/Button'
import { FormNextLink, FormPreviousLink } from 'grommet-icons'
import styles from '@/components/Hero/Hero.module.scss'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { setSwiperRef, slideNext, slidePrev } from '@/store/slices/swiperSlice'
import Swiper from 'swiper'

export const SliderButtons: FC = ({}) => {
  const swiperRef = useRef<Swiper | null>(null)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (swiperRef.current) {
      dispatch(setSwiperRef(swiperRef.current))
    }
  }, [swiperRef, dispatch])

  const handleNext = () => {
    dispatch(slideNext())
  }

  const handlePrev = () => {
    dispatch(slidePrev())
  }
  return (
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
  )
}
