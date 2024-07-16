'use client';

import { ChangeEvent, useState, type FC } from 'react';
import styles from './HistoryBid.module.scss';
import { BidListItem, bidList } from '@/constants/bidList';
import Image from 'next/image';
import { Button } from '../UI/Button/Button';
import Select from 'react-select';
import { customStyles } from './selectStyles';
import { CustomSelect } from '../UI/CustomSelect/CustomSelect';

interface HistoryBidProps {
  onClose?: () => void;
}

export const HistoryBid: FC<HistoryBidProps> = ({ onClose }) => {
  return (
    <div className={styles.historyBid}>
      <div className={styles.historyBid__container}>
        <div className={styles.bid__titles}>
          <h5 className={styles.bid__title}>History of Bid</h5>
          <p className={styles.bid__subTitle}>Oct 14, 2022</p>
        </div>
        <div className={styles.bidList}>
          {bidList.map((item: BidListItem, index) => (
            <div key={index + 1} className={styles.bidList__item}>
              <div className={styles.bidList__flex}>
                <div className={styles.image__block}>
                  <Image
                    src={item.iconPrimary}
                    alt={item.title}
                    width={48}
                    height={48}
                  />
                  <Image
                    src={item.iconSecondary}
                    alt="Icon Check"
                    width={16}
                    height={16}
                    className={styles.check__icon}
                  />
                </div>
                <div className={styles.item__titles}>
                  <h5 className={styles.item__titles_title}>{item.title}</h5>
                  <p className={styles.item__titles_subTitle}>
                    {item.subTitle}
                  </p>
                </div>
              </div>

              <div className={styles.ratingBlock}>
                <Image
                  src={item.iconThirdary}
                  alt="Ethereum icon"
                  width={14}
                  height={14}
                />
                <span className={styles.rating}>{item.rating}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.your__bid}>
          <h5 className={styles.your__bid_title}>Your Bid</h5>
            <CustomSelect />
          <Button
            type="button"
            className={styles.your__bid_button}
            onClick={onClose}
          >
            <Image
              src="/images/historyBid/wallet.svg"
              alt="Wallet Icon"
              width={15}
              height={15}
            />
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
