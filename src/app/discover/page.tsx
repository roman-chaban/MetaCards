import type { Metadata } from 'next';
import styles from './Discover.module.scss';
import { Cards } from '@/components/Cards/Cards';





export const metadata: Metadata = {
  title: 'DivSea NFT | Discover',
};

export default function Discover() {


  return (
    <section className={styles.discover}>
      <div className={styles.discover__container}>
        <Cards />
      </div>
    </section>
  );
}
