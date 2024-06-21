import type { FC } from 'react';
import styles from './Recent.module.scss';
import { RecentItems, recentItems } from '@/constants/recentItems';
import { RecentItem } from '../RecentItem/RecentItem';

export const Recent: FC = () => {
  return (
    <div className={styles.recent}>
      <div className={styles.recent__container}>
        <div className={styles.recent__titlesBlock}>
          <h4 className={styles.recent__title}>Recent Viewed</h4>
        </div>
        <div className={styles.recent__items}>
          {recentItems.map((item) => (
            <RecentItem key={item.percent} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
