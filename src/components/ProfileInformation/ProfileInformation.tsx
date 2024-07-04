import { profile } from '@/constants/profileInfo'
import type { FC } from 'react'
import styles from './ProfileInformation.module.scss'
import { Button } from '../UI/Button/Button'
import { Instagram, Linkedin, Facebook, Twitter } from 'grommet-icons'
import Link from 'next/link'
import Image from 'next/image'

export const ProfileInformation: FC = ({}) => {
  const socialMedias = [
    {
      component: (
        <Instagram color="black" className={styles.socialLink__icon} />
      ),
      link: 'https://instagram.com'
    },
    {
      component: <Linkedin color="black" className={styles.socialLink__icon} />,
      link: 'https://linkedin.com'
    },
    {
      component: <Facebook color="black" className={styles.socialLink__icon} />,
      link: 'https://facebook.com'
    },
    {
      component: <Twitter color="black" className={styles.socialLink__icon} />,
      link: 'https://twitter.com'
    }
  ]
  return (
    <div className={styles.profileInformation}>
      {profile.map((prof, indx) => (
        <div key={indx + 1} className={styles.profile__information}>
          <div className={styles.profile__information_titles}>
            <div className={styles.profile__imageBlock}>
              <Image
                src={prof.mainImage}
                alt="Profile Image"
                width={165}
                height={165}
              />
              <Image
                className={styles.check__icon}
                src={prof.checkImage}
                alt="Check Icon"
                width={29}
                height={29}
              />
            </div>
            <div className={styles.titles__buttonBlock}>
              <div className={styles.titles}>
                <h2 className={styles.profileName}>{prof.profileName}</h2>
                <p className={styles.profileTag}>@Harryknft</p>
              </div>
              <Button type="button" className={styles.profileFollow__button}>
                {prof.followLabel}
              </Button>
            </div>
          </div>
          <div className={styles.profile__stats}>
            <div className={styles.firstBlock}>
              <h4 className={styles.profile__stats_title}>
                {prof.stats.firstBlock.title}
              </h4>
              <span className={styles.profile__stats_subTitle}>
                {prof.stats.firstBlock.subTitle}
              </span>
            </div>
            <div className={styles.secondBlock}>
              <h4 className={styles.profile__stats_title}>
                {prof.stats.secondBlock.title}
              </h4>
              <span className={styles.profile__stats_subTitle}>
                {prof.stats.secondBlock.subTitle}
              </span>
            </div>
            <div className={styles.thirdBlock}>
              <h4 className={styles.profile__stats_title}>
                {prof.stats.thirdBlock.title}
              </h4>
              <span className={styles.profile__stats_subTitle}>
                {prof.stats.thirdBlock.subTitle}
              </span>
            </div>
          </div>
          <div className={styles.bio__block}>
            <h4 className={styles.bio__block_title}>{prof.bio.title}</h4>
            <p className={styles.bio__block_subTitle}>{prof.bio.subTitle}</p>
          </div>
          <div className={styles.social__medias}>
            {socialMedias.map((media, index) => (
              <Link
                className={styles.socialLink__icon}
                key={index}
                href={media.link}
                passHref
              >
                {media.component}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
