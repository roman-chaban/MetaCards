import type { FC } from 'react';
import styles from './CompactTable.module.scss';
import {
  TableBodyItem,
  tableBodyItems
} from '@/constants/collectionsTableItems';
import Image from 'next/image';

export const CompactTable: FC = () => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.table__captures}>
        <span className={styles.table__captures_title}>Collection</span>
        <span className={styles.table__captures_title}>Volume</span>
      </div>
      <div className={styles.gridTable}>
        {tableBodyItems.map((tableItem: TableBodyItem, index) => (
          <div key={index} className={styles.gridRow}>
            <div className={styles.gridRow__block}>
              <div
                className={styles.gridRow__imageBlock}
                data-index={index + 1}
              >
                <Image
                  priority
                  src={tableItem.icon}
                  alt={tableItem.title}
                  width={45}
                  height={45}
                  className={styles.tableIcon}
                />
              </div>
              <div className={styles.statsTableDataTitles}>
                <div className={styles.tableFirstTitle}>{tableItem.title}</div>
                <div className={styles.tableSecondTitle}>
                  {tableItem.subTitle}
                </div>
              </div>
            </div>
            <div className={styles.tableDetails}>
              <span className={styles.volume}>
                <Image
                  src="/images/details/ethereum.svg"
                  alt="Ethereum Icon"
                  width={17}
                  height={17}
                />
                {tableItem.volume}
              </span>
              <span className={styles.percent} style={{ color: '#14a760' }}>
                {tableItem.percent}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
