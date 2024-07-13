import { useChangePageTitle } from '@/hooks/useChangePageTitle';
import styles from './Creators.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MetaCards | Creators'
};

export default function Creators() {
  return <section className={styles.creators}></section>;
}
