'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Check, Eye, EyeSlash } from '@gravity-ui/icons'
import toast from 'react-hot-toast'
import { FcGoogle } from "react-icons/fc";

import {
  Button, Description, FieldError, Form, Input, InputGroup, Label, TextField
} from '@heroui/react'

import { authClient } from '@/lib/auth-client'
import Link from 'next/link'

const SignUpPage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  const toastErrorStyle = {
    duration: 4000,
    style: {
      borderRadius: '12px',
      background: '#ef4444',
      color: '#fff',
      padding: '16px'
    }
  }

  const toastSuccessStyle = {
    duration: 4000,
    icon: '📚',
    style: {
      borderRadius: '12px',
      background: '#22c55e',
      color: '#fff',
      padding: '16px'
    }
  }

  // Email Signup
  const onSubmit = async e => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const userData = Object.fromEntries(formData.entries())

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: userData.photo,
      callbackURL: '/'
    })

    console.log('sign up response:', { data, error })

    if (error) {
      toast.error(error.message, toastErrorStyle)
    }

    if (data) {
      toast.success('🎉 Welcome back to MangoLibrary!', toastSuccessStyle)
      router.push('/')
    }
  }

  // Google Login
  const handleGoogleLogin = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: 'google',
      callbackURL: '/'
    })

    console.log({ data, error })

    if (error) {
      toast.error(error.message, toastErrorStyle)
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-base-200 to-secondary/20 px-4'>

      <div className='w-full max-w-md bg-base-100/90 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-base-300'>

        {/* Header */}
        <div className='text-center mb-8'>
          <h2 className='text-4xl font-extrabold text-primary'>
            Create Account
          </h2>

          <p className='text-base-content/70 mt-2'>
            Join MangoLibrary today
          </p>
        </div>

        {/* Google Login */}
        <Button
          type='button'
          onPress={handleGoogleLogin}
          className='w-full bg-white text-black border border-gray-300 hover:bg-gray-100'
        >
          <FcGoogle />
          Continue with Google
        </Button>

        {/* Divider */}
        <div className='divider text-sm text-base-content/50 my-6'>
          OR CONTINUE WITH EMAIL
        </div>

        {/* Form */}
        <Form className='flex flex-col gap-5' onSubmit={onSubmit}>

          {/* Name */}
          <TextField
            isRequired
            name='name'
            validate={value => {
              if (value.length < 3) {
                return 'Name must be at least 3 characters'
              }

              return null
            }}
          >
            <Label>Full Name</Label>

            <Input
              name='name'
              placeholder='John Doe'
              className='w-full'
            />

            <FieldError />
          </TextField>

          {/* Email */}
          <TextField
            isRequired
            name='email'
            type='email'
            validate={value => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return 'Please enter a valid email address'
              }

              return null
            }}
          >
            <Label>Email Address</Label>

            <Input
              name='email'
              placeholder='john@example.com'
              className='w-full'
            />

            <FieldError />
          </TextField>

          {/* Photo URL */}
          <TextField
            isRequired
            name='photo'
            validate={value => {
              try {
                new URL(value)
                return null
              } catch {
                return 'Please enter a valid URL'
              }
            }}
          >
            <Label>Photo URL</Label>

            <Input
              name='photo'
              placeholder='https://example.com/photo.jpg'
              className='w-full'
            />

            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name='password'
            validate={value => {
              if (value.length < 8) {
                return 'Password must be at least 8 characters'
              }

              if (!/[A-Z]/.test(value)) {
                return 'Password must contain at least one uppercase letter'
              }

              if (!/[0-9]/.test(value)) {
                return 'Password must contain at least one number'
              }

              return null
            }}
          >
            <Label>Password</Label>

            <InputGroup>
              <InputGroup.Input
                name='password'
                type={isVisible ? 'text' : 'password'}
                placeholder='Create a strong password'
              />

              <InputGroup.Suffix>
                <Button
                  isIconOnly
                  variant='ghost'
                  size='sm'
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

            <Description>
              Must contain 8+ characters, 1 uppercase letter & 1 number
            </Description>

            <FieldError />
          </TextField>

          {/* Terms */}
          <label className='flex items-start gap-2 text-sm cursor-pointer'>
            <input
              type='checkbox'
              className='checkbox checkbox-sm mt-1'
              required
            />

            <span>
              I agree to the{' '}
              <span className='text-primary font-medium'>
                Terms & Conditions
              </span>
            </span>
          </label>

          {/* Buttons */}
          <div className='flex flex-col gap-3 mt-2'>
            <Button
              type='submit'
              className='w-full bg-primary text-white font-semibold text-lg'
            >
              <Check />
              Create Account
            </Button>

            <Button
              type='reset'
              variant='secondary'
              className='w-full'
            >
              Reset
            </Button>
          </div>
        </Form>

        {/* Footer */}
        <div className='text-center mt-6 text-sm'>
          Already have an account?{' '}
          <Link
            href='/auth/signin'
            className='text-primary font-semibold hover:underline'
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage