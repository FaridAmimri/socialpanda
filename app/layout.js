/** @format */

import { Outfit } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Social Panda',
  description: 'Social Web Application'
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
