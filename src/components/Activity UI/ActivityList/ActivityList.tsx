import React, { FC, useState } from 'react'
import { ActivityItem } from '../ActivityItem/ActivityItem'
import styles from './ActivityList.module.scss'
import { activityItems } from '@/constants/activityItem'
import { ActivityAccordion } from '../ActivityAccordion/ActivityAccordion'

export const ActivityList: FC = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(null)

  const handleToggle = (id: number) => {
    setOpenItemId(openItemId === id ? null : id)
  }

  return (
    <div className={styles.activityList}>
      {activityItems.map(item => (
        <ActivityAccordion
          key={item.id}
          onToggle={() => handleToggle(item.id)}
          title={item.title}
          subTitles={{ secondSubTitle: item.subTitle }}
          isOpen={openItemId === item.id}
        >
          <ActivityItem item={item} />
        </ActivityAccordion>
      ))}
    </div>
  )
}
