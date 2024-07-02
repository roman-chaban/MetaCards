'use client'

import styles from './ButtonUp.module.scss'
import { FC } from 'react'
import { useScrollObserver } from '@/hooks/useScrollObserver'
import { FormNextLink } from 'grommet-icons'

export const ButtonUp: FC = () => {
  const { isScrolledNav } = useScrollObserver()

  const handleUppPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      className={`${styles.upButton} ${isScrolledNav ? styles.show : ''}`}
      onClick={handleUppPage}
      style={{ display: isScrolledNav ? 'block' : 'none' }}
    >
      <FormNextLink
        color="white"
        className={styles.arrow__top}
        style={{ transform: 'rotate(-90deg)', width: 20, height: 20 }}
      />
    </button>
  )
}
