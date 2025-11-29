/* eslint-disable react/no-unescaped-entities */
"use client"

import PublishHeroBanner from '@/components/PublishHeroBanner'
import React from 'react'
import BgBanner from './BgBanner'
import Link from 'next/link'
import StickyBar from '@/components/StickyBar'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '@/app/store'
import PrintingOptions from './PrintingOptions'
import BookFormats from './BookFormats'
import TrimSize from './TrimSize'
import CoverDesignBasics from './CoverDesignBasics'
import Top8CoverTips from './Top8CoverTips'
import DesignIdeas from './DesignIdeas'
import DIYBookDesign from './DIYBookDesign'
import HiringCoverDesigner from './HiringCoverDesigner'

const HowToSelfDesignBookComp = () => {
    const listItems = [
        "Printing Options for Self-Publishers",
        "Formats: Ebook, Paperback, and Hardcover",
        "Picking Your Book's Trim Size",
        "Book Cover Design Basics",
        "Top 8 Cover Design Tips",
        "Cover Design Ideas",
        "DIY Book Design",
        "Hiring a Book Cover Designer"
    ]

    let sectionIds: string[] = [
        'design-book-introduction',
        'printing-options',
        'formats',
        'trim-size',
        'cover-design-basics',
        'top-8-cover-tips',
        'cover-design-ideas',
        'diy-book-design',
        'hiring-cover-designer'
    ];

    let allLinks = useSelector((state: RootState) => state.designBook.value)
    const [activeSection, setActiveSection] = useState('design-book-introduction')

    function handleScrollToClick(element: string) {
        let scrollToEl = document.getElementById(element)
        scrollToEl?.scrollIntoView({ behavior: 'smooth' })
    }


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: "-20% 0px -80% 0px",
                threshold: 0
            }
        );

        sectionIds.forEach(sectionId => {
            let section = document.getElementById(sectionId)
            if (section) observer.observe(section)
        })
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        let activeSectionEl = document.getElementById(activeSection + '-link')
        console.log(activeSectionEl);

        if (activeSectionEl) {
            // remove previous selected links
            let links = Array.from(document.getElementById('publishLinks')?.children || [])
            let subPublishLinks = Array.from(document.getElementById('sub-eight-steps-to-publish-links')?.children || [])
            let subCostsLinks = Array.from(document.getElementById('sub-costs-to-publish-links')?.children || [])

            let allLinks = [...links, ...subPublishLinks, ...subCostsLinks]

            allLinks.forEach(link => {
                let title = link.querySelector(`span`)
                title?.classList.remove('activeSectionLink')

            })
            // select the active link
            activeSectionEl.classList.add('activeSectionLink')
        }
    }, [activeSection])

    return (
        <>
            <div id='design-book-introduction'>
                <PublishHeroBanner
                    image="/how-to-design-book/heroImage.webp"
                    heading="The Ultimate Guide to Master Your Book Cover Design"
                    description="Books are judged by their covers! If you're ready to learn how to make your book cover design stand out, you've come to the right place."
                    button={false}
                />
            </div>

            {/* Content Section */}
            <div className='max-w-[78.125rem] flex flex-col items-start md:gap-4 xl:gap-7 mx-auto my-12 px-5 md:px-10'>
                <div className="max-w-195 md:w-[clamp(20rem,50vw,48.75rem)] py-6">
                    <StickyBar allLinks={allLinks} handleScrollToClick={handleScrollToClick} activeSection={activeSection} />

                    <h2 className="text-[clamp(22px,4vw,29px)] text-[#3c3c3c] font-bold mb-4">
                        Here, we'll address everything from high-level basics down to specific details of book cover design, including:
                    </h2>

                    {/* seperator */}
                    <div className="w-22 h-1 bg-[#4e9eb8] mb-6"></div>

                    {/* Numbered List */}
                    <ol className="space-y-3 mb-10">
                        {listItems.map((item, index) => (
                            <li key={index} className="text-[clamp(1.25rem,2.5vw,1.375rem)] text-[#3c3c3c]">
                                {index + 1}. {item}
                            </li>
                        ))}
                    </ol>

                    {/* Call to Action Section */}
                    <div>
                        <h3 className="text-[clamp(20px,4vw,30px)] text-[#4e9eb8] font-bold mb-4">
                            The Ultimate Guide to Master Your Book Design: Expanded Edition
                        </h3>
                        <p className="text-[clamp(1rem,2.5vw,1.125rem)] text-[#3c3c3c] mb-6">
                            To learn more about the entire book design process—including the best fonts for books and interior book design tips—download the free <strong>expanded</strong> guide today!
                        </p>
                        <button className="w-full sm:w-auto px-8 py-2 bg-[#ffca38] hover:bg-[#ffbb00] rounded-sm text-[clamp(16px,2.5vw,18px)] font-bold text-[#3c3c3c] transition-colors cursor-pointer">
                            Download Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Printing options for publishers */}
            <BgBanner
                id='printing-options'
                image='/how-to-design-book/banner-image1.webp'
                heading='Book Printing Options with IngramPublishers'
                description={
                    <>
                        Changes in technology have allowed for self-publishers to have more book printing options today than ever before. Let’s look at the{" "}
                        <Link href="/" className='text-[#3a7c92] inline cursor-pointer underline font-bold hover:text-[#4e9eb8]'>book printing and binding</Link>
                        {" "}options available for IngramPublishers authors!
                    </>}
            />
            {/* Printing options for publishers content */}
            <PrintingOptions />

            {/* book formats */}
            <BgBanner
                id='formats'
                image='/how-to-design-book/banner-image2.webp'
                heading='Book Formats: Ebook, Paperback, and Hardcover'
                description={
                    <>
                        We highly recommend that you publish in all formats—ebook, paperback, and hardcover. In this section, we’ll talk about print books vs. ebooks, the difference between paperback and hardcover, and the pros of publishing hardcover books.
                    </>}
            />
            {/* book formats content */}
            <BookFormats />

            {/* trim size  */}
            <BgBanner
                id='trim-size'
                image='/how-to-design-book/banner-image3.webp'
                heading='Picking Your Book’s Trim Size'
                description={
                    <>
                        This might seem like a last-minute decision, but your trim size impacts the page count, weight, and overall look and feel of your book—and before you begin your book layout design, you’ll want to choose your book’s trim size.
                    </>}
            />
            {/* trim size content */}
            <TrimSize />

            {/* Cover design basics */}
            <BgBanner
                id='cover-design-basics'
                image='/how-to-design-book/banner-image4.webp'
                heading='The Basics of Book Cover Design'
                description={
                    <>
                        There are several things to consider when you design the cover of your book. Let’s start with some
                        <Link href={"/"} className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>
                            book cover design basics.
                        </Link>
                    </>}
            />
            {/* Cover design basics content */}
            <CoverDesignBasics />

            {/* top 8 book cover design tips banner */}
            <BgBanner
                id='top-8-cover-tips'
                image='/how-to-design-book/banner-image5.webp'
                heading={
                    <>
                        <p>
                            Top 8 Book
                        </p>
                        <p>
                            Cover Design Tips
                        </p>
                    </>
                }
                description={
                    <>
                        Now that we’ve nailed the basics of book cover design, let’s discuss how to design a book cover with IngramSpark’s top eight{' '}
                        <Link href={"/"} className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>
                            book design tips
                        </Link>!
                    </>}
            />
            {/* top 8 book cover design tips content */}
            <Top8CoverTips />

            {/* cover design ideas banner */}
            <BgBanner
                id='cover-design-ideas'
                image='/how-to-design-book/banner-image6.webp'
                heading="Book Cover Design Ideas"
                description={
                    <>
                        Book cover design is constantly evolving, but there are several key trends and themes that appear in popular book covers. Let’s take a look at some of the{' '}
                        <Link href={"/"} className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>
                            top book cover ideas
                        </Link>!
                    </>}
            />
            {/* cover design ideas content */}
            <DesignIdeas />

            {/* DIY book design banner */}
            <BgBanner
                id='diy-book-design'
                image='/how-to-design-book/banner-image7.webp'
                heading="DIY Book Cover Design"
                description="We've covered the basic elements of a book cover, the top book design tips, and the top book cover ideas. Now it's time to talk about how to make a book cover yourself!"
            />
            {/* DIY book design content */}
            <DIYBookDesign />

            {/* hiring a book cover designer banner */}
            <BgBanner
                id='hiring-cover-designer'
                image='/how-to-design-book/banner-image5.webp'
                heading={
                    <>
                        <p>
                            Hiring a Book
                        </p>
                        <p>
                            Cover Designer
                        </p>
                    </>
                }
                description={
                    <>
                        Your book cover is a reader’s first impression of your book, and often the best way to design the cover of your dreams is to{' '}
                        <Link href={"/"} className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>
                            hire a book cover designer
                        </Link>!
                    </>}
            />
            {/* hiring cover designer content */}
            <HiringCoverDesigner />
        </>
    )
}

export default HowToSelfDesignBookComp