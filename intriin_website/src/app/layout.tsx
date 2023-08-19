import type { Metadata } from 'next'
import CommonHeader from '@/components/common/CommonHeader'
import StyledComponentsRegistry from '../lib/AntdRegistry';
import './globals.css'
import CommonFooter from '@/components/common/CommonFooter';


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
