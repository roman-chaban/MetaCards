import type { FC } from 'react';
import styles from './ChooseWallet.module.scss';
import { chooseButtons } from '@/constants/chooseButtons';
import { Button } from '../UI/Button/Button';
import Image from 'next/image';

export const ChooseWallet: FC = () => {
  return (
    <div className={styles.chooseWallet}>
      <div className={styles.chooseWallet__container}>
        <h2 className={styles.chooseWallet__title}>Choose Wallet</h2>
        <div className={styles.walletButtons}>
          {chooseButtons.map(button => (
            <Button
              key={button.label}
              type="button"
              className={styles.walletButtons__button}
            >
              <Image
                src={button.iconPrimary}
                alt={`${button.label} Icon`}
                width={38}
                height={38}
                className={styles.buttonIcon}
              />
              {button.label}
            </Button>
          ))}
        </div>
        <Button type="button" className={styles.next__button}>
          Next
        </Button>
        <div className={styles.chooseInfo}>
          <span className={styles.chooseInfo__policy}>Privacy Policy</span>
          <span className={styles.chooseInfo__copyright}>Copyright 2022</span>
        </div>
      </div>
    </div>
  );
};
