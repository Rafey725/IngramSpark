import React from 'react'
import Link from 'next/link'

const CoverDesignBasics = () => {
    type frontCoverSectionType = { heading: string, description: string }
    let frontCoverSection: frontCoverSectionType[] = [{
        heading: "Book Cover Imagery",
        description: "Your imagery could be a photograph, an illustration, geometric shapes, an interesting play on color, or more!",
    }]
    return (
        <div className='max-w-[78.125rem] flex flex-col items-start md:gap-4 xl:gap-7 mx-auto my-12 px-0 md:px-10 overflow-hidden'>
            <div className="max-w-[765px] w-full md:max-w-[48.75rem] md:w-[clamp(20rem,50vw,48.75rem)] py-6 px-4 sm:px-6 md:px-10 box-border">
                <div className='text-[#666]'>
                    <p>
                        Book cover design is one of the most fun parts of the publishing process! It’s an opportunity to take your manuscript—the story you’ve poured your heart and soul into—and give the words a visual representation.Ask yourself: If I was only given a split second to grab a potential reader’s attention, what’s the best way to do that ?
                    </p>
                    <p className='font-bold my-4'>
                        Answer : a compelling book cover design.
                    </p>
                    <p>
                        There are three things to consider in book cover design: the front cover, back cover, and spine.Let’s look at each of them individually.
                    </p>
                </div>
                {/* front cover design */}
                <div className='my-10'>
                    <h2 className='text-[clamp(24px,5vw,29px)] font-bold text-[#3c3c3c]'>Front Cover Design</h2>
                    {/* seperator */}
                    <div className='w-25 h-1 bg-[#4393b8] mt-2 mb-4' />
                    <p className='text-[#666] mb-4'>Your front cover is arguably the most important element of book cover design. There are two main parts of your front cover: imagery and typography.</p>
                    {frontCoverSection.map((item: frontCoverSectionType, idx: number) => {
                        return (
                            <div key={idx}>
                                <h2 className='text-[#4e9eb8] text-[26px] font-bold mt-6 mb-2'>{item.heading}</h2>
                                <p className='text-[#666]'>{item.description}</p>
                                <div className={`relative z-10 my-4 group group-hover:bg-none transition duration-500 w-[180px] max-h-[180px] h-[180px] bg-[url("/powered-by-curator.png")] bg-cover`}>
                                    <div className='opacity-0 group-hover:opacity-100 w-full h-full flex flex-col justify-between items-center cursor-pointer'>
                                        <div className='text-[#222] h-[140px] flex flex-col justify-center text-center'>
                                            <Link href="https://curator.io/" className='font-bold text-[#999] mb-1 underline hover:no-underline'>Curator.io</Link>
                                            <p>Powered By</p>
                                            <p>Curator</p>
                                        </div>
                                        <div className='text-[#222] h-10 w-full border-t border-gray-300 flex justify-center items-center'>6 minutes ago</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CoverDesignBasics