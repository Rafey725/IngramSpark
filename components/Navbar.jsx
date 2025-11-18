"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Navbar = () => {
    const [hamburgerDrop, setHamburgerDrop] = useState(false)
    const [dropDownName, setDropDownName] = useState("")
    const [subDropDownName, setSubDropDownName] = useState("")

    function handleHamburger() {
        setHamburgerDrop(!hamburgerDrop)
    }

    function handleDropdown(name) {
        if (dropDownName === name) {
            setDropDownName("")
        } else {
            setDropDownName(name)
        }
    }
    function handleSubDropdown(name) {
        if (subDropDownName === name) {
            setSubDropDownName("")
        } else {
            setSubDropDownName(name)
        }
    }

    useEffect(() => {
        document.querySelectorAll(".ham-dropdown a").forEach((el) => {
            el.addEventListener("click", () => {
                setHamburgerDrop(false)
            })
        })
    }, [hamburgerDrop])

    return (
        <div className='relative flex lg:flex-col px-5 lg:px-0 w-full mx-auto'>
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
            <div
                onClick={handleHamburger}
                className='flex lg:hidden flex-col items-center justify-center gap-1 cursor-pointer'>
                <div className='w-4.5 h-0.5 rounded-[4px] bg-[#a5a5a5]'></div>
                <div className='w-4.5 h-0.5 rounded-[4px] bg-[#a5a5a5]'></div>
                <div className='w-4.5 h-0.5 rounded-[4px] bg-[#a5a5a5]'></div>
            </div>

            {/* hamburger dropdown */}
            <ul
                className={`ham-dropdown absolute z-50 overflow-x-hidden w-full transition-height duration-300 top-full right-0 bg-white shadow-sm text-nowrap ${hamburgerDrop ? ' pointer-events-auto h-[348px] ' : ' pointer-events-none h-0 '}`}>
                <li onClick={() => handleDropdown("home")} className='hover:bg-[#f6f6f6] w-full px-6 py-3 border-y border-black/10 font-semibold'>
                    <Link href={"/"} className='w-full h-full inline-block'>Home</Link>
                </li>
                <li className=' w-full border-y border-black/10 cursor-pointer'>
                    <p onClick={() => handleDropdown("publish")} className='w-full h-full px-6 py-3 inline-block hover:bg-[#f6f6f6] font-semibold'>Publish</p>
                    {/* sub dropdown */}
                    <ul className={`w-full text-black/70 overflow-hidden transition-all duration-300 ${dropDownName === "publish" ? 'max-h-[460px]' : 'max-h-0'}`}>
                        <li className='hover:bg-[#f6f6f6] w-full px-12 py-3 border-y border-black/10 '>
                            <Link href={"/how-it-works"} className='w-full h-full inline-block'>How It Works</Link>
                        </li>
                        <li onClick={() => handleSubDropdown("plan-your-book")} className='hover:bg-[#f6f6f6] w-full border-y border-black/10 '>
                            <p className='w-full h-full px-12 inline-block py-3 font-semibold'>
                                <Link href={"/plan-your-book"}>Plan Your Book</Link>
                            </p>
                            {/* nested sub */}
                            <ul className={`w-full overflow-hidden transition-all duration-300 ${subDropDownName === "plan-your-book" ? 'pointer-events-auto max-h-[200px] ' : 'pointer-events-none max-h-0 '}`}>
                                <li className='hover:bg-[#f6f6f6] w-full px-18 py-3 border-y border-black/10 '>
                                    <Link href={"/plan-your-book"} className='w-full h-full inline-block'>Book Options</Link>
                                </li>
                                <li className='hover:bg-[#f6f6f6] w-full px-18 py-3 border-y border-black/10 '>
                                    <Link href={"/plan-your-book"} className='w-full h-full inline-block'>Ebooks</Link>
                                </li>
                            </ul>
                        </li>
                        <li className='hover:bg-[#f6f6f6] w-full px-12 py-3 border-y border-black/10'>
                            <Link href={"/how-to-self-publish"} className='w-full h-full inline-block'>How to Self-Publish</Link>
                        </li>
                        <li className='hover:bg-[#f6f6f6] w-full px-12 py-3 border-y border-black/10'>
                            <Link href={"/plan-your-book"} className='w-full h-full inline-block'>How to Design a Book</Link>
                        </li>
                        <li className='hover:bg-[#f6f6f6] w-full px-12 py-3 border-t border-black/10'>
                            <Link href={"/plan-your-book"} className='w-full h-full inline-block'>Book-Building Tool</Link>
                        </li>
                    </ul>
                </li>
                <li className=' w-full border-y border-black/10 cursor-pointer'>
                    <p onClick={() => handleDropdown("promote")} className='w-full h-full px-6 py-3 inline-block hover:bg-[#f6f6f6] font-semibold'>Promote</p>
                    {/* sub dropdown */}
                    <ul className={`w-full text-black/70 overflow-hidden transition-all duration-300 ${dropDownName === "promote" ? 'max-h-[460px]' : 'max-h-0'}`}>
                        <li className='hover:bg-[#f6f6f6] w-full px-12 py-3 border-y border-black/10 '>
                            <Link href={"/how-it-works"} className='w-full h-full inline-block'>Promote My Book</Link>
                        </li>
                        <li className='hover:bg-[#f6f6f6] w-full px-12 py-3 border-t border-black/10 '>
                            <Link href={"/how-it-works"} className='w-full h-full inline-block'>How to Market a Book</Link>
                        </li>
                    </ul>
                </li>
                <li className=' w-full border-y border-black/10 cursor-pointer'>
                    <p onClick={() => handleDropdown("sell")} className='w-full h-full px-6 py-3 inline-block hover:bg-[#f6f6f6] font-semibold'>Sell</p>
                    {/* sub dropdown */}
                    <ul className={`w-full text-black/70 overflow-hidden transition-all duration-300 ${dropDownName === "sell" ? 'max-h-[460px]' : 'max-h-0'}`}>
                        <li className='hover:bg-[#f6f6f6] w-full px-12 py-3 border-y border-black/10 '>
                            <Link href={"/how-it-works"} className='w-full h-full inline-block'>Distribution</Link>
                        </li>
                        <li className='hover:bg-[#f6f6f6] w-full px-12 py-3 border-t border-black/10 '>
                            <Link href={"/how-it-works"} className='w-full h-full inline-block'>Share & Sell</Link>
                        </li>
                    </ul>
                </li>
                <li className=' w-full border-y border-black/10 cursor-pointer'>
                    <p onClick={() => handleDropdown("print")} className='w-full h-full px-6 py-3 inline-block hover:bg-[#f6f6f6] font-semibold'>Print</p>
                    {/* sub dropdown */}
                    <ul className={`w-full text-black/70 overflow-hidden transition-all duration-300 ${dropDownName === "print" ? 'max-h-[460px]' : 'max-h-0'}`}>
                        <li className='hover:bg-[#f6f6f6] w-full px-12 py-3 border-y border-black/10 '>
                            <Link href={"/how-it-works"} className='w-full h-full inline-block'>Print My Book</Link>
                        </li>
                        <li className='hover:bg-[#f6f6f6] w-full px-12 py-3 border-t border-black/10 '>
                            <Link href={"/how-it-works"} className='w-full h-full inline-block'>Print Discounts</Link>
                        </li>
                    </ul>
                </li>
                <li className=' w-full border-y border-black/10 cursor-pointer'>
                    <p onClick={() => handleDropdown("pricing")} className='w-full h-full px-6 py-3 inline-block hover:bg-[#f6f6f6] font-semibold'>Pricing</p>
                    {/* sub dropdown */}
                    <ul className={`w-full text-black/70 overflow-hidden transition-all duration-300 ${dropDownName === "pricing" ? 'max-h-[460px]' : 'max-h-0'}`}>
                        <li className='hover:bg-[#f6f6f6] w-full px-12 py-3 border-t border-black/10 '>
                            <Link href={"/how-it-works"} className='w-full h-full inline-block'>What It Costs</Link>
                        </li>
                    </ul>
                </li>
                <li className=' w-full border-y border-black/10 cursor-pointer'>
                    <p onClick={() => handleDropdown("resources")} className='w-full h-full px-6 py-3 inline-block hover:bg-[#f6f6f6] font-semibold'>Resources</p>
                    {/* sub dropdown */}
                    <ul className={`w-full text-black/70 overflow-hidden transition-all duration-300 ${dropDownName === "resources" ? 'max-h-[460px]' : 'max-h-0'}`}>
                        <li className='hover:bg-[#f6f6f6] w-full px-12 py-3 border-y border-black/10 '>
                            <Link href={"/how-it-works"} className='w-full h-full inline-block'>Education</Link>
                        </li>
                        <li className='hover:bg-[#f6f6f6] w-full px-12 py-3 border-y border-black/10 '>
                            <Link href={"/how-it-works"} className='w-full h-full inline-block'>Blog</Link>
                        </li>
                    </ul>
                </li>
                
            </ul>

            {/* navbar links */}
            <div className='relative z-20 hidden lg:flex justify-center items-center bg-[#3a7c92] text-white w-full h-[60px]'>
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
                                        <Link href={"/how-to-self-publish"} className='w-full h-full inline-block'>How to Self-Publish</Link></li>
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
        </div >
    )
}


export default Navbar