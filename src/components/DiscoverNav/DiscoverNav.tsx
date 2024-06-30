import type {FC} from 'react';
import styles from './DiscoverNav.module.scss';
import { Button } from '../UI/Button/Button';
import Image from 'next/image';

interface DiscoverNavProps {
   title: string;
   buttonLabels: {
      primary: string;
      secondary: string;
      thirdary: string;
   }
}

export const DiscoverNav: FC<DiscoverNavProps> = ({title, buttonLabels}) => {
   return <div className={styles.discover__nav}>
      <h2 className={styles.discover__nav_title}>{title}</h2>
      <div className={styles.nav__buttons}>
         <Button type='button' className={styles.button__primary}>
            {buttonLabels.primary}
            <Image src='/images/exploreIcons/list.svg' alt='List Icon' width={20} height={20} />
         </Button>
         <Button type='button' className={styles.button__primary}>
            {buttonLabels.secondary}
            <Image src='/images/exploreIcons/collection.svg' alt='Collection Icon' width={20} height={20} />
            </Button>
         <Button type='button' className={styles.button__primary}>
            {buttonLabels.thirdary}
            <Image src='/images/exploreIcons/price.svg' alt='Price Icon' width={20} height={20} />
            </Button>
      </div>
   </div>
}