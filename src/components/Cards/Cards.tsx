import type { FC } from 'react';
import styles from '@/components/Card/Card.module.scss';
import { Card } from '../Card/Card';

interface CardItem {
  id: number;
  title: string;
  subTitle: string;
  time: string;
  image: string;
  buttonLabel: string;
  rating: string;
}

type CardsProps = {
  items: CardItem[];
};

export const Cards: FC<CardsProps> = ({ items }) => {
  const nftCardClasses = {
    container: styles.card,
    card: styles.card__container,
    cardImage: styles.card__cardImage,
    cardTitle: styles.card__cardTitle,
    cardSubtitle: styles.card__cardSubtitle,
    cardRating: styles.card__cardRating,
    cardButton: styles.card__cardButton
  };

  return (
    <div className={styles.cards__container}>
      {items.map(card => (
        <Card classNames={nftCardClasses} card={card} key={card.id} />
      ))}
    </div>
  );
};
