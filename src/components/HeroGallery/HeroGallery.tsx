import type { FC } from 'react';
import styles from '@/components/Hero/Hero.module.scss';
import Image from 'next/image';
import { SliderButtons } from '../SliderButtons/SliderButtons';

export const HeroGallery: FC = () => {
  return (
    <div className={styles.heroGallery}>
      <div className={styles.heroNft__banner}>
        <Image
          className={styles.nft__image}
          src='/images/hero/nft-1.svg'
          alt='NFT Banner Image'
          width={391}
          height={394}
        />
        <SliderButtons />
      </div>
      <div className={styles.heroNft__subGallery}>
        <div className={styles.subGallery__items}>
          <Image
            src='/images/hero/arrow.svg'
            alt='Arrow Icon'
            width={130}
            height={135}
            className={styles.arrow__icon}
          />
          <Image
          className={styles.dots__decoration}
            src='/images/hero/dots-decoration.svg'
            alt='Dots Decoration'
            width={173}
            height={399}
          />
        </div>
        <Image
          className={styles.secondaryImage}
          src='/images/hero/nft-2.svg'
          alt='NFT Secondary Banner Image'
          width={320}
          height={343}
        />
      </div>
    </div>
  );
};
