"use client"
import Image from 'next/image'
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect } from 'react'

const CardsCrousal = () => {
  let slides = [
    {
      heading: 'Print',
      description: 'Hardcover and paperback books created on demand.',
      image: '/slides/slide5.svg',
      w: 590,
      h: 370
    },
    {
      heading: 'Sell',
      description: 'Reach millions of readers around the world.',
      image: '/slides/slide4.svg',
      w: 590,
      h: 370
    },
    {
      heading: 'Promote',
      description: 'Book marketing services',
      image: '/slides/slide3.svg',
      w: 590,
      h: 370
    }, {
      heading: 'Publish',
      description: 'Create your print and ebook with professional quality.',
      image: '/slides/slide2.svg',
      w: 590,
      h: 370
    },
    {
      heading: 'You Have a Story. Share It with the World.',
      description: 'Everything you need to publish, print, promote and sell your book to millions of readers.',
      image: '/slides/slide1.webp',
      w: 360,
      h: 400
    },
  ]
  let intervalRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(1)
  const [slideWidth, setSlideWidth] = useState(0)
  let sliderRef = useRef(null)
  console.log(currentSlide);

  function handlePrevious() {
    if (intervalRef.current) clearInterval(intervalRef.current) // stopping auto sliding
    if (currentSlide === 1) {
      setCurrentSlide(currentSlide - 1)
      setTimeout(() => {
        sliderRef.current.style.transition = `transform 0s`
        setCurrentSlide(slides.length)
        setTimeout(() => {
          sliderRef.current.style.transition = `transform 0.5s ease-in-out`
        }, 100);
      }, 500);
    } else {
      setCurrentSlide(currentSlide - 1)
    }
    startAutoPlay() // starting the auto sliding
  }
  function handleNext() {
    if (intervalRef.current) clearInterval(intervalRef.current) // stopping auto sliding
    if (currentSlide === slides.length) {
      setCurrentSlide(currentSlide + 1)
      setTimeout(() => {
        if (!sliderRef.current) return
        sliderRef.current.style.transition = `transform 0s`
        setCurrentSlide(1)
        setTimeout(() => {
          sliderRef.current.style.transition = `transform 0.5s ease-in-out`
        }, 100);
      }, 500);
    } else {
      setCurrentSlide(currentSlide + 1)
    }
    startAutoPlay() // starting the auto sliding
  }

  // auto play function
  function startAutoPlay() {
    intervalRef.current = setInterval(() => {
      handleNext(); // just call handleNext(), don’t wrap in setCurrentSlide
    }, 5000);
  }

  // useEffect(() => {
  //   startAutoPlay()
  //   return () => clearInterval(intervalRef.current);
  // }, [currentSlide])

  // responsive slide width
  useEffect(() => {
    function updateSize() {
      if (sliderRef.current && sliderRef.current.children[1]) {
        setSlideWidth(sliderRef.current.children[1].offsetWidth)
      }
    }
    updateSize() // run once when mounted

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    }
  }, [])


  return (
    <div className='relative sm:h-[480px] w-full bg-[#f0fbfc] flex justify-center items-center sm:gap-10 px-5'>
      <button
        onClick={handlePrevious}
        className='absolute z-20 left-5 top-1/2 md:relative md:left-0 md:top-0 w-10 h-10 flex items-center justify-center border border-[#3a7c92] rounded-full cursor-pointer'>
        <img src="/arrow.svg" alt="arrow" className='w-full h-full block -rotate-90 ml-2.5' />
      </button>

      <div className='max-w-5xl w-full h-auto overflow-x-hidden flex justify-center items-center overflow-y-hidden'>
        {/* slides wrapper */}
        <div ref={sliderRef}
          style={{
            transform: `translateX(-${currentSlide * slideWidth}px)`
          }}
          className={`w-full flex transition-all duration-500 ease`}>

          {/* clone slide before */}
          <div className={`box-border w-full shrink-0 grid grid-cols-1 lg:grid-cols-2 grid-rows-1 align-items-center`}>
            <div className='col-span-6 space-y-1 lg:pt-5'>
              {/* heading */}
              <h1 className={`text-[clamp(25px,5vw,52px)] leading-[clamp(25px,5vw,50px)] max-w-160 text-[#4e9eb8] font-extrabold text-center sm:text-start text-wrap`}>
                {slides[slides.length - 1].heading}
              </h1>
              {/* description */}
              <p className={`text-[clamp(1rem,5vw,22px)] max-w-160 font-normal text-wrap lg:pb-3`}>
                {slides[slides.length - 1].description}
              </p>
              {/* button */}
              <button className='btnYellow max-w-50 text-[1rem] w-full py-2 rounded-lg'>
                Get Started for Free
              </button>
            </div>

            <div className='grid-cols-6 grid-rows-1'>
              <div className='relative w-full h-full col-span-3'>
                <Image src={slides[slides.length - 1].image} alt='image' fill className='object-contain' />
              </div>
            </div>
          </div>

          {slides.map((slide, index) => {
            return (
              <div key={index} className={`box-border w-full shrink-0 grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 align-items-center px-8`}>
                <div className='space-y-1 lg:pt-5'>
                  {/* heading */}
                  <h1 className={`${index === 4
                    ? 'text-[clamp(25px,5vw,52px)] leading-[clamp(25px,5vw,50px)] max-w-150 '
                    : 'text-[clamp(30px,7vw,108px)] '
                    } text-[#4e9eb8] font-extrabold text-center sm:text-start text-wrap`}>
                    {slide.heading}
                  </h1>
                  {/* description */}
                  <p className={`${index === 4
                    ? 'max-w-150'
                    : ''} 
                    font-normal text-[clamp(1rem,2.5vw,22px)] text-center sm:text-start text-wrap lg:pb-3`}>
                    {slide.description}
                  </p>
                  {/* button */}
                  <button className='btnYellow max-w-50 text-[1rem] w-full py-2 rounded-lg'>
                    Get Started for Free
                  </button>
                </div>

                <div className='grid-cols-6 grid-rows-1'>
                  <div className='shrink-0 relative w-full h-full col-span-3'>
                    <Image src={slide.image} alt='image' fill className='object-contain' />
                  </div>
                </div>
              </div>
            )
          })
          }
          {/* clone slide after */}
          <div className={`box-border w-full shrink-0 grid grid-cols-1 md:grid-cols-2 grid-rows-1 align-items-center`}>
            <div className='space-y-1 lg:pt-5'>
              {/* heading */}
              <h1 className={`text-[clamp(30px,7vw,108px)] text-[#4e9eb8] font-extrabold text-center sm:text-start text-wrap`}>
                {slides[0].heading}
              </h1>
              {/* description */}
              <p className={`text-[clamp(1rem,2.5vw,22px)] text-center sm:text-start font-normal text-wrap lg:pb-3`}>
                {slides[0].description}
              </p>
              {/* button */}
              <button className='btnYellow max-w-50 text-[1rem] w-full py-2 rounded-lg'>
                Get Started for Free
              </button>
            </div>

            <div className='col-span-6 grid-cols-6 grid-rows-1'>
              <div className='relative w-full h-full col-span-3'>
                <Image src={slides[0].image} alt='image' fill className='object-contain' />
              </div>
            </div>
          </div>

        </div >
      </div >

      <button
        onClick={handleNext}
        className='absolute z-20 right-5 top-1/2 md:relative md:right-0 md:top-0 w-10 h-10 flex items-center justify-center border border-[#3a7c92] rounded-full cursor-pointer'>
        <img src="/arrow.svg" alt="arrow" className='w-full h-full block rotate-90 mr-3' />
      </button>

    </div >
  )
}

export default CardsCrousal

