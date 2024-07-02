import type { FC } from 'react'
import styles from './Weekly.module.scss'
import { SliderButtons } from '../SliderButtons/SliderButtons'
import { Recent } from '../Recent/Recent'
import { NFTCards } from '../NFTCards/NFTCards'

export const Weekly: FC = () => {
  const nftCardClasses = {
    container: styles.weekly__nftCardsContainer,
    card: styles.weekly__card,
    cardImage: styles.weekly__cardImage,
    cardTitle: styles.weekly__cardTitle,
    cardSubtitle: styles.weekly__cardSubtitle,
    cardRating: styles.weekly__cardRating,
    cardButton: styles.weekly__cardButton
  }
  const recentStyles = {
    container: styles.recent__container
  }
  return (
    <section className={styles.weekly}>
      <div className={styles.weekly__container}>
        <div className={styles.weekly__titleBlock}>
          <h2 className={styles.weekly__title}>Weekly - Top NFT</h2>
        </div>
        <NFTCards classNames={nftCardClasses} />
        <div className={styles.slider__buttons}>
          <SliderButtons />
        </div>
      </div>
      <Recent classNames={recentStyles} />
    </section>
  )
}
