import Image from 'next/image'
import React from 'react'

const ImagesBanner = () => {
    return (
        <div className='max-w-screen w-full h-[400px] grid grid-cols-[repeat(3,1fr)]'>
            <div className='relative w-full h-full col-span-1'>
                <Image src="/blog.webp" alt="image" fill className='hover:scale-105 transition duration-100 cursor-pointer object-cover' />
            </div>
            <div className='relative w-full h-full'>
                <Image src="/academy.jpg" alt="image" fill className='hover:scale-105 transition duration-100 cursor-pointer object-cover' />
            </div>
            <div className='relative w-full h-full'>
                <Image src="/sell-my-book.png" alt="image" fill className='hover:scale-105 transition duration-100 cursor-pointer object-cover' />
            </div>
        </div>
    )
}

export default ImagesBanner