'use client';

import Image from 'next/image';
import { Swiper as ChooseNFTSwiper, SwiperSlide } from 'swiper/react';
import Swiper from 'swiper';
import 'swiper/css';
import { FC, useRef } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setSwiperIndex } from '@/store/slices/swiperSlice';
import { SliderButtons } from '../SliderButtons/SliderButtons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './ChooseSwiper.scss';

export const ChooseSwiper: FC = () => {
  const swiperRef = useRef<Swiper | null>(null);
  const dispatch = useAppDispatch();
  return (
    <div className="container">
      <div className="swiper__container">
        <ChooseNFTSwiper
          className="swiper"
          onSwiper={(swiper: Swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={() => {
            if (swiperRef.current) {
              dispatch(setSwiperIndex(swiperRef.current.activeIndex));
            }
          }}
          spaceBetween={30}
        >
          <SwiperSlide className="swiper-slide">
            <Image
              src="/images/choose/nftImage.svg"
              alt="NFT Image"
              width={400}
              height={400}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image
              src="/images/choose/nftImage.svg"
              alt="NFT Image"
              width={400}
              height={400}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image
              src="/images/choose/nftImage.svg"
              alt="NFT Image"
              width={400}
              height={400}
            />
          </SwiperSlide>
        </ChooseNFTSwiper>
        <div className="swiperInfo">
          <h3 className="swiperInfo__title">Start Your Own NFT Gallery</h3>
          <p className="swiperInfo__subTitle">
            CloseSea Is A Great Platform For Discover Largest NFTs And Other
            Stuff !!
          </p>
          <SliderButtons backgroundInline="#fff" swiperRef={swiperRef} />
        </div>
      </div>
    </div>
  );
};
