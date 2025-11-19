"use client"

import React from 'react'

type BgBannerProps = {
    bgImage: string;
    heading1: string;
    heading2: string;
}

const BgBanner = (props: BgBannerProps) => {
    return (
        <div
            style={{ backgroundImage: `url(${props.bgImage})` }}
            className={`second-bg w-full max-h-screen h-[40vh] lg:h-[50vh] flex`}>
            <div className="content max-w-[1100px] mx-auto w-full h-full flex md:justify-start justify-center items-center py-4">
                <div className='max-w-[330px]mx-10'>
                    <h1 className='text-[clamp(25px,5vw,40px)] leading-[clamp(25px,5vw,50px)] font-bold text-[#4e9eb8]'>{props.heading1}</h1>
                    <h1 className='text-[clamp(25px,5vw,40px)] leading-[clamp(25px,5vw,50px)] font-bold text-[#4e9eb8]'>{props.heading2}</h1>
                    {/* seperator */}
                    <div className='w-[100px] h-1 mt-5 bg-[#ffc20d]'></div>
                </div>
            </div>
        </div>
    )
}

export default BgBanner