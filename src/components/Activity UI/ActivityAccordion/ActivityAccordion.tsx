import React, { FC } from 'react'
import { Add, FormDown, FormNext, FormUp, Subtract } from 'grommet-icons'
import styles from './ActivityAccordion.module.scss'

interface AccordionProps {
  onToggle: () => void
  title: string
  subTitles: {
    secondSubTitle: string
  }
  isOpen: boolean
  children: React.ReactNode
}

export const ActivityAccordion: FC<AccordionProps> = ({
  onToggle,
  title,
  subTitles,
  isOpen,
  children
}) => {
  return (
    <div className={styles.accordion}>
      <div onClick={onToggle} className={styles.header}>
        <h3 className={styles.title}>
          {title}
          <span
            className={styles.icon}
            style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)' }}
          >
            {isOpen ? (
              <FormUp color="white" className={styles.circle__icon} />
            ) : (
              <FormDown color="white" className={styles.circle__icon} />
            )}
          </span>
        </h3>
      </div>
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  )
}
