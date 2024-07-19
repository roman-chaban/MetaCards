'use client';

import styles from './Discover.module.scss';
import { Cards } from '@/components/Cards/Cards';
import { DiscoverNav } from '@/components/DiscoverNav/DiscoverNav';
import { buttonLabels } from '@/constants/navButtonLabels';
import { useState } from 'react';
import { Pagination } from '@/components/UI/Pagination/Pagination';
import items from '@/api/nft-products.json';

const ITEMS_PER_PAGE = 5;

export default function Discover() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const paginate = (items: any[], currentPage: number) => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return items.slice(start, end);
  };

  const paginatedItems = paginate(items, currentPage);

  return (
    <section className={styles.discover}>
      <div className={styles.discover__container}>
        <DiscoverNav buttonLabels={buttonLabels} title="Discover NFTs" />
        <Cards items={paginatedItems} />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </div>
    </section>
  );
}
