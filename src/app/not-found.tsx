import type { Metadata } from 'next';
import styles from '../assets/notFound/NotFound.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/constants/navLinks';
import { Links } from '@/enums/links';

export const metadata: Metadata = {
  title: 'MetaCards | Not-Found 404'
};

export default function NotFoundPage() {
  return (
    <section className={styles.notFound}>
      <div className={styles.notFound__container}>
        <h1 className={styles.notFound__title}>Page is not defined</h1>
        <Image
          src="/images/icons/Wave.svg"
          alt="MetaCards Logo"
          width={50}
          height={50}
        />
      </div>
      <Link className={styles.notFound__link} href={Links.HOME}>Go to Home</Link>
    </section>
  );
}
