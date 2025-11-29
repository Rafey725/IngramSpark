import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CoverDesignBasics = () => {
    type frontCoverSectionType = { heading: string, description: string, lastPara?: string }
    type backCoverAndSpineSectionType = { heading: string, para1: string, para2: string, image: string, lastPara?: string }
    let frontCoverSection: frontCoverSectionType[] = [
        {
            heading: "Book Cover Imagery",
            description: "Your imagery could be a photograph, an illustration, geometric shapes, an interesting play on color, or more!",
        },
        {
            heading: "Book Cover Typography",
            description: "The typography should include your book’s title, subtitle, and author name. Keep in mind that the book’s title should always be the most prominent (unless you’re a New York Times-bestselling author).",
            lastPara: (
                <>
                    Your cover will likely be designed to stand out on a bookshelf, but you should also ask yourself:{" "}
                    <span className='italic'>what does my book cover look like on a small screen?</span> Your front book cover design should be appealing (and readable) to both a reader browsing in a bookstore and a reader looking at a thumbnail image of your book online.
                </>
            )
        },
    ]

    let backCoverAndSpineSection: backCoverAndSpineSectionType[] = [
        {
            heading: "Back Cover Imagery",
            para1: "When people think about book design, they’re often picturing the front cover alone. However, a book cover is an entire package—front, back, and spine. Your back cover is your chance to build on the excitement you created with the front cover, and ultimately hook the reader into buying your book.",
            para2: "The back cover typically includes a book description, book reviews, author bio, ISBN, and barcode. The book description and reviews are your main selling points, and should come above the bio, ISBN, and barcode.",
            image: "/back-cover-design.webp",
            lastPara: "Keep in mind that if you’re publishing a hardcover, you can place some of this information on the interior flaps of a dust jacket. Similarly, if you’re publishing an ebook, this information can go on your ebook’s description page.",
        },
        {
            heading: "Spine Design",
            para1: "The spine of a book is often overlooked by new authors–but take a moment to think about how books are shelved at bookstores and libraries. In most scenarios, the spine is the first thing readers will see as they scan the shelves.",
            para2: "The title should be the most prominent text on the spine, followed by the author name, and the logo of your publisher imprint. As you’re designing your book, keep in mind that the spine is directly affected by your book’s page count. You’ll want to make sure that your interior file is complete before beginning the book cover design process to ensure that the spine width does not change.",
            image: "/spine-design.webp",
            lastPara:
                <>
                    You can use{" "}
                    <Link href={"/"} className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>
                        IngramPublisher’s Weight and Spine Width Calculator
                    </Link>{" "}
                    to calculate the width of your spine before you begin your book cover design.
                </>,
        }
    ]

    return (
        <div className='max-w-[78.125rem] flex flex-col items-start md:gap-4 xl:gap-7 mx-auto my-12 overflow-hidden'>
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
                                {/* curator image link box */}
                                <div className={`group relative z-10 my-4 w-[180px] h-[180px]`}>
                                    {/* background image */}
                                    <div className='absolute inset-0 top-0 left-0 w-full h-full curator-image opacity-100 group-hover:opacity-0 transition-opacity duration-300' />
                                    {/* content that appears on hover */}
                                    <div
                                        onClick={() => window.open("https://curator.io/", "_blank")}
                                        className='relative z-20 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between items-center cursor-pointer'>
                                        <div className='text-[#222] h-[140px] flex flex-col justify-center text-center'>
                                            <Link href="https://curator.io/" target='_blank' className='font-bold text-[#999] mb-1 underline hover:no-underline'>Curator.io</Link>
                                            <p>Powered By</p>
                                            <p>Curator</p>
                                        </div>
                                        <div className='text-[#222] h-10 w-full border-t border-gray-300 flex justify-center items-center'>6 minutes ago</div>
                                    </div>
                                </div>
                                {/* last paragraph */}
                                <p className='text-[#666]'>{item.lastPara}</p>
                            </div>
                        )
                    })}
                </div>

                {/* back cover and spine design */}
                <div>
                    {
                        backCoverAndSpineSection.map((section, idx) => (
                            <div key={idx} className="my-10">
                                <h2 className='text-[clamp(24px,5vw,29px)] font-bold text-[#3c3c3c]'>{section.heading}</h2>
                                <div className='w-25 h-1 bg-[#4393b8] mt-2 mb-4' />
                                <div className='w-full flex gap-3 flex-col-reverse sm:flex-row lg:flex-row '>
                                    <div className='w-full'>
                                        <p className='text-[#666] mb-4'>{section.para1}</p>
                                        <p className='text-[#666] mb-4'>{section.para2}</p>
                                    </div>
                                    <div className='w-80'>
                                        <div className='shrink-0 relative w-50 h-40'>
                                            <Image src={section.image} alt='image' fill className='object-contain' />
                                        </div>
                                    </div>
                                </div>
                                <p className='text-[#666]'>{section.lastPara}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CoverDesignBasics