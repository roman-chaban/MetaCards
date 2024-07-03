interface SliderSettings {
  navigation?: boolean
  pagination?: boolean | { clickable: boolean }
  autoplay?: boolean | { delay: number }
  scrollbar?: boolean
  loop?: boolean
  slidesPerView?: number
  spaceBetween?: number
  [key: string]: any
  width?: string | number
}

export const sliderSettings: SliderSettings = {
  navigation: true,
  pagination: { clickable: true },
  autoplay: { delay: 3000 },
  loop: false,
  slidesPerView: 3,
  spaceBetween: 10
}
