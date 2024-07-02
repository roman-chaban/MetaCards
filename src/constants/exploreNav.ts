export interface ExploreNavItem {
  title: string
  href: string
  icon: string
}

export const exploreNavItems: ExploreNavItem[] = [
  {
    title: 'All',
    href: '/all',
    icon: ''
  },
  {
    title: 'Category',
    href: '/category',
    icon: '/images/exploreIcons/list.svg'
  },
  {
    title: 'Collection',
    href: '/collection',
    icon: '/images/exploreIcons/collection.svg'
  },
  {
    title: 'Price',
    href: '/price',
    icon: '/images/exploreIcons/price.svg'
  }
]
