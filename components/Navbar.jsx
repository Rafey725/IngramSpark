import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex flex-col'>
            <div className='bg-white w-full flex justify-center h-[70px]'>
                <div className='flex justify-between items-center max-w-[76vw] w-full h-full'>
                    <Image src='/textLogo.webp' alt='logo' width={200} height={50} />
                    <ul className='flex gap-4 text-[14px] font-normal font-[sans-serif]'>
                        <a href="#" className='text-[#3a7c92]'>Create Account</a>
                        <a href="#" className='text-[#505050]'>Login</a>
                        <a href="#" className='text-[#505050]'>Help</a>
                    </ul>
                </div>
            </div>
            <div className='flex justify-center items-center bg-[#3a7c92] text-white w-full h-[60px]'>
                <div className='flex justify-between items-center max-w-[76vw] w-full h-full'>
                    <div className='flex items-center'>
                        <ul className='flex gap-7 items-center font-[sans-serif]'>
                            <Link href={'/'}>
                                <Image src='/home.png' alt='home' width={20} height={10} className='invert-100 h-5 cursor-pointer' />
                            </Link>
                            <li className='tracking-wide cursor-pointer'>Publish</li>
                            <li className='tracking-wide cursor-pointer'>Promote</li>
                            <li className='tracking-wide cursor-pointer'>Sell</li>
                            <li className='tracking-wide cursor-pointer'>Print</li>
                            <li className='tracking-wide cursor-pointer'>Pricing</li>
                            <li className='tracking-wide cursor-pointer'>Resources</li>
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