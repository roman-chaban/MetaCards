import type { ReactNode } from 'react';
import '@/assets/layoutStyles/layout.scss';
import { inter, poppins } from '@/constants/layoutFonts';
import { Providers } from '@/store/provider/provider';
import { ButtonUp } from '@/components/UI/ButtonUp/ButtonUp';

type NoHeaderFooterLayoutProps = {
  children: ReactNode;
};

export default function NoHeaderFooterLayout({ children }: NoHeaderFooterLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className}`}>
        <Providers>
          <main className="main">{children}</main>
          <ButtonUp />
        </Providers>
      </body>
    </html>
  );
}
