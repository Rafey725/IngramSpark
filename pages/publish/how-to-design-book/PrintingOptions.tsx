"use client"


import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

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
            quote: "“We couldn't be more pleased with the quality of IngramPublishers products, including those of our illustrated books. The full-color images are of the highest quality.”",
            author: "– Jytte"
        },
        {
            quote: "I used IngramPublishers Australia to print my paperback novel. The formatting instructions were clear for both the interior and cover. The quality of the finished product was excellent. Delivery was about a week. I was pleased with the whole efficient process.",
            author: "– Larry Smart"
        },
        {
            quote: "“Our experiences with IngramPublishers are always fast, accurate, and cost-effective. As an indie publisher, we would use no one else to produce and distribute our work.”",
            author: "– Daniel Charles Ross, Publisher"
        },
        {
            quote: "“The Flying Desk has used IngramPublishers for many years for our printing requirements. We have always been very satisfied with the prompt service and high quality books provided.”",
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

    // testimonials infinite logic...
    const testimoCont = useRef<HTMLDivElement | null>(null)
    let intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
    let [prevTranslated, setPrevTranslated] = useState(0)

    function startInterval() {
        intervalRef.current = setInterval(() => {
            if (!testimoCont.current) return
            setPrevTranslated(prev => prev + 100)
        }, 5000);
    }

    useEffect(() => {
        startInterval()
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [])

    useEffect(() => {
        if (prevTranslated === 400) {
            function handler() {
                if (!testimoCont.current) return
                testimoCont.current.style.transition = ` null`
                setPrevTranslated(0)
                setTimeout(() => {
                    if (!testimoCont.current) return
                    testimoCont.current.style.transition = `all 0.5s ease`
                }, 100);
            }
            testimoCont.current?.addEventListener(`transitionend`, handler, { once: true })
        }
    }, [prevTranslated])

    // testimonials click logic...
    function handleSwitchSlide(slideNum: number) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setPrevTranslated(slideNum);
        startInterval()
    }


    return (
        <div className='max-w-[78.125rem] flex flex-col items-start md:gap-4 xl:gap-7 mx-auto my-12 px-0 md:px-10 overflow-x-hidden'>
            <div className="max-w-[765px] w-full md:max-w-[48.75rem] md:w-[clamp(20rem,50vw,48.75rem)] py-6 px-4 sm:px-6 md:px-10 box-border">
                {/* outside the book */}
                <div>
                    <h1 className='text-[clamp(24px,2.5vw,29px)] font-bold'>Outside the Book</h1>
                    {/* seperator */}
                    <div className='max-w-30 h-1 bg-[#4393b8] my-3' />
                    <div className='flex flex-wrap space-y-3 sm:grid grid-cols-2 xl:grid-cols-3 gap-4'>
                        {outSideOfBook.map((item, idx) => {
                            return (
                                <div key={idx}>
                                    <div className='relative w-50 h-40 shrink-0'>
                                        <Image src={item.image} alt='image' fill className='object-contain' />
                                    </div>
                                    <h2 className='text-[clamp(19px,2.5vw,21px)] text-[#4e9eb8] font-bold'>{item.title}</h2>
                                    <ul className='text-[#666] text-[1rem] space-y-2 w-fit'>
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
                <div className='text-[#666] py-10'>
                    <h1 className='text-[clamp(24px,2.5vw,29px)] font-bold'>Inside the Book</h1>
                    {/* seperator */}
                    <div className='max-w-30 h-1 bg-[#4393b8] my-3' />
                    {/* ink qualities */}
                    <div>
                        <h2 className='text-[clamp(21px,2.5vw,26px)] text-[#4e9eb8] font-bold'>Ink Qualities</h2>
                        <div className='flex justify-between items-center lg:items-start flex-col lg:flex-row lg:gap-x-27 gap-y-15 mb-10'>
                            <ul className='flex flex-col items-start w-full'>
                                {inkQualities.map((quality, idx) => {
                                    return (
                                        <li key={idx}>
                                            <span className='font-bold'>{quality.type}</span>
                                            <span>{" "} - {quality.description}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className='relative shrink-0 w-[200px] sm:scale-150 lg:scale-190 h-[150px]'>
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
                    <div className='max-w-full h-auto rounded-sm bg-[#f4f4f4] pt-5 pb-10 my-5 overflow-hidden'>
                        <div className='relative w-40 h-10 mx-auto'>
                            <Image src="/5-stars.svg" alt='rating' fill className='object-contain' />
                        </div>
                        <div
                            ref={testimoCont}
                            style={{ transform: `translateX(-${prevTranslated}%)`, transition: `all 1s ease` }}
                            className='h-[80%] flex items-center'>

                            {testimonials.map((testimo, idx) => {
                                return (
                                    <div key={idx} className='shrink-0 w-full h-full flex flex-col items-center px-3'>
                                        <p className='text-[18px] text-center font-normal italic text-[#666] mt-5 mb-1'>{testimo.quote}</p>
                                        <p className='text-[1rem] font-extrabold text-[#666]'>{testimo.author}</p>
                                    </div>
                                )
                            })}
                            <div className='shrink-0 w-full h-full flex flex-col items-center px-3'>
                                <p className='text-[18px] text-center font-normal italic text-[#666] mt-5 mb-1'>{testimonials[0].quote}</p>
                                <p className='text-[1rem] font-extrabold text-[#666]'>{testimonials[0].author}</p>
                            </div>
                        </div>
                        <div className='flex gap-3 justify-center items-center pt-4'>
                            <div onClick={() => handleSwitchSlide(0)}
                                className={`w-7 h-[3px] ${prevTranslated === 0 || prevTranslated > 300 ? 'bg-[#5492f3]' : 'bg-[#97b8c3]'} cursor-pointer`}></div>
                            <div onClick={() => handleSwitchSlide(100)}
                                className={`w-7 h-[3px] ${prevTranslated === 100 ? 'bg-[#5492f3]' : 'bg-[#97b8c3]'} cursor-pointer`}></div>
                            <div onClick={() => handleSwitchSlide(200)}
                                className={`w-7 h-[3px] ${prevTranslated === 200 ? 'bg-[#5492f3]' : 'bg-[#97b8c3]'} cursor-pointer`}></div>
                            <div onClick={() => handleSwitchSlide(300)}
                                className={`w-7 h-[3px] ${prevTranslated === 300 ? 'bg-[#5492f3]' : 'bg-[#97b8c3]'} cursor-pointer`}></div>
                        </div>
                    </div>
                    {/* new book designs... */}
                    {/* description */}
                    <p className='text-[17px]'>IngramSpark is dedicated to expanding book printing options for indie authors! As of early 2020, authors can take advantage of the new digital cloth and jacketed case laminate options for hardcover book printing. Check out the videos below for more details and to find out how publishers reacted to the{" "}
                        <Link href={'/'} className='font-bold text-[#4e9eb8] underline hover:text-[#5ab7d6]'>new book design options</Link>.</p>
                    {/* videos */}
                    <div className='max-w-full flex flex-col xl:flex-row justify-between mt-10 sm:px-10 md:px-4 lg:px-7 xl:px-0 gap-y-5'>
                        <iframe src="https://www.youtube.com/embed/qpWLsq_6_8g" title="NEW! Introducing the Jacketed Case Laminate Book by IngramSpark" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                            className='xl:w-[clamp(300px,20vw,370px)] sm:h-[230px] xl:h-[197px]'></iframe>
                        <iframe src="https://www.youtube.com/embed/-QXOaUOK3_8" title="Unboxing: Publishers Review our New Digital Cloth™ Cover Book!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                            className='xl:w-[clamp(300px,20vw,370px)] sm:h-[230px] xl:h-[197px]'></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrintingOptions
