'use client';

import { useState, type FC } from 'react';
import styles from './Switcher.module.scss';
import { switcherOff, switcherOn } from './switcherIcons';

interface SwitcherProps {
  title: string;
  subTitle: string;
}

export const Switcher: FC<SwitcherProps> = ({ title, subTitle }) => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const toggleSwitch = () => {
    setIsOn(prevState => !prevState);
  };
  return (
    <div className={styles.switcher} onClick={toggleSwitch}>
      <div className={styles.switcher__container}>
        <div className={styles.switcher__titles}>
          <h4 className={styles.switcher__title}>{title}</h4>
          <p className={styles.switcher__subTitle}>{subTitle}</p>
        </div>
        <div className={styles.switcher__button} style={{ cursor: 'pointer' }}>
          {isOn ? switcherOn : switcherOff}
        </div>
      </div>
    </div>
  );
};
