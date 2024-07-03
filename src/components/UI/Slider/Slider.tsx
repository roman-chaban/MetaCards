import type { FC, ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Navigation,
  Pagination,
  Autoplay,
  A11y,
  Scrollbar
} from 'swiper/modules'
import 'swiper/css'
import './Slider.scss'

interface SliderProps {
  navigation?: boolean
  pagination?: boolean | { clickable: boolean }
  autoplay?: boolean | { delay: number }
  scrollbar?: boolean
  loop?: boolean
  slidesPerView?: number
  spaceBetween?: number
  [key: string]: any
  children: ReactNode[]
  width?: string | number
}

export const Slider: FC<SliderProps> = ({
  settings = {},
  children,
  width = '100%'
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, A11y, Scrollbar]}
      navigation={settings.navigation}
      pagination={settings.pagination}
      autoplay={settings.autoplay}
      scrollbar={settings.scrollbar}
      loop={settings.loop}
      slidesPerView={settings.slidesPerView}
      spaceBetween={settings.spaceBetween}
      {...settings}
      style={{ maxWidth: '1440px' }}
    >
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  )
}
