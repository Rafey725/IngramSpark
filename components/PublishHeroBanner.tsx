/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import React, { CSSProperties } from 'react'

type PublishHeroBannerProps = {
    heading: string,
    description: string,
    image: string,
    button?: boolean,
    bgColor?: string,
    gotoLink?: string,
}

const PublishHeroBanner = (props: PublishHeroBannerProps) => {
    return (
        <div
            style={{ backgroundColor: props.bgColor }}
            className={`h-auto md:h-[375px] w-full flex justify-center items-center py-8`}>
            <div className='max-w-[1170px] w-full h-full flex mx-30 px-3 md:mx-7 lg:mx-10 gap-y-5 flex-col-reverse md:flex-row justify-between items-center'>
                <div className='h-full flex flex-col items-center sm:items-start justify-center max-w-164'>
                    <h1 className='text-[clamp(25px,5vw,52px)] text-center md:text-start leading-[clamp(35px,5vw,60px)] font-extrabold text-[#4e9eb8] mb-2'>{props.heading}</h1>
                    <p className='sm:text-[18px] text-center sm:text-start  md:text-[20px] lg:text-[22px]'>{props.description}</p>
                    {props.button && <button className='mt-5 w-full sm:w-40 h-12 bg-[#ffc31d] hover:bg-[#ffbb00] rounded-lg text-[20px] font-medium font-[sans-serif] cursor-pointer'>
                        {props.gotoLink ? <Link href={props.gotoLink}>Publish Today</Link> : "Publish Today"}
                    </button>}
                </div>
                <div className='relative shrink-0 w-80 sm:w-90 h-73 sm:mr-10'>
                    <Image src={props.image} alt="image" fill className={`object-contain `} />
                </div>
            </div>
        </div>
    )
}

export default PublishHeroBanner