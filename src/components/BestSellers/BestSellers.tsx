'use client';

import { useState, type FC } from 'react';
import styles from './BestSellers.module.scss';
import Image from 'next/image';
import {
  BestSellersListItem,
  bestSellersList
} from '@/constants/bestSellersList';
import { Button } from '../UI/Button/Button';
import { Notification } from '../Notification/Notification';

export const BestSellers: FC = () => {
  const [buttonLabels, setButtonsLabels] = useState(
    bestSellersList.map(item => item.buttonLabel)
  );

  const handleButtonClick = (index: number) => {
    setButtonsLabels(prevLabels =>
      prevLabels.map((label, i) =>
        i === index ? (label === 'Follow' ? 'Unfollow' : 'Follow') : label
      )
    );
  };

  return (
    <div className={styles.bestSellers}>
      <div className={styles.bestSellers__block}>
        <div className={styles.bestSellers__titleNotification}>
          <h3 className={styles.bestSellers__title}>Best Sellers</h3>
          <Notification />
        </div>
        <div className={styles.bestSellers__list}>
          {bestSellersList.map((item: BestSellersListItem, index) => (
            <div
              key={index}
              data-number={index}
              className={styles.bestSellers__listBlock}
            >
              <div className={styles.bestSellers__ImageTitles}>
                <Image
                  src={item.icon}
                  alt={item.icon}
                  width={48}
                  height={48}
                  className={styles.icon}
                />
                <div className={styles.bestSellers__titles}>
                  <h4 className={styles.bestSellers__titles_title}>
                    {item.title}
                  </h4>
                  <span className={styles.bestSellers__titles_subTitle}>
                    {item.subTitle}
                  </span>
                </div>
              </div>
              <Button
                style={{
                  background:
                    buttonLabels[index] === 'Unfollow' ? '#e6e8ec' : 'initial'
                }}
                className={styles.bestSellers__followButton}
                onClick={() => handleButtonClick(index)}
                type="button"
              >
                {buttonLabels[index]}
              </Button>
            </div>
          ))}
        </div>
      </div>
      <Image
        src="/images/unleash/dots.svg"
        alt="Dots Decoration Icon"
        width={300}
        height={300}
        className={styles.dots__decoration}
      />
    </div>
  );
};
