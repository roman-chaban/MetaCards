import type { FC } from 'react';
import styles from './Collections.module.scss';
import { CollectionsStatistic } from '../CollectionsStatistic/CollectionsStatistic';

export const Collections: FC = () => {
  return (
    <section className={styles.collections}>
      <div className={styles.collection__container}>
        <h2 className={styles.collection__title}>Top Collection</h2>
        <CollectionsStatistic />
      </div>
    </section>
  );
};
