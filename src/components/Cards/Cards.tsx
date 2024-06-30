import type {FC} from 'react';
import cards from '../../api/nft-products.json';
import { Card } from '../Card/Card';
import styles from '@/components/Card/Card.module.scss';


export const Cards: FC = () => {
   const nftCardClasses = {
      container: styles.card,
      card: styles.card__container,
      cardImage: styles.card__cardImage,
      cardTitle: styles.card__cardTitle,
      cardSubtitle: styles.card__cardSubtitle,
      cardRating: styles.card__cardRating,
      cardButton: styles.card__cardButton,
    };
   return <div className={styles.cards__container}>
      {cards.map((card) => (
         <Card classNames={nftCardClasses} card={card} key={card.id} />
      ))}
   </div>
}