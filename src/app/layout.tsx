import type { Metadata } from 'next'
import { ReactNode } from 'react'
import '@/assets/layoutStyles/layout.scss'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import { inter, poppins } from '@/constants/layoutFonts'
import { Providers } from '@/store/provider/provider'
import { ButtonUp } from '@/components/UI/ButtonUp/ButtonUp'

export const metadata: Metadata = {
  title: 'MetaCards | Layout',
  description: 'Discover And Create NFTs',
  icons: '/images/icons/Wave.svg'
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className}`}>
        <Providers>
          <Header />
          <main className="main">{children}</main>
          <Footer />
          <ButtonUp />
        </Providers>
      </body>
    </html>
  )
}
