import { FC } from 'react'
import styles from '@/components/Collections/Collections.module.scss'
import {
  TableBodyItem,
  tableBodyItems
} from '@/constants/collectionsTableItems'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { collectionsNav } from '@/constants/collectionsNav'

const CollectionsTable: FC = () => {
  return (
    <table className={styles.collections__table}>
      <thead className={styles.collections__table_menu}>
        <tr>
          <th
            className={styles.collections__table_title}
            colSpan={collectionsNav.length + 1}
          >
            Collection
          </th>
        </tr>
        <tr className={styles.collections__table_header}>
          {collectionsNav.map((item, index) => (
            <th className={styles.collections__table_item} key={index}>
              {item.title}
            </th>
          ))}
        </tr>
        <tr className={styles.volume__title}>
          <th>Volume</th>
          <th>Percent</th>
        </tr>
      </thead>
      <tbody className={styles.collections__table_body}>
        {tableBodyItems.map((tableItem: TableBodyItem, index) => (
          <tr key={index} className={styles.collections__table_bodyRow}>
            <td className={styles.collection__table_dataCell}>
              <Image
                priority
                src={tableItem.icon}
                alt={tableItem.title}
                width={85}
                height={85}
                className={styles.table__icon}
              />
              <div className={styles.collection__table_dataTitles}>
                <div className={styles.table__first_title}>
                  {tableItem.title}
                </div>
                <div className={styles.table__second_title}>
                  {tableItem.subTitle}
                </div>
              </div>
            </td>
            <td className={styles.volume}>{tableItem.volume}</td>
            <td className={styles.percent}>{tableItem.percent}</td>
            <td className={styles.rating}>{tableItem.rating}</td>
            <td className={styles.owners}>{tableItem.owners}</td>
            <td className={styles.items}>{tableItem.items}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default dynamic(() => Promise.resolve(CollectionsTable), { ssr: false })
