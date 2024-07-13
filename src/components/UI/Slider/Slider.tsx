import { useRef, FC, ReactNode } from 'react';
import Swiper from 'swiper';
import { SwiperSlide, Swiper as CustomSwiper } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay,
  A11y,
  Scrollbar
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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
    slidesPerView?: number | 'auto';
    spaceBetween?: number;
    speed?: number;
  };
  children: ReactNode[];
  width?: string | number;
}

const SliderWithButtons: FC<SliderProps> = ({
  settings = {},
  children,
  width = '100%'
}) => {
  const swiperRef = useRef<Swiper | null>(null);
  const dispatch = useAppDispatch();

  return (
    <div className="slider-container" style={{ width }}>
      <CustomSwiper
        modules={[Navigation, Pagination, Autoplay, A11y, Scrollbar]}
        navigation={settings.navigation}
        pagination={settings.pagination}
        autoplay={settings.autoplay}
        scrollbar={settings.scrollbar}
        loop={settings.loop}
        slidesPerView={settings.slidesPerView || 'auto'}
        spaceBetween={settings.spaceBetween || 10}
        speed={settings.speed || 300}
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
  );
};

export default SliderWithButtons;
