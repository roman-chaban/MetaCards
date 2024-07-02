export interface BidListItem {
  iconPrimary: string
  iconSecondary: string
  iconThirdary: string
  title: string
  subTitle: string
  rating: string
}

type BidList = BidListItem[]

export const bidList: BidList = [
  {
    iconPrimary: '/images/historyBid/first-icon.svg',
    iconSecondary: '/images/historyBid/check.svg',
    iconThirdary: '/images/historyBid/ethereum.svg',
    title: 'Repo',
    subTitle: 'May 17, 2022 at 12:08',
    rating: '1.55'
  },
  {
    iconPrimary: '/images/historyBid/second-icon.svg',
    iconSecondary: '/images/historyBid/check.svg',
    iconThirdary: '/images/historyBid/ethereum.svg',
    title: 'Travis',
    subTitle: 'May 16, 2022 at 12:08',
    rating: '1.40'
  }
]
