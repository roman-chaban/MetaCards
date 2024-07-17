'use client';

import nftProducts from '@/api/nft-products.json';
import { Product } from '@/interfaces/nft-product';
import Image from 'next/image';
import { FC, useState, useEffect } from 'react';
import styles from '@/components/Weekly/Weekly.module.scss';
import { Button } from '../UI/Button/Button';
import { sliderSettings } from '@/constants/sliderSettings';
import Link from 'next/link';
import Slider from '../UI/Slider/Slider';

interface NFTCardsProps {
  classNames: {
    container: string;
    card: string;
    cardImage: string;
    cardTitle: string;
    cardSubtitle: string;
    cardRating: string;
    cardButton: string;
    cardTime: string;
  };
  settings?: boolean;
}

export const NFTCards: FC<NFTCardsProps> = ({ classNames, settings }) => {
  const [products, setProducts] = useState<Product[]>(nftProducts);

  useEffect(() => {
    setProducts(products);
  }, [products]);

  return (
    <div className={classNames.container}>
      {settings ? (
        <Slider width="100%" settings={sliderSettings}>
          {products.map((product: Product, index) => (
            <div className={`${styles.card} ${classNames.card}`} key={index}>
              <div className={styles.image__block}>
                <Image
                  priority
                  className={`${styles.card__image} ${classNames.cardImage}`}
                  src={product.image}
                  alt={product.title}
                  width={250}
                  height={250}
                />
                <span
                  className={`${styles.image__block_time} ${styles.profile__time} ${classNames.cardTime}`}
                >
                  {product.time}
                </span>
              </div>
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
                      src="/images/productsImages/icon.svg"
                      alt="Ethereum icon"
                      width={20}
                      height={20}
                      className={styles.card__icon}
                    />
                    {product.rating}
                  </span>
                </div>
                <Link href={`/discover/${product.id}`}>
                  <Button
                    type="button"
                    className={`${styles.card__button} ${classNames.cardButton}`}
                  >
                    {product.buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        products.map((product: Product, index) => (
          <div className={`${styles.card} ${classNames.card}`} key={index}>
            <div className={styles.image__block}>
              <Image
                priority
                className={`${styles.card__image} ${classNames.cardImage}`}
                src={product.image}
                alt={product.title}
                width={250}
                height={250}
              />
              <span className={styles.image__block_time}>{product.time}</span>
            </div>
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
                    src="/images/productsImages/icon.svg"
                    alt="Ethereum icon"
                    width={20}
                    height={20}
                    className={styles.card__icon}
                  />
                  {product.rating}
                </span>
              </div>
              <Link href={`/discover/${product.id}`}>
                <Button
                  type="button"
                  className={`${styles.card__button} ${classNames.cardButton}`}
                >
                  {product.buttonLabel}
                </Button>
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
