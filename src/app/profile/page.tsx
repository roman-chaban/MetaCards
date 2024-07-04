import type { Metadata } from 'next'
import styles from './Profile.module.scss'
import Image from 'next/image'
import { ProfileInformation } from '@/components/ProfileInformation/ProfileInformation'
import { ProfileActiveBar } from '@/components/ProfileActiveBar/ProfileActiveBar'

export const metadata: Metadata = {
  title: 'DivSea | Profile'
}

export default function Profile() {
  return (
    <section className={styles.profile}>
      <div className={styles.profile__container}>
        <div className={styles.profile__banner}></div>
        <div className={styles.profile__statsInfo}>
          <ProfileInformation />
          <ProfileActiveBar />
        </div>
      </div>
    </section>
  )
}
