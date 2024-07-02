export interface RecentItems {
  icon: string
  subIcon: string
  title: string
  subTitle: string
  rating: string
  percent: string
}

export type TypeRecentItems = RecentItems[]

export const recentItems: TypeRecentItems = [
  {
    icon: '/images/recentIcons/firstIcon.svg',
    subIcon: '/images/productsImages/icon.svg',
    title: 'Alex Ca.',
    subTitle: 'Alexy',
    rating: '8,456',
    percent: '+23,00%'
  },
  {
    icon: '/images/recentIcons/secondIcon.svg',
    subIcon: '/images/productsImages/icon.svg',
    title: 'Julia S.',
    subTitle: 'JuliaS',
    rating: '5,327',
    percent: '-32,01%'
  }
]
