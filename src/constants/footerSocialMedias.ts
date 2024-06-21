import { Instagram, Github, Linkedin } from 'grommet-icons';
import React from 'react';

interface SocialMediaItem {
  icon: React.ReactNode;
  href: string;
  title: string;
  alt: string;
}

export const footerSocialMedias: SocialMediaItem[] = [
  {
    icon: React.createElement(Instagram, { color: 'white' }),
    href: '/',
    alt: 'Instagram',
    title: 'Instagram',
  },
  {
    icon: React.createElement(Github, { color: 'white' }),
    href: '/',
    alt: 'GitHub',
    title: 'GitHub',
  },
  {
    icon: React.createElement(Linkedin, { color: 'white' }),
    href: '/',
    alt: 'LinkedIn',
    title: 'LinkedIn',
  },
];
