import { Asked } from '@/components/Asked/Asked'
import { Collections } from '@/components/Collections/Collections'
import { Community } from '@/components/Community/Community'
import { Create } from '@/components/Create/Create'
import { Explore } from '@/components/Explore/Explore'
import { Hero } from '@/components/Hero/Hero'
import { Unleash } from '@/components/Unleash/Unleash'
import { Weekly } from '@/components/Weekly/Weekly'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DivSea NFT | Home',
  icons: '/images/icons/Wave.svg'
}

export default function Home() {
  return (
    <>
      <Hero />
      <Weekly />
      <Collections />
      <Explore />
      <Unleash />
      <Community />
      <Asked />
      <Create />
    </>
  )
}
