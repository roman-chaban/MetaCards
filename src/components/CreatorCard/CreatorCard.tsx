import { CreatorCardItem } from '@/interfaces/creatorCards'
import Image from 'next/image'
import type { FC } from 'react'
import styles from './CreatorCard.module.scss'
import { Favorite } from 'grommet-icons'
import { url } from 'inspector'

interface CreatorCardProps {
  card: CreatorCardItem
}

export const CreatorCard: FC<CreatorCardProps> = ({ card }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__container}>
        <div
          className={styles.card__image}
          style={{ backgroundImage: `url(${card.image})` }}
        ></div>
        <div className={styles.cardInfo__items}>
          <div className={styles.perperzon__block}>
            <h5 className={styles.perperzon__block_title}>{card.subTitle}</h5>
            <Image
              src={card.iconPrimary}
              alt="Blue check icon"
              width={18}
              height={18}
            />
          </div>
          <h4 className={styles.card__title}>{card.title}</h4>
          <div className={styles.cardInfo__block}>
            <div className={styles.card__rating}>
              <Image
                src={card.iconSecondary}
                alt="Ethereum Icon"
                width={15}
                height={18}
              />
              <span className={styles.rating}>{card.rating}</span>
            </div>
            <div className={styles.likesBlock}>
              <Favorite color="gray" style={{ width: 14, height: 14 }} />
              <span className={styles.likes}>{card.likes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
