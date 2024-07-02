import type { FC } from 'react'
import styles from '@/components/Explore/Explore.module.scss'
import { exploreNavItems } from '@/constants/exploreNav'
import { Button } from '../UI/Button/Button'
import Link from 'next/link'
import Image from 'next/image'

export const ExploreNav: FC = () => {
  return (
    <nav className={styles.explore__nav}>
      <ul className={styles.explore__nav_menu}>
        {exploreNavItems.map((item, index) => (
          <Button
            type="button"
            key={item.title}
            className={`${styles.nav__button} ${index === 0 ? styles.additionalButtonNone : ''} `}
          >
            {item.icon === '' ? (
              ''
            ) : (
              <Image
                className={styles.explore__button_icon}
                src={item.icon}
                alt={item.title}
                width={25}
                height={25}
              />
            )}
            <Link className={styles.nav__link} href={item.href}>
              {item.title}
            </Link>
          </Button>
        ))}
      </ul>
    </nav>
  )
}
