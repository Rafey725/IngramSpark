/* eslint-disable @next/next/no-img-element */
import React from 'react'

const PublishHeroBanner = (props) => {
    return (
        <div className='h-auto md:h-[375px] w-full  bg-[#ecf8fd] flex justify-center items-center py-8'>
            <div className='max-w-[1170px] w-full h-full flex  mx-3 md:mx-10 gap-5 flex-col md:flex-row justify-center items-center'>
                <div className='w-[80%] md:w-[50%] h-full flex flex-col items-center sm:items-start'>
                    <h1 className='text-[clamp(25px,5vw,52px)] text-center leading-[clamp(35px,5vw,60px)] font-extrabold text-[#4e9eb8] mb-2'>{props.heading}</h1>
                    <p className='sm:text-[18px] text-center md:text-[20px] lg:text-[22px]'>{props.description}</p>
                    <button className='mt-5 w-full sm:w-40 h-12 bg-[#ffc31d] hover:bg-[#ffbb00] rounded-lg text-[20px] font-medium font-[sans-serif] cursor-pointer'>Publish Today</button>
                </div>
                <div className='w-[80%] md:w-[50%] h-full flex justify-center'>
                    <img src={props.image} alt="image" className='w-auto h-auto md:w-auto md:h-full' />
                </div>
            </div>
        </div>
    )
}

export default PublishHeroBanner