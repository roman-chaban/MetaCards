import type { FC } from 'react'
import styles from './BestSellers.module.scss'
import Image from 'next/image'
import {
  BestSellersListItem,
  bestSellersList
} from '@/constants/bestSellersList'
import { Button } from '../UI/Button/Button'
import { Notification } from '../Notification/Notification'

export const BestSellers: FC = () => {
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
              {item.buttonLabel === 'Unfollow' ? (
                <Button
                  style={{ background: '#e6e8ec' }}
                  className={styles.bestSellers__followButton}
                  type="button"
                >
                  {item.buttonLabel}
                </Button>
              ) : (
                <Button
                  className={styles.bestSellers__followButton}
                  type="button"
                >
                  {item.buttonLabel}
                </Button>
              )}
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
  )
}
