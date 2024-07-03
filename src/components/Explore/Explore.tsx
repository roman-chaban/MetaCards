import type { FC } from 'react'
import styles from './Explore.module.scss'
import { ExploreNav } from '../ExploreNav/ExploreNav'
import { Button } from '../UI/Button/Button'
import { FormNextLink } from 'grommet-icons'
import { NFTCards } from '../NFTCards/NFTCards'
import { nftCardClasses } from '@/constants/nfrCardsClasses'

export const Explore: FC = () => {
  return (
    <section className={styles.explore}>
      <div className={styles.explore__container}>
        <h2 className={styles.explore__title}>Explore Marketplace</h2>
        <ExploreNav />
        <NFTCards classNames={nftCardClasses} settings={false} />
        <div className={styles.exploreBlock}>
          <Button type="button" className={styles.exploreBlock__button}>
            Explore All{' '}
          </Button>
          <FormNextLink color="#acadb9" style={{ width: 20, height: 20 }} />
        </div>
      </div>
    </section>
  )
}
