import type { FC } from 'react';
import styles from './StatsTable.module.scss';
import statsTableItems from '@/api/stats.json';
import Image from 'next/image';

export const StatsTable: FC = () => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.statsTable}>
        <tbody className={styles.tableBody}>
          {statsTableItems.map((tableItem, index) => (
            <tr key={index} className={styles.statsTableRow}>
              <td className={styles.statsTableDataCell}>
                <Image
                  priority
                  src={tableItem.image}
                  alt={tableItem.title}
                  width={85}
                  height={85}
                  className={styles.tableIcon}
                />
                <div className={styles.statsTableDataTitles}>
                  <div className={styles.tableFirstTitle}>
                    {tableItem.title}
                  </div>
                  <div className={styles.tableSecondTitle}>
                    {tableItem.subTitle}
                  </div>
                </div>
              </td>
              <td className={styles.volume}>{tableItem.title}</td>
              <td className={styles.percent}>{tableItem.percent}</td>
              <td className={styles.rating}>{tableItem.rating}</td>
              <td className={styles.owners}>{tableItem.owner}</td>
              <td className={styles.items}>{tableItem.items}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
