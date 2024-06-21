import { Hero } from '@/components/Hero/Hero';
import { Weekly } from '@/components/Weekly/Weekly';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DivSea NFT | Home',
  icons: '/images/icons/Wave.svg',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Weekly />
    </main>
  );
}
