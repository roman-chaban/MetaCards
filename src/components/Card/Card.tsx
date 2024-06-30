import { Product } from "@/interfaces/nft-product";
import type { FC } from "react";
import styles from './Card.module.scss';
import { Button } from "../UI/Button/Button";
import Image from "next/image";


interface CardProps {
   card: Product;
   classNames: {
      container: string;
      card: string;
      cardImage: string;
      cardTitle: string;
      cardSubtitle: string;
      cardRating: string;
      cardButton: string;
    };
}

export const Card: FC<CardProps> = ({card, classNames}) => {
   return  <div className={`${styles.card} ${classNames.card}`} key={card.id}>
   <div className={styles.image__block}>
   <Image
     priority
     className={`${styles.card__image} ${classNames.cardImage}`}
     src={card.image}
     alt={card.title}
     width={250}
     height={250}
   />
   <span className={styles.image__block_time} >{card.time}</span>
   </div>
   <div className={styles.card__titles}>
     <h3 className={`${styles.card__title} ${classNames.cardTitle}`}>
       {card.title}
     </h3>
   </div>
   <div className={styles.card__information}>
     <div className={styles.card__information_titles}>
       <p
         className={`${styles.card__subTitle} ${classNames.cardSubtitle}`}
       >
         {card.subTitle}
       </p>
       <span
         className={`${styles.card__rating} ${classNames.cardRating}`}
       >
         <Image
           src='/images/productsImages/icon.svg'
           alt='Ethereum icon'
           width={20}
           height={20}
           className={styles.card__icon}
         />
         {card.rating}
       </span>
     </div>
     <Button
       type='button'
       className={`${styles.card__button} ${classNames.cardButton}`}
     >
       {card.buttonLabel}
     </Button>
   </div>
 </div>
}