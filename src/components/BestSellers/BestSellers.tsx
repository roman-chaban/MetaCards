import type { FC } from 'react';
import styles from './BestSellers.module.scss';
import Image from 'next/image';
import {
  BestSellersListItem,
  bestSellersList,
} from '@/constants/bestSellersList';

export const BestSellers: FC = () => {
  return (
    <div className={styles.bestSellers}>
      <div className={styles.bestSellers__block}>
        <h3 className={styles.bestSellers__title}>Best Sellers</h3>
        <div className={styles.bestSellers__list}>
          {bestSellersList.map((item: BestSellersListItem, index) => (
            <div
              key={index}
              data-number={index}
              className={styles.bestSellers__listBlock}
            >
              <Image
                src={item.icon}
                alt={item.icon}
                width={48}
                height={48}
                className={styles.icon}
              />
            </div>
          ))}
        </div>
      </div>
      <Image
        src='/images/unleash/dots.svg'
        alt='Dots Decoration Icon'
        width={300}
        height={300}
        className={styles.dots__decoration}
      />
    </div>
  );
};
