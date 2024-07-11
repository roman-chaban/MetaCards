'use client';

import styles from './Sell.module.scss';
import { SellCreate } from '@/components/SellCreate/SellCreate';
import { UploadImage } from '@/components/UploadImage/UploadImage';
import { useState } from 'react';

export default function Sell() {
  const [inputs, setInputs] = useState({
    ArtWorkName: '',
    ArtWorkDescription: '',
    Royalty: '',
    Size: '',
    Tags: '',
    Price: '',
    ETC: '',
    Stock: ''
  });
  return (
    <section className={styles.sell}>
      <div className={styles.sell__container}>
        <div className={styles.sell__titles}>
          <h1 className={styles.sell__title}>Create Your NFT</h1>
        </div>
        <div className={styles.sell__block}>
          <SellCreate inputs={inputs} setInputs={setInputs} />
          <UploadImage />
        </div>
      </div>
    </section>
  );
}
