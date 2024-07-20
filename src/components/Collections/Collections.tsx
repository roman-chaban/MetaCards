import type { FC } from 'react';
import styles from './Collections.module.scss';
import { CollectionsStatistic } from '../CollectionsStatistic/CollectionsStatistic';
import { Button } from '../UI/Button/Button';
import { FormNextLink } from 'grommet-icons';
import Link from 'next/link';
import { Links } from '@/enums/links';

export const Collections: FC = () => {
  return (
    <section className={styles.collections}>
      <div className={styles.collection__container}>
        <h2 className={styles.collection__title}>Top Collection</h2>
        <CollectionsStatistic />
        <div className={styles.explore}>
          <Link href={Links.STATS}>
            <Button type="button" className={styles.explore__button}>
              Explore All{' '}
            </Button>
          </Link>
          <FormNextLink color="#acadb9" style={{ width: 20, height: 20 }} />
        </div>
      </div>
    </section>
  );
};
