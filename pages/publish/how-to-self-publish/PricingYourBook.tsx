
import Link from 'next/link'
import React from 'react'

const PricingYourBook = () => {
  let secondSectionList = [
    "Evaluating the price of similar book titles will help you estimate how much the average reader is willing to spend on a book in your genre.",
    "If you want to maximize your profit, keep in mind that as you increase your price, you’ll lose more price - sensitive readers.If you know you have a fan base that’s willing to pay a premium price for your product, perhaps you can raise the price above the average market value.It comes down to understanding your audience and the value your book brings to them.",
    "If you want to reach more readers(and aren’t as concerned with making a profit), you can drop your price below the average book price in your genre."
  ]

  return (
    <div id='pricing-your-book-container' className='max-w-[78.125rem] flex flex-col items-start md:gap-4 xl:gap-7 mx-auto my-12 px-5 md:px-10'>
      <div className="max-w-195 md:w-[clamp(20rem,50vw,48.75rem)] py-6">
        <p className='text-[clamp(1rem,2.5vw,1.5rem)] text-[#3c3c3c] mb-10 font-light'>If you plan to enable your book for distribution, pricing your book is an important step. When you determine the cost to print a book, this will help you decide {" "}
          <Link href="#" className="text-[#4e9eb8] underline hover:text-[#4e9eb8]/70">how to price your book</Link>
          {" "}so that you make a profit on each book sale.
        </p>
        {/* first section */}
        <h2 className="text-[clamp(24px,4vw,32px)] text-[#4e9eb8] font-bold mb-4 border-l-4 border-[#ffca38] pl-4">
          Look at Competitive Book Prices
        </h2>
        <p className='text-[clamp(1rem,2.5vw,1.5rem)] text-[#3c3c3c] mb-10 font-light'>Evaluate books that are similar to yours in genre, format, trim size, and page count—how much do they cost?
        </p>
        <p className='text-[1rem] sm:font-semibold text-[#3c3c3c] mb-10 '>Visit your local bookstore and scan the shelves to find out, then make your book price similar. If most of the books in your genre are 6x9 paperbacks printed in black-and-white, then you might not need to spend extra money printing with premium color or in an unusual trim size.
        </p>
        {/* second section */}
        <h2 className="text-[clamp(24px,4vw,32px)] text-[#4e9eb8] font-bold mb-4 border-l-4 border-[#ffca38] pl-4">
          Consider Your Publishing Goals
        </h2>
        <p className='text-[clamp(1rem,2.5vw,1.5rem)] text-[#3c3c3c] mb-10 font-light'>Do you want to make as much money as possible, or do you want to reach as many readers as possible?
        </p>
        <ul className='space-y-3'>
          {secondSectionList.map((item, index) => {
            return (
              <li key={index} className='text-[1rem] sm:font-semibold text-[#3c3c3c]' >{item}</li>)
          })}
        </ul>
      </div>
    </div >
  )
}

export default PricingYourBook