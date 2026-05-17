'use client'
import { signOut, useSession } from '@/lib/auth-client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const router = useRouter()  
  const pathname = usePathname()  
  const { data, isPending } = useSession() 
  if (isPending) {
    return <div>Loading.....</div>
  }  
  const user = data?.user  
  const handleLogout = async () => {
    await signOut()
    router.push('/auth/signin')
  }  
  const navOptions = (
    <>
      {/* Home */}
      <li>
        <Link
          href='/'
          className={`
            font-semibold
            transition-all
            duration-300

            ${
              pathname === '/'
                ? 'text-primary border-b-2 border-primary'
                : 'hover:text-primary'
            }
          `}
        >
          Home
        </Link>
      </li>
      {/* All Books */}
      <li>
        <Link
          href='/all-books'
          className={`
            font-semibold
            transition-all
            duration-300

            ${
              pathname === '/all-books'
                ? 'text-primary border-b-2 border-primary'
                : 'hover:text-primary'
            }
          `}
        >
          All Books
        </Link>

      </li>

      {/* Profile */}
      {
        user && (
          <li>
            <Link
              href='/profile'
              className={`
                font-semibold
                transition-all
                duration-300

                ${
                  pathname === '/profile'
                    ? 'text-primary border-b-2 border-primary'
                    : 'hover:text-primary'
                }
              `}
            >
              My Profile
            </Link>
          </li>
        )
      }
    </>
  )

  return (

    <div className='navbar bg-base-100 shadow-md px-4 sm:px-8 sticky top-0 z-50'>     
      <div className='navbar-start'>
        {/* Mobile Menu */}
        <div className='dropdown'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost lg:hidden'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          {/* Mobile Dropdown */}
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            {navOptions}
          </ul>

        </div>

        {/* Logo */}
        <Link
          href='/'
          className='btn btn-ghost text-2xl font-bold gap-0'
        >
          <span className='text-primary'>
            Mango
          </span>
          Library
        </Link>
      </div>
      {/* Navbar Center */}
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 gap-5'>
          {navOptions}
        </ul>
      </div>      
      <div className='navbar-end gap-3'>
        {
          user ? (           
            <div className='dropdown dropdown-end'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar border border-primary'
              >
                <div className='w-10 rounded-full'>
                  <img
                    alt='User Profile'
                    src={
                      user?.image ||
                      'https://i.ibb.co/mR7097X/user.png'
                    }
                  />
                </div>
              </div>              
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
              >
                <li className='px-4 py-2 font-bold text-primary'>
                  {user?.name}
                </li>
                <li>
                  <Link href='/profile'>
                    View Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className='text-error'
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (            
            <div className='flex gap-2'>
              <Link
                href='/auth/signin'
                className={`
                  btn

                  ${
                    pathname === '/auth/signin'
                      ? 'btn-primary'
                      : 'btn-outline'
                  }
                `}
              >
                Signin
              </Link>
              <Link
                href='/auth/signup'
                className={`
                  btn

                  ${
                    pathname === '/auth/signup'
                      ? 'btn-primary'
                      : 'btn-outline'
                  }
                `}
              >
                Signup
              </Link>

            </div>

          )
        }

      </div>

    </div>
  )
}

export default Navbar