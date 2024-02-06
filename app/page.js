/** @format */

'use client'

import { useEffect } from 'react'
import GlobalApi from './_utils/GlobalApi'
import { UserButton, useUser } from '@clerk/nextjs'

export default function Home() {
  const { user } = useUser()

  useEffect(() => {
    user && createUserProfile()
  }, [user])

  const createUserProfile = () => {
    if (!localStorage.getItem('isUserLogin')) {
      const data = {
        name: user.fullName,
        email: user.primaryEmailAddress.emailAddress,
        image: user.imageUrl
      }
      GlobalApi.createUser(data).then((res) => {
        localStorage.setItem('isUserLogin', true)
      })
    }
  }

  return (
    <div>
      <UserButton />
    </div>
  )
}
