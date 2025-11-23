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
                    description="When you Publish on Demand® with IngramSpark, you get everything you need to successfully self-publish a book from one award-winning self-publishing company"
                    button={false}
                    bgColor='#ecf8fd'
                />
                {/* needs for publish banner */}
                <div className='max-w-[600px] h-auto mx-auto my-10 px-7'>
                    <div className='flex justify-center'>
                        <h1 className='text-[30px] py-3 sm:text-[35px] text-[#4e9eb8] font-bold'>What You Need to Publish</h1>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex justify-between items-center'>
                            <div className='w-[120px] h-[100px] mx-2 flex items-center'>
                                <img src="/isbn.webp" alt="image" className='object-cover' />
                            </div>
                            <div className='ml-8'>
                                <h2 className='text-[19px] font-bold'>Your Own ISBN</h2>
                                <p className='text-[16px] tracking-wide'>One for each format of your book. You can own your own ISBN or U.S. publishers can receive a free one from IngramSpark.</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='w-[110px] h-[100px] mx-2 -ml-0.5 flex items-center'>
                                <img src="/interior-files.webp" alt="image" className='object-cover ' />
                            </div>
                            <div className='ml-7'>
                                <h2 className='text-[19px] font-bold'>Cover & Interior Files</h2>
                                <p className='text-[16px] tracking-wide'>What’s a book without its story and an eye-catching cover? See
                                    {" "}<a className='text-[#4e9eb8] underline hover:text-[#4e9eb8]/80 cursor-pointer'>how to create your files</a>!</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='w-[70px] h-[80px] ml-1 flex items-center'>
                                <img src="/email.webp" alt="image" className='w-full h-full' />
                            </div>
                            <div className='ml-10'>
                                <h2 className='text-[19px] font-bold'>Valid Email Address</h2>
                                <p className='text-[16px] tracking-wide'>So we know where to send updates on your book's progress.</p>
                            </div>
                        </div>
                        <div className='flex justify-between mt-5 items-center'>
                            <div className='w-[80px] h-[100px] ml-2.5 pt-1.5'>
                                <img src="/credit card.webp" alt="image" className='object-cover' />
                            </div>
                            <div className='ml-11'>
                                <h2 className='text-[19px] font-bold'>Payment Method</h2>
                                <p className='text-[16px] tracking-wide'>Credit/debit card for ordering copies; bank account or Paypal for payment for book sales.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* things can be done banner */}
                <div className='max-w-[960px] w-full min-h-[300px] mx-auto my-15 px-5 sm:px-10 flex justify-center flex-col items-center gap-10'>
                    <h1 className='text-[25px] text-center sm:text-[30px] font-bold'>What You Can Do With IngramSpark</h1>
                    <div className='w-full flex flex-wrap md:flex-nowrap gap-7 justify-center'>
    
                        <div className='w-full bg-[#f7f8f9] px-5 py-8 flex flex-col gap-2 items-center justify-between rounded-[13px]'>
                            <div className='w-full h-full flex items-center flex-col'>
                                <div className='w-[90px] h-[70px]'>
                                    <img src="/publish.webp" alt="image" className='object-cover' />
                                </div>
                                <h1 className='text-[22px] font-bold'>Publish</h1>
                                <p className='text-[16px] max-w-[345px] md:max-w-[245px] text-center font-[sans-serif]'>Whether hardcover, paperback, or ebooks, you can publish your book the way you want, with the quality you need. Explore our publishing options and find what’s right for your book</p>
                            </div>
                            <button className='text-[16px] text-white w-45 h-10 mt-1 bg-[#4e9eb8] hover:bg-[#4e9eb8]/80 rounded-[7px] cursor-pointer transition duration-300'>Plan Your Book</button>
                        </div>
                        <div className='w-full bg-[#f7f8f9] px-5 py-8 flex flex-col gap-2 items-center justify-between rounded-[13px]'>
                            <div className='w-full h-full flex items-center flex-col'>
                                <div className='w-[90px] h-[70px]'>
                                    <img src="/shipping.webp" alt="image" className='object-cover' />
                                </div>
                                <h1 className='text-[22px] font-bold'>Distribute</h1>
                                <p className='text-[16px] max-w-[345px] md:max-w-[245px] text-center font-[sans-serif]'>IngramSpark offers global ebook and print distribution from one platform. Connect your book to over 45,000 libraries, retailers, and online stores like Amazon, Apple, and Barnes & Noble.</p>
                            </div>
                            <button className='text-[16px] text-white w-45 h-10 mt-1 bg-[#4e9eb8] hover:bg-[#4e9eb8]/80 rounded-[7px] cursor-pointer transition duration-300'>Learn More</button>
                        </div>
                        <div className='w-full bg-[#f7f8f9] w-full px-5 py-8 flex flex-col gap-2 items-center justify-between rounded-[13px]'>
                            <div className='w-full h-full flex items-center flex-col'>
                                <div className='w-[90px] h-[70px]'>
                                    <img src="/learn-more.svg" alt="image" className='object-cover' />
                                </div>
                                <h1 className='text-[22px] font-bold'>Learn</h1>
                                <p className='text-[16px] max-w-[345px] md:max-w-[245px] text-center font-[sans-serif]'>IngramSpark provides authors with free tools and resources to help you publish your book successfully. Explore our downloadable guides and worksheets, publishing courses, and weekly blog. </p>
                            </div>
                            <button className='text-[16px] text-white w-45 h-10 mt-1 bg-[#4e9eb8] hover:bg-[#4e9eb8]/80 rounded-[7px] cursor-pointer transition duration-300'>Start Learning</button>
                        </div>
                    </div>
                </div>
                {/* pricing banner */}
                <div className='h-auto md:h-[240px] w-full bg-[#fafafa] flex justify-center items-center'>
                    <div className='md:max-w-[1000px] w-full md:h-full flex mx-3 md:mx-10 my-10 gap-5 flex-col-reverse md:flex-row justify-center items-center'>
                        <div className='w-full md:w-[80%] md:w-[50%] h-full flex flex-col items-center md:items-start justify-center'>
                            <h1 className='text-[clamp(20px,2.5vw,25px)] font-bold text-[#4e9eb8] mb-2 text-center md:text-start'>See What It Costs To Publish With IngramSpark
                            </h1>
                            <button className='mt-5 w-40 h-12 text-white bg-[#4e9eb8] hover:bg-[#4e9eb8]/80 rounded-lg text-[20px] font-medium font-[sans-serif] cursor-pointer'>Publish Today</button>
                        </div>
                        <div className='w-full md:w-[50%] h-full flex justify-center items-center'>
                            <img src="/price-tag.webp" alt="image" className='w-[300px] h-[200px] ' />
                        </div>
                    </div>
                </div>
                {/* create account banner */}
                <div className='w-full flex flex-col justify-center items-center my-10'>
                    <h1 className='text-[clamp(20px,5vw,32px)] font-bold text-[#4e9eb8] mb-5'>It’s your content. Do more with it.
                    </h1>
                    <p className='sm:text-[18px] md:text-[20px] lg:text-[22px]'>Publish on Demand® with IngramSpark</p>
                    <button className='mt-5 px-2 sm:w-70 h-12 bg-[#eaac00] hover:bg-[#eaac00]/80 rounded-lg text-[20px] font-medium font-[sans-serif] cursor-pointer'>Create an Account Today</button>
                </div>
            </div>
  )
}

export default HowItWorksComp