'use client';

import { FC, useState } from 'react';
import styles from './Asked.module.scss';
import { AskedListItem, askedList } from '@/constants/askedList';
import { Accordion } from '../Accordion/Accordion';

export const Asked: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.asked}>
      <div className={styles.asked__container}>
        <h2 className={styles.asked__title}>
          Frequently Asked{' '}
          <span className={styles.asked__title_mark}>Questions</span>
        </h2>
        <ul className={styles.asked__list}>
          {askedList.map((item: AskedListItem, index) => (
            <li key={index} className={styles.asked__list_item}>
              <Accordion
                title={item.title}
                subTitles={{
                  secondSubTitle: item.subTitle,
                }}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
