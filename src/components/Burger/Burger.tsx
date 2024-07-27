'use client';

import { KeyboardEventHandler, useEffect, useRef, FC } from 'react';
import styles from './Burger.module.scss';
import { usePathname } from 'next/navigation';
import { FormClose } from 'grommet-icons';
import { NavigationLinks } from '@/enums/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useBodyOverFlow } from '@/hooks/useBodyOverflow';

interface BurgerProps {
  onClose: () => void;
  isActive: boolean;
}

export const Burger: FC<BurgerProps> = ({ onClose, isActive }) => {
  const burgerMenuRef = useRef<HTMLDivElement>(null);

  useBodyOverFlow(isActive);

  useEffect(() => {
    if (burgerMenuRef.current) {
      burgerMenuRef.current.focus();
    }
  }, [isActive]);

  const handleMenuCloseOnEscape: KeyboardEventHandler<
    HTMLDivElement
  > = event => {
    if (event.code === 'Escape' || event.code === 'Esc') {
      onClose();
    }
  };

  return (
    <nav
      ref={burgerMenuRef}
      tabIndex={0}
      className={`${styles.burgerMenu} ${isActive ? styles.active : ''}`}
      onKeyDown={handleMenuCloseOnEscape}
      role="dialog"
      aria-labelledby="burgerMenuTitle"
    >
      <div className={styles.burger__container}>
        <div className={styles.burger__header}>
          <div className={styles.burger__header_logo}>
            <h3 className={styles.burgerLogo__title}>MetaCards</h3>
            <Image
              src="/images/icons/Wave.svg"
              alt="MetaCards Logo"
              width={50}
              height={50}
            />
          </div>

          <button className={styles.closeButton} onClick={onClose}>
            <FormClose size="large" />
          </button>
        </div>
        <ul className={styles.menu}>
          {NavigationLinks.map(link => (
            <li key={link.title} className={styles.menu__item}>
              <Link
                onClick={onClose}
                href={link.href}
                className={styles.menu__item_link}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.burger__footer}>
          <div className={styles.burger__copyright}>
            &copy; 2024 MetaCards, Inc. All Rights Reserved
          </div>
        </div>
      </div>
    </nav>
  );
};
