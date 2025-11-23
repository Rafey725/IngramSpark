"use client"

import { Quando } from 'next/font/google'
import Image from 'next/image'
import { title } from 'process'
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const PrintingOptions = () => {
    // Outside the Book 
    let outSideOfBook = [
        {
            image: "/book-cover-options.webp",
            title: "Book Cover Options",
            types: [
                {
                    title: "Paperback",
                    description: "Full-color laminated cover with perfect-bound binding",
                },
                {
                    title: "Hardcover",
                    description: "Available with or without dust jacket"
                }
            ]
        },
        {
            image: "/book-textures.webp",
            title: "Book Textures",
            types: [
                {
                    title: "Matte Cover",
                    description: "Soft feel, no glare, polished",
                },
                {
                    title: "Gloss Cover",
                    description: "High shine, smooth finish"
                },
                {
                    title: "Digital Cloth™ Cover ",
                    description: "Subtle, cloth-like look (available with or without dust jacket. Textured feel available for hardcover books printed in the U.S. and U.K. only)"
                },
            ]
        },
        {
            image: "/book-binding.webp",
            title: "Book Binding",
            types: [
                {
                    title: "Paperback",
                    description: "Full-color laminated cover with perfect-bound binding",
                },
                {
                    title: "Hardcover",
                    description: "Available with or without dust jacket"
                }
            ]
        },
    ]

    // Inside the Book - Ink Qualities
    const inkQualities = [
        {
            type: "Black-and-White Printing",
            description: "Most economical, 50 lb / 74 gsm paper in crème or white",
        },
        {
            type: "Standard Color Printing",
            description: "Standard color quality, 50 lb / 74 gsm or 70 lb / 104 gsm white paper",
        },
        {
            type: "Premium Color Printing",
            description: "Highest color quality with more vivid color, 70 lb / 104 gsm white paper",
        }
    ]

    // Inside the Book - Paper Color and Weights
    const paperOptions = [
        {
            type: "Groundwood 38 lb / 56 gsm -",
            description: "Available for black-and-white printing and select, small-format trim sizes in the U.S. and U.K."
        },
        {
            type: "Crème 50 lb / 74 gsm -",
            description: "Available for black-and-white printing."
        },
        {
            type: "White 50 lb / 74 gsm -",
            description: "Available for black-and-white printing and standard color printing."
        },
        {
            type: "White 70 lb / 104 gsm -",
            description: "Available in standard and premium color printing options"
        }
    ]

    // Testimonials
    const testimonials = [
        {
            quote: "“We couldn't be more pleased with the quality of IngramSpark products, including those of our illustrated books. The full-color images are of the highest quality.”",
            author: "– Jytte"
        },
        {
            quote: "I used IngramSpark Australia to print my paperback novel. The formatting instructions were clear for both the interior and cover. The quality of the finished product was excellent. Delivery was about a week. I was pleased with the whole efficient process.",
            author: "– Larry Smart"
        },
        {
            quote: "“Our experiences with IngramSpark are always fast, accurate, and cost-effective. As an indie publisher, we would use no one else to produce and distribute our work.”",
            author: "– Daniel Charles Ross, Publisher"
        },
        {
            quote: "“The Flying Desk has used IngramSpark for many years for our printing requirements. We have always been very satisfied with the prompt service and high quality books provided.”",
            author: "– Lydia"
        }
    ]

    // Videos
    const videos = [
        {
            title: "NEW! Introducing the Jack...",
            subtitle: "Introducing Jacketed Case Laminate Books",
            thumbnail: "/how-to-design-book/video1-thumbnail.webp"
        },
        {
            title: "Unboxing: Publishers Revie...",
            subtitle: "UNBOXING",
            thumbnail: "/how-to-design-book/video2-thumbnail.webp"
        }
    ]

    return (
        <div className='max-w-[78.125rem] flex flex-col items-start md:gap-4 xl:gap-7 mx-auto my-12 px-5 md:px-10'>
            <div className="max-w-195 md:w-[clamp(20rem,50vw,48.75rem)] py-6">
                {/* outside the book */}
                <div>
                    <h1 className='text-[clamp(24px,2.5vw,29px)] font-bold'>Outside the Book</h1>
                    {/* seperator */}
                    <div className='w-30 h-1 bg-[#4393b8] my-3' />
                    <div className='flex flex-wrap space-y-3 sm:grid grid-cols-2 xl:grid-cols-3 gap-4'>
                        {outSideOfBook.map((item, idx) => {
                            return (
                                <div key={idx}>
                                    <div className='relative w-50 h-40 shrink-0'>
                                        <Image src={item.image} alt='image' fill className='object-contain' />
                                    </div>
                                    <h2 className='text-[clamp(19px,2.5vw,21px)] text-[#4e9eb8] font-bold'>{item.title}</h2>
                                    <ul className='text-[#666] text-[1rem] space-y-2'>
                                        {item.types.map((type, idx) => {
                                            return (
                                                <li key={idx}>
                                                    <span className=' font-bold'>{type.title}</span>
                                                    <span>{" "} - {type.description}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* inside the book */}
                <div>
                    <h1 className='text-[clamp(24px,2.5vw,29px)] font-bold'>Inside the Book</h1>
                    {/* seperator */}
                    <div className='w-30 h-1 bg-[#4393b8] my-3' />
                    {/* ink qualities */}
                    <div>
                        <h2 className='text-[clamp(21px,2.5vw,26px)] text-[#4e9eb8] font-bold'>Ink Qualities</h2>
                        <div className='flex justify-between items-start gap-x-27 mb-10'>
                            <ul>
                                {inkQualities.map((quality, idx) => {
                                    return (
                                        <li key={idx}>
                                            <span className=' font-bold'>{quality.type}</span>
                                            <span>{" "} - {quality.description}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className='relative shrink-0 w-[200px] scale-190 h-[150px]'>
                                <Image src="/ink-qualities.webp" alt='image' fill className='object-contain' />
                            </div>
                        </div>
                    </div>
                    {/* paper color and weights */}
                    <div>
                        <h2 className='text-[clamp(21px,2.5vw,26px)] text-[#4e9eb8] font-bold'>Paper Color and Weights</h2>
                        <ul>
                            {paperOptions.map((option, idx) => {
                                return (
                                    <li key={idx}>
                                        <span className=' font-bold'>{option.type}</span>
                                        <span>{" "} - {option.description}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    {/* testimonials */}
                    <div className='w-full h-80 rounded-sm bg-[#f4f4f4] my-10 overflow-x-hidden'>
                        <div className='h-[80%] -translate-x-0 flex items-center py-5 '>
                            {testimonials.map((testimo, idx) => {
                                return (
                                    <div key={idx} className='shrink-0 w-full h-full flex flex-col items-center px-10'>
                                        <div className='relative w-40 h-10'>
                                            <Image src="/5-stars.svg" alt='rating' fill className='object-contain' />
                                        </div>
                                        <p className='text-[18px] text-center font-normal italic text-[#666] mt-5 mb-1'>{testimo.quote}</p>
                                        <p className='text-[1rem] font-extrabold text-[#666]'>{testimo.author}</p>
                                    </div>
                                )
                            })}
                        </div>
                            <div className='flex gap-3 justify-center items-center'>
                                <div className='w-7 h-[3px] bg-[#97b8c3] hover:bg-[#5492f3] cursor-pointer'></div>
                                <div className='w-7 h-[3px] bg-[#97b8c3] hover:bg-[#5492f3] cursor-pointer'></div>
                                <div className='w-7 h-[3px] bg-[#97b8c3] hover:bg-[#5492f3] cursor-pointer'></div>
                                <div className='w-7 h-[3px] bg-[#97b8c3] hover:bg-[#5492f3] cursor-pointer'></div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrintingOptions
