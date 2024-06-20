import type { Metadata } from 'next';
import { ReactNode } from 'react';
import '@/assets/layoutStyles/layout.scss';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { inter, poppins } from '@/constants/layoutFonts';

export const metadata: Metadata = {
  title: 'DivSea NFT | Layout',
  description: 'Discover And Create NFTs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${poppins.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
