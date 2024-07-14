import type { FC } from 'react';
import styles from './Community.module.scss';
import { Button } from '../UI/Button/Button';
import Image from 'next/image';
import Link from 'next/link';
import { Links } from '@/enums/links';

export const Community: FC = () => {
  return (
    <section className={styles.community}>
      <div className={styles.community__container}>
        <div className={styles.community__firstBlock}>
          <div className={styles.firstBlock__icons}>
            <Image
              src="/images/community/first-icon.svg"
              alt="NFT Icon"
              width={65}
              height={65}
              className={styles.first__icon}
            />
            <Image
              src="/images/community/second-icon.svg"
              alt="NFT Icon"
              width={50}
              height={50}
              className={styles.second__icon}
            />
            <Image
              src="/images/community/third-icon.svg"
              alt="NFT Icon"
              width={50}
              height={50}
              className={styles.third__icon}
            />
            <Image
              src="/images/community/four-icon.svg"
              alt="NFT Icon"
              width={50}
              height={50}
              className={styles.four__icon}
            />
            <Image
              src="/images/community/five-icon.svg"
              alt="NFT Icon"
              width={50}
              height={50}
              className={styles.five__icon}
            />
          </div>
          <div className={styles.community__secondBlock}>
            <div className={styles.secondBlock__icons}>
              <Image
                src="/images/community/six-icon.svg"
                alt="NFT Icon"
                width={50}
                height={50}
                className={styles.six__icon}
              />
              <Image
                src="/images/community/seven-icon.svg"
                alt="NFT Icon"
                width={50}
                height={50}
                className={styles.seven__icon}
              />
              <Image
                src="/images/community/eight-icon.svg"
                alt="NFT Icon"
                width={50}
                height={50}
                className={styles.eight__icon}
              />
              <Image
                src="/images/community/ten-icon.svg"
                alt="NFT Icon"
                width={50}
                height={50}
                className={styles.nine__icon}
              />
            </div>
            <div className={styles.community__infoBlock}>
              <h2 className={styles.community__infoBlock_title}>
                Join The{' '}
                <span className={styles.community__infoBlock_titleMark}>
                  Community
                </span>
              </h2>
              <p className={styles.community__infoBlock_subTitle}>
                Our vibrant community is full of collectors, artists, and
                enthusiasts who share a passion for one-of-a-kind digital.
              </p>
              <Link href={Links.STATS}>
                <Button
                  type="button"
                  className={styles.community__infoBlock_button}
                >
                  Join Our Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
