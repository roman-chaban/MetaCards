import type { FC } from 'react';
import styles from './Recent.module.scss';
import { recentItems } from '@/constants/recentItems';
import { RecentItem } from '../RecentItem/RecentItem';

interface RecentProps {
  classNames: {
    container: string;
  };
}

export const Recent: FC<RecentProps> = ({ classNames }) => {
  return (
    <div className={styles.recent}>
      <div className={classNames.container}>
        <div className={styles.recent__titlesBlock}>
          <h4 className={styles.recent__title}>Recently Viewed</h4>
        </div>
        <div className={styles.recent__items}>
          {recentItems.map((item, index) => (
            <RecentItem key={item.percent} item={item} index={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};
