import Link from 'next/link'
import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='footer footer-center p-10 bg-base-200 text-base-content rounded'>
      
      {/* Navigation */}
      <nav className='grid grid-flow-col gap-4'>
        <Link href='/' className='link link-hover'>
          About us
        </Link>

        <Link href='/contact' className='link link-hover'>
          Contact
        </Link>

        <Link href='/jobs' className='link link-hover'>
          Jobs
        </Link>

        <Link href='/press' className='link link-hover'>
          Press kit
        </Link>
      </nav>

      {/* Social Media */}
      <div className='grid grid-flow-col gap-6'>
        
        {/* Facebook */}
        <a
          href='https://facebook.com'
          target='_blank'
          rel='noreferrer'
          className='hover:text-primary transition-all text-4xl'
        >
          <FaFacebook />
        </a>
        
        <a
          href='/'
          target='_blank'
          rel='noreferrer'
          className='hover:text-red-500 transition-all text-4xl'
        >
          <IoLogoYoutube />
        </a>

        
        <a
          href='/'
          target='_blank'
          rel='noreferrer'
          className='hover:text-pink-500 transition-all text-4xl'
        >
          <FaGithub />
        </a>        
        <a
          href='/'
          target='_blank'
          rel='noreferrer'
          className='hover:text-pink-500 transition-all text-4xl'
        >
          <AiFillInstagram />
        </a>
      </div>
      
      <aside>
        <p>
          Copyright © 2026 - All rights reserved by
          <span className='font-semibold text-primary ml-1'>
            Mango Library
          </span>
        </p>
      </aside>
    </footer>
  )
}

export default Footer