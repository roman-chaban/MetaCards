import { FC } from 'react';
import styles from './CollectionsTable.module.scss';
import {
  TableBodyItem,
  tableBodyItems
} from '@/constants/collectionsTableItems';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { collectionsNav } from '@/constants/collectionsNav';

const CollectionsTable: FC = () => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.gridTable}>
        <div className={styles.gridHeader}>
          <div
            className={styles.gridHeaderItem}
            id={styles.first__row}
            aria-colspan={collectionsNav.length + 1}
          >
            Collection
          </div>
          {collectionsNav.map((item, index) => (
            <div className={styles.gridHeaderItem} key={index}>
              {item.title}
            </div>
          ))}
        </div>
        {tableBodyItems.map((tableItem: TableBodyItem, index) => (
          <div key={index} className={styles.gridRow}>
            <div className={`${styles.gridCell} ${styles.firstCell}`}>
              <Image
                priority
                src={tableItem.icon}
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
            <div className={styles.gridCell}>{tableItem.volume}</div>
            <div className={styles.gridCell} style={{ color: '#14a760' }}>
              {tableItem.percent}
            </div>
            <div className={styles.gridCell}>{tableItem.rating}</div>
            <div className={styles.gridCell}>{tableItem.owners}</div>
            <div className={styles.gridCell}>{tableItem.items}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(CollectionsTable), { ssr: false });
