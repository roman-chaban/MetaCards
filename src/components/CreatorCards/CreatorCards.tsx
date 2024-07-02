
import type { FC } from "react";
import styles from './CreatorCards.module.scss';
import creatorCards from '@/api/creatorCards.json';
import { CreatorCard } from "../CreatorCard/CreatorCard";

export const CreatorCards: FC = () => {
   return <div className={styles.creatorCards}>
      <h2 className={styles.creator__title}>From Creator</h2>
      <div className={styles.cards__container}>
         {creatorCards.map((card) => (
            <CreatorCard card={card} key={card.id} />
         ))}
      </div>
   </div>
}