import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Top8CoverTips = () => {

  type topEightTipsType = { number: number, title: string, para: string, lastPara?: string, image?: string, imageBox?: React.ReactNode }

  let topEightTips: topEightTipsType[] = [
    {
      number: 1,
      title: "Give readers a sneak peek of what’s to come.",
      para: "Your book cover design should give readers an idea of the plot/theme, without giving away any major spoilers. Not too much, not too little…but just enough to get them interested.",
    },
    {
      number: 2,
      title: "Indicate the book’s genre.",
      para: "Many readers can tell a book’s genre simply by glancing at the cover. For example, a thriller will look different from a collection of humorous essays, and many genres even differ by trim size.",
    },
    {
      number: 3,
      title: "Understand your audience.",
      para: "Oftentimes, books could fit into several genre categories. If you’ve written a combination of historical fiction and romance, your cover can help the reader understand whether your book is focused more on the history or the romance. Make sure your front cover accurately conveys what your book is about, so readers know what they’re getting into.",
      image: "/understand-audience-image.webp"
    },
    {
      number: 4,
      title: "Set the appropriate tone.",
      para: "All books have a dominant tone. In order to attract the right readers, your book cover design needs to match the tone of your book. What do we mean by that? Well, if you’ve written a mostly humorous book, you might stay away from darker imagery. If you’ve written a tear-jerker, you will likely want to refrain from using bright colors and cartoonish illustrations.",
    },
    {
      number: 5,
      title: "Pay attention to the details.",
      para: "Lighting, shading, image treatment, text hierarchy, layering…these are just a few of the details that can take your book cover design from mediocre to eye-catching.",
      imageBox: (
        <div className='flex flex-col sm:flex-row md:flex-col items-center xl:flex-row gap-4 px-4 py-7 pt-6 my-10 bg-[#f6f8fa] border border-gray-200 rounded-lg'>
          <div className='shrink-0 relative w-40 h-30'>
            <Image src="/pay-attention-image.webp" alt='image' fill className='scale-110 object-contain' />
          </div>
          <div className='text-[20px] text-[#333] space-y-1'>
            <p className='italic'>“Your book cover design isn’t a place to cut corners. You want to make sure every detail of your cover positions you as the capable and professional author you are.”</p>
            <p className='font-bold'>—Chris Payne, <Link href="https://99designs.com/promo/ingramPublisher" target='_blank' className='text-[#3a7c92] underline hover:text-[#4e9eb8] '>99designs</Link></p>
          </div>
        </div>
      ),
      lastPara: "The subtle (and not-so-subtle) details are what will make people want to buy your book."
    },
    {
      number: 6,
      title: "Follow the rules of design.",
      para: "Design is a creative field, but there are still several rules in place that can help grab your readers’ attention. Text hierarchy can emphasize important text (like your title) and contrasting colors can make certain text pop on the page. In addition, color psychology can be leveraged to create a specific emotional response",
    },
    {
      number: 7,
      title: "Have a distinct style.",
      para: "Yes, we just told you to follow the rules…but you still want your book to stand out on the shelves! Creating your own distinct visual style can help grab your readers’ attention and build your author brand at the same time.",
    },
    {
      number: 8,
      title: "Consider working with a professional.",
      para: "If the above sounds daunting, that’s okay—we can’t all be good at everything! Consider collaborating with a design professional to bring your vision to life. Your book cover is a reader’s first impression of your book and paying a professional can be treated as an investment towards future book sales!",
    },
  ]
  return (
    <div className='max-w-[78.125rem] flex flex-col items-start md:gap-4 xl:gap-7 mx-auto my-12 overflow-hidden'>
      <div className="max-w-[765px] w-full md:max-w-[48.75rem] md:w-[clamp(20rem,50vw,48.75rem)] py-6 px-4 sm:px-5 md:px-10 box-border">
        {/* heading */}
        <h1 className='text-[clamp(24px,5vw,29px)] font-bold text-[#666]'>8 Tips for Book Cover Design</h1>
        {/* seperator */}
        <div className='w-25 h-1 bg-[#4393b8] mt-2 mb-4' />
        {/* Top 8 tips headings */}
        <ol className='text-[#666] list-decimal list-inside ml-2 grid grid-cols-2 gap-3'>
          {topEightTips.map((tip, idx) => {
            return (
              <li key={idx}>
                {tip.title}
              </li>
            )
          })}
        </ol>
        {/* Top 8 tips */}
        <ol className='space-y-7 my-10'>
          {topEightTips.map((tip, idx) => {
            return (
              <li key={idx}>
                <div className='flex gap-4 items-start'>
                  <div className="w-6 h-6 shrink-0 flex items-center justify-center bg-[#629cb1] text-sm rounded-full text-white font-semibold">
                    <p>{tip.number}</p>
                  </div>
                  <div>
                    <h2 className='text-[20px] font-bold text-[#333]'>{tip.title}</h2>
                    {tip.image ? (
                      <div className='flex flex-col-reverse sm:flex-row md:flex-col items-center xl:flex-row gap-x-8'>
                        <p>{tip.para}</p>
                        <div className='shrink-0 relative w-50 h-30 my-10 xl:my-0'>
                          <Image src={tip.image} alt='image' fill className='object-contain scale-130' />
                        </div>
                      </div>
                    ) : (
                      <p className='text-[#666]'>{tip.para}</p>
                    )}
                  </div>
                </div>
                {tip.imageBox}
                <p className='px-4 text-[#666] text-center'>{tip.lastPara}</p>
              </li>
            )
          })}
        </ol>
        <p>If you don’t know where to start with the “rules” for book cover design, you can try IngramPublisher’s{" "}
          <Link href="/" className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>
            free online book design course
          </Link>{" "}
          or consider{" "}
          <Link href="/" className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>
            hiring an expert
          </Link>{" "}
          to design your book cover.</p>
        <div className='relative w-full h-[clamp(150px,50vw,400px)] mt-4 md:h-[clamp(200px,20vw,400px)]'>
          <Image src="/free-book-design-course-image.webp" alt='image' fill className='object-contain' />
        </div>
      </div>
    </div>
  )
}

export default Top8CoverTips