import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJanjure = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-janjuree',
})

export const metadata: Metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma cápsula do tempo construida com React, Next.js, TailwindCSS e TypeScript.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-AO">
      <body
        className={`${roboto.variable} ${baiJanjure.variable} font-sans bg-gray-900 text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
