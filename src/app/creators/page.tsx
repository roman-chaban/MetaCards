'use client';

import styles from './Creators.module.scss';
import { CreatorsCards } from '@/components/CreatorsCards/CreatorsCards';
import creators from '@/api/creators.json';
import { useEffect, useState } from 'react';
import { TypeCreatorsCards } from '@/interfaces/cards';
import { useChangePageTitle } from '@/hooks/useChangePageTitle';

export default function Creators() {
  useChangePageTitle('MetaCards | Creators');
  const [cardsInfo, setCardsInfo] = useState<TypeCreatorsCards>([]);

  useEffect(() => {
    setCardsInfo(creators);
  }, []);

  return (
    <section className={styles.creators}>
      <div className={styles.creators__container}>
        <h1 className={styles.creators__title}>Meet Our Great Creators</h1>
        <CreatorsCards cards={cardsInfo} />
      </div>
    </section>
  );
}
