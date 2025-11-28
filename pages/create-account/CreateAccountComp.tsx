"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CreateAccountComp = () => {

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    let form = new FormData(e.currentTarget)
    let data = Object.fromEntries(form)
    alert("Hi " + data.firstName + data.lastName + ", your email is " + data.email + " with password:" + data.password);
    e.currentTarget.submit()
  }
  return (
    <div className='max-w-screen w-full h-[92vh] md:h-screen flex box-border overflow-hidden'>
      {/* left side */}
      <div className='relative w-full md:w-[41.5%] h-full bg-[url(/createaccount-bg.jpg)] bg-cover md:bg-none flex flex-col justify-between'>
        <div className='w-full flex-1 flex justify-center bg-white/30 pt-5 overflow-y-auto'>
          <div className='h-fit w-fit rounded-xl my-10'>
            {/* logo */}
            <Link href={"/"}>
              <div className='relative w-65 h-14 mb-5 mx-auto'>
                <Image src="/IngramLogo.png" alt='logo' fill className='object-contain md:scale-115 lg:scale-150' />
              </div>
            </Link>
            <h2 className='text-[24px] font-semibold text-[#535a62] mb-4 text-center'>Create Account</h2>
            {/* form */}
            <form className="flex flex-col items-center w-full max-w-xs mx-auto p-4" onSubmit={handleSubmit}>
              {/* First Name */}
              <div className="mb-4 w-full">
                <label className="block mb-1 text-[14px] text-[#535a62] font-semibold" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name='firstName'
                  required
                  className="w-full border border-white/50 md:border-gray-300 px-3 py-1.5 text-[#535a62] rounded focus:outline-none focus:border-transparent focus:ring-2 focus:ring-[#3a7c92]"
                />
              </div>

              {/* Last Name */}
              <div className="mb-4 w-full">
                <label className="block mb-1 text-[14px] text-[#535a62] font-semibold" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full border border-white/50 md:border-gray-300 px-3 py-1.5 text-[#535a62] rounded focus:outline-none focus:border-transparent focus:ring-2 focus:ring-[#3a7c92]"
                />
              </div>

              {/* Email */}
              <div className="mb-4 w-full">
                <label className="block mb-1 text-[14px] text-[#535a62] font-semibold" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-white/50 md:border-gray-300 px-3 py-1.5 text-[#535a62] rounded focus:outline-none focus:border-transparent focus:ring-2 focus:ring-[#3a7c92]"
                />
              </div>

              {/* Password */}
              <div className="mb-4 w-full">
                <label className="block mb-1 text-[14px] text-[#535a62] font-semibold" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full border border-white/50 md:border-gray-300 px-3 py-1.5 bg-[#f5f5f593] md:bg-[#f5f5f5] text-[#535a62] rounded focus:outline-none focus:border-transparent focus:ring-2 focus:ring-[#3a7c92]"
                />
              </div>

              {/* Confirm Password */}
              <div className="mb-4 w-full">
                <label className="block mb-1 text-[14px] text-[#535a62] font-semibold" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  className="w-full border border-white/50 md:border-gray-300 px-3 py-1.5 bg-[#f5f5f593] md:bg-[#f5f5f5] text-[#535a62] rounded focus:outline-none focus:border-transparent focus:ring-2 focus:ring-[#3a7c92]"
                />
              </div>

              {/* Checkboxes */}
              <div className="flex flex-col gap-3 mb-4 w-full text-[14px] text-[#535a62]">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span>I want to receive promotional emails from IngramPublishers</span>
                </label>

                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" required className="mt-1" />
                  <span>
                    I agree to the <span className="text-[#3a7c92]">Privacy Notice</span> and
                    <span className="text-[#3a7c92]"> Terms of Service</span>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-[205px] h-9 bg-[#3a7c92] text-white rounded-lg hover:bg-[#4e9eb8] transition duration-100 cursor-pointer"
              >
                Create Account
              </button>
            </form>
            <p className='text-xs text-center'>Already have an account? {" "}
              <Link href="/login" className="text-[#3a7c92] hover:text-[#244e5b] hover:underline ">Login</Link>
            </p>
          </div>

        </div>

        <footer className='w-full text-xs text-black text-center md:text-[#969696] py-2 px-3 flex flex-col items-center justify-center border-t border-gray-200'>
          <p>© Copyright 2025 Lightning Source LLC. All Rights Reserved.
          </p>
          <div className='space-x-3'>
            <Link href="#" className='md:text-[#3a7c92] hover:text-[#244e5b] hover:underline'>Privacy Notice</Link>
            <Link href="#" className='md:text-[#3a7c92] hover:text-[#244e5b] hover:underline'>Terms of Use</Link>
          </div>
        </footer>
      </div>
      {/* right side */}
      <div className='hidden md:flex w-[58.5%] h-screen bg-[url(/createaccount-bg.jpg)] bg-center bg-cover bg-no-repeat text-white items-center'>
        <div className='max-w-196 space-y-6 px-5 lg:px-15 xl:px-23'>
          <h1 className='text-[44px] font-bold leading-12'>
            Why IngramPublishers?
          </h1>
          <ul className='grid grid-cols-2 grid-rows-3 gap-y-13 gap-x-1 lg:gap-x-4'>
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
                <Image src="/login-page-education.svg" alt='image' fill className='object-contain' />
              </div>
              <div>
                <h2 className='text-[18px] font-bold'>
                  Free Publisher Education
                </h2>
                <p className='text-[14px]'>
                  Don’t just publish. Learn how to publish successfully.
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
              <div className='relative w-35 h-14'>
                <Image src="/login-page-experts.svg" alt='image' fill className='object-contain' />
              </div>
              <div>
                <h2 className='text-[18px] font-bold'>
                  Access to Experts
                </h2>
                <p className='text-[14px]'>
                  Phone, email, and chat support as well as discounts with editors, designers, and more.
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
            <div className='flex justify-center items-center'>
              <button className='px-5 py-1.5 rounded-lg bg-white hover:bg-white/80 cursor-pointer text-[#3a7c92] mt-4 transition-all duration-300'>
                <Link href={"#"}>
                  Learn More
                </Link>
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CreateAccountComp