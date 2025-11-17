import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex lg:flex-col px-10 lg:px-0 w-full mx-auto'>
            <div className='bg-white w-full flex justify-center h-[70px]'>
                <div className='flex justify-between items-center lg:max-w-[76vw] w-full h-full'>
                    <div className='relative w-[210px] h-11'>
                        <Image src='/textLogo.webp' alt='logo' fill sizes="(max-width: 768px) 50vw, 200px" className='object-contain' />
                    </div>
                    {/* links */}
                    <ul className='hidden lg:flex gap-4 text-[14px] font-normal font-[sans-serif]'>
                        <a href="#" className='text-[#3a7c92]'>Create Account</a>
                        <a href="#" className='text-[#505050]'>Login</a>
                        <a href="#" className='text-[#505050]'>Help</a>
                    </ul>
                </div>
            </div>

            {/* hamburger */}
            <div className='flex lg:hidden flex-col items-center justify-center gap-1'>
                <div className='w-4.5 h-0.5 rounded-[4px] bg-[#a5a5a5]'></div>
                <div className='w-4.5 h-0.5 rounded-[4px] bg-[#a5a5a5]'></div>
                <div className='w-4.5 h-0.5 rounded-[4px] bg-[#a5a5a5]'></div>
            </div>
            {/* navbar links */}
            <div className='relative z-20 flex justify-center items-center bg-[#3a7c92] text-white w-full h-[60px]'>
                <div className='flex justify-between items-center max-w-[76vw] w-full h-full'>
                    <div className='flex items-center w-full h-full'>
                        <ul className='flex gap-2 items-center font-[sans-serif] h-full'>
                            <li className='w-full h-full flex items-center'>
                                <Link href={'/'}>
                                    <Image src='/home.png' alt='home' width={20} height={10} className='invert-100 h-5 cursor-pointer' />
                                </Link>
                            </li>
                            <li className='group relative tracking-wide cursor-pointer w-full h-full px-3 flex items-center hover:bg-[#4e9eb8]'>Publish
                                {/* dropdown */}
                                <ul className='absolute z-0 group-hover:z-30 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto  w-[210px] transition-all duration-200 top-full left-0 bg-[#3a7c92] text-nowrap '>
                                    <li className='hover:bg-[#4e9eb8] w-full px-6 py-2.5 border-b border-[#4e9eb8]'>
                                        <Link href={"/how-it-works"} className='w-full h-full inline-block'>How It Works</Link></li>
                                    <li className='hover:bg-[#4e9eb8] relative group/sub w-full px-6 py-2.5 border-b border-[#4e9eb8]'>
                                        <Link href={"/plan-your-book"} className='w-full h-full inline-block '>Plan Your Book</Link>
                                        <ul className='absolute z-0 group-hover/sub:z-30 opacity-0 group-hover/sub:opacity-100 pointer-events-none group-hover/sub:pointer-events-auto  w-[150px] transition-all duration-200 top-0 left-full bg-[#3a7c92] text-nowrap '>
                                            <li className='hover:bg-[#4e9eb8] w-full px-6 py-2.5 border-b border-[#4e9eb8]'>
                                                <Link href={"/plan-your-book"} className='w-full h-full inline-block'>Book Options</Link></li>
                                            <li className='hover:bg-[#4e9eb8] w-full px-6 py-2.5 border-b border-[#4e9eb8]'>
                                                <Link href={"/plan-your-book"} className='w-full h-full inline-block'>Ebooks</Link></li>
                                        </ul>
                                    </li>
                                    <li className='hover:bg-[#4e9eb8] w-full px-6 py-2.5 border-b border-[#4e9eb8]'>
                                        <Link href={"/plan-your-book"} className='w-full h-full inline-block'>How to Self-Publish</Link></li>
                                    <li className='hover:bg-[#4e9eb8] w-full px-6 py-2.5 border-b border-[#4e9eb8]'>
                                        <Link href={"/plan-your-book"} className='w-full h-full inline-block'>How to Design a Book</Link></li>
                                    <li className='hover:bg-[#4e9eb8] w-full px-6 py-2.5'>
                                        <Link href={"/plan-your-book"} className='w-full h-full inline-block'>Book-Building Tool</Link></li>
                                </ul>
                            </li>
                            <li className='group relative tracking-wide cursor-pointer w-full h-full px-3 flex items-center hover:bg-[#4e9eb8] '>Promote
                                {/* dropdown */}
                                <ul className='absolute z-0 group-hover:z-30 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto  w-[210px] transition-all duration-200 top-full left-0 bg-[#3a7c92] text-nowrap '>
                                    <li className='hover:bg-[#4e9eb8] w-full px-6 py-2.5 border-b border-[#4e9eb8]'>
                                        <Link href={"/how-it-works"} className='w-full h-full inline-block'>Promote My Book</Link></li>
                                    <li className='hover:bg-[#4e9eb8] w-full px-6 py-2.5 border-b border-[#4e9eb8]'>
                                        <Link href={"/how-it-works"} className='w-full h-full inline-block'>How to Market a Book</Link></li>
                                </ul>
                            </li>
                            <li className='group relative tracking-wide cursor-pointer w-full h-full px-3.5 flex items-center hover:bg-[#4e9eb8] '>Sell
                                {/* dropdown */}
                                <ul className='absolute z-0 group-hover:z-30 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto  w-[140px] transition-all duration-200 top-full left-0 bg-[#3a7c92] text-nowrap '>
                                    <li className='hover:bg-[#4e9eb8] w-full px-6 py-2.5 border-b border-[#4e9eb8]'>
                                        <Link href={"/how-it-works"} className='w-full h-full inline-block'>Distribution</Link></li>
                                    <li className='hover:bg-[#4e9eb8] w-full px-6 py-2.5 border-b border-[#4e9eb8]'>
                                        <Link href={"/how-it-works"} className='w-full h-full inline-block'>Share & Sell</Link></li>
                                </ul>
                            </li>
                            <li className='group relative tracking-wide cursor-pointer w-full h-full px-3 flex items-center hover:bg-[#4e9eb8] '>Print
                                {/* dropdown */}
                                <ul className='absolute z-0 group-hover:z-30 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto  w-[160px] transition-all duration-200 top-full left-0 bg-[#3a7c92] text-nowrap '>
                                    <li className='hover:bg-[#4e9eb8] w-full px-6 py-2.5 border-b border-[#4e9eb8]'>
                                        <Link href={"/how-it-works"} className='w-full h-full inline-block'>Print My Book</Link></li>
                                    <li className='hover:bg-[#4e9eb8] w-full px-6 py-2.5 border-b border-[#4e9eb8]'>
                                        <Link href={"/how-it-works"} className='w-full h-full inline-block'>Print Discounts</Link></li>
                                </ul>
                            </li>
                            <li className='group relative tracking-wide cursor-pointer w-full h-full px-3 flex items-center hover:bg-[#4e9eb8] '>Pricing
                                {/* dropdown */}
                                <ul className='absolute z-0 group-hover:z-30 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto  w-[150px] transition-all duration-200 top-full left-0 bg-[#3a7c92] text-nowrap '>
                                    <li className='hover:bg-[#4e9eb8] w-full px-6 py-2.5 border-b border-[#4e9eb8]'>
                                        <Link href={"/how-it-works"} className='w-full h-full inline-block'>What It Costs</Link></li>
                                </ul>
                            </li>
                            <li className='group relative tracking-wide cursor-pointer w-full h-full px-3 flex items-center hover:bg-[#4e9eb8] '>Resources
                                {/* dropdown */}
                                <ul className='absolute z-0 group-hover:z-30 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto  w-[125px] transition-all duration-200 top-full left-0 bg-[#3a7c92] text-nowrap '>
                                    <li className='hover:bg-[#4e9eb8] w-full px-6 py-2.5 border-b border-[#4e9eb8]'>
                                        <Link href={"/how-it-works"} className='w-full h-full inline-block'>Education</Link></li>
                                    <li className='hover:bg-[#4e9eb8] w-full px-6 py-2.5 border-b border-[#4e9eb8]'>
                                        <Link href={"/how-it-works"} className='w-full h-full inline-block'>Blog</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className='flex gap-4 justify-between items-center bg-white px-3 h-[38px] w-[370px] rounded-[8px]'>
                        <input type="search" placeholder='Search' className='text-base font-[sans-serif] w-full font-normal text-[#444] outline-none' />
                        <Image src='/search.png' alt='search' width={15} height={15} className='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar