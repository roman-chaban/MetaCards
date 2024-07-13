import type { FC } from 'react';
import styles from './StatsTable.module.scss';
import statsTableItems from '@/api/stats.json';
import Image from 'next/image';
import { statsIcon } from '../StatsNav/statsIcon';

interface StatsTableProps {
  navItemsLabels: {
    sixty: string;
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    quinary: string;
  };
}

export const StatsTable: FC<StatsTableProps> = ({ navItemsLabels }) => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.gridTable}>
        <div className={styles.gridHeader}>
          <div className={styles.gridHeaderItem}>
            {navItemsLabels.sixty} {statsIcon}
          </div>
          <div className={styles.gridHeaderItem}>
            {navItemsLabels.primary} {statsIcon}
          </div>
          <div className={styles.gridHeaderItem}>
            {navItemsLabels.secondary} {statsIcon}
          </div>
          <div className={styles.gridHeaderItem}>
            {navItemsLabels.tertiary} {statsIcon}
          </div>
          <div className={styles.gridHeaderItem}>
            {navItemsLabels.quaternary} {statsIcon}
          </div>
          <div className={styles.gridHeaderItem}>
            {navItemsLabels.quinary} {statsIcon}
          </div>
        </div>
        {statsTableItems.map((tableItem, index) => (
          <div key={index} className={styles.gridRow}>
            <div className={`${styles.gridCell} ${styles.firstCell}`}>
              <Image
                priority
                src={tableItem.image}
                alt={tableItem.title}
                width={85}
                height={85}
                className={styles.tableIcon}
              />
              <div className={styles.statsTableDataTitles}>
                <div className={styles.tableFirstTitle}>{tableItem.title}</div>
                <div className={styles.tableSecondTitle}>
                  {tableItem.subTitle}
                </div>
              </div>
            </div>
            <div className={styles.gridCell}>{tableItem.rating}</div>
            <div className={styles.gridCell} style={{ color: '#14a760' }}>
              {tableItem.percent}
            </div>
            <div className={styles.gridCell}>{tableItem.price}</div>
            <div className={styles.gridCell}>{tableItem.owner}</div>
            <div className={styles.gridCell}>{tableItem.items}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
