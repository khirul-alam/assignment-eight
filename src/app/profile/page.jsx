'use client'

import { useSession } from '@/lib/auth-client'
import Link from 'next/link'
import React from 'react'

const ProfilePage = () => {
  const { data, isPending } = useSession()

  if (isPending) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <span className='loading loading-spinner loading-lg text-primary'></span>
      </div>
    )
  }

  const user = data?.user

  return (
    <div className='min-h-screen bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10 py-10 px-4'>
      
      <div className='max-w-4xl mx-auto bg-base-100 rounded-3xl shadow-2xl overflow-hidden border border-base-300'>
        
        {/* Header */}
        <div className='bg-primary py-8 text-center text-white'>
          <h1 className='text-4xl font-bold'>
            My Profile
          </h1>

          <p className='opacity-80 mt-2'>
            Welcome to Mango Library
          </p>
        </div>

        {/* Body */}
        <div className='p-8 flex flex-col md:flex-row items-center gap-10'>
          
          {/* Avatar */}
          <div className='avatar'>
            <div className='w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 shadow-xl'>
              <img
                src={
                  user?.image ||
                  'https://img.icons8.com/clouds/100/000000/user.png'
                }
                alt='Profile'
              />
            </div>
          </div>

          {/* User Info */}
          <div className='flex-1 space-y-4'>
            
            <h2 className='text-4xl font-bold text-primary'>
              {user?.name || 'No Name'}
            </h2>

            <div className='space-y-2 text-lg'>
              
              <p>
                <span className='font-semibold'>
                  Email:
                </span>{' '}
                {user?.email}
              </p>

              <p>
                <span className='font-semibold'>
                  User ID:
                </span>{' '}
                {user?.id}
              </p>

              <p>
                <span className='font-semibold'>
                  Email Verified:
                </span>{' '}
                {user?.emailVerified ? (
                  <span className='text-green-500 font-semibold'>
                    Verified ✅
                  </span>
                ) : (
                  <span className='text-red-500 font-semibold'>
                    Not Verified ❌
                  </span>
                )}
              </p>
            </div>

            {/* Bio */}
            <div className='bg-base-200 p-4 rounded-2xl mt-4'>
              <p className='italic text-base-content/70'>
                Passionate reader and Mango Library member 📚
              </p>
            </div>

            {/* Button */}
            <div className='pt-4 flex gap-4'>
              
              <Link
                href='/profile/update'
                className='btn btn-primary rounded-xl'
              >
                Update Profile
              </Link>

              <Link
                href='/'
                className='btn btn-outline rounded-xl'
              >
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage