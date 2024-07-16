import type { FC } from 'react';
import styles from './CreatorsCards.module.scss';
import { TypeCreatorsCards } from '@/interfaces/cards';
import Image from 'next/image';

interface CreatorsCardsProps {
  cards: TypeCreatorsCards;
}

export const CreatorsCards: FC<CreatorsCardsProps> = ({ cards }) => {
  return (
    <div className={styles.cards}>
      {cards.map((card, index) => (
        <div className={styles.card} key={index + 1}>
          <div className={styles.card__container}>
            <div className={styles.cardImage__block}>
              <Image
                priority
                src={card.backgroundImage}
                alt="BackgroundImage"
                width={370}
                height={300}
                className={styles.backgroundImage}
              />
              <Image
                className={styles.mainImage}
                src={card.mainImage}
                alt="Card Image"
                width={100}
                height={100}
                priority
              />
            </div>
          </div>
          <div className={styles.cardInfo}>
            <h4 className={styles.cardInfo__title}>{card.title}</h4>
            <Image
              src={card.iconPrimary}
              alt="Check Icon"
              width={24}
              height={24}
              className={styles.checkedIcon}
            />
          </div>
          <div className={styles.infoList}>
            {card.itemsList.map(item => (
              <div className={styles.titles} key={item.title}>
                <h5 className={styles.infoList__title}>
                  {item.title}
                  {parseFloat(item.title) > 16 ? (
                    <Image
                      src="/images/creators/ethereumIcon.svg"
                      alt="Ethereum Icon"
                      width={14}
                      height={19}
                      className={styles.ethereumIcon}
                    />
                  ) : (
                    ''
                  )}
                </h5>
                <span className={styles.infoList__subTitle}>
                  {item.subTitle}
                </span>
              </div>
            ))}
          </div>
          <div className={styles.gallery}>
            <Image
              src={card.galleryImages[0].primary}
              alt="Gallery Icon"
              width={100}
              height={100}
              className={styles.galleryImage}
            />
            <Image
              src={card.galleryImages[0].secondary}
              alt="Gallery Icon"
              width={100}
              height={100}
              className={styles.galleryImage}
            />
            <Image
              src={card.galleryImages[0].ternary}
              alt="Gallery Icon"
              width={100}
              height={100}
              className={styles.galleryImage}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
