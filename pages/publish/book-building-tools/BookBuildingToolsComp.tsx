"use client"

import React from 'react'
import Image from 'next/image';
import PublishHeroBanner from '@/components/PublishHeroBanner';
import { useEffect, useRef, useState } from 'react';

const BookBuildingToolsComp = () => {

  const features = [
    {
      title: 'Cover',
      icon: "/book-cover.webp",
      description: 'Use predesigned layouts or customize your own front cover, back cover, and spine to create your book’s visual representation to a world of readers'
    },
    {
      title: 'Layout',
      icon: "/book-layout.webp",
      description: 'Upload a Word doc or type your book directly into the tool with predesigned interior templates to choose from and engaging chapter openers'
    },
    {
      title: 'File Requirements',
      icon: "/file-requirements-image.webp",
      description: 'Choose layouts for your cover and interior or upload a Word doc or print-ready PDF. Export files that are formatted to meet our file requirements.'
    },
    {
      title: 'Print and Ebooks',
      icon: "/print-ebook-image.webp",
      description: 'The book-building tool allows you to create cover and interior files for both print books and ebooks with the appropriate specifications'
    },
  ];


  const items = [
    "Log in to your IngramSpark account ",
    "Click on “Add a Title” in the left navigation",
    "Choose whether you want to create a print book, ebook, or both",
    "Select 'No.I don't have my files ready'."
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "It's a great tool. Overall, I love it.",
      author: "SHWETA SINGH",
      artistOf: "Author of Five Minute Break for Yoga & Medition: Kundalini Your Way to Stress Control",
    },
    {
      quote: "I found it quite easy to use and have already recommended to a friend.",
      author: "JODIE FREEMAN",
      artistOf: "Artist of Modern Aboriginal Art Coloring Book",
    },
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
    if (prevTranslated === 200) {
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
    <>
      {/* hero banner */}
      <PublishHeroBanner
        image="/building-tools-hero-image.webp"
        heading="Design Your Book"
        description="IngramSpark's Book-Building tool"
        button={true}
        gotoLink='/create-account'
        bgColor='#eaf7fd'
      />



      <div className="max-w-[1160px] w-full mx-auto px-4 sm:px-10 py-12 flex flex-col items-center">
        <h1 className="text-[32px] font-bold text-[#4e9eb8] mb-2">
          Create Your Own Book with Our Free Book-Building Tool
        </h1>
        <p className="mb-12">
          Looking to master your book cover and layout design? Our free online book design tool is available to IngramPublishers.
        </p>

        <h2 className="text-[32px] font-semibold text-[#4e9eb8] text-center">
          What You Can Do with IngramPublisher's
        </h2>
        <h2 className="text-[32px] font-semibold text-[#4e9eb8] mb-8 text-center">
          Free Book-Building Tool
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index}>
              <Image src={feature.icon} alt={feature.title} width={80} height={80} className="mx-auto mb-4" />
              <h2 className="text-[clamp(19px,2.5vw,22px)] font-bold mb-2">{feature.title}</h2>
              <p className='max-w-100'>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className='my-20 flex flex-col items-center'>
          <h1 className="text-[32px] font-semibold text-[#4e9eb8] text-center">Looking for Book Design Tips?</h1>
          <p className="text-[clamp(19px,2.5vw,22px)]">
            Learn how to design a book with our FREE Book Design Course
          </p>
          <button className='w-50 h-10 mt-2 bg-[#3a7c92] hover:bg-[#4e9eb8] transition-all duration-200 cursor-pointer rounded-sm text-[20px] font-medium text-white'>Start Learning</button>
        </div>

        <section className="w-full">
          {/* RIGHT SIDE CONTENT */}
          <div className="space-y-6">
            <h2 className="text-[clamp(25px,2.5vw,32px)] leading-[clamp(25px,2.5vw,35px)] text-[#4e9eb8] font-bold">How to Access IngramSpark's Free</h2>
            <h2 className="text-[clamp(25px,2.5vw,32px)] leading-[clamp(25px,2.5vw,35px)] -mt-4 text-[#4e9eb8] font-bold">Book-Building Tool</h2>

            <div className='flex gap-6 flex-col md:flex-row w-full items-center'>
              <ol className="space-y-6">
                {items.map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-center">
                    <div className='shrink-0 bg-[#4e9eb8] text-white w-10 h-10 rounded-full flex items-center justify-center text-[26px] pt-0.5 font-bold'>{idx + 1}</div>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>
              <div className='relative w-70 md:w-100 h-75 shrink-0'>
                <Image src="/how-it-works-hero.webp" alt='image' fill className='object-contain' />
              </div>
            </div>
          </div>
        </section>
      </div>


      <div className='bg-[url(https://www.ingramspark.com/hubfs/ingramspark2019/images/quote-bg2.jpg)] flex w-full h-105 bg-cover bg-[top_right]'>
        <div className='w-[40%] hidden md:block' />
        <div className='w-full md:w-[60%] py-10 px-3 sm:px-10'>
          <div>
            <h1 className='text-[clamp(28px,2.5vw,32px)] font-bold'>See What Your Fellow Self‑Publishers Have to Say</h1>
            <div className='w-25 h-1 bg-[#4e9eb8] my-3' />

            <div className='max-w-full h-auto overflow-hidden flex flex-col items-center'>
              < div
                ref={testimoCont}
                style={{ transform: `translateX(-${prevTranslated}%)`, transition: `all 1s ease` }}
                className='w-full h-[80%] flex items-center'
              >
                {
                  testimonials.map((testimo, idx) => {
                    return (
                      <div key={idx} className='shrink-0 w-full h-full flex flex-col'>
                        <p className='sm:text-[18px] mt-5 mb-4'>{testimo.quote}</p>
                        <p className='text-[22px] sm:text-[24px] font-bold text-[#4e9eb8]'>{testimo.author}</p>
                        <p className='sm:text-[18px] leading-[20px] font-normal italic text-[#505050] '>{testimo.artistOf}</p>
                      </div>
                    )
                  })
                }
                <div className='shrink-0 w-full h-full flex flex-col'>
                  <p className='sm:text-[18px] mt-5 mb-4'>{testimonials[0].quote}</p>
                  <p className='text-[22px] sm:text-[24px] font-bold text-[#4e9eb8]'>{testimonials[0].author}</p>
                  <p className='sm:text-[18px] leading-[20px] font-normal italic text-[#505050] '>{testimonials[0].artistOf}</p>
                </div>
              </div >
            </div >
          </div >
          <div className='flex gap-3 justify-center items-center pt-10 md:mr-[40%]'>
            <div onClick={() => handleSwitchSlide(0)}
              className={`w-3 h-3 rounded-[50%] ${prevTranslated === 0 || prevTranslated > 100 ? 'bg-[#3c3c3c]' : 'bg-[#b1b1b2]'} cursor-pointer`}></div>
            <div onClick={() => handleSwitchSlide(100)}
              className={`w-3 h-3 rounded-[50%] ${prevTranslated === 100 ? 'bg-[#3c3c3c]' : 'bg-[#b1b1b2]'} cursor-pointer`}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookBuildingToolsComp



