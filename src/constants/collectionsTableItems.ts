export interface TableBodyItem {
  icon: string
  title: string
  subTitle: string
  volume: string
  percent: string
  rating: string
  owners: string
  items: string
}

export type TabletBodyItems = TableBodyItem[]

export const tableBodyItems: TabletBodyItems = [
  {
    icon: '/images/collections/first-icon.svg',
    title: 'Alex Ca.',
    subTitle: 'By Alex',
    volume: '8,456',
    percent: '+ 27.78%',
    rating: '7,9',
    owners: '2.2K',
    items: '500'
  },
  {
    icon: '/images/collections/second-icon.svg',
    title: 'Alex Ca.',
    subTitle: 'By Alex',
    volume: '4,780',
    percent: '+ 27.78%',
    rating: '3,5',
    owners: '3.4K',
    items: '900'
  },
  {
    icon: '/images/collections/first-icon.svg',
    title: 'Alex Ca.',
    subTitle: 'By Alex',
    volume: '8,456',
    percent: '+ 27.78%',
    rating: '3,5',
    owners: '2.2K',
    items: '500'
  },
  {
    icon: '/images/collections/second-icon.svg',
    title: 'Alex Ca.',
    subTitle: 'By Alex',
    volume: '4,780',
    percent: '+ 27.78%',
    rating: '7,9',
    owners: '3.4K',
    items: '900'
  }
]
