import type { FC } from 'react';
import styles from '@/components/Recent/Recent.module.scss';
import Image from 'next/image';

interface RecentItemProps {
  item: {
    icon: string;
    percent: string;
    rating: string;
    subTitle: string;
    title: string;
    subIcon: string;
  };
}

export const RecentItem: FC<RecentItemProps> = ({ item }) => {
  const percentValue = parseFloat(item.percent.replace('%', ''));
  return (
    <div className={styles.recentItem}>
      <div className={styles.recent__iconBlock}>
        <Image src={item.icon} alt={item.title} width={50} height={50} />
      </div>
      <div className={styles.recent__titlesBlock}>
        <h5 className={styles.title}>{item.title}</h5>
        <span className={styles.subTitle}>{item.subTitle}</span>
      </div>
      <div className={styles.recent__ratingPercentBlock}>
        <span className={styles.percent__ratingFlex}>
          <Image
            src={item.subIcon}
            alt={item.subTitle}
            width={20}
            height={20}
          />
          {item.rating}
        </span>
        <span style={{ color: percentValue < 1 ? '#e23333' : '#10c352' }}>
          {item.percent}
        </span>
      </div>
    </div>
  );
};
