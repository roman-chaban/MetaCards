import { Instagram, Github, Linkedin } from 'grommet-icons';
import React from 'react';
import styles from '@/components/Footer/Footer.module.scss';

interface SocialMediaItem {
  icon: React.ReactNode;
  href: string;
  title: string;
  alt: string;
}

export const footerSocialMedias: SocialMediaItem[] = [
  {
    icon: React.createElement(Instagram, {
      color: 'white',
      className: styles.social__icon,
    }),
    href: '/',
    alt: 'Instagram',
    title: 'Instagram',
  },
  {
    icon: React.createElement(Github, {
      color: 'white',
      className: styles.social__icon,
    }),
    href: '/',
    alt: 'GitHub',
    title: 'GitHub',
  },
  {
    icon: React.createElement(Linkedin, {
      color: 'white',
      className: styles.social__icon,
    }),
    href: '/',
    alt: 'LinkedIn',
    title: 'LinkedIn',
  },
];
