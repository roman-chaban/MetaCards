'use client'

import { KeyboardEventHandler, useEffect, useState, type FC } from 'react'
import styles from './Burger.module.scss'
import { usePathname } from 'next/navigation'
import { useBodyOverFlow } from '@/hooks/useBodyOverflow'
import { FormClose } from 'grommet-icons'
import { HeaderNavLink, NavigationLinks } from '@/enums/navigation'
import Link from 'next/link'
import Image from 'next/image'

interface BurgerProps {
  onClose: () => void
}

export const Burger: FC<BurgerProps> = ({ onClose }) => {
  const pathname = usePathname()
  const [isActive, setIsActive] = useState<boolean>(false)

  useBodyOverFlow(isActive)

  useEffect(() => {
    setIsActive(true)
    return () => {
      setIsActive(false)
    }
  }, [])

  const handleCloseMenu = () => {
    setIsActive(false)
  }

  const handleMenuCloseOnEscape: KeyboardEventHandler<
    HTMLDivElement
  > = event => {
    if (event.code === 'Escape' || event.code === 'Esc') {
      setIsActive(false)
    }
  }

  return (
    <nav
      tabIndex={0}
      onKeyDown={handleMenuCloseOnEscape}
      className={`${styles.burgerContainer} ${isActive && styles.active}`}
    >
      <div className={styles.burger__logo}>
        <div className={styles.burger__logo__wrapper}>
          <h3 className={styles.burgerLogo__title}>MetaCards</h3>
          <Image
            src="/images/icons/Wave.svg"
            alt="MetaCards Logo"
            width={50}
            height={50}
          />
        </div>
        <FormClose
          className={styles.burgerClosed__icon}
          onClick={onClose}
          color="#141416"
          style={{ width: 40, height: 40, cursor: 'pointer' }}
        />
      </div>
      <div
        className={`${styles.burgerNavigation__wrapper} ${
          isActive && styles.active
        }`}
      >
        <nav className={styles.burgerNav}>
          <ul className={styles.burger__menu}>
            {NavigationLinks.map((link: HeaderNavLink) => (
              <li key={link.href} className={styles.menu__listItem}>
                <Link
                  onClick={handleCloseMenu}
                  className={styles.listItem__link}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.burger__copyright}>
          &copy; 2024 MetaCards, inc. All Rights Reserved
        </div>
      </div>
    </nav>
  )
}
