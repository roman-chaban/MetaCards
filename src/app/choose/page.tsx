import type { ReactNode } from 'react';
import styles from './Choose.module.scss';
import NoHeaderFooterLayout from '../noHeaderFooterLayout';
import { Button } from '@/components/UI/Button/Button';
import { ButtonProps, chooseButtons } from '@/constants/chooseButtons';
import Image from 'next/image';
import { Metadata } from 'next';
import { ChooseSwiper } from '@/components/ChooseSwiper/ChooseSwiper';
import { ChooseWallet } from '@/components/ChooseWallet/ChooseWallet';

export const metadata: Metadata = {
  title: 'MetaCards | Choose Wallet'
};

export default function Choose() {
  return (
    <section className={styles.choose}>
      <div className={styles.choose__container}>
        <ChooseWallet />
        <ChooseSwiper />
      </div>
    </section>
  );
}

Choose.getLayout = function getLayout(page: ReactNode) {
  return <NoHeaderFooterLayout>{page}</NoHeaderFooterLayout>;
};
