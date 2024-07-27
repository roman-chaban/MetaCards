'use client';

import React, { FC } from 'react';
import styles from './BurgerButton.module.scss';

interface ButtonProps {
  onClick: () => void;
  isActive: boolean;
}

export const BurgerButton: FC<ButtonProps> = ({ onClick, isActive }) => {
  return (
    <div className={`${styles.burgerContainer} ${isActive && styles.active}`}>
      <button className={styles.burgerButton__wrapper} onClick={onClick}>
        <span className={styles.buttonLine}></span>
      </button>
    </div>
  );
};
