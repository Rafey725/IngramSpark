import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FinalTips = () => {
    let tips: { title: string, description: string }[] = [
        {
            title: "1. Get Your Book Edited",
            description: "Professional editing is absolutely necessary before publishing your book. Even the Stephen Kings and John Grishams of the world rely on editors to polish their work before publication. Recognize the value that an editor brings to your work and don’t skip this step!"
        },
        {
            title: "2. Look Out for Overly Expensive Services",
            description: "Unfortunately, like any business, there are people out there who care more about making money than about helping you publish a quality book. A high price tag doesn’t always mean quality services. Do your research—ask for sample work from an editor, results from a marketing expert’s campaigns, or references from previous clients."
        },
        {
            title: "3. Go Wide With Your Book Distribution",
            description: "It’s important to partner with a global distributor, like IngramSpark, that can help you reach bookstores, retailers, and libraries all over the world. Don’t limit yourself with an exclusive deal. You want to be available in all channels where your potential readers are."
        },
        {
            title: "4. Be Realistic",
            description: "Almost every author has a goal of becoming a New York Times bestseller. As self-publishing continues to rise, so does the number of books published every year. Competition is fierce in the publishing industry. How many books would you like to sell in the first six months? How many reviews would you like to have? Take the time to create realistic author goals based on comparable books in your genre."
        },
        {
            title: "5. Get Involved",
            description: "Join a writing collective, become a patron at your local indie bookstore, and utilize the public library’s resources. Develop relationships with people who can help support you and your book along your publishing journey."
        },
    ]
    return (
        <div id='final-tips-container' className='max-w-[78.125rem] flex flex-col md:flex-row items-start md:gap-4 xl:gap-7 mx-auto my-12 px-5 md:px-10'>
            <div className="max-w-195 md:w-[clamp(20rem,50vw,48.75rem)] py-6">
                <h2 className="text-[clamp(20px,4vw,24px)] font-light mb-6">
                    As you’re embarking on your self-publishing journey, here are a few{" "}
                    <Link href="#" className="text-[#4e9eb8] underline hover:text-[#4e9eb8]/70">things to know before publishing a book</Link>:
                </h2>

                <ul>
                    {tips.map((tip, idx) => {
                        return (
                            <li key={idx}>
                                <h2 className="text-[clamp(22px,4vw,32px)] leading-[clamp(25px,3.5vw,40px)] text-[#4e9eb8] font-bold mb-4 h-8 flex items-center border-l-4 border-[#ffca38] pl-5">
                                    {tip.title}
                                </h2>
                                <p className='text-[clamp(1rem,2.5vw,1rem)] sm:font-semibold text-[#3c3c3c] mb-10 '>{tip.description}</p>
                            </li>
                        )
                    })}
                </ul>

                <div className='text-[clamp(20px,4vw,24px)] mb-6'>
                    <span className='font-bold'>
                        We hope this guide helps you go from writer to published author!
                    </span>{" "}
                    <span className='font-light'>
                        Download a copy of the guide (with bonus content) to help you along your publishing journey.
                    </span>
                    <button className='px-6 py-1.5 cursor-pointer bg-[#3a7c92] hover:bg-[#4e9eb8] text-[16px] font-bold text-white block mt-6 rounded-[6px]'>Download Now</button>
                </div>

                <div className='relative w-full h-52 sm:h-70 lg:h-120'>
                    <Image src={"/self-publish-page-final-tips-image.jpg"} alt='image' fill className='object-contain' />
                </div>

            </div>
        </div>
    )
}

export default FinalTips