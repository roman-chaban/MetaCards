import type { FC } from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import { footerNavItems } from '@/constants/footerNav';
import { FooterNav } from '../FooterNav/FooterNav';
import { FooterSocial } from '../FooterSocial/FooterSocial';
import Link from 'next/link';
import { Instagram, Github, Linkedin } from 'grommet-icons';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__top}>
          <div className={styles.footer__top__logo}>
            <Image
              src='/images/footer/footerLogo.svg'
              alt='NFT Icon'
              width={65}
              height={65}
              priority
              className={styles.footer__logo}
            />
            <h2 className={styles.footer__top__title}>DiveSea</h2>
          </div>
          <div className={styles.footer__top_social}>
            <Link href='/'><Instagram color='white'/> </Link>
            <Link href='/'><Github color='white' /></Link>
            <Link href='/'><Linkedin color='white' /></Link>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.nav__menu}>
              {footerNavItems.map((item) => (
                <FooterNav key={item.href} navItem={item} />
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.footer__bottom}>
          <h3 className={styles.footer__bottom_copyright}>
            &copy; NFT-project 2024 All Rights Reserved.
          </h3>
          <FooterSocial />
        </div>
      </div>
    </footer>
  );
};
