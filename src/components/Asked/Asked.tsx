import { Fragment, type FC } from 'react';
import styles from './Asked.module.scss';
import { AskedListItem, askedList } from '@/constants/askedList';
import { Add } from 'grommet-icons';

export const Asked: FC = () => {
  return (
    <section className={styles.asked}>
      <div className={styles.asked__container}>
        <h2 className={styles.asked__title}>
          Frequently Asked{' '}
          <span className={styles.asked__title_mark}>Questions</span>
        </h2>
        <ul className={styles.asked__list}>
          {askedList.map((item: AskedListItem, index) => (
            <Fragment key={index}>
              <li className={styles.asked__list_item}>
                {item.title}
                <span className={styles.asked__list_mark}>
                  <Add color='white' style={{ width: 15, height: 15 }} />
                </span>
              </li>
            </Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
};
