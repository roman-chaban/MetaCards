import { useRef, type FC, type ReactNode } from 'react'
import Swiper from 'swiper'
import { SwiperSlide, Swiper as CustomSwiper } from 'swiper/react'
import {
  Navigation,
  Pagination,
  Autoplay,
  A11y,
  Scrollbar
} from 'swiper/modules'
import './Slider.scss'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { setSwiperRef } from '@/store/slices/swiperSlice'

interface SliderProps {
  navigation?: boolean
  pagination?: boolean | { clickable: boolean }
  autoplay?: boolean | { delay: number }
  scrollbar?: boolean
  loop?: boolean
  slidesPerView?: number
  spaceBetween?: number
  [key: string]: any
  speed: number
  children: ReactNode[]
  width?: string | number
}

export const Slider: FC<SliderProps> = ({
  settings = {},
  children,
  width = '100%'
}) => {
  const swiperRef = useRef<Swiper | null>(null)
  const dispatch = useAppDispatch()

  return (
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
        {...settings}
        onSwiper={(swiper: any) => {
          swiperRef.current = swiper
          dispatch(setSwiperRef(swiper))
        }}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index} style={{ marginRight: 0 }}>
            {child}
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </div>
  )
}
