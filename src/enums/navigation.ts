export interface HeaderNavLink {
  label: string;
  href: string;
  slugRef: string;
  title: string;
}

export const NavigationLinks: HeaderNavLink[] = [
  {
    label: 'Home',
    href: '/',
    slugRef: '',
    title: 'Home'
  },
  {
    label: 'Discover',
    href: '/discover',
    slugRef: '',
    title: 'Discover'
  },
  {
    label: 'Profile',
    href: '/profile',
    slugRef: '',
    title: 'Profile'
  },
  {
    label: 'Sell',
    href: '/sell',
    slugRef: '',
    title: 'Sell'
  },
  {
    label: 'Stats',
    href: '/stats',
    slugRef: '',
    title: 'Stats'
  },
  {
    label: 'Creators',
    href: '/creators',
    slugRef: '',
    title: 'Creators'
  }
];
