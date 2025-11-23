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
    console.log(activeSection);


    function handleScrollToClick(element: string) {
        let scrollToEl = document.getElementById(element)
        scrollToEl?.scrollIntoView({ behavior: 'smooth' })
    }
    console.log('render');


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
                heading='Book Printing Options with IngramSpark'
                description={
                    <>
                        Changes in technology have allowed for self-publishers to have more book printing options today than ever before. Let’s look at the{" "}
                        <Link href="/" className='text-[#3a7c92] inline cursor-pointer underline font-bold hover:text-[#4e9eb8]'>book printing and binding</Link>
                        {" "}options available for IngramSpark authors!
                    </>}
            />
            {/* Printing options for publishers content */}
            <PrintingOptions />
        </>
    )
}

export default HowToSelfDesignBookComp