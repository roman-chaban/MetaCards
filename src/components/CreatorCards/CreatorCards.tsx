import type { FC } from 'react';
import styles from './CreatorCards.module.scss';
import creatorCards from '@/api/creatorCards.json';
import { CreatorCard } from '../CreatorCard/CreatorCard';
import SliderWithButtons from '../UI/Slider/Slider';
import { SwiperSlide } from 'swiper/react';

export const CreatorCards: FC = () => {
  return (
    <div className={styles.creatorCards}>
      <h2 className={styles.creator__title}>From Creator</h2>
      <div className={styles.cards__container}>
        <SliderWithButtons>
          {creatorCards.map(card => (
            <SwiperSlide key={card.id}>
              <CreatorCard card={card} />
            </SwiperSlide>
          ))}
        </SliderWithButtons>
      </div>
    </div>
  );
};
