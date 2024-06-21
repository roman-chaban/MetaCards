'use client';

import nftProducts from '@/api/nft-products.json';
import { Product } from '@/interfaces/nft-product';
import Image from 'next/image';
import { type FC, useState, useEffect } from 'react';
import styles from '@/components/Weekly/Weekly.module.scss';
import { Button } from '../UI/Button/Button';

export const WeeklyCards: FC = () => {
  const [products, setProducts] = useState<Product[]>(nftProducts);

  useEffect(() => {
    setProducts(products);
  }, [products]);

  return (
    <div className={styles.weekly__cards}>
      {products.map((product: Product, index) => (
        <div className={styles.card} key={index}>
          <Image
            priority
            className={styles.card__image}
            src={product.image}
            alt={product.title}
            width={250}
            height={250}
          />
          <div className={styles.card__titles}>
            <h3 className={styles.card__title}>{product.title}</h3>
          </div>
          <div className={styles.card__information}>
            <div className={styles.card__information_titles}>
              <p className={styles.card__subTitle}>{product.subTitle}</p>
              <span className={styles.card__rating}>{product.rating}</span>
            </div>
            <Button type='button' className={styles.card__button}>
              {product.buttonLabel}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
