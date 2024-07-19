'use client';

import styles from './Creators.module.scss';
import { CreatorsCards } from '@/components/CreatorsCards/CreatorsCards';
import creators from '@/api/creators.json';
import { useEffect, useState } from 'react';
import { TypeCreatorsCards } from '@/interfaces/cards';
import { useChangePageTitle } from '@/hooks/useChangePageTitle';
import { Pagination } from '@/components/UI/Pagination/Pagination';

const ITEMS_PER_PAGE = 6;

export default function Creators() {
  useChangePageTitle('MetaCards | Creators');
  const [cardsInfo, setCardsInfo] = useState<TypeCreatorsCards>([]);

  useEffect(() => {
    setCardsInfo(creators);
  }, []);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(creators.length / ITEMS_PER_PAGE);

  const paginate = (items: TypeCreatorsCards, currentPage: number) => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return items.slice(start, end);
  };

  const paginatedItems = paginate(creators, currentPage);

  return (
    <section className={styles.creators}>
      <div className={styles.creators__container}>
        <h1 className={styles.creators__title}>Meet Our Great Creators</h1>
        <CreatorsCards cards={paginatedItems} />
        <Pagination
          currentPage={currentPage}
          onPageChange={(page: number) => setCurrentPage(page)}
          totalPages={totalPages}
        />
      </div>
    </section>
  );
}
