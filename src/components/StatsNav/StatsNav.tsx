import type { FC } from 'react';
import styles from './StatsNav.module.scss';
import { statsIcon } from './statsIcon';

interface StatsNavProps {
  title: string;
  navItemsLabels: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    quinary: string;
  };
}

export const StatsNav: FC<StatsNavProps> = ({ navItemsLabels, title }) => {
  return (
    <nav className={styles.nav}>
      <h3 className={styles.nav__title}>
        {title} {statsIcon}
      </h3>
      <ul className={styles.nav__menu}>
        <li className={styles.nav__menu_listItem}>
          {navItemsLabels.primary} {statsIcon}
        </li>
        <li className={styles.nav__menu_listItem}>
          {navItemsLabels.secondary}
        </li>
        <li className={styles.nav__menu_listItem}>
          {navItemsLabels.tertiary} {statsIcon}
        </li>
        <li className={styles.nav__menu_listItem} id={styles.none}>
          {navItemsLabels.quaternary} {statsIcon}
        </li>
        <li className={styles.nav__menu_listItem} id={styles.none}>
          {navItemsLabels.quinary}
        </li>
      </ul>
    </nav>
  );
};
