/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

const InfiniteCrousal = () => {
    let slides: string[] = [
        '/infinite-slider/slide.png',
        '/infinite-slider/slide.png',
        '/infinite-slider/slide.png'
    ]
    
    return (
        <>
            <div className='max-w-screen h-[500px] flex overflow-hidden items-end -mb-5'>
                <div className='shrink-0 w-full h-full flex animate-[scroll_20s_linear_infinite] sm:animate-[scroll_50s_linear_infinite]'>
                    {slides.map((slide, index) => (
                        <div key={index} className='shrink-0 w-full h-full relative'>
                            <Image src={slide} alt={`Slide ${index + 1}`} fill className='shrink-0 object-contain' />
                        </div>
                    ))
                    }
                </div>
            </div>
        </>
    )
}

export default InfiniteCrousal