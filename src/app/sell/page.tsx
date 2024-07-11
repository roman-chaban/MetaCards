'use client';

import styles from './Sell.module.scss';
import { SellCreate } from '@/components/SellCreate/SellCreate';
import { useState } from 'react';

export default function Sell() {
  const [inputs, setInputs] = useState({
    ArtWorkName: '',
    ArtWorkDescription: '',
    Royalty: '',
    Size: '',
    Tags: '',
    Price: '',
    ETC: ''
  });
  return (
    <section className={styles.sell}>
      <div className={styles.sell__container}>
        <div className={styles.sell__titles}>
          <h1 className={styles.sell__title}>Create Your NFT</h1>
        </div>
        <SellCreate inputs={inputs} setInputs={setInputs} />
      </div>
    </section>
  );
}
