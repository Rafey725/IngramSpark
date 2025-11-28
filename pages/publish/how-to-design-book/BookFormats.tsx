import React from 'react'
import Image from "next/image";
import Link from "next/link";

const BookFormats = () => {
  const SectionOne = [{
    paragraphs: [
      `Ah, the age-old question: ebooks vs. print books. One of the best ways to maximize your book’s potential success is to offer it in multiple formats. If a reader exclusively looks for books to read on their Kindle, they won’t find your book if there is no ebook version. On the other hand, if a reader exclusively shops for books in their local independent bookstore, they won’t find your book if there is no print version.`,

      `In addition, studies have shown that the majority of consistent ebook readers also regularly purchase print books. These hybrid readers seem to make buying choices situationally; for instance, an avid reader might enjoy a physical paperback while relaxing at home, then switch to an e-reader while traveling with limited luggage space.`,
    ],
    highlightBox: {
      text: `Ebooks can be less expensive to produce, so some authors use them as free digital giveaways to build their author platform before producing print copies.`,
      imgAlt: "ebook illustration placeholder"
    },
    finalParagraph: `Many authors publish their books in a single format only, and while this approach might also work for your book, the prevailing philosophy supports publishing your book in as many different formats as possible—with the goal of making your book accessible to as many different readers as possible.`
  }];

  let SectionTwo = {
    paragraphs: [
      <li key={1}>Alright, let’s talk print books. You’re probably wondering—besides the obvious—what’s the{" "}
        <Link href={"/"} className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>difference between hardcover and paperback</Link>
        {" "}books?
      </li>,
      <li key={2}>In traditional publishing, debut books are typically released in hardcover several months before the paperback. This capitalizes on the readership who’s willing to pay more for the hardcover edition of a book and those who don’t want to wait. IngramSpark is one of few print-on-demand services that offers hardcover book printing in a variety of sizes, with or without a dust jacket.
      </li>,
      <li key={3}>That being said, the perfect-bound trade paperback is the most commonly printed book in the self-publishing industry. Many readers prefer the ease of a paperback, and for indie authors on a budget, it’s less expensive to produce and ship, something you can test for yourself with IngramSpark’s
        <Link href={"/"} className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'> Print and Ship Calculator</Link>.</li>
    ],
    imageRight: {
      imgAlt: "hardcover book placeholder"
    }
  }

  const hardcoverPros = [
    {
      number: 1,
      title: "Higher Margin",
      description: (
        <p className='text-[#666]'>
          Some readers are willing to pay for the durability and prestige associated with a hardcover book. Since they’re more expensive to produce, the list price of a hardcover book is typically higher than a paperback. IngramSpark authors can calculate the compensation of a paperback vs. hardcover book with IngramSpark’s
          {" "}<Link href={"/"} className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>Publisher Compensation Calculator</Link>.
        </p>),
      image: "/compensation-calculator-image.webp"
    },
    {
      number: 2,
      title: "Libraries Prefer Hardcovers",
      description: (
        <p className='text-[#666]'>Did you know that libraries prefer to stock hardcover books? That’s because hardcover books stand up better to repeated use. Since library books are shared between various members of a community, authors can also price a book higher for the library market than the retail market—which means more money for your bottom line.
        </p>),
    },
    {
      number: 3,
      title: "Maximize Sales Potential",
      description: (
        <p className='text-[#666]'>Different readers prefer to consume content in different ways. By having your book available in multiple formats (hardcover, paperback, and ebook), and enabling it for global distribution, you’re maximizing the opportunity to make a sale.
        </p>),
    },
  ];
  return (
    <div className='max-w-[78.125rem] flex flex-col items-start md:gap-4 xl:gap-7 mx-auto my-12 px-0 md:px-10 overflow-x-hidden'>
      <div className="max-w-[765px] w-full md:max-w-[48.75rem] md:w-[clamp(20rem,50vw,48.75rem)] py-6 px-4 sm:px-6 md:px-10 box-border">

        {/* SECTIONS */}
        {SectionOne.map((section, index) => (
          <div key={index} className="space-y-6 mb-15">

            {/* Title */}
            <h1 className="text-[clamp(23px,5vw,30px)] font-bold text-[#666]">
              Ebooks vs. Print Books
              Difference Between Hardcover and Paperback
            </h1>
            <div className="w-24 h-1 bg-[#4393b8]"></div>

            {/* Paragraphs */}
            <div className="space-y-4 text-[#666] leading-relaxed">
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Highlight Box (only if exists) */}
            {section.highlightBox && (
              <div className="border border-gray-200 rounded-lg p-6 bg-[#f6f8fa] flex gap-6 items-center">
                {/* IMAGE PLACEHOLDER */}
                <div className="w-[210px] h-[150px] shrink-0 relative">
                  <Image src={"/ebook-image.webp"} alt={section.highlightBox.imgAlt} fill className='object-contain' />
                </div>

                <p className="text-[#666] text-[21px] leading-relaxed">
                  {section.highlightBox.text}
                </p>
              </div>
            )}

            {/* Final paragraph */}
            {section.finalParagraph && (
              <p className="text-[#666] leading-relaxed">{section.finalParagraph}</p>
            )}
          </div>
        ))}

        <div className="space-y-6 mb-15">

          {/* Title */}
          <h1 className="text-[clamp(23px,5vw,30px)] font-bold text-[#666]">
            Difference Between Hardcover and Paperback
          </h1>
          {/* description */}
          <div className='grid grid-cols-[1fr_auto]'>
            <ul className='text-[#666]'>
              {SectionTwo.paragraphs}
            </ul>
            <div className='relative w-70 h-68'>
              <Image src="/hardcover-paperback-image.webp" alt='' fill className='object-contain' />
            </div>
          </div>
        </div>

        {/* PROS OF HARDCOVER */}
        <div className="space-y-4">
          <h2 className="text-[26px] font-bold text-[#4e9eb8]">Pros of Hardcover Books</h2>
          <p>So why should indie authors consider{" "}
            <Link href={"/"} className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>publishing a hardcover book</Link>? There are three main reasons.
          </p>

          {hardcoverPros.map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="w-23 h-6 flex items-center justify-center bg-[#629cb1] text-sm rounded-full text-white font-semibold">
                <p>{item.number}</p>
              </div>
              <div>
                <p className="font-bold text-xl">{item.title}</p>
                {item.description}
                {item.image && (
                  <div className='relative w-full h-[400px]'>
                    <Image src={item.image} alt='image' fill className='object-contain' />
                  </div>
                )}
              </div>
            </div>
          ))}

          <p className='text-[#666]'>In addition, certain genres are more likely to be published in hardcover, including cookbooks, some nonfiction, and most young adult fantasy and dystopian books. If your target reader has an expectation, you want to be sure to fulfill it.
          </p>
          <p className='text-[#666]'>IngramSpark author, Savannah J. Goins, shared her experience{" "}
            <Link href={"/"} className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>publishing a hardcover</Link>
            book with IngramSpark’s Jacketed Case Laminate.
          </p>
          {/* video */}
          <div className='flex justify-center'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/YRey_n9Zo_I" title="IngramSpark&#39;s Jacketed Case Laminate + COVER REVEAL! | Savannah J. Goins" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookFormats