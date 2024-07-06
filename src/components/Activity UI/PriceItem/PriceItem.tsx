import { FC } from 'react'
import Image from 'next/image'
import styles from './PriceItem.module.scss'

export const PriceItem: FC<{
  title: string
  subTitle: string
  icon?: string
}> = ({ title, subTitle, icon }) => (
  <div className={styles.priceItem}>
    <div>
      <h4>{title}</h4>
      <p>{subTitle}</p>
    </div>
  </div>
)
