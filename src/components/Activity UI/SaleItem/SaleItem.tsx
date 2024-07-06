import { FC } from 'react'
import Image from 'next/image'
import styles from './SaleItem.module.scss'

export const SaleItem: FC<{
  title: string
  subTitle: string
  captureTime: string
  icon: string
}> = ({ title, subTitle, captureTime, icon }) => (
  <div className={styles.saleItem}>
    <div>
      <h4>{title}</h4>
      <p>{subTitle}</p>
      <time>{captureTime}</time>
    </div>
  </div>
)
