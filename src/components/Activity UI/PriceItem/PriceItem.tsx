import { FC } from 'react'
import Image from 'next/image'
import styles from './PriceItem.module.scss'

interface PriceItemProps {
  title: string
  subTitle: string
  icon?: string
}

export const PriceItem: FC<PriceItemProps> = ({ title, subTitle, icon }) => (
  <div className={styles.priceItem}>
    <div className={styles.priceBlock}>
      <h4 className={styles.priceBlock__title}>{title}</h4>
      <p className={styles.priceBlock__subTitle}>
        {['16,4', '26,4'].includes(subTitle) && icon && (
          <Image src={icon} alt="Icon" width={13} height={16} />
        )}
        {subTitle}
      </p>
    </div>
  </div>
)
