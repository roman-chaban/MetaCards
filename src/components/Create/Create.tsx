import type { FC } from 'react'
import styles from './Create.module.scss'
import { Button } from '../UI/Button/Button'
import Image from 'next/image'

export const Create: FC = () => {
  return (
    <section className={styles.create}>
      <div className={styles.create__container}>
        <div className={styles.createInfo__block}>
          <div className={styles.createInfo__block_titles}>
            <h4 className={styles.createInfo__title}>Create and Sell NFTs</h4>
            <p className={styles.createInfo__subTitle}>
              World’s Largest NFT Place
            </p>
          </div>
          <div className={styles.createInfo__buttons}>
            <Button type="button" className={styles.createInfo__buttonExplore}>
              Explore More
            </Button>
            <Button type="button" className={styles.createInfo__buttonSell}>
              Sell Artwork
            </Button>
          </div>
        </div>
        <div className={styles.bannerContainer}>
          <div className={styles.create__banner} />
          <Image
            src="/images/exploreIcons/banner.svg"
            alt="NFT Banner Image"
            width={390}
            height={249}
            className={styles.banner}
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
      </div>
    </section>
  )
}
