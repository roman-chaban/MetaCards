import type { ReactNode } from 'react';
import styles from './Choose.module.scss';
import NoHeaderFooterLayout from '../noHeaderFooterLayout';
import { Button } from '@/components/UI/Button/Button';
import { ButtonProps, chooseButtons } from '@/constants/chooseButtons';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MetaCards | Choose Wallet'
};

export default function Choose() {
  return (
    <section className={styles.choose}>
      <div className={styles.choose__container}>
        <article className={styles.leftSide}>
          <h1 className={styles.leftSide__title}>Choose Wallet</h1>
          <div className={styles.leftSide__buttonsBlock}>
            {chooseButtons.map((button: ButtonProps) => (
              <Button
                key={button.label}
                type="button"
                className={styles.button}
              >
                <Image
                  src={button.iconPrimary}
                  alt="Button Icon"
                  width={30}
                  height={30}
                />
                {button.label}
                <Image
                  src={button.iconSecondary}
                  alt="Button Icon"
                  width={10}
                  height={10}
                />
              </Button>
            ))}
          </div>
          <Button type="button" className={styles.next__button}>
            Next
          </Button>
          <div className={styles.LeftSide__copyright}>
            <span className={styles.policy__title}>Privacy Policy</span>
            <span className={styles.copyright__title}>Copyright 2022</span>
          </div>
        </article>
        <article className={styles.rightSide}></article>
      </div>
    </section>
  );
}

Choose.getLayout = function getLayout(page: ReactNode) {
  return <NoHeaderFooterLayout>{page}</NoHeaderFooterLayout>;
};
