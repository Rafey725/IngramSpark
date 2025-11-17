/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ImagesBanner = () => {
    return (
        <div className='grid grid-cols-3'>
            <div className=''>
                <img src="/blog.webp" alt="image" className='hover:scale-105 transition duration-100 cursor-pointer' />
            </div>
            <div className=''>
                <img src="/academy.jpg" alt="image" className='hover:scale-105 transition duration-100 cursor-pointer' />
            </div>
            <div className=''>
                <img src="/sell-my-book.png" alt="image" className='hover:scale-105 transition duration-100 cursor-pointer' />
            </div>
        </div>
    )
}

export default ImagesBanner