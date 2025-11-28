import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const TrimSize = () => {
    let publishedBooks = [
        {
            heading: "Novels & Poetry Books",
            image: "/average-novel.webp",
        },
        {
            heading: "Children's & Cookbooks",
            image: "/childrens-book.webp",
        },
        {
            heading: "Graphic Novels",
            image: "/graphic-novel.webp",
        },
        {
            heading: "Business & Health Books",
            image: "/business-health-book.webp",
        }
    ]
    return (
        <div className='max-w-[78.125rem] flex flex-col items-start md:gap-4 xl:gap-7 mx-auto my-12 px-0 md:px-10 overflow-hidden'>
            <div className="max-w-[765px] w-full md:max-w-[48.75rem] md:w-[clamp(20rem,50vw,48.75rem)] py-6 px-4 sm:px-6 md:px-10 box-border">
                {/* First Line with Link */}
                <p className="text-[20px] mb-4">
                    Learn more about book layout design in{" "}
                    <Link href={"/"} className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold italic'>
                        The Ultimate Guide to Master Your Book Cover Design: Expanded Edition.
                    </Link>
                </p>

                {/* Heading */}
                <h2 className="text-[26px] font-bold text-[#4e9eb8] mb-4">
                    So how do you know what trim size to choose?
                </h2>

                {/* Paragraph */}
                <p className="text-[16px] text-gray-700 leading-relaxed mb-4">
                    A good rule of thumb is to stick to industry standards. Go to your local bookstore or
                    search online to see what trim sizes are most commonly used on popular books in your genre.
                </p>

                {/* Published Books */}
                <div className='mt-15'>
                    <h3 className="text-[29px] font-bold text-[#3c3c3c]">
                        Most Commonly Used Specifications for Books Published through IngramSpark
                    </h3>
                    <div className="w-[90px] h-[4px] bg-[#4ea9c7] my-4"></div>
                    <div className='grid grid-cols-2 grid-rows-2 w-full min-h-150 gap-x-5'>
                        {publishedBooks.map((book, idx) => {
                            return (
                                <div key={idx}>
                                    <h2 className='text-[26px] font-bold text-[#4e9eb8] text-center mb-3'>{book.heading}</h2>
                                    <div className='relative min-w-[350px] min-h-[200px]'>
                                        <Image src={book.image} alt='book image' fill className='object-contain' />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <p className='text-[#666]'>Once you have an idea of your book’s trim size, use
                        <Link href={"/"} className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>IngramSpark’s Print and Ship Calculator</Link>
                        to determine how much you’ll pay to print and ship orders directly to yourself or your customers!
                    </p>
                    <div className='relative w-full h-[400px] mt-6'>
                        <Image src={"/print-ship-calculator-image.webp"} alt='image' fill className='object-contain' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrimSize