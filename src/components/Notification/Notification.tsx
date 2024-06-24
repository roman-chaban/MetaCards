import type { FC } from 'react';
import styles from './Notification.module.scss';
import Image from 'next/image';

export const Notification: FC = () => {
  return (
    <div className={styles.notification}>
      <div className={styles.notification__container}>
        <div className={styles.notification__dotImage}>
          <span className={styles.notification__dot}></span>
          <div className={styles.notification__imageBlock}>
            <Image
              src='/images/notification/avatar.svg'
              alt='NFT Avatar icon'
              width={45}
              height={45}
            />
            <Image
              src='/images/notification/check.svg'
              alt='Green Check icon'
              width={17}
              height={17}
              className={styles.check__icon}
            />
          </div>
          <div className={styles.notification__bid}>
            <div className={styles.notification__bid_titles}>
              <h5 className={styles.notification__bid_title}>New bid</h5>{' '}
              <span className={styles.notification__bid_subTitle}>
                Rotation
              </span>
            </div>
            <p className={styles.notification__bid_subCapture}>0.002 ETH</p>
            <span className={styles.notification__bid_subMark}>
              6 Oct 2022, 11:44 PM
            </span>
          </div>
          <Image
            src='/images/notification/avatar-large.svg'
            alt='NFT Avatar'
            width={60}
            height={60}
            className={styles.notification__nftIcon}
          />
        </div>
      </div>
    </div>
  );
};
