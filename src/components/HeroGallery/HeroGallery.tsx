'use client';

import { useRef, type FC } from 'react';
import styles from '@/components/Hero/Hero.module.scss';
import Image from 'next/image';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';
import Swiper from 'swiper';
import 'swiper/css';
import { SliderButtons } from '../SliderButtons/SliderButtons';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setSwiperIndex } from '@/store/slices/swiperSlice';

export const HeroGallery: FC = () => {
  const swiperRef = useRef<Swiper | null>(null);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.heroGallery}>
      <div className={styles.heroNft__banner}>
        <div className={styles.image__container}>
          <ReactSwiper
            onSwiper={(swiper: Swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={() => {
              if (swiperRef.current) {
                dispatch(setSwiperIndex(swiperRef.current.activeIndex));
              }
            }}
          >
            <SwiperSlide>
              <div className={styles.image__container}>
                <Image
                  priority
                  className={styles.nft__image}
                  src="/images/hero/nft-1.svg"
                  alt="NFT Banner Image 2"
                  width={310}
                  height={394}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.image__container}>
                <Image
                  priority
                  className={styles.nft__image}
                  src="/images/hero/nft-1.svg"
                  alt="NFT Banner Image 2"
                  width={310}
                  height={394}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.image__container}>
                <Image
                  priority
                  className={styles.nft__image}
                  src="/images/hero/nft-1.svg"
                  alt="NFT Banner Image 2"
                  width={310}
                  height={394}
                />
              </div>
            </SwiperSlide>
          </ReactSwiper>
        </div>
        <SliderButtons swiperRef={swiperRef} />
      </div>
      <div className={styles.heroNft__subGallery}>
        <div className={styles.subGallery__items}>
          <Image
            priority
            src="/images/hero/arrow.svg"
            alt="Arrow Icon"
            width={130}
            height={135}
            className={styles.arrow__icon}
          />
          <Image
            priority
            className={styles.dots__decoration}
            src="/images/hero/dots-decoration.svg"
            alt="Dots Decoration"
            width={173}
            height={399}
          />
        </div>
        <Image
          priority
          className={styles.secondaryImage}
          src="/images/hero/nft-2.svg"
          alt="NFT Secondary Banner Image"
          width={320}
          height={343}
        />
      </div>
    </div>
  );
};
