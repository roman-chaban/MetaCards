import type { Metadata } from 'next'
import styles from './Profile.module.scss'
import Image from 'next/image'
import { ProfileInformation } from '@/components/ProfileInformation/ProfileInformation'

export const metadata: Metadata = {
  title: 'DivSea | Profile'
}

export default function Profile() {
  return (
    <section className={styles.profile}>
      <div className={styles.profile__container}>
        <div className={styles.profile__banner}></div>
        <ProfileInformation />
      </div>
    </section>
  )
}
