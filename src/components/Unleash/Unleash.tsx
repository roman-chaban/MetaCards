import type { FC } from 'react';
import styles from './Unleash.module.scss';
import { UnleashListItem, unleashList } from '@/constants/unleashList';
import { FormNextLink } from 'grommet-icons';
import { Button } from '../UI/Button/Button';
import Image from 'next/image';
import { BestSellers } from '../BestSellers/BestSellers';
import { Recent } from '../Recent/Recent';

export const Unleash: FC = () => {
  const recentStyles = {
    container: styles.unleash__recentContainer,
  };

  return (
    <section className={styles.unleash}>
      <div className={styles.unleash__container}>
        <article className={styles.unleashBlock}>
          <h3 className={styles.unleashList__title}>
            <span className={styles.unleashList__title_mark}>
              Just Unleash - <br />
            </span>
            Your Inner Collector
          </h3>
          <ul className={styles.unleash__list}>
            {unleashList.map((listItem: UnleashListItem, index) => (
              <div key={index} className={styles.unleash__listItemsBlock}>
                <Image
                  className={styles.icon}
                  src='/images/exploreIcons/check.svg'
                  alt='Check Icon'
                  width={20}
                  height={20}
                />
                <li className={styles.unleash__list_item}>{listItem.title}</li>
              </div>
            ))}
          </ul>
          <Button type='button' className={styles.explore__button}>
            Explore more <FormNextLink className={styles.next__icon} color='white' />
          </Button>
        </article>
        <div className={styles.unleash__itemsBlock}>
          <BestSellers />
          <Recent classNames={recentStyles} />
        </div>
      </div>
    </section>
  );
};
