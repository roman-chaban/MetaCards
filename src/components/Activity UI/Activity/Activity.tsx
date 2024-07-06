import { FC } from 'react'
import { ActivityNav } from '../ActivityNav/ActivityNav'
import { ActivityList } from '../ActivityList/ActivityList'
import styles from './Activity.module.scss'

export const Activity: FC = () => {
  return (
    <div className={styles.activityBlock}>
      <ActivityNav />
      <ActivityList />
    </div>
  )
}
