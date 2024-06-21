import type { FC } from 'react';
import styles from './Weekly.module.scss';
import { WeeklyCards } from '../WeeklyCards/WeeklyCards';

export const Weekly: FC = () => {
  return (
    <section className={styles.weekly}>
      <div className={styles.weekly__container}>
        <div className={styles.weekly__titleBlock}>
          <h2 className={styles.weekly__title}>Weekly - Top NFT</h2>
        </div>
        <WeeklyCards />
      </div>
    </section>
  );
};
