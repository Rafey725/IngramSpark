/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AuthorSalary = () => {
  const paragraphs = [
    {
      content: (
        <>
          The median income for traditionally published authors who participated in the survey—based solely on their book-related activities—was <span className="font-semibold">$12,400</span>. While many writers dream of being traditionally published, it's important to remember that a traditional publishing deal doesn't always equate to financial success.
        </>
      ),
    },
    {
      content: (
        <>
          The good news? Self-published author incomes are the only incomes on the rise from those surveyed. As the publishing landscape continues to change, more and more traditionally published authors are choosing to self-publish instead—taking back control of their book, their royalties, and ultimately, their livelihoods.
        </>
      ),
    },
  ]

  return (
    <div id='author-salary-container' className='max-w-[78.125rem] flex flex-col md:flex-row items-start md:gap-4 xl:gap-7 mx-auto my-12 px-5 md:px-10'>
      <div className="max-w-195 md:w-[clamp(20rem,50vw,48.75rem)] py-6">
        <h2 className="text-[clamp(20px,4vw,24px)] font-light mb-6">
          After discussing the costs associated with self-publishing a book, now you're probably wondering,{" "}
          <Link href="#" className="text-[#4e9eb8] underline hover:text-[#4e9eb8]/70">how much do authors make</Link>
          ?
        </h2>

        <p className='text-[clamp(0.875rem,2vw,1rem)] text-[#3c3c3c] font-bold mb-6'>
          In January 2019, The Authors Guild shared the results from their 2018 Authors’ Income Survey, concluding that:
        </p>

        {/* Quote Bubble */}
        <p className='text-[clamp(1.125rem,2.5vw,1.5rem)] text-[#3c3c3c] font-semibold leading-relaxed flex gap-2 mb-3'>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 120 120" className='rotate-180 -mt-19 w-52 h-52'>
            <path fill="#1E90D6" d="M35 25c-10 0-18 8-18 18s6 18 16 22c-2 8-6 14-13 18-2 1-3 4-2 6s4 3 6 2c13-6 21-20 21-36V43c0-10-8-18-18-18zm46 0c-10 0-18 8-18 18s6 18 16 22c-2 8-6 14-13 18-2 1-3 4-2 6s4 3 6 2c13-6 21-20 21-36V43c0-10-8-18-18-18z" />
          </svg>
          <span>
            Median incomes of all published authors who were surveyed—including part-time, full-time, traditionally published, self-published, and hybrid-published authors—for all writing-related activities was $6,080.
          </span>
        </p>

        <div className='flex items-start flex-col-reverse lg:flex-row mt-3 gap-4'>
          <div>
            {/* Paragraphs */}
            {paragraphs.map((paragraph, index) => (
              <p key={index} className={`text-[clamp(0.875rem,2vw,1rem)] text-[#3c3c3c] font-bold mb-3`}>
                {paragraph.content}
              </p>
            ))}
          </div>
          <div className="shrink-0 relative w-75 h-57">
            <Image src={'/author-salary-image.webp'} alt="image" fill className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthorSalary