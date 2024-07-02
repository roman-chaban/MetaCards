'use client'

import { useState, type FC } from 'react'
import styles from './Header.module.scss'
import { NavLink, navLinks } from '@/constants/navLinks'
import { NavItem } from '../NavItem/NavItem'
import Image from 'next/image'
import { Input } from '../UI/Input/Input'
import { Search } from 'grommet-icons'
import { Button } from '../UI/Button/Button'
import { useScrollObserver } from '@/hooks/useScrollObserver'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MenuIcon from '@mui/icons-material/Menu'

type InputValue = string

export const Header: FC = () => {
  const [text, setText] = useState<InputValue>('')
  const { isScrolledNav } = useScrollObserver()
  const pathname = usePathname()

  return (
    <header
      className={`${styles.header} ${
        isScrolledNav ? styles.header__scrollActive : ''
      }`}
    >
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <Link href="/">
            <Image
              priority
              className={styles.header__logo_image}
              src="/images/icons/Wave.svg"
              alt="Wave Logo"
              width={53}
              height={53}
            />
          </Link>
          <h4 className={styles.logo__title}>DivSea</h4>
        </div>
        <nav className={styles.header__nav}>
          <ul className={styles.header__nav_menu}>
            {navLinks.map((navLink: NavLink) => {
              const isActive = pathname === navLink.href
              return (
                <NavItem
                  key={navLink.href}
                  navLink={navLink}
                  className={
                    isActive ? styles.activeLink : styles.menu__listLink
                  }
                />
              )
            })}
          </ul>
        </nav>
        <div className={styles.inputButton__items}>
          <div className={styles.search__input}>
            <Search color="#9d9d9d" className={styles.search__input_icon} />
            <Input
              placeholder="Search Art Work / Creator"
              name="Search at work "
              type="text"
              value={text}
              setValue={event => setText(event.target.value)}
              className={styles.input}
            />
          </div>
          <Button className={styles.connect__button} type="button">
            Connect Wallet
          </Button>
          <Button type={'button'} className={styles.burger__button}>
            <MenuIcon id={styles.burger__icon} />
          </Button>
        </div>
      </div>
    </header>
  )
}
