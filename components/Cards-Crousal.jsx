
// "use client";
// import Image from "next/image";
// import React, { useRef, useState, useEffect } from "react";

// const AICrousal = () => {
//     const slides = [
//         {
//             heading: "Print",
//             description: "Hardcover and paperback books created on demand.",
//             image: "/slides/slide5.svg",
//         },
//         {
//             heading: "Sell",
//             description: "Reach millions of readers around the world.",
//             image: "/slides/slide4.svg",
//         },
//         {
//             heading: "Promote",
//             description: "Book marketing services",
//             image: "/slides/slide3.svg",
//         },
//         {
//             heading: "Publish",
//             description: "Create your print and ebook with professional quality.",
//             image: "/slides/slide2.svg",
//         },
//         {
//             heading: "You Have a Story. Share It with the World.",
//             description:
//                 "Everything you need to publish, print, promote and sell your book to millions of readers.",
//             image: "/slides/slide1.webp",
//         },
//     ];

//     const sliderRef = useRef(null);
//     const intervalRef = useRef(null);

//     const [current, setCurrent] = useState(1);
//     const [slideWidth, setSlideWidth] = useState(0);

//     // Make infinite loop structure
//     const extendedSlides = [
//         slides[slides.length - 1], // clone last
//         ...slides,
//         slides[0], // clone first
//     ];

//     /** -----------------------------------
//      *  FUNCTIONS (declared before usage)
//      * -----------------------------------**/

//     const resetTransition = () => {
//         if (sliderRef.current) {
//             sliderRef.current.style.transition = "none";
//         }
//     };

//     const enableTransition = () => {
//         if (sliderRef.current) {
//             sliderRef.current.style.transition = "transform 0.45s ease";
//         }
//     };

//     const startAuto = () => {
//         intervalRef.current = setInterval(() => {
//             handleNext();
//         }, 3000);
//     };

//     const handleNext = () => {
//         clearInterval(intervalRef.current);
//         enableTransition();
//         setCurrent((prev) => prev + 1);
//         startAuto();
//     };

//     const handlePrev = () => {
//         clearInterval(intervalRef.current);
//         enableTransition();
//         setCurrent((prev) => prev - 1);
//         startAuto();
//     };

//     /** -----------------------------------
//      *  EFFECTS
//      * -----------------------------------**/

//     // Autoplay
//     // useEffect(() => {
//     //   startAuto();
//     //   return () => clearInterval(intervalRef.current);
//     // }, []);

//     // Recalculate width on resize
//     useEffect(() => {
//         const updateWidth = () => {
//             if (sliderRef.current && sliderRef.current.children[1]) {
//                 setSlideWidth(sliderRef.current.children[1].offsetWidth);
//             }
//         };

//         updateWidth();
//         window.addEventListener("resize", updateWidth);

//         return () => window.removeEventListener("resize", updateWidth);
//     }, []);

//     // Infinite-loop teleport logic
//     useEffect(() => {
//         if (!sliderRef.current) return;

//         // Reached after last clone
//         if (current === extendedSlides.length - 1) {
//             setTimeout(() => {
//                 resetTransition();
//                 setCurrent(1);
//             }, 450);
//         }

//         // Reached before first clone
//         if (current === 0) {
//             setTimeout(() => {
//                 resetTransition();
//                 setCurrent(slides.length);
//             }, 450);
//         }
//     }, [current]);

//     /** -----------------------------------
//      *  RENDER
//      * -----------------------------------**/

//     return (
//         <div className="relative sm:h-[480px] w-full bg-[#f0fbfc] flex justify-center items-center px-5 overflow-hidden">

//             {/* Prev Button */}
//             <button
//                 onClick={handlePrev}
//                 className="absolute z-20 left-5 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-[#3a7c92] rounded-full cursor-pointer"
//             >
//                 <img
//                     src="/arrow.svg"
//                     alt="arrow"
//                     className="w-full h-full block -rotate-90 ml-2.5"
//                 />
//             </button>

//             {/* Slider */}
//             <div className="max-w-5xl w-full overflow-hidden">
//                 <div
//                     ref={sliderRef}
//                     style={{
//                         transform: `translateX(-${current * slideWidth}px)`,
//                     }}
//                     className="flex"
//                 >
//                     {extendedSlides.map((slide, i) => (
//                         <div
//                             key={i}
//                             className="min-w-full h-[400px] flex items-center justify-center bg-[#d9eef2]"
//                         >
//                             <h1 className="text-3xl font-bold">{slide.heading}</h1>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Next Button */}
//             <button
//                 onClick={handleNext}
//                 className="absolute z-20 right-5 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-[#3a7c92] rounded-full cursor-pointer"
//             >
//                 <img
//                     src="/arrow.svg"
//                     alt="arrow"
//                     className="w-full h-full block rotate-90 mr-3"
//                 />
//             </button>
//         </div>
//     );
// };

// export default AICrousal;




"use client"
import Image from 'next/image'
import Link from 'next/link'
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect } from 'react'

const CardsCrousal = () => {
  let slides = [
    {
      heading: 'Print',
      description: 'Hardcover and paperback books created on demand.',
      image: '/slides/slide5.svg',
      w: 590,
      h: 370,
      gotoLink: "/"
    },
    {
      heading: 'Sell',
      description: 'Reach millions of readers around the world.',
      image: '/slides/slide4.svg',
      w: 590,
      h: 370,
      gotoLink: "/"
    },
    {
      heading: 'Promote',
      description: 'Book marketing services',
      image: '/slides/slide3.svg',
      w: 590,
      h: 370,
      gotoLink: "/"
    }, {
      heading: 'Publish',
      description: 'Create your print and ebook with professional quality.',
      image: '/slides/slide2.svg',
      w: 590,
      h: 370,
      gotoLink: "/how-it-works"
    },
    {
      heading: 'You Have a Story. Share It with the World.',
      description: 'Everything you need to publish, print, promote and sell your book to millions of readers.',
      image: '/slides/slide1.webp',
      w: 360,
      h: 400,
      gotoLink: "/login"
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
    }, 5000); // change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentSlide])

  return (
    <div className='relative md:h-[480px] w-full bg-[#f0fbfc] flex justify-center items-center sm:gap-10 px-5'>
      <button
        onClick={handlePrevious}
        className='absolute z-20 left-5 top-1/2 md:relative md:left-0 md:top-0 w-10 h-10 flex items-center justify-center border border-[#3a7c92] rounded-full cursor-pointer'>
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
            <div className='w-fit h-full flex flex-col items-center md:items-start'>
              <div className={`sm:max-w-[540px]`}>
                <h1 className={`mb-3 text-[clamp(30px,2vw,42px)] leading-[clamp(30px,2.5vw,50px)] text-center md:text-start text-wrap font-extrabold text-[#4e9eb8]`}>{slides[slides.length - 1].heading}</h1>
              </div>
              <div className='sm:max-w-[540px]'>
                <p className='sm:text-[clamp(18px,1.5vw,22px)] sm:leading-[clamp(20px,2.5vw,30px)] text-center md:text-start font-normal text-wrap'>{slides[slides.length - 1].description}</p>
              </div>
              <button className='w-[190px] sm:w-[220px] h-[48px] bg-[#febe10]/90 hover:bg-[#febe10] transition duration-100 rounded-[12px] mt-7 sm:text-[20px] font-medium cursor-pointer'>Get Started for Free</button>
            </div>
            <div className='relative shrink-0 w-[320px] sm:w-[clamp(360px,25vw,480px)] h-90'>
              <Image src={slides[slides.length - 1].image} alt='image' fill className='object-contain' />
            </div>
          </div>

          {slides.map((slide, index) => {
            return (
              <div key={index}
                className='shrink-0 my-5 w-full h-full flex flex-col-reverse md:flex-row md:justify-between items-center'>
                <div className='w-fit h-full flex flex-col items-center md:items-start'>
                  <div className={`sm:max-w-[540px]`}>
                    <h1 className={`${index === 4 ? 'mb-3 text-[clamp(30px,2vw,42px)] leading-[clamp(30px,2.5vw,50px)] text-center md:text-start text-wrap font-extrabold text-[#4e9eb8]' : 'text-[35px] md:text-[clamp(30px,5vw,108px)]'} font-extrabold text-[#4e9eb8]`}>{slide.heading}</h1>
                  </div>
                  <div className={`sm:max-w-[540px]`}>
                    <p className='sm:text-[clamp(18px,1.5vw,22px)] sm:leading-[clamp(20px,2.5vw,30px)] text-center md:text-start font-normal text-wrap'>{slide.description}</p>
                  </div>
                  <button className='w-[190px] sm:w-[220px] h-12 bg-[#febe10]/90 hover:bg-[#febe10] transition duration-100 rounded-[12px] mt-7 sm:text-[20px] font-medium cursor-pointer'>
                    <Link href={`${slide.gotoLink ? slide.gotoLink : '/'}`}>Get Started for Free</Link>
                  </button>
                </div>
                <div className='relative shrink-0 w-[320px] sm:w-[clamp(360px,25vw,480px)] h-90'>
                  <Image src={slide.image} alt='image' fill className='object-contain' />
                </div>
              </div>
            )
          })
          }
          {/* clone slide */}
          <div className='shrink-0 my-5 w-full h-full flex flex-col-reverse md:flex-row md:justify-between items-center'>
            <div className='w-fit h-full flex flex-col items-center md:items-start'>
              <div className={`sm:max-w-[540px]`}>
                <h1 className={`text-[35px] md:text-[clamp(30px,5vw,108px)] font-extrabold text-[#4e9eb8] text-center md:text-start`}>{slides[0].heading}</h1>
              </div>
              <div className={`sm:max-w-[540px]`}>
                <p className='sm:text-[clamp(18px,1.5vw,22px)] sm:leading-[clamp(20px,2.5vw,30px)] text-center md:text-start font-normal text-wrap'>{slides[0].description}</p>
              </div>
              <button className='w-[190px] sm:w-[220px] h-[48px] bg-[#febe10]/90 hover:bg-[#febe10] transition duration-100 rounded-[12px] mt-7 sm:text-[20px] font-medium cursor-pointer'>Get Started for Free</button>
            </div>
            <div className='relative shrink-0 w-[320px] sm:w-[clamp(360px,25vw,480px)] h-90'>
              <Image src={slides[0].image} alt='image' fill className='object-contain' />
            </div>
          </div>

        </div >
      </div>

      <button
        onClick={handleNext}
        className='absolute z-20 right-5 top-1/2 md:relative md:right-0 md:top-0 w-10 h-10 flex items-center justify-center border border-[#3a7c92] rounded-full cursor-pointer'>
        <img src="/arrow.svg" alt="arrow" className='w-full h-full block rotate-90 mr-3' />
      </button>

    </div >
  )
}

export default CardsCrousal