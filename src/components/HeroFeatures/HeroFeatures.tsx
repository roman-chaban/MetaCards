import { FeatureItem, featuresItems } from '@/constants/heroFeatures';
import { type FC } from 'react';
import styles from '@/components/Hero/Hero.module.scss';

export const HeroFeatures: FC = () => {
  return (
    <div className={styles.features}>
      {featuresItems.map((item: FeatureItem) => (
        <div className={styles.features__titles} key={item.views}>
          <h3 className={styles.views__title}>{item.views}</h3>
          <span className={styles.subTitle}>{item.subTitle}</span>
        </div>
      ))}
    </div>
  );
};
