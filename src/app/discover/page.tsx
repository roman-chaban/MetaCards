import type { Metadata } from 'next';
import styles from './Discover.module.scss';

export const metadata: Metadata = {
  title: 'DivSea NFT | Discover',
};

export default function Discover() {
  return (
    <div className={styles.discover}>
      <div className={styles.discover__container}>Discover Page</div>
    </div>
  );
}
