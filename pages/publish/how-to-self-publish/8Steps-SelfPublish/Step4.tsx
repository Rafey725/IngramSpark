import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Step4 = () => {
    // Book Title tips using PINC Acronym
    const titleTips = [
        { label: "Promise", description: "let readers know what to expect from reading your book." },
        { label: "Intrigue", description: "engage a reader; entice them to pick up your book." },
        { label: "Need", description: "if there's a common problem that your book has the answer to, identify this common ground and promise (back to P) a solution." },
        { label: "Content", description: "keep it simple and straightforward. What is your book about?" }
    ];

    // Title characteristics
    const titleCharacteristics = [
        { title: "Original", description: "Book titles are not protected by copyright, so it is possible to select a book title that's already in use—but not recommended." },
        { title: "Memorable", description: "Make sure your title is unique enough to be remembered, but not so long that it's easily forgotten." },
        { title: "Searchable", description: "Once you have a few ideas, do a quick Google Search. See what shows up in the results and ask yourself a few important questions. What shows up on the search results page? Does my book stand a chance? Is it too broad to rank, or too specific for anyone to searching for?" }
    ];

    // Book examples
    const bookExamples = [
        { type: "Novel", title: "Venation Blood: Murder in a Sensuous City" },
        { type: "Memoir", title: "The Art of Waiting: On Fertility, Medicine, and Motherhood" },
        { type: "Self-Help", title: "No Excuses: Nine Ways Women Can Change How We Think About Power" }
    ];

    // Book Description tips
    const descriptionTips = [
        "Keep it simple and straightforward",
        "Aim for 150-200 words",
        "Use paragraph breaks, bold, and italic formats to provide emphasis when necessary",
        "Insert bullet points when applicable",
        "Avoid time-sensitive language like 'coming soon'"
    ];

    // BISAC Code selection tips
    const bisacTips = [
        { title: "First Code = Most Specific", description: "The first BISAC code that you enter should be the most accurate and the most specific code to your book. This will be the main BISAC code used to organize and shelve your book." },
        { title: "Choose Three", description: "We recommend that you choose three BISAC codes for your book. It's required that you select at least one, but three codes increase chances of discoverability." },
        { title: "Be Honest", description: "Choose BISAC codes that reflect the full breadth of your book. This is not a time when it's best to choose a category that you think has the most readers. You want to avoid confusion for readers who think they've selected a book about one thing and find it's much different than what they expected." }
    ];

    const isbnList = [
        " You need an ISBN if you want your book to be available for sale in bookstores or with an online retailer or wholesaler. You&apos;ll want to purchase this before your book designer begins work on the cover of your book, so it can be included in the back barcode.",
        " If you don&apos;t want your book available for sale, IngramSpark can assign a SKU to your book for printing and manufacturing purposes only. If the book is not available for sale with an ISBN, then you will be the only person capable of ordering a copy of your book. You might select this option if you&apos;re printing a book for personal use or as a gift for a friend.",
        "Many self-publishing platforms offer indie authors the opportunity to use a free ISBN. At IngramSpark, we highly recommend that you purchase your own ISBN."
    ];


    return (
        <div className="max-w-[48.75rem] md:w-[26.25rem] lg:w-[38.75rem] xl:w-[48.75rem] px-5 py-6">

            {/* Step 4 book metadata */}
            <div className="mb-7">
                <h2 className="text-[clamp(24px,4vw,32px)] text-[#4e9eb8] font-bold mb-4 border-l-4 border-[#ffca38] pl-4">
                    Step 4: Book Metadata
                </h2>
                <p className="text-[clamp(1rem,2.5vw,1.5rem)] font-light text-[#3c3c3c] mb-0.25rem">
                    What exactly is <Link href="#" className="text-[#4e9eb8] underline hover:text-[#4e9eb8]/70">book metadata</Link>, and why is it important?
                </p>
            </div>

            {/* Introduction Section with Image */}
            <div className="relative w-full h-[250px] bg-white rounded-lg flex items-center justify-center">
                <Image src="/8StepsImages/image3.webp" alt="Image" fill className="object-contain" />
            </div>
            <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-700 leading-relaxed mb-3">
                Book metadata may sound complicated, but it&apos;s relatively straightforward. It consists of all the information that describes your book, including your title, subtitle, price, trim size, author name, book description, and more.
            </p>

            {/* Book Title Section */}
            <div className="mb-8">
                <h3 className="text-[clamp(1rem,2.5vw,1.25rem)] font-bold text-[#3c3c3c] mb-4">
                    Book Title
                </h3>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-700 leading-relaxed mb-3">
                    Writers often ask for tips on <Link href="#" className="text-[#4e9eb8] underline hover:text-[#4e9eb8]/70">how to come up with a book title</Link>.
                </p>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-700 leading-relaxed mb-4">
                    A good rule of thumb is to follow the PINC Acronym, coined by Michael Hyatt.
                </p>

                {/* PINC Tips */}
                <ul className="space-y-3 mb-6">
                    {titleTips.map((tip, idx) => (
                        <li key={idx} className="flex gap-2 text-[clamp(0.875rem,2vw,1rem)] text-gray-700">
                            <span className="bg-[#4e9eb8] w-1.5 h-1.5 rounded-full mt-2"></span>
                            <span>Make a <span className="font-bold">{tip.label}:</span> {tip.description}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Title Characteristics Section */}
            <div className="bg-[#f4f6f8] w-full h-auto rounded-[5px] border mb-6 border-gray-200">

                <div className="bg-[#4e9eb8] text-white px-6 py-4 flex justify-center items-center">
                    <h3 className="text-[clamp(1rem,2.5vw,1.25rem)] font-bold">
                        You Want Your Title To Be
                    </h3>
                </div>

                <div className="space-y-1.5 p-6">
                    {titleCharacteristics.map((char, idx) => (
                        <div key={idx}>
                            <h4 className="text-[clamp(0.875rem,2.5vw,1rem)] font-bold text-[#4e9eb8] mb-1">
                                {char.title}
                            </h4>
                            <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-700 leading-relaxed">
                                {char.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Book Examples */}
            <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-700 leading-relaxed mb-4">
                As you&apos;re brainstorming ideas for your book title, keep in mind that you have an opportunity to enhance your short title with a longer subtitle. A good book subtitle varies from one to another, but here are a few <Link href="#" className="text-[#4e9eb8] underline hover:text-[#4e9eb8]/70">subtitle examples</Link> to get you started.
            </p>

            <ul className="space-y-2 mb-8 text-[clamp(0.875rem,2vw,1rem)] text-gray-700">
                {bookExamples.map((example, idx) => (
                    <li key={idx}>
                        <span className="font-bold">• {example.type}:</span> {example.title}
                    </li>
                ))}
            </ul>

            {/* Book Description Section */}
            <div className="mb-8">
                <div className='flex justify-between items-start '>
                    <div>
                        <h3 className="text-[clamp(1rem,2.5vw,1.25rem)] font-bold text-[#3c3c3c] mb-4">
                            Book Description
                        </h3>
                        <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-700 leading-relaxed mb-4">
                            The cover of your book draws a person in…the title intrigues…and the book description closes the deal.
                        </p>
                        <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-700 leading-relaxed mb-4">
                            So, how do you write a good <Link href="#" className="text-[#4e9eb8] underline hover:text-[#4e9eb8]/70">book description</Link>?
                        </p>

                        {/* Description Tips */}
                        <ul className="space-y-2 mb-6 text-[clamp(0.875rem,2vw,1rem)] text-gray-700">
                            {descriptionTips.map((tip, idx) => (
                                <li key={idx} className="flex gap-2">
                                    <span className="font-bold text-[#4e9eb8]">•</span>
                                    <span>{tip}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative w-full h-[196px] mt-8 bg-white rounded-lg flex items-center justify-center">
                        <Image src="/8StepsImages/image4.webp" alt="Image" fill className="object-contain" />
                    </div>
                </div>

                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-700 leading-relaxed mb-4">
                    Another tip for writing your description—look up reader reviews for books that are similar to yours. What language are they using? Let their descriptions of similar books help guide you as you write yours.
                </p>

                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-700 leading-relaxed">
                    Your description is more than just text on the back cover of a book. It&apos;s detailed, descriptive copy that will be used in your marketing and help your book&apos;s discoverability. You want your description to appeal to a person picking it up off the shelf as a bookstore, as well as Google&apos;s search algorithm. The keywords in your description impact your book&apos;s discoverability online—so be sure to keep keywords in mind as you write and incorporate them into your description when it&apos;s natural and appropriate.
                </p>
            </div>

            {/* ISBNs Section */}
            <div className="mb-8">
                <h3 className="text-[clamp(1rem,2.5vw,1.25rem)] font-bold text-[#3c3c3c] mb-4">
                    ISBNs
                </h3>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-700 leading-relaxed mb-4">
                    You&apos;re probably wondering <Link href="#" className="text-[#4e9eb8] underline hover:text-[#4e9eb8]/70">what is an ISBN</Link>?
                </p>

                {/* YouTube Video Space */}
                <div className="relative w-full h-[300px] mb-6 bg-black rounded-lg overflow-hidden">
                    {/* 
              To render a YouTube video thumbnail, use:
              https://img.youtube.com/vi/[VIDEO_ID]/maxresdefault.jpg
              
              Replace [VIDEO_ID] with the actual YouTube video ID from the URL.
              For example, if URL is: https://www.youtube.com/watch?v=abc123def456
              The VIDEO_ID is: abc123def456
              
              Full URL would be: https://img.youtube.com/vi/abc123def456/maxresdefault.jpg
              
              Then use Image component:
              <Image 
                src="https://img.youtube.com/vi/[VIDEO_ID]/maxresdefault.jpg" 
                alt="Video thumbnail" 
                fill 
                className="object-cover" 
              />
              
              To make it clickable, wrap in a link to: https://www.youtube.com/embed/[VIDEO_ID]
            */}
                    <p className="text-white text-center py-[135px]">YouTube Video Space</p>
                </div>

                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-700 leading-relaxed mb-4">
                    ISBN stands for International Standard Book Number. It&apos;s an internationally recognized identification number, similar to any product number you would find on other products you buy, like a box of cereal or a jar of peanuts.
                </p>

                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-700 leading-relaxed mb-4">
                    <span className="font-bold">Do you need an ISBN?</span>
                </p>

                <ul className="space-y-3 mb-4">
                    {isbnList.map((item, idx) => (
                        <li key={idx} className="text-[clamp(0.875rem,2vw,1.05rem)] text-gray-700 leading-relaxed">
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-700 leading-relaxed mb-4">
                    <span className="font-bold">How many ISBNs do you need?</span>
                </p>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-700 leading-relaxed mb-4">
                    You&apos;ll need an ISBN for each format of your book. Let&apos;s say you want to publish hardcover, paperback, and ebook versions of your upcoming book—that means you&apos;ll need to purchase three unique ISBNs.
                </p>

                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-700 leading-relaxed mb-4">
                    <span className="font-bold">What&apos;s the difference between an ISBN and a barcode?</span>
                </p>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-700 leading-relaxed mb-6">
                    An ISBN acts like a product number, while the barcode is how the actual number is translated and readable by a scanner. If you want your book to be made available in brick-and-mortar bookstores, you&apos;ll want to include a barcode with your ISBN.
                </p>

                {/* ISBN Icons Space */}
                <div className="relative w-full h-[120px] mb-8 bg-white rounded-lg border border-gray-200 flex items-center justify-center gap-4">
                    {/* Space for 5 ISBN icons - will be displayed horizontally */}
                    <p className="text-gray-400">ISBN Icons Space (5 icons)</p>
                </div>
            </div>

            {/* BISAC Codes Section */}
            <div className="mb-8">
                <h3 className="text-[clamp(1rem,2.5vw,1.25rem)] font-bold text-[#3c3c3c] mb-4">
                    BISAC Codes
                </h3>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-700 leading-relaxed mb-4">
                    BISAC codes essentially identify what your book is about – the primary genre(s), topic(s), and theme(s). While a reader might not be trained to search for books based on a BISAC code, retailers and booksellers will use your BISAC code to determine in which category to place your book on their website, or where to shelve it in their bookstore.
                </p>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-700 leading-relaxed mb-4">
                    For a full list of available BISAC codes, see BISAC&apos;s <Link href="#" className="text-[#4e9eb8] underline hover:text-[#4e9eb8]/70">Complete BISAC Subject Headings List</Link>.
                </p>

                {/* How to Choose BISAC Codes Section */}
                <div className="bg-[#4e9eb8] text-white px-6 py-4 rounded-[5px] mb-6">
                    <h3 className="text-[clamp(1rem,2.5vw,1.25rem)] font-bold">
                        How to Choose BISAC Codes
                    </h3>
                </div>

                <div className="space-y-6 mb-8">
                    {bisacTips.map((tip, idx) => (
                        <div key={idx}>
                            <h4 className="text-[clamp(0.875rem,2.5vw,1rem)] font-bold text-[#4e9eb8] mb-2">
                                {tip.title}
                            </h4>
                            <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-700 leading-relaxed">
                                {tip.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* BISAC Icons Space */}
                <div className="relative w-full h-[120px] bg-white rounded-lg border border-gray-200 flex items-center justify-center gap-4">
                    {/* Space for 5 BISAC icons - will be displayed horizontally */}
                    <p className="text-gray-400">BISAC Icons Space (5 icons)</p>
                </div>
            </div>

        </div>
    )
}

export default Step4