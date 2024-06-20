import styles from '@/components/Header/Header.module.scss';
import Link from 'next/link';
import type { FC } from 'react';

interface NavItemProps {
  navLink: { label: string; href: string };
}

export const NavItem: FC<NavItemProps> = ({ navLink }) => {
  return (
    <li className={styles.menu__listItem}>
      <Link className={styles.menu__listLink} href={navLink.href}>
        {navLink.label}
      </Link>
    </li>
  );
};
