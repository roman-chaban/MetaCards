export interface PriceDetails {
  title: string
  subTitle: string
  icon?: string
}

export interface PriceItem {
  firstPrice: PriceDetails
  secondPrice: PriceDetails
  thirdPrice: PriceDetails
  fourPrice: PriceDetails
}

export interface SaleItem {
  title: string
  subTitle: string
  captureTime: string
  icon: string
}

export interface ActivityItem {
  id: number
  iconPrimary: string
  iconSecondary: string
  iconTertiary: string
  iconFourth: string
  iconFifth: string
  title: string
  subTitle: string
  prices: PriceItem
  sale: SaleItem
}

export type ActivityItemsType = ActivityItem[]

export const activityItems: ActivityItemsType = [
  {
    id: 1,
    iconPrimary: '/images/activityItems/icon-first.svg',
    iconSecondary: '/images/activityItems/check.svg',
    iconTertiary: '',
    iconFourth: '',
    iconFifth: '',
    title: 'Neave',
    subTitle: "Jennifer's",
    prices: {
      firstPrice: {
        title: 'USD Price',
        subTitle: '$19K',
        icon: '/images/activityItems/ethereum.svg'
      },
      secondPrice: {
        title: 'Quantity',
        subTitle: '14.9K',
        icon: '/images/activityItems/ethereum.svg'
      },
      thirdPrice: {
        title: 'floor price',
        subTitle: '16,4',
        icon: '/images/activityItems/ethereum.svg'
      },
      fourPrice: {
        title: 'traded',
        subTitle: '26,4',
        icon: '/images/activityItems/ethereum.svg'
      }
    },
    sale: {
      title: 'Sale',
      subTitle: '16,4',
      captureTime: '6 Minutes ago',
      icon: '/images/activityItems/ethereum.svg'
    }
  },
  {
    id: 2,
    iconPrimary: '/images/activityItems/icon-second.svg',
    iconSecondary: '/images/activityItems/check.svg',
    iconTertiary: '',
    iconFourth: '',
    iconFifth: '',
    title: 'Neave',
    subTitle: "Jennifer's",
    prices: {
      firstPrice: {
        title: 'USD Price',
        subTitle: '$19K',
        icon: '/images/activityItems/ethereum.svg'
      },
      secondPrice: {
        title: 'Quantity',
        subTitle: '14.9K',
        icon: '/images/activityItems/ethereum.svg'
      },
      thirdPrice: {
        title: 'floor price',
        subTitle: '16,4',
        icon: '/images/activityItems/ethereum.svg'
      },
      fourPrice: {
        title: 'traded',
        subTitle: '26,4',
        icon: '/images/activityItems/ethereum.svg'
      }
    },
    sale: {
      title: 'Sale',
      subTitle: '16,4',
      captureTime: '6 Minutes ago',
      icon: '/images/activityItems/ethereum.svg'
    }
  }
]
