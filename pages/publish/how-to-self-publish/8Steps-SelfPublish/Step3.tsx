import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Step3 = () => {
    const bookCoverTips: { description: string }[] = [
        {
            description: "Your book cover design is the first impression readers have of your book. While it’s important to be unique, it’s equally important to pay attention to what comparable covers in your genre look like."
        },
        {
            description: "Visit your local bookstore and look at the books in your genre. What are the trim sizes? What do the front covers look like? The spines? Take note of the imagery, the fonts, the colors, and more. Observe and ask yourself, what elements of these book covers do I like? How can my book cover stand out—in a good way?"
        },
        {
            description: "The back cover of the book will be made up of common elements such as book reviews, the book description, author bio, and barcode. The spine often contains the name, author, and publisher logo. Study these elements to make sure that your book will fit in on the shelf, and booksellers will feel comfortable stocking it."
        },
        {
            description: "A professional book cover designer can help steer the creative direction—but you know your book best, and it’s important for you to bring your own ideas to help create a cover that brings your book to life."
        }
    ]
    return (
        <div className="max-w-[48.75rem] md:w-[26.25rem] lg:w-[38.75rem] xl:w-[48.75rem] px-5 py-6">
            {/* Step 3: Book Design */}
            <div className="mb-7">
                <h2 className="text-[clamp(24px,4vw,32px)] text-[#4e9eb8] font-bold mb-4 border-l-4 border-[#ffca38] pl-4">
                    Step 3: Book Design
                </h2>

                <p className="text-[clamp(1rem,2.5vw,1.5rem)] font-light text-[#3c3c3c] mb-0.25rem">
                    The next step is designing your book! There are two main steps in the book design process: interior design and book cover design.
                </p>
            </div>

            {/* interior book design */}
            <div>
                <h2 className="text-[clamp(18px,4vw,20px)] font-bold text-[#3c3c3c] mb-4">
                    Interior Book Design
                </h2>
                <p className="text-[clamp(0.875rem,2.5vw,1rem)] text-[#3c3c3c] mb-0.25rem">
                    Interior design might not sound like the most exciting part of the design process, but it is necessary to create a professionally published book. Typesetting, commonly referred to as book formatting, has “rules” for widows, orphans, hyphens, and various other elements within a book to make it more readable, ensuring a pleasant reading experience for your audience.
                </p>
            </div>
            {/* book cover design */}
            <div>
                <h2 className="text-[clamp(18px,4vw,20px)] font-bold text-[#3c3c3c] mb-4">
                    Book Cover Design
                </h2>
                <ul className='flex flex-col gap-4'>
                    {bookCoverTips.map((item, idx) =>
                        <li key={idx} className="text-[clamp(0.875rem,2.5vw,1rem)] text-[#3c3c3c]">
                            {item.description}
                        </li>)}
                </ul>
            </div>

        </div>
    )
}

export default Step3