import { FC } from 'react'
import Image from 'next/image'
import styles from './SaleItem.module.scss'

export const SaleItem: FC<{
  title: string
  subTitle: string
  captureTime: string
  icon: string
  arrowIcon: string
}> = ({ title, subTitle, captureTime, icon, arrowIcon }) => (
  <div className={styles.saleItem}>
    <div className={styles.saleBlock}>
      <h4 className={styles.saleBlock__title}>{title}</h4>
      <p className={styles.saleBlock__subTitle}>
        <Image src={icon} alt="Ethereum Icon" width={12} height={16} />
        {subTitle}
      </p>
      <time className={styles.saleBlock__time}>{captureTime}</time>
    </div>
    <Image src={arrowIcon} alt="Arrow Icon" width={15} height={15} />
  </div>
)
