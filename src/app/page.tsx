import { Hero } from "@/components/Hero/Hero";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'DivSea NFT | Home',
}

export default function Home() {
  return <main>
    <Hero />
  </main>;
}
