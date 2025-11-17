/* eslint-disable @next/next/no-img-element */
import React from 'react'

const InfiniteCrousal = () => {
    let slides = [
        '/infinite-slider/slide.png',
        '/infinite-slider/slide.png',
        '/infinite-slider/slide.png'
    ]
    return (
        <>
            <div className='w-screen h-[400px] flex overflow-hidden items-center'>
                <div className='w-full h-full flex animate-[scroll_20s_linear_infinite] sm:animate-[scroll_50s_linear_infinite]'>
                    {slides.map((slide, index) => (
                        <div key={index} className='shrink-0 w-full h-full m-2 my-10'>
                            <img src={slide} alt={`Slide ${index + 1}`} className='shrink-0 w-full h-full object-cover' />
                        </div>
                    ))
                    }
                </div>
            </div>
        </>
    )
}

export default InfiniteCrousal