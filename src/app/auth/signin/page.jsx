'use client'

import React, { useState } from 'react'
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField
} from '@heroui/react'
import toast from 'react-hot-toast'
import { authClient } from '@/lib/auth-client'
import { Check, Eye, EyeSlash } from '@gravity-ui/icons'
import Link from 'next/link'

const SignInPage = () => {
  const [isVisible, setIsVisible] = useState(false)

  const onSubmit = async e => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const userData = Object.fromEntries(formData.entries())

    console.log('Form submitted with', userData)

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      rememberMe: true,
      callbackURL: '/'
    })

    console.log('sign in response:', { data, error })

    if (error) {
      toast.error(error.message, {
        duration: 4000,
        style: {
          borderRadius: '12px',
          background: '#ef4444',
          color: '#fff',
          padding: '16px'
        }
      })
    }

    if (data) {
      toast.success('🎉 Welcome back to MangoLibrary!', {
        duration: 4000,
        icon: '📚',
        style: {
          borderRadius: '12px',
          background: '#22c55e',
          color: '#fff',
          padding: '16px'
        }
      })
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-base-200 to-secondary/20 px-4'>
      <div className='w-full max-w-md bg-base-100 shadow-2xl rounded-3xl p-8 border border-base-300'>
        {/* Heading */}
        <div className='text-center mb-8'>
          <h2 className='text-4xl font-bold text-primary'>Welcome Back</h2>

          <p className='text-base-content/70 mt-2'>
            Sign in to your MangoLibrary account
          </p>
        </div>

        {/* Form */}
        <Form className='flex flex-col gap-5' onSubmit={onSubmit}>
          {/* Email */}
          <TextField
            isRequired
            name='email'
            type='email'
            validate={value => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return 'Please enter a valid email address'
              }

              return null
            }}
          >
            <Label>Email</Label>

            <Input
              name='email'
              placeholder='john@example.com'
              className='w-full'
            />

            <FieldError />
          </TextField>

          {/* Password */}
          <TextField isRequired name='password'>
            <Label>Password</Label>

            <InputGroup>
              <InputGroup.Input
                name='password'
                type={isVisible ? 'text' : 'password'}
                placeholder='Enter your password'
              />

              <InputGroup.Suffix>
                <Button
                  isIconOnly
                  aria-label={isVisible ? 'Hide password' : 'Show password'}
                  size='sm'
                  variant='ghost'
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className='size-4' />
                  ) : (
                    <EyeSlash className='size-4' />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
          </TextField>

          {/* Remember + Forgot */}
          <div className='flex items-center justify-between text-sm'>
            <label className='flex items-center gap-2 cursor-pointer'>
              <input type='checkbox' className='checkbox checkbox-sm' />
              Remember me
            </label>

            <Link
              href='/forgot-password'
              className='text-primary hover:underline'
            >
              Forgot Password?
            </Link>
          </div>

          {/* Buttons */}
          <div className='flex flex-col gap-3 mt-2'>
            <Button
              type='submit'
              className='w-full bg-primary text-white font-semibold text-lg'
            >
              <Check />
              Sign In
            </Button>

            <Button type='reset' variant='secondary' className='w-full'>
              Reset
            </Button>
          </div>
        </Form>

        {/* Footer */}
        <div className='text-center mt-6 text-sm'>
          Don&apos;t have an account?{' '}
          <Link
            href='/auth/signup'
            className='text-primary font-semibold hover:underline'
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
