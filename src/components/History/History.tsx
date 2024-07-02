'use client'

import { useState, type FC } from 'react'
import styles from './History.module.scss'
import Image from 'next/image'
import { Select } from '../UI/Select/Select'
import { HistoryBid } from '../HistoryBid/HistoryBid'

export const History: FC = () => {
  const [dateChange, setDateChange] = useState('Jun 10 - Jun 16')

  const options = [
    { value: 'Jun 10 - Jun 16', label: 'Jun 10 - Jun 16' },
    { value: 'Jun 17 - Jun 23', label: 'Jun 17 - Jun 23' },
    { value: 'Jun 24 - Jun 30', label: 'Jun 24 - Jun 30' },
    { value: 'Jul 1 - Jul 7', label: 'Jul 1 - Jul 7' }
  ]

  const selectClasses = {
    select: styles.select,
    option: styles.option
  }

  return (
    <article className={styles.history}>
      <div className={styles.history__container}>
        <div className={styles.history__nav}>
          <h4 className={styles.history__nav_title}>Bid History</h4>
          <div className={styles.express__block}>
            <h5 className={styles.express__block_title}>Expenses</h5>
            <Select
              classNames={selectClasses}
              options={options}
              ariaLabel="date-select"
              onChange={setDateChange}
              id={styles.select}
              name="date-select"
              selectedValue={dateChange}
            />
          </div>
        </div>
        <Image
          src="/images/history/statics.svg"
          alt="Statistic Image Banner"
          width={757}
          height={250}
          className={styles.statistic__banner}
        />
      </div>
      <HistoryBid />
    </article>
  )
}
