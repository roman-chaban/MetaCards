'use client'

import { useState, type FC } from 'react'
import styles from './ProfileActiveBar.module.scss'
import { Button } from '../UI/Button/Button'
import Image from 'next/image'

export type MenuTabsItems = 'collection' | 'activity'

export const ProfileActiveBar: FC = () => {
  const [activeTab, setActiveTab] = useState<MenuTabsItems>('collection')

  const renderContent = (): JSX.Element => {
    switch (activeTab) {
      case 'collection':
        return <div>Collection Content</div>
      case 'activity':
        return <div>Activity Content</div>
      default:
        return <div>Collection Content</div>
    }
  }

  return (
    <nav className={styles.profile__nav} aria-label="Profile Navigation">
      <ul className={styles.profile__nav_menu}>
        <li
          className={`${styles.menu__listItem} ${
            activeTab === 'collection' ? styles.inactive : styles.active
          }`}
        >
          <Button
            type="button"
            className={styles.button}
            onClick={() => setActiveTab('collection')}
          >
            Collection
            <Image
              src="/images/profile/collection.svg"
              alt="Collection"
              width={20}
              height={20}
            />
          </Button>
        </li>
        <li
          className={`${styles.menu__listItem} ${
            activeTab === 'activity' ? styles.inactive : styles.active
          }`}
        >
          <Button
            className={styles.button}
            type="button"
            onClick={() => setActiveTab('activity')}
          >
            Activity
            <Image
              src="/images/profile/activity.svg"
              alt="Activity"
              width={20}
              height={20}
            />
          </Button>
        </li>
      </ul>
      <div className={styles.tabs__content}>{renderContent()}</div>
    </nav>
  )
}
