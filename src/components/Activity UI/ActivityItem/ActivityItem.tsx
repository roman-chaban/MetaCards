import type { FC } from 'react'
import Image from 'next/image'
import styles from './ActivityItem.module.scss'
import { activityItems, ActivityItemsType } from '@/constants/activityItem'
import { PriceItem } from '@/components/Activity UI/PriceItem/PriceItem'
import { SaleItem } from '../SaleItem/SaleItem'

export const ActivityItem: FC<{ item: ActivityItemsType[number] }> = ({
  item
}) => (
  <div className={styles.activityItem__container} key={item.id}>
    <div className={styles.firstActivityBlock}>
      <div className={styles.top__block}>
        <div className={styles.imageTitles__subBlock}>
          <Image
            src={item.iconPrimary}
            alt="NFT Image"
            width={65}
            height={65}
          />
          <div>
            <h3 className={styles.item__title}>{item.title}</h3>
            <p className={styles.item__subTitle}>
              {item.subTitle}{' '}
              <Image
                src={item.iconSecondary}
                alt="Check icon"
                width={12}
                height={12}
              />
            </p>
          </div>
        </div>
        <div className={styles.sale__block}>
          <SaleItem
            title={item.sale.title}
            subTitle={item.sale.subTitle}
            captureTime={item.sale.captureTime}
            icon={item.sale.icon}
          />
        </div>
      </div>
      <div className={styles.bottom__block}>
        <PriceItem
          title={item.prices.firstPrice.title}
          subTitle={item.prices.firstPrice.subTitle}
          icon={item.prices.firstPrice.icon}
        />
        <PriceItem
          title={item.prices.secondPrice.title}
          subTitle={item.prices.secondPrice.subTitle}
          icon={item.prices.secondPrice.icon}
        />
        <PriceItem
          title={item.prices.thirdPrice.title}
          subTitle={item.prices.thirdPrice.subTitle}
          icon={item.prices.thirdPrice.icon}
        />
        <PriceItem
          title={item.prices.fourPrice.title}
          subTitle={item.prices.fourPrice.subTitle}
          icon={item.prices.fourPrice.icon}
        />
      </div>
    </div>
  </div>
)
