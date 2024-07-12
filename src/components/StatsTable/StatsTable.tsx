import type { FC } from 'react';
import styles from './StatsTable.module.scss';
import statsTableItems from '@/api/stats.json';
import Image from 'next/image';

export const StatsTable: FC = () => {
  return (
    <table className={styles.statsTable}>
      <tbody className={styles.stats__table_body}>
        {statsTableItems.map((tableItem, index) => (
          <tr key={index} className={styles.stats__table_bodyRow}>
            <td className={styles.stats__table_dataCell}>
              <Image
                priority
                src={tableItem.image}
                alt={tableItem.title}
                width={85}
                height={85}
                className={styles.table__icon}
              />
              <div className={styles.stats__table_dataTitles}>
                <div className={styles.table__first_title}>
                  {tableItem.title}
                </div>
                <div className={styles.table__second_title}>
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
  );
};
