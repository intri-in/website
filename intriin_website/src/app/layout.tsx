import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CommonHeader from '@/components/common/CommonHeader'
import StyledComponentsRegistry from '../lib/AntdRegistry';
import './globals.css'
import CommonFooter from '@/components/common/CommonFooter';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Intri_IN',
  description: 'Spaghetti Code, Resurrected',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <CommonHeader />
          {children}
          <CommonFooter />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
