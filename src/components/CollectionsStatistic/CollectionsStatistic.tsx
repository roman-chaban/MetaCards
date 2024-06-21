import type { FC } from 'react';
import { CollectionsTable } from '../CollectionsTable/CollectionsTable';
import styles from '@/components/Collections/Collections.module.scss';

export const CollectionsStatistic: FC = () => {
  return (
    <div className={styles.collections__statistic}>
      <CollectionsTable />
    </div>
  );
};
