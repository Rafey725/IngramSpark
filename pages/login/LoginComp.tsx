"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const LoginComp = () => {
  const [showPass, setShowPass] = useState(false)

  function handleShowPassword() {
    setShowPass(prev => !prev)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    let form = new FormData(e.currentTarget)
    let data = Object.fromEntries(form)
    alert("Hi, your email is " + data.email + " with password:" + data.password);
    e.currentTarget.submit()
  }

  return (
    <div className='max-w-screen w-full h-[92vh] md:h-screen flex box-border'>
      {/* left side */}
      <div className='relative w-full md:w-[41.5%] h-full bg-[url(/login-bg.jpg)] bg-center md:bg-none flex flex-col justify-between items-center md:pt-0'>
        <div className='w-full flex-1 mx-3 flex pt-10 md:pt-30 justify-center bg-white/30 md:bg-none'>
          <div className='h-fit flex flex-col items-center py-5 px-2 sm:px-5 rounded-xl'>
            {/* logo */}
            <Link href={"/"}>
              <div className='relative w-65 h-14 mb-5'>
                <Image src="/IngramLogo.png" alt='logo' fill className='object-contain md:scale-115 lg:scale-150' />
              </div>
            </Link>
            <h2 className='text-[24px] font-semibold text-[#535a62] mb-4'>Log In</h2>
            {/* form */}
            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
              <div className="mb-4">
                <label className="block mb-1 text-[14px] text-[#535a62] font-semibold" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-[278px] sm:w-[290px] border border-gray-300 px-3 py-1.5 text-[#535a62] rounded focus:outline-none focus:border-transparent focus:ring-2 focus:ring-[#3a7c92]"
                />
              </div>

              <div>
                <label className="block mb-1 text-[14px] text-[#535a62] font-semibold" htmlFor="password">
                  Password
                </label>
                <div className="mb-4 flex items-center rounded">
                  <input
                    type={showPass ? "text" : "password"}
                    id="password"
                    name="password"
                    required
                    className="relative z-10 w-[235px] sm:w-[247px] border border-white/50 md:border-gray-300 px-3 py-1.5 bg-[#f5f5f593] md:bg-[#f5f5f5] text-[#535a62] rounded-tl rounded-bl focus:outline-none focus:border-transparent focus:ring-2 focus:ring-[#3a7c92]"
                  />
                  <div className='border-t border-b border-r rounded-tr rounded-br border-gray-300 h-9.5 px-3 flex items-center'>
                    <button
                      type="button"
                      onClick={handleShowPassword}
                    >
                      <div className='relative w-5 h-5'>
                        <Image src={showPass ? `/showPass.png` : `/hidePass.png`} alt='show' fill className='object-contain cursor-pointer' />
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="mb-4 text-right">
                <Link href="#" className="text-[#3a7c92] hover:text-[#244e5b] hover:underline text-sm">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-[205px] h-9 bg-[#3a7c92] text-white rounded-lg hover:bg-[#4e9eb8] transition duration-100 cursor-pointer"
              >
                Log In
              </button>

              {/* seperator */}
              <div className='w-[90%] h-px bg-gray-200 mt-4'></div>

              <p className="text-center mt-4 text-xs text-[#535a62]">
                Need an IngramSpark account?{" "}
                <Link href="/create-account" className="text-[#3a7c92] hover:text-[#244e5b] hover:underline text-sm">
                  Create Account
                </Link>
              </p>
            </form>
          </div>
        </div>
        <footer className='relative md:absolute md:bottom-0 left-0 w-full text-xs text-white text-center md:text-[#969696] py-2 px-3 flex flex-col items-center justify-center border-t border-gray-200'>
          <p>© Copyright 2025 Lightning Source LLC. All Rights Reserved.
          </p>
          <div className='space-x-3'>
            <Link href="#" className='md:text-[#3a7c92] hover:text-[#244e5b] hover:underline'>Privacy Notice</Link>
            <Link href="#" className='md:text-[#3a7c92] hover:text-[#244e5b] hover:underline'>Terms of Use</Link>
          </div>
        </footer>
      </div>

      {/* right side */}
      <div className='hidden md:flex w-[58.5%] h-screen bg-[url(/login-bg.jpg)] bg-center text-white items-center pl-10 lg:pl-23'>
        <div className='max-w-78 space-y-6'>
          <h1 className='text-[44px] font-bold leading-12'>
            New to IngramPublishers?
          </h1>
          <ul className='space-y-10'>
            <li className='flex gap-3'>
              <div className='relative w-21 h-14'>
                <Image src="/login-page-formats.svg" alt='image' fill className='object-contain' />
              </div>
              <div>
                <h2 className='text-[18px] font-bold'>
                  Most Popular Formats
                </h2>
                <p className='text-[14px]'>
                  Hardcovers, paperbacks, and ebooks in color or black and white.
                </p>
              </div>
            </li>

            <li className='flex gap-3'>
              <div className='relative w-21 h-14'>
                <Image src="/login-page-print.svg" alt='image' fill className='object-contain' />
              </div>
              <div>
                <h2 className='text-[18px] font-bold'>
                  Print on Demand
                </h2>
                <p className='text-[14px]'>
                  One book or thousands — print what you need and nothing more.
                </p>
              </div>
            </li>

            <li className='flex gap-3'>
              <div className='relative w-21 h-14'>
                <Image src="/login-page-distribution.svg" alt='image' fill className='object-contain' />
              </div>
              <div>
                <h2 className='text-[18px] font-bold'>
                  Global Distribution
                </h2>
                <p className='text-[14px]'>
                  One platform for all your print and ebook distribution needs worldwide.
                </p>
              </div>
            </li>
          </ul>
          <button className='px-5 py-1.5 rounded-lg bg-white hover:bg-white/80 cursor-pointer text-[#3a7c92] mt-4 transition-all duration-300'>
            <Link href={"#"}>
              Learn More
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginComp