"use client"
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
  const [currentSlide, setCurrentSlide] = useState(1)
  let sliderRef = useRef(null)
  console.log(currentSlide);

  function handlePrevious() {
    console.log('previous');
    if (currentSlide === 1) {
      setCurrentSlide(currentSlide - 1)
      setTimeout(() => {
        sliderRef.current.style.transition = `transform 0s`
        setCurrentSlide(slides.length)
        setTimeout(() => {
          sliderRef.current.style.transition = `transform 0.5s ease-in-out`
        }, 50);
      }, 500);
    } else {
      setCurrentSlide(currentSlide - 1)
    }
  }
  function handleNext() {
    console.log('next');
    if (currentSlide === slides.length) {
      setCurrentSlide(currentSlide + 1)
      setTimeout(() => {
        sliderRef.current.style.transition = `transform 0s`
        setCurrentSlide(1)
        setTimeout(() => {
          sliderRef.current.style.transition = `transform 0.5s ease-in-out`
        }, 50);
      }, 500);
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // just call handleNext(), don’t wrap in setCurrentSlide
    }, 3000); // change slide every 3 seconds

    return () => clearInterval(interval); 
  }, [currentSlide])

  return (
    <div className='relative sm:h-[480px] w-full bg-[#f0fbfc] flex justify-center items-center gap-8 px-5'>
      <button
        onClick={handlePrevious}
        onTouchStart={handlePrevious}
        className='absolute z-20 left-5 top-1/2 md:relative w-10 h-10 flex items-center justify-center border border-[#3a7c92] rounded-full cursor-pointer'>
        <img src="/arrow.svg" alt="arrow" className='w-full h-full block -rotate-90 ml-2.5' />
      </button>

      <div className='max-w-[1032px] w-full h-auto overflow-x-hidden flex items-center overflow-y-hidden'>
        {/* slides wrapper */}
        <div ref={sliderRef}
          style={{
            transform: `translateX(-${currentSlide * 100}%)`
          }}
          className={`w-full h-full flex justify-between items-center transition-all duration-500 ease-in-out`}>
          {/* clone slide */}
          <div className='shrink-0 my-5 w-full h-full flex flex-col-reverse md:flex-row md:justify-between items-center'>
            <div>
              <div className={`sm:w-[590px] md:w-[610px] px-5`}>
                <h1 className={`text-[clamp(20px,5vw,32px)] text-center text-wrap mx-3 sm:leading-10 md:leading-15 font-extrabold text-[#4e9eb8]`}>{slides[slides.length - 1].heading}</h1>
              </div>
              <div className='w-[270px] sm:max-w-[540px] w-full text-center '>
                <p className='sm:text-[22px] text-center font-normal text-wrap'>{slides[slides.length - 1].description}</p>
              </div>
              <button className='w-[190px] sm:w-[220px] h-[48px] bg-[#febe10]/90 hover:bg-[#febe10] transition duration-100 rounded-[12px] mt-7 sm:text-[20px] font-medium cursor-pointer'>Get Started for Free</button>
            </div>
            <div>
              <img src={slides[slides.length - 1].image} alt="image" className={`shrink-0 w-[${slides[slides.length - 1].w}] h-[${slides[slides.length - 1].h}] max-h-[380px] `} />
            </div>
          </div>

          {slides.map((slide, index) => {
            return (
              <div key={index}
                className='shrink-0 my-5 w-full h-full flex flex-col-reverse md:flex-row md:justify-between items-center'>
                <div className='w-full h-full flex flex-col items-center md:items-start'>
                  <div className={`${index === 4 ? 'sm:max-w-[540px] md:w-[610px] px-3' : null}`}>
                    <h1 className={`${index === 4 ? 'text-[clamp(20px,5vw,52px)] text-center text-wrap mx-3 sm:leading-10 md:leading-15 font-extrabold text-[#4e9eb8]' : 'text-[clamp(30px,5vw,108px)]'} font-extrabold text-[#4e9eb8]`}>{slide.heading}</h1>
                  </div>
                  <div className={`${index === 4 ? 'w-[270px] sm:max-w-[540px] text-center ' : 'w-[270px]'}`}>
                    <p className='sm:text-[22px] text-center sm:text-start font-normal text-wrap'>{slide.description}</p>
                  </div>
                  <button className='w-[190px] sm:w-[220px] h-[48px] bg-[#febe10]/90 hover:bg-[#febe10] transition duration-100 rounded-[12px] mt-7 sm:text-[20px] font-medium cursor-pointer'>Get Started for Free</button>
                </div>
                <div>
                  <img src={slide.image} alt="image" className={`shrink-0 max-w-[${slides[0].w}] h-[${slides[0].h}] w-[380px] md:w-full max-h-[380px]`} />
                </div>
              </div>
            )
          })
          }
          {/* clone slide */}
          <div className='shrink-0 my-5 w-full h-full flex flex-col-reverse md:flex-row md:justify-between items-center'>
            <div>
              <div className={``}>
                <h1 className={`text-[clamp(30px,5vw,108px)] font-extrabold text-[#4e9eb8]`}>{slides[0].heading}</h1>
              </div>
              <div className='w-[270px] w-full'>
                <p className='sm:text-[22px] text-center font-normal text-wrap'>{slides[0].description}</p>
              </div>
              <button className='w-[190px] sm:w-[220px] h-[48px] bg-[#febe10]/90 hover:bg-[#febe10] transition duration-100 rounded-[12px] mt-7 sm:text-[20px] font-medium cursor-pointer'>Get Started for Free</button>
            </div>
            <div>
              <img src={slides[0].image} alt="image" className={`shrink-0 max-w-[${slides[0].w}] h-[${slides[0].h}] w-[380px] md:w-full max-h-[380px]`} />
            </div>
          </div>

        </div >
      </div>

      <button
        onClick={handleNext}
        onTouchStart={handleNext}
        className='absolute z-20 right-5 top-1/2 md:relative w-10 h-10 flex items-center justify-center border border-[#3a7c92] rounded-full cursor-pointer'>
        <img src="/arrow.svg" alt="arrow" className='w-full h-full block rotate-90 mr-3' />
      </button>

    </div >
  )
}

export default CardsCrousal