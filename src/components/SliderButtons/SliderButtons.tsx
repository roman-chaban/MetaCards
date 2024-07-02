import type { FC } from 'react'
import { Button } from '../UI/Button/Button'
import { FormNextLink, FormPreviousLink } from 'grommet-icons'
import styles from '@/components/Hero/Hero.module.scss'

export const SliderButtons: FC = () => {
  return (
    <div className={styles.sliderButtons}>
      <Button type="button" className={styles.prev__button}>
        <FormPreviousLink />
      </Button>
      <span className={styles.slider__decoration}></span>
      <Button type="button" className={styles.next__button}>
        <FormNextLink />
      </Button>
    </div>
  )
}
