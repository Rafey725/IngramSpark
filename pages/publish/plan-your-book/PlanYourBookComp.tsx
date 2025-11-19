import React from 'react'
import PublishHeroBanner from '@/components/PublishHeroBanner';
import PriceCalculation from './PriceCalculation';

const PlanYourBookComp = () => {
  return (
    <>
              {/* hero banner */}
              <PublishHeroBanner
                  image="/plan-your-book-hero.webp"
                  heading="Publish Your Book with IngramSpark"
                  description="Print Books and Ebooks – All from One Platform"
              />
              {/* learn more */}
              <div className='my-15'>
                  <div className='max-w-[1000px] w-full h-auto md:h-[380px] mx-auto flex flex-col items-center gap-y-7 md:flex-row justify-between'>
                      <div className='max-w-[440px] w-full h-full px-5 flex flex-col gap-6 justify-between'>
                          <div className='flex flex-col gap-4'>
                              <h2 className='text-[32px] font-bold text-[#4e9eb8]'>Publishing a Print Book</h2>
                              <p className='text-[20px]'>Quality and variety to match traditionally published books</p>
                              {/* seperator */}
                              <div className='w-[100px] h-1 bg-[#4e9eb8]'></div>
                              <ul className='flex flex-col gap-2'>
                                  <li className='flex items-center gap-2 text-[16px] leading-5'>
                                      <div className='w-1.5 h-1.5 bg-[#666666] rounded-full'></div>
                                      <p>Hardcover or paperback - various print book types and trim sizes to choose from</p>
                                  </li>
                                  <li className='flex items-center gap-2 text-[16px]'>
                                      <div className='w-1.5 h-1.5 bg-[#666666] rounded-full'></div>
                                      <p>Multiple paper options for B&W or color printing</p>
                                  </li>
                                  <li className='flex items-center gap-2 text-[16px]'>
                                      <div className='w-1.5 h-1.5 bg-[#666666] rounded-full'></div>
                                      <p>Quality book covers and binding types</p>
                                  </li>
                                  <li className='flex items-center gap-2 text-[16px] leading-5'>
                                      <div className='w-1.5 h-1.5 bg-[#666666] rounded-full'></div>
                                      <p>Print-on-demand technology - reduce costs without reducing quality</p>
                                  </li>
                              </ul>
                          </div>
                          <div>
                              <button className='px-5 py-2 w-auto bg-[#4e9eb8] hover:bg-[#71bcd5] rounded-[10px] cursor-pointer transition-all duration-300 text-white'>Learn More</button>
                          </div>
                      </div>
                      <div className='max-w-[440px] w-full h-full px-3 flex flex-col gap-4 justify-between'>
                          <div className='flex flex-col gap-4'>
                              <h2 className='text-[32px] font-bold text-[#4e9eb8]'>Publishing an Ebook</h2>
                              <p className='text-[20px]'>Ebook publishing for a digital age</p>
                              {/* seperator */}
                              <div className='w-[100px] h-1 bg-[#4e9eb8]'></div>
                              <ul className='flex flex-col gap-2'>
                                  <li className='flex items-center gap-2 text-[16px]'>
                                      <div className='w-1.5 h-1.5 bg-[#666666] rounded-full'></div>
                                      <p>Compatible with all major online retailers</p>
                                  </li>
                                  <li className='flex items-center gap-2 text-[16px]'>
                                      <div className='w-1.5 h-1.5 bg-[#666666] rounded-full'></div>
                                      <p>Access to Amazon, Apple, Kobo, and B&N</p>
                                  </li>
                                  <li className='flex items-center gap-2 text-[16px]'>
                                      <div className='w-1.5 h-1.5 bg-[#666666] rounded-full'></div>
                                      <p>Ebook file management from a single platform</p>
                                  </li>
                                  <li className='flex items-center gap-2 text-[16px]'>
                                      <div className='w-1.5 h-1.5 bg-[#666666] rounded-full'></div>
                                      <p>Affordable ebook conversion service for print books</p>
                                  </li>
                              </ul>
                          </div>
                          <div>
                              <button className='px-5 py-2 w-auto bg-[#4e9eb8] hover:bg-[#71bcd5] rounded-[10px] cursor-pointer transition-all duration-300 text-white'>Learn More</button>
                          </div>
                      </div>
                  </div>
              </div>
              {/* publishing banner */}
              <div className='h-auto md:h-[240px] my-10 w-full flex justify-center items-center'>
                  <div className='md:max-w-[1000px] w-full md:h-full flex mx-10 my-10 gap-5 flex-col md:flex-row justify-center items-center'>
                      <div className='w-full h-full flex justify-center items-center'>
                          <img src="/publish-tag.webp" alt="image" className='shrink-0 w-[300px] h-[200px] object-contain' />
                      </div>
                      <div className='w-[80%] md:w-[50%] h-full flex flex-col items-center md:items-start justify-center'>
                          <h1 className='text-[clamp(20px,5vw,32px)] font-bold leading-[clamp(25px,7vw,40px)] text-[#4e9eb8] mb-2 text-center md:text-start'>Publishing Doesn’t Have to Be Print Books VS Ebooks
                          </h1>
                          <p className='text-[#666]'><b>Think Print Books AND Ebooks.</b> Reach readers how they like to read by offering your book in more than one format!</p>
                      </div>
                  </div>
              </div>
              {/* get started banner */}
              <div className='h-auto md:h-[240px] my-10 w-full bg-[#fafafa] flex justify-center items-center'>
                  <div className='max-w-[700px] w-full h-full flex flex-col mx-10 my-10 gap-5 justify-center items-center'>
                      <h1 className='text-[clamp(20px,5vw,32px)] font-bold leading-[clamp(25px,7vw,40px)] text-[#4e9eb8] mb-2 text-center text-wrap   '>Ready to Self-Publish a Book to Share with Readers Worldwide?</h1>
                      <button className='px-10 py-2 bg-[#4e9eb8] hover:bg-[#75c2dc] transition-all duration-300 cursor-pointer text-white rounded-[7px]'>Get Started</button>
                  </div>
              </div>
              {/* price calculation container */}
              <PriceCalculation />
              {/* create account banner */}
              <div className='w-full flex flex-col justify-center items-center mb-20'>
                  <h1 className='text-[clamp(20px,5vw,32px)] font-bold text-[#4e9eb8] md:mb-5'>It’s your content. Do more with it.
                  </h1>
                  <p className='sm:text-[18px] md:text-[20px] lg:text-[22px]'>Publish on Demand® with IngramSpark</p>
                  <button className='mt-2 md:mt-5 w-70 h-12 bg-[#eaac00] hover:bg-[#eaac00]/80 rounded-lg text-[20px] font-medium font-[sans-serif] cursor-pointer'>Create an Account Today</button>
              </div>
          </>
  )
}

export default PlanYourBookComp