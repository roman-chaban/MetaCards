import type { FC } from 'react';
import styles from '@/components/Footer/Footer.module.scss';
import Link from 'next/link';

interface FooterNavProps {
  navItem: {
    title: string;
    href: string;
  };
}

export const FooterNav: FC<FooterNavProps> = ({ navItem }) => {
  return (
    <li className={styles.nav__menu_listItem}>
      <Link  href={navItem.title} className={styles.nav__menu_listLink} >
        {navItem.title}
      </Link>
    </li>
  );
};
