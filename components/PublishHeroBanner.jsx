import React from 'react'

const PublishHeroBanner = (props) => {
    return (
        <div className='h-auto md:h-[375px] w-full  bg-[#ecf8fd] flex justify-center items-center py-8'>
            <div className='max-w-[1170px] w-full h-full flex mx-10 gap-5 flex-col-reverse md:flex-row justify-center items-center'>
                <div className='w-[80%] md:w-[50%] h-full flex flex-col items-center md:items-start'>
                    <h1 className='text-[30px] md:text-[35px] lg:text-[52px] font-extrabold text-[#4e9eb8] mb-2'>{props.heading}</h1>
                    <p className='text-[18px] md:text-[20px] lg:text-[22px]'>{props.description}</p>
                    <button className='mt-5 w-40 h-12 bg-[#ffc31d] hover:bg-[#ffbb00] rounded-lg text-[20px] font-medium font-[sans-serif] cursor-pointer'>Publish Today</button>
                </div>
                <div className='w-[50%] h-full flex justify-center'>
                    <img src={props.image} alt="image" className='w-[200px] h-[200px] md:w-auto md:h-full' />
                </div>
            </div>
        </div>
    )
}

export default PublishHeroBanner