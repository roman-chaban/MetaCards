import { Metadata } from 'next';
import styles from './Stats.module.scss';
import { LeaderBoard } from '@/components/LeaderBoard/LeaderBoard';
import { navItemsTitles } from '@/constants/statsNavTitles';
import { StatsTable } from '@/components/StatsTable/StatsTable';

export const metadata: Metadata = {
  title: 'MetaCards | Stats'
};

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.stats__container}>
        <LeaderBoard />
        <StatsTable navItemsLabels={navItemsTitles} />
      </div>
    </section>
  );
}
