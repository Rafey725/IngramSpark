import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DesignIdeas = () => {
    let designIdeas = [
        {
            heading: "Minimalism",
            description: "A popular design approach is minimalism, distinguishable by clean and straightforward designs.",
            image: "/how-to-design-book/book-design-one.webp"
        },
        {
            heading: "Botanicals",
            description: "Flowers are finding their way onto the covers of books written by both men and women and across many different genres.",
            image: "/how-to-design-book/book-design-two.webp"
        },
        {
            heading: "Intertwining Text",
            description: "These days, more covers are laying images or drawings over and between the title text—making the imagery part of the font itself",
            image: "/how-to-design-book/book-design-three.webp"
        },
        {
            heading: "Real Photos",
            description: "Real-life photos are a great option for cover art. They range from historical to modern, from black and white to sepia toned to vibrantly colored.",
            image: "/how-to-design-book/book-design-four.webp"
        },
        {
            heading: "Double Exposure",
            description: "A double-exposure cover offers an outline within the backdrop of a bigger picture. The overall effect is really impactful and can be interpreted as surreal or even frightful.",
            image: "/how-to-design-book/book-design-five.webp"
        },
        {
            heading: "Big and Bold Typography",
            description: (
                <>
                    A theme across modern book covers is big, bold typography. The newest{" "}
                    <Link href={"/"} className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>
                        book fonts
                    </Link>{" "}
                    being used are blocky and clean with long lines—Lydian and sans serif are two popular options.
                </>
            ),
            image: "/how-to-design-book/book-design-six.webp"
        },
    ]
    return (
        <div className='max-w-[78.125rem] flex flex-col items-start md:gap-4 xl:gap-7 mx-auto my-12 overflow-hidden'>
            <div className="max-w-[765px] w-full md:max-w-[48.75rem] md:w-[clamp(20rem,50vw,48.75rem)] py-6 px-4 sm:px-5 md:px-10 box-border">
                {/* Title */}
                <h1 className="text-[clamp(23px,5vw,30px)] font-bold text-[#666]">
                    6 Book Cover Design Ideas
                </h1>
                <div className="w-24 h-1 bg-[#4393b8] my-6"></div>
                {/* 6 book cover designs */}
                <ol className='grid lg:grid-cols-2 gap-x-6 gap-y-10 my-5'>
                    {designIdeas.map((idea, idx) => {
                        return (
                            <li key={idx} className='flex gap-4'>
                                <div className="w-6 h-6 shrink-0 flex items-center justify-center bg-[#629cb1] text-sm rounded-full text-white font-semibold">
                                    <p>{idx + 1}</p>
                                </div>
                                <div>
                                    <div>
                                        <h2 className='text-[20px] font-bold text-[#333] pb-1'>{idea.heading}</h2>
                                        <p className='text-[#666]'>{idea.description}</p>
                                    </div>
                                    <div className='shrink-0 relative  h-100 sm:h-125 lg:w-[clamp(210px,15vw,300px)] lg:h-[clamp(350px,30vw,500px)] mt-2'>
                                        <Image src={idea.image} alt='image' fill className='object-contain'/>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ol>
                <div className='font-bold text-center text-[#333]'>
                    <p>All six cover designs by {" "}
                        <Link href={"https://ebooklaunch.com/book-cover-design/"} target='_blank' className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>
                            Ebook Launch
                        </Link>
                    </p>
                    <h2 className='font-bold text-[clamp(20px,4vw,24px)] leading-[clamp(25px,5vw,40px)] mt-6'>For more book cover design ideas, check out our blog post: </h2>
                    <Link href={"/"} className='text-[#3a7c92] text-[clamp(20px,4vw,24px)] leading-[clamp(25px,5vw,40px)] underline hover:text-[#4e9eb8] font-bold'>
                        Top 10 Book Cover Ideas (and Examples!)
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DesignIdeas