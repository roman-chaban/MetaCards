export interface SliderSettings {
  navigation?: boolean;
  pagination?: boolean | { clickable: boolean };
  autoplay?: boolean | { delay: number };
  scrollbar?: boolean;
  loop?: boolean;
  speed?: number;
  slidesPerView?: number | 'auto';
  spaceBetween?: number;
  [key: string]: any;
}

export const sliderSettings: SliderSettings = {
  navigation: true,
  pagination: { clickable: true },
  autoplay: { delay: 3000 },
  loop: false,
  speed: 900,
  slidesPerView: 'auto',
  spaceBetween: 10
};
