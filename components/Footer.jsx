/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Footer = () => {
  return (
    <div className='w-screen h-auto sm:h-[580px] bg-[#444546] text-white flex justify-between items-center gap-10 flex-col px-10 py-5 border-t'>
      <div className='w-[350px] sm:max-w-[1090px] sm:w-full h-auto sm:h-[380px] flex justify-between flex-col sm:flex-row gap-10'>
        {/* form */}
        <div className='sm:max-w-[305px] w-full h-auto px-2'>
          <form className='w-full h-full flex flex-col gap-2'>
            <h1 className='text-[19px]'>JOIN OUR MAILING LIST</h1>
            {/* name */}
            <div className='text-[#555] text-[18px] flex gap-3 border-t border-white/80 pt-4 pb-2'>
              <input type="text" placeholder='First Name' name='first-name' className='bg-white outline-none w-[50%] h-10 px-2 rounded-[5px]' />
              <input type="text" placeholder='Last Name' name='last-name' className='bg-white outline-none w-[50%] h-10 px-2 rounded-[5px]' />
            </div>
            {/* email */}
            <div className='text-[#555] text-[18px] pb-2'>
              <input type="text" placeholder='Email address*' name='email' className='bg-white outline-none w-full h-10 px-2 rounded-[5px]' />
            </div>
            {/* agreement */}
            <div className='flex flex-col gap-3'>
              <label className='flex gap-1 items-start'>
                <input type="checkbox" name="agreement" id="agreement" className='my-1' />
                <p className='text-[13.5px]'>I agree to receive marketing messages from IngramSpark and consent to the IngramSpark's privacy policy and {""}
                  <a href="#" className=' underline decoration-1 underline-offset-1.5'>terms of use.</a>*</p>
              </label>
              <p className='text-[11px] text-[#c5c5c5]'>This site is protected by reCAPTCHA and the Google {""}
                <a href="#" className='text-white/80 underline decoration-1 underline-offset-1.5'>Privacy Policy</a> and {""}
                <a href="#" className='text-white/80 underline decoration-1 underline-offset-1.5'>Terms of Service</a> apply.</p>
            </div>
            <button className='mt-2 w-full h-[50px] bg-[#f2c02b] hover:bg-[#eab002] text-black rounded-[7px] text-[20px] cursor-pointer transition duration-300'>Submit</button>
            <p className='text-[11px] text-[#c5c5c5]'>By clicking the "submit" button, you are agreeing to receive future marketing e-mail messages from IngramSpark.</p>
          </form>
        </div>
        {/* quick links */}
        <div className='w-full h-full flex flex-col gap-2 px-2'>
          <h1 className='text-[19px]'>QUICK LINKS</h1>
          <div className='w-full grid grid-cols-3 pt-5 border-t border-white/80'>
            <div className=''>
              <ul className='flex flex-col gap-1 items-start justify-center text-[13.5px]'>
                <li>
                  <a href="#" className='hover:underline cursor-pointer underline-offset-1.5 transition duration-100'>Log In</a>
                </li>
                <li>
                  <a href="#" className='hover:underline cursor-pointer underline-offset-1.5 transition duration-100'>Create Account</a>
                </li>
                <li>
                  <a href="#" className='hover:underline cursor-pointer underline-offset-1.5 transition duration-100'>Privacy Notice</a>
                </li>
                <li>
                  <a href="#" className='hover:underline cursor-pointer underline-offset-1.5 transition duration-100'>Terms of Use</a>
                </li>
                <li>
                  <a href="#" className='hover:underline cursor-pointer underline-offset-1.5 transition duration-100'>Accessibility</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className='flex flex-col gap-1 items-start justify-center text-[13.5px]'>
                <li>
                  <a href="#" className='hover:underline cursor-pointer underline-offset-1.5 transition duration-100'>Events</a>
                </li>
                <li>
                  <a href="#" className='hover:underline cursor-pointer underline-offset-1.5 transition duration-100'>Experts</a>
                </li>
                <li>
                  <a href="#" className='hover:underline cursor-pointer underline-offset-1.5 transition duration-100'>Blog</a>
                </li>
                <li>
                  <a href="#" className='hover:underline cursor-pointer underline-offset-1.5 transition duration-100'>FAQs</a>
                </li>
                <li>
                  <a href="#" className='hover:underline cursor-pointer underline-offset-1.5 transition duration-100'>Help</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className='flex flex-col gap-1 items-start justify-center text-[13.5px]'>
                <li>
                  <a href="#" className='hover:underline cursor-pointer underline-offset-1.5 transition duration-100'>Contact Us</a>
                </li>
                <li>
                  <a href="#" className='hover:underline cursor-pointer underline-offset-1.5 transition duration-100'>Publishing Fraud Alert</a>
                </li>
                <li>
                  <a href="#" className='hover:underline cursor-pointer underline-offset-1.5 transition duration-100'>Site Map</a>
                </li>
                <li>
                  <a href="#" className='hover:underline cursor-pointer underline-offset-1.5 transition duration-100'>Environmental Policies</a>
                </li>
                <li>
                  <a href="#" className='hover:underline cursor-pointer underline-offset-1.5 transition duration-100'>Lightning Source LLC</a>
                </li>
                <li>
                  <a href="#" className='hover:underline cursor-pointer underline-offset-1.5 transition duration-100'>Ingram Content Group</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='h-full w-full flex items-center justify-center'>
        <div className='sm:max-w-[1090px] w-full h-full flex flex-col sm:flex-row gap-4 justify-between items-center sm:items-start border-t border-white/80 pt-5 px-5'>
          <div className="flex items-center justify-between gap-1.5">
            {/* facebook */}
            <div className="group bg-white hover:bg-[#1877f2] transition duration-300 cursor-pointer w-7 h-7 flex items-center justify-center rounded-full">
              <img src="/facebook.svg" alt="facebook" className="w-4.5 h-4.5 opacity-80 group-hover:opacity-100 group-hover:invert-100 transition duration-300" />
            </div>
            {/* instagram */}
            <div className="group bg-white hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#5b51d8] hover:insta-bg transition duration-300 cursor-pointer w-7 h-7 flex items-center justify-center rounded-full">
              <img src="/instagram.svg" alt="instagram" className="w-4.5 h-4.5 group-hover:invert-100 transition duration-300" />
            </div>
            {/* tiktok */}
            <div className="group bg-white hover:bg-black transition duration-300 cursor-pointer w-7 h-7 flex items-center justify-center rounded-full">
              <img src="/tiktok.svg" alt="tiktok" className="w-4.5 h-4.5 group-hover:invert-100 transition duration-300" />
            </div>
            {/* youtube */}
            <div className="group bg-white hover:bg-[#c00] transition duration-300 cursor-pointer w-7 h-7 flex items-center justify-center rounded-full">
              <img src="/youtube.svg" alt="youtube" className="w-4.5 h-4.5 opacity-80 group-hover:opacity-100 group-hover:invert-100 transition duration-300" />
            </div>
          </div>
          <div>
            <p className='text-[17px] text-white/90 px-5'>© Copyright 2025 Lightning Source LLC. All Rights Reserved.</p>
          </div>
          <div>
            <img src="/ingram-footer.webp" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer