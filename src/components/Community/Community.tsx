import type { FC } from 'react';
import styles from './Community.module.scss';
import { Button } from '../UI/Button/Button';

export const Community: FC = () => {
  return (
    <section className={styles.community}>
      <div className={styles.community__container}>
        <div className={styles.community__firstBlock}>
          <div className={styles.community__secondBlock}>
            <div className={styles.community__infoBlock}>
              <h2 className={styles.community__infoBlock_title}>
                Join The <span className={styles.community__infoBlock_titleMark}>
                   Community
                  </span>
              </h2>
              <p className={styles.community__infoBlock_subTitle}>
                Our vibrant community is full of collectors, artists, and
                enthusiasts who share a passion for one-of-a-kind digital.
              </p>
              <Button
                type='button'
                className={styles.community__infoBlock_button}
              >
                Join Our Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
