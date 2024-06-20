'use client';

import { useState, type FC } from 'react';
import styles from './Header.module.scss';
import { NavLink, navLinks } from '@/constants/navLinks';
import { NavItem } from '../NavItem/NavItem';
import Image from 'next/image';
import { Input } from '../UI/Input/Input';
import { Search } from 'grommet-icons';
import { Button } from '../UI/Button/Button';

type InputValue = string;

const Header: FC = () => {
  const [text, setText] = useState<InputValue>('');
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <Image
            priority
            className={styles.header__logo_image}
            src='/images/icons/Wave.svg'
            alt='Wave Logo'
            width={53}
            height={53}
          />
        </div>
        <nav className={styles.header__nav}>
          <ul className={styles.header__nav_menu}>
            {navLinks.map((navLink: NavLink) => (
              <NavItem key={navLink.href} navLink={navLink} />
            ))}
          </ul>
        </nav>
        <div className={styles.inputButton__items}>
          <div className={styles.search__input}>
            <Search color='#9d9d9d' />
            <Input
              placeholder='Search Art Work / Creator'
              name='Search at work '
              type='text'
              value={text}
              setValue={(event) => setText(event.target.value)}
              className={styles.input}
            />
          </div>
          <Button className={styles.connect__button} type='button'>
            Connect Wallet
          </Button>
        </div>
      </div>
    </header>
  );
};

export { Header };
