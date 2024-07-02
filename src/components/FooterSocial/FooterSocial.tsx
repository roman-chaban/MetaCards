import { Fragment, type FC } from 'react'
import styles from '@/components/Footer/Footer.module.scss'
import Link from 'next/link'
import { footerSocialMedias } from '@/constants/footerSocialMedias'

export const FooterSocial: FC = () => {
  return (
    <ul className={styles.footer__socialMedias}>
      {footerSocialMedias.map((media, index) => (
        <Fragment key={index}>
          <li className={styles.footer__socialMedias_listItem}>
            <Link
              href={media.href}
              className={styles.footer__socialMedias_listLink}
            >
              {media.icon}
              {media.title}
            </Link>
          </li>
        </Fragment>
      ))}
    </ul>
  )
}
