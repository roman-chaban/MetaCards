import { useRef, FC, ReactNode } from 'react';
import Swiper from 'swiper';
import { SwiperSlide, Swiper as CustomSwiper } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y, Scrollbar } from 'swiper/modules';
import './Slider.scss';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setSwiperIndex } from '@/store/slices/swiperSlice';

interface SliderProps {
  settings?: {
    navigation?: boolean;
    pagination?: boolean | { clickable: boolean };
    autoplay?: boolean | { delay: number };
    scrollbar?: boolean;
    loop?: boolean;
    slidesPerView?: number;
    spaceBetween?: number;
    speed?: number;
  };
  children: ReactNode[];
  width?: string | number;
}

const SliderWithButtons: FC<SliderProps> = ({
  settings = {},
  children,
  width = '100%',
}) => {
  const swiperRef = useRef<Swiper | null>(null);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="slider-container" style={{ width }}>
        <CustomSwiper
          modules={[Navigation, Pagination, Autoplay, A11y, Scrollbar]}
          navigation={settings.navigation}
          pagination={settings.pagination}
          autoplay={settings.autoplay}
          scrollbar={settings.scrollbar}
          loop={settings.loop}
          slidesPerView={settings.slidesPerView}
          spaceBetween={settings.spaceBetween}
          speed={settings.speed}
          onSwiper={(swiper: Swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={() => {
            if (swiperRef.current) {
              dispatch(setSwiperIndex(swiperRef.current.activeIndex));
            }
          }}
          {...settings}
        >
          {children.map((child, index) => (
            <SwiperSlide key={index} style={{ marginRight: 0 }}>
              {child}
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </div>
    </div>
  );
};

export default SliderWithButtons;
