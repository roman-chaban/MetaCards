'use client';

import { ReactNode, useEffect, useState, type FC } from 'react';
import styles from '@/assets/loading/Loading.module.scss';

type TypeLoader = {
  children: ReactNode;
};

export const Preloader: FC<TypeLoader> = ({ children }) => {
  const [preLoader, setPreLoader] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPreLoader(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (preLoader) {
      const timeout = setTimeout(() => {}, 1500);

      return () => clearTimeout(timeout);
    }
  }, [preLoader]);

  if (!preLoader) {
    return (
      <div className={styles.loader}>
        <span>&lt;</span>
        <span>LOADING</span>
        <span>/&gt;</span>
      </div>
    );
  }

  return <>{children}</>;
};
