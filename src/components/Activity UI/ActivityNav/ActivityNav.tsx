import type { FC } from 'react'
import styles from './ActivityNav.module.scss'
import Image from 'next/image'
import { Button } from '@/components/UI/Button/Button'

export const ActivityNav: FC = () => {
  return (
    <nav className={styles.activityNav}>
      <ul className={styles.activityNav__menu}>
        <li className={styles.menu__listItem}>
          <Button type="button" className={styles.cart__button}>
            <Image
              src="/images/activity/cart.svg"
              alt="Cart Icon"
              width={15}
              height={15}
            />
            Sales
            <Image
              src="/images/activity/check.svg"
              alt="Check Icon"
              width={15}
              height={15}
            />
          </Button>
        </li>
        <li className={styles.menu__listItem}>
          <Button type="button" className={styles.cart__button}>
            <Image
              src="/images/activity/all_chains.svg"
              alt="Cart Icon"
              width={15}
              height={15}
            />
            All Chains
            <Image
              src="/images/activity/check.svg"
              alt="Check Icon"
              width={15}
              height={15}
            />
          </Button>
        </li>
      </ul>
    </nav>
  )
}
