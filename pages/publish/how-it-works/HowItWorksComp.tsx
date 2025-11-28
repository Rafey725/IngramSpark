/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import PublishHeroBanner from '@/components/PublishHeroBanner'

const HowItWorksComp = () => {
    return (
        <div>
            {/* hero banner */}
            <PublishHeroBanner
                image="/how-it-works-hero.webp"
                heading="Publish Like a Pro"
                description="When you Publish on Demand® with IngramPublishers, you get everything you need to successfully self-publish a book from one award-winning self-publishing company"
                button={true}
                bgColor='#ecf8fd'
                gotoLink='/create-account'
            />
            {/* needs for publish banner */}
            <div className='max-w-[600px] h-auto mx-auto my-10 px-7'>
                <div className='flex justify-center'>
                    <h1 className='text-[30px] py-3 sm:text-[35px] text-[#4e9eb8] font-bold text-center'>What You Need to Publish</h1>
                </div>
                <div className='flex flex-col gap-6 sm:gap-2'>
                    <div className='flex flex-col text-center sm:text-start sm:flex-row justify-between items-center'>
                        <div className='w-[181px] h-[100px] sm:mx-2 flex items-center relative'>
                            <Image src="/isbn.webp" alt="image" className='object-contain' fill />
                        </div>
                        <div className='ml-2.5'>
                            <h2 className='text-[19px] font-bold'>Your Own ISBN</h2>
                            <p className='text-[16px] tracking-wide'>One for each format of your book. You can own your own ISBN or U.S. publishers can receive a free one from IngramPublishers.</p>
                        </div>
                    </div>
                    <div className='flex flex-col text-center sm:text-start sm:flex-row justify-between items-center'>
                        <div className='w-26 sm:w-[141px] h-[100px] sm:mx-2 -ml-0.5 flex items-center relative'>
                            <Image src="/interior-files.webp" alt="image" className='object-contain ' fill />
                        </div>
                        <div className='ml-[9px]'>
                            <h2 className='text-[19px] font-bold'>Cover & Interior Files</h2>
                            <p className='text-[16px] tracking-wide'>What’s a book without its story and an eye-catching cover? See
                                {" "}<a className='text-[#4e9eb8] underline hover:text-[#4e9eb8]/80 cursor-pointer'>how to create your files</a>!</p>
                        </div>
                    </div>
                    <div className='flex flex-col text-center sm:text-start sm:flex-row items-center'>
                        <div className='w-[83px] h-20 ml-1 mb-2 sm:mb-0 flex items-center relative'>
                            <Image src="/email.webp" alt="image" className='obejct-contain' fill />
                        </div>
                        <div className='ml-6'>
                            <h2 className='text-[19px] font-bold'>Valid Email Address</h2>
                            <p className='text-[16px] tracking-wide'>So we know where to send updates on your book's progress.</p>
                        </div>
                    </div>
                    <div className='flex flex-col text-center sm:text-start sm:flex-row justify-between items-center'>
                        <div className='w-21 sm:w-31 h-[100px] ml-0.5 pt-1.5 relative'>
                            <Image src="/credit card.webp" alt="image" className='object-contain' fill />
                        </div>
                        <div className='ml-7'>
                            <h2 className='text-[19px] font-bold'>Payment Method</h2>
                            <p className='text-[16px] tracking-wide'>Credit/debit card for ordering copies; bank account or Paypal for payment for book sales.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* things can be done banner */}
            <div className='max-w-[960px] w-full min-h-[300px] mx-auto my-15 px-5 sm:px-10 flex justify-center flex-col items-center gap-10'>
                <h1 className='text-[25px] text-center sm:text-[30px] font-bold'>What You Can Do With IngramPublishers</h1>
                <div className='w-full flex flex-wrap md:flex-nowrap gap-7 justify-center'>

                    <div className='w-full bg-[#f7f8f9] px-5 py-8 flex flex-col gap-2 items-center justify-between rounded-[13px]'>
                        <div className='w-full h-full flex items-center flex-col'>
                            <div className='w-[90px] h-[70px] relative -mr-2.5'>
                                <Image src="/publish.webp" alt="image" fill className='object-contain'/>
                            </div>
                            <h1 className='text-[22px] font-bold'>Publish</h1>
                            <p className='text-[16px] max-w-[345px] md:max-w-[245px] text-center font-[sans-serif]'>Whether hardcover, paperback, or ebooks, you can publish your book the way you want, with the quality you need. Explore our publishing options and find what’s right for your book</p>
                        </div>
                        <button className='text-[16px] text-white w-45 h-10 mt-1 bg-[#4e9eb8] hover:bg-[#4e9eb8]/80 rounded-[7px] cursor-pointer transition duration-300'>Plan Your Book</button>
                    </div>
                    <div className='w-full bg-[#f7f8f9] px-5 py-8 flex flex-col gap-2 items-center justify-between rounded-[13px]'>
                        <div className='w-full h-full flex items-center flex-col'>
                            <div className='w-[90px] h-[70px] relative mr-4.5'>
                                <Image src="/shipping.webp" alt="image" fill className='object-contain'/>
                            </div>
                            <h1 className='text-[22px] font-bold'>Distribute</h1>
                            <p className='text-[16px] max-w-[345px] md:max-w-[245px] text-center font-[sans-serif]'>IngramPublishers offers global ebook and print distribution from one platform. Connect your book to over 45,000 libraries, retailers, and online stores like Amazon, Apple, and Barnes & Noble.</p>
                        </div>
                        <button className='text-[16px] text-white w-45 h-10 mt-1 bg-[#4e9eb8] hover:bg-[#4e9eb8]/80 rounded-[7px] cursor-pointer transition duration-300'>Learn More</button>
                    </div>
                    <div className='w-full bg-[#f7f8f9] w-full px-5 py-8 flex flex-col gap-2 items-center justify-between rounded-[13px]'>
                        <div className='w-full h-full flex items-center flex-col'>
                            <div className='w-[90px] h-[70px] relative'>
                                <Image src="/learn-more.svg" alt="image" fill className='object-contain'/>
                            </div>
                            <h1 className='text-[22px] font-bold'>Learn</h1>
                            <p className='text-[16px] max-w-[345px] md:max-w-[245px] text-center font-[sans-serif]'>IngramPublishers provides authors with free tools and resources to help you publish your book successfully. Explore our downloadable guides and worksheets, publishing courses, and weekly blog. </p>
                        </div>
                        <button className='text-[16px] text-white w-45 h-10 mt-1 bg-[#4e9eb8] hover:bg-[#4e9eb8]/80 rounded-[7px] cursor-pointer transition duration-300'>Start Learning</button>
                    </div>
                </div>
            </div>
            {/* pricing banner */}
            <div className='h-auto md:h-[240px] w-full bg-[#fafafa] flex justify-center items-center'>
                <div className='md:max-w-[1000px] w-full md:h-full flex mx-3 md:mx-10 my-10 gap-5 flex-col-reverse md:flex-row justify-center items-center'>
                    <div className='w-full md:w-[80%] md:w-[50%] h-full flex flex-col items-center md:items-start justify-center'>
                        <h1 className='text-[clamp(20px,2.5vw,25px)] font-bold text-[#4e9eb8] mb-2 text-center md:text-start'>See What It Costs To Publish With IngramPublishers
                        </h1>
                        <button className='mt-5 w-40 h-12 text-white bg-[#4e9eb8] hover:bg-[#4e9eb8]/80 rounded-lg text-[20px] font-medium font-[sans-serif] cursor-pointer'>Publish Today</button>
                    </div>
                    <div className='w-full md:w-[50%] h-full flex justify-center items-center'>
                        <div className='relative w-[300px] h-[200px]'>
                        <Image src="/price-tag.webp" alt="image" fill className='object-contain' />
                        </div>
                    </div>
                </div>
            </div>
            {/* create account banner */}
            <div className='w-full flex flex-col justify-center items-center my-10 px-5 text-center'>
                <h1 className='text-[clamp(20px,5vw,32px)] font-bold text-[#4e9eb8] mb-5'>It’s your content. Do more with it.
                </h1>
                <p className='sm:text-[18px] md:text-[20px] lg:text-[22px]'>Publish on Demand® with IngramPublishers</p>
                <button className='mt-5 px-2 sm:w-70 h-12 bg-[#eaac00] hover:bg-[#eaac00]/80 rounded-lg text-[20px] font-medium font-[sans-serif] cursor-pointer'>Create an Account Today</button>
            </div>
        </div>
    )
}

export default HowItWorksComp