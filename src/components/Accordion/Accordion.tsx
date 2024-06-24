import React, { type FC } from 'react';
import styles from './Accordion.module.scss';
import { Add, Subtract } from 'grommet-icons';

interface AccordionProps {
  onToggle: () => void;
  title: string;
  subTitles: {
    secondSubTitle: string;
  };
  isOpen: boolean;
}

export const Accordion: FC<AccordionProps> = ({
  onToggle,
  subTitles,
  title,
  isOpen,
}) => {
  return (
    <div onClick={onToggle} className={styles.accordion}>
      <h1 className={styles.title}>
        {title}
        <span
          className='icon'
          style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(90deg)' }}
        >
          {isOpen ? (
            <Subtract color='white' className={styles.circle__icon} />
          ) : (
            <Add color='white' className={styles.circle__icon} />
          )}
        </span>
      </h1>
      <div className={`${styles.content} ${isOpen ? styles.open : ''}`}>
        <div>
          {subTitles.secondSubTitle && (
            <p className={styles.subTitle}>{subTitles.secondSubTitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};
