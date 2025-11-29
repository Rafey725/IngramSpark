import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const HiringCoverDesigner = () => {
    const questionsList = [
        "If you don’t like the first concept, are they willing to go back to the drawing board?",
        "How many rounds of revisions are allowed?",
        "Will revisions cost you extra money?",
    ];


    const experts = [
        <>
            <Link href=" " className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>1106 Design</Link>{" "}
            researches your book’s specific genre, then creates three unique versions for you to choose from.Their design team works with you to go through however many rounds of designs it takes until you’re 100 % satisfied.
        </>,
        <>
            <Link href=" " className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>Ebook Launch</Link>{" "}
            offers exclusive book cover design packages to all IngramPublishers authors and works with several large organizations in the indie-publishing
            business.
        </>,
        <>
            <Link href=" " className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>Pick-a-Woo-Woo Publishing</Link>{" "}
            is an Australian author services company that provides original, customized, and professional book cover design.
        </>,
        <>
            <Link href=" " className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>Reedsy</Link>{" "}
            is an online marketplace that lets you browse through thousands of vetted book service professionals, including award-winning book designers.
        </>,
        <>
            <Link href=" " className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>The Book Cover Whisperer</Link>{" "}
            creates visually stunning covers your readers will love, with unlimited changes until you’re 100% satisfied.
        </>
    ];
    return (
        <div className='max-w-[78.125rem] flex flex-col items-start md:gap-4 xl:gap-7 mx-auto my-12 overflow-hidden'>
            <div className="max-w-[765px] w-full md:max-w-[48.75rem] md:w-[clamp(20rem,50vw,48.75rem)] py-6 px-4 sm:px-5 md:px-10 box-border">


                <p className="mb-15 text-[clamp(14px,2.5vw,16px)] leading-[21px]">
                    We highly recommend publishing a book in multiple formats (both print and digital), so it’s important to consider your publishing goals before you hire a book cover designer. If you’d like to publish in both formats, you’ll save money by having a designer create the print and ebook cover files at the same time.
                </p>
                <section className='text-[#3c3c3c] mb-10'>
                    <h2 className="text-[clamp(24px,2.5vw,29px)] leading-[25px] font-bold text-[#3c3c3c] mb-4">Questions to Keep in Mind</h2>
                    <div className="w-23 h-1 bg-[#4e9eb8] mb-6"></div>
                    <p className="mb-1  text-[clamp(14px,2.5vw,16px)] leading-[21px]">
                        There are several things to keep in mind when you hire a book cover designer. Before hiring someone, you should always ask to see his or her previous work. If a book designer’s portfolio of cover designs isn’t interesting or appealing to you, explore other options!
                    </p>
                    <p className=' text-[clamp(14px,2.5vw,16px)] leading-[21px]'>
                        If you have a strong concept for your book cover design, it’s important that you communicate this with your cover designer. Also, make sure to discuss what the feedback process looks like:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        {questionsList.map((q, index) => (
                            <li key={index}>{q}</li>
                        ))}
                    </ul>
                </section>


                <section className='text-[#3c3c3c] mb-5'>
                    <h2 className="text-[clamp(24px,2.5vw,29px)] font-bold text-[#3c3c3c] mb-4">Hiring a Book Cover Designer</h2>
                    <div className="w-23 h-1 bg-[#4e9eb8] mb-6"></div>
                    <p className="mb-4 text-[clamp(14px,2.5vw,16px)] leading-[21px]">
                        IngramPublishers has a list of several recommended experts to help you with the book cover design process! They’re located on our{" "}
                        <Link href="/" className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>
                            Experts
                        </Link>{" "}
                        page under “Book Cover Design” and “Full Service.” Here are a few of our highly recommended experts:
                    </p>
                    <ul className="list-disc pl-6 text-[clamp(14px,2.5vw,16px)] leading-[21px] space-y-2">
                        {experts.map((e, index) => (
                            <li key={index}>{e}</li>
                        ))}
                    </ul>
                    <p className="mt-4 text-[clamp(14px,2.5vw,16px)] leading-[21px]">
                        If you’ve made it this far in the publishing process, congratulations! You’re one step closer to publishing the book of your dreams.
                    </p>
                </section>
                {/* ultimate guide to master book design */}
                <div className='relative w-full h-[clamp(150px,50vw,400px)] mt-3 md:h-[clamp(200px,20vw,400px)]'>
                    <Image src="/how-to-design-book/ultimate-guide-master-book-design.webp" alt='image' fill className='object-contain' />
                </div>
                <p className="mt-4 text-[clamp(14px,2.5vw,16px)] leading-[21px] text-[#3c3c3c]">
                    Once you’ve published your work, be sure to tag us in your #SparkUnboxing on {" "}
                    <Link href="" className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>
                        Facebook
                    </Link>, {" "}
                    <Link href="" className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>
                        Twitter
                    </Link>, or {" "}
                    <Link href="" className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>
                        Instagram
                    </Link>{" "}
                    for a chance to be featured—and check out some of the best #SparkUnboxing moments below!
                </p>
                <Link href="/create-account">
                    <div className='relative cursor-pointer md:max-w-200 w-full h-[clamp(80px,10vw,150px)] md:h-[clamp(100px,10vw,200px)] mt-10'>
                        <Image src="/how-to-design-book/footer-image.webp" alt='image' fill className='object-contain' />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default HiringCoverDesigner