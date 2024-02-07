/** @format */
'use client'

import { Outfit } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { UserContext } from './_context/UserContext'
import { useState } from 'react'

const inter = Outfit({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Social Panda',
//   description: 'Social Web Application'
// }

export default function RootLayout({ children }) {
  const [userDetail, setUserDetail] = useState()

  return (
    <ClerkProvider>
      <UserContext.Provider value={{ userDetail, setUserDetail }}>
        <html lang='en'>
          <body className={inter.className}>{children}</body>
        </html>
      </UserContext.Provider>
    </ClerkProvider>
  )
}
