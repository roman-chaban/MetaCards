'use client';

import nftProducts from '@/api/nft-products.json';
import { Product } from '@/interfaces/nft-product';
import Image from 'next/image';
import { FC, useState, useEffect } from 'react';
import styles from '@/components/Weekly/Weekly.module.scss';
import { Button } from '../UI/Button/Button';

interface NFTCardsProps {
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

export const NFTCards: FC<NFTCardsProps> = ({ classNames }) => {
  const [products, setProducts] = useState<Product[]>(nftProducts);

  useEffect(() => {
    setProducts(products);
  }, [products]);

  return (
    <div className={classNames.container}>
      {products.map((product: Product, index) => (
        <div className={`${styles.card} ${classNames.card}`} key={index}>
          <Image
            priority
            className={`${styles.card__image} ${classNames.cardImage}`}
            src={product.image}
            alt={product.title}
            width={250}
            height={250}
          />
          <div className={styles.card__titles}>
            <h3 className={`${styles.card__title} ${classNames.cardTitle}`}>
              {product.title}
            </h3>
          </div>
          <div className={styles.card__information}>
            <div className={styles.card__information_titles}>
              <p
                className={`${styles.card__subTitle} ${classNames.cardSubtitle}`}
              >
                {product.subTitle}
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
                {product.rating}
              </span>
            </div>
            <Button
              type='button'
              className={`${styles.card__button} ${classNames.cardButton}`}
            >
              {product.buttonLabel}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
