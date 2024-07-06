import type { FC } from 'react'
import { ActivityItem } from '../ActivityItem/ActivityItem'
import styles from './ActivityList.module.scss'
import { activityItems } from '@/constants/activityItem'

export const ActivityList: FC = () => (
  <div className={styles.activityList}>
    {activityItems.map(item => (
      <ActivityItem item={item} key={item.id} />
    ))}
  </div>
)
