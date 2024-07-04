export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  {
    label: 'Discover',
    href: '/discover'
  },
  {
    label: 'Profile',
    href: '/profile'
  },
  {
    label: 'Sell',
    href: '/sell'
  },
  {
    label: 'Stats',
    href: '/stats'
  }
]
