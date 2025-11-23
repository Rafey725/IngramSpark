"use client"

import React, { useEffect, useRef, useState } from 'react'
import ProsList from './ProsList';
import BgBanner from './BgBanner';
import SelfPublishingSteps from './8Steps-SelfPublish/SelfPublishingSteps';
import SelfPublishingCosts from './6Steps-Costs/SelfPublishingCosts';
import Image from 'next/image';
import PricingYourBook from './PricingYourBook';
import AuthorSalary from './AuthorSalary';
import FinalTips from './FinalTips';
import { useSelector } from 'react-redux';
import type { RootState } from "@/app/store";
import StickyBar from '@/components/StickyBar';

const HowToSelfPublish = () => {
  let allLinks = useSelector((state: RootState) => state.selfPublish.value)

  let sectionIds: string[] = [
    'self-publish-introduction',
    'benefits-to-publish',
    'eight-steps-to-publish',
    'step-one',
    'step-two',
    'step-three',
    'step-four',
    'step-five',
    'step-six',
    'step-seven',
    'step-eight',
    'costs-to-publish',
    'costs-step-one',
    'costs-step-two',
    'costs-step-three',
    'costs-step-four',
    'costs-step-five',
    'costs-step-six',
    'pricing-your-book',
    'author-salary',
    'final-tips-to-publish']

  const [activeSection, setActiveSection] = useState('self-publish-introduction')

  const prosList: { heading: string, description: string }[] = [
    {
      heading: "No Gatekeepers",
      description: "There are no gatekeepers—no literary agents or publishers standing in your way. This allows for diversity to flourish and for underrepresented voices to finally have a space to share their work."
    },
    {
      heading: "Higher Margins",
      description: "Not only are the barriers to entry lower, but the margins are higher. When you work with a traditional publisher, they have to take their cut. By self-publishing your own book, you can earn more for each book that you sell."
    },
    {
      heading: "More Control",
      description: "When you self-publish, you own your work and have complete control over the publishing process. For a lot of authors who have poured their hearts and souls into writing a book, it's very important for them to have power to make decisions throughout the publishing process."
    },
    {
      heading: "Equal Quality",
      description: "As technology has improved, self-published authors now have access to high-quality printing and book distribution networks similar to traditionally published authors. Your self-published book will look like the other books on the shelves."
    }
  ];

  const aspects: { before: string; bold: string; after: string }[] = [
    { before: 'What are the ', bold: 'benefits', after: ' of self-publishing?' },
    { before: 'What are the ', bold: 'steps', after: ' to self-publishing?' },
    { before: 'How much does it ', bold: 'cost', after: ' to self-publish?' },
    { before: 'How should I ', bold: 'price my book', after: '?' },
    { before: 'How much ', bold: 'money', after: ' do authors make?' }
  ];

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
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sectionIds.forEach(sectionId => {
      let section = document.getElementById(sectionId)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let activeSectionEl = document.getElementById(activeSection + '-link')

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
    <div className='overflow-x-hidden'>
      {/* hero section */}
      <div id='self-publish-introduction' className="first-bg bg-[url('/self-publish-page-bg1.jpg')] max-w-screen max-h-screen h-[40vh] lg:h-[50vh] flex">
        <div className="content w-full h-full flex flex-col items-center justify-center gap-6 px-4 py-4 text-center">
          <div className='max-w-[430px] md:max-w-[630px]'>
            <h1 className='text-[clamp(20px,5vw,42px)] leading-[clamp(10px,5vw,50px)] font-black text-[#4e9eb8]'>How to Self-Publish a Book: The Complete Guide to Publish Like a Pro</h1>
            <p className='text-[clamp(16px,2.5vw,24px)] leading-[clamp(16px,2.5vw,30px)] text-[#3c3c3c]'>The book industry is thriving, and self-publishing is on the rise! If you want to learn more about how to self-publish a book, you’ve come to the right place.</p>
          </div>
        </div>
      </div>

      <main className='max-w-screen w-full mx-auto my-12'>

        {/* main section */}
        <div className='max-w-[1100px] mx-auto flex justify-between px-5 md:px-10 py-16'>
          {/* aspects of self publishing */}
          <div className="max-w-195 md:w-[clamp(20rem,50vw,48.75rem)] py-6">
            {/* Heading */}
            <h2 className="text-[clamp(20px,2.5vw,30px)] leading-[clamp(25px,3.5vw,40px)] font-bold mb-2">
              Here, we’ll address the various aspects of self-publishing a book.
            </h2>

            {/* seperator */}
            <div className='w-[100px] h-1 mb-10 bg-[#4e9eb8]'></div>

            {/* List */}
            <ol className="space-y-2 text-[clamp(16px,2.5vw,22px)] text-[#666] text-gray-700 mb-10 list-decimal list-inside">
              {aspects.map((item, idx) => (
                <li key={idx}>
                  {item.before}<span className="font-bold">{item.bold}</span>{item.after}
                </li>
              ))}
            </ol>

            {/* Download Section */}
            <div className="">
              <p className="text-[clamp(20px,2.5vw,30px)] leading-[clamp(25px,3.5vw,40px)] font-bold mb-2 text-[#4e9eb8]">
                Download the guide (with bonus content): How to Self-Publish a Book
              </p>

              <button className="bg-[#ffca38] hover:bg-[#ffbb00] transition-all duration-300 cursor-pointer text-[18px] font-bold px-5 py-2 rounded shadow">
                Download Now
              </button>
            </div>
          </div>

          {/* sticky section... */}
          <StickyBar allLinks={allLinks} handleScrollToClick={handleScrollToClick} activeSection={activeSection} />
        </div>

        {/* benefits banner*/}
        <BgBanner id='benefits-to-publish' bgImage="/self-publish-page-bg2.jpg" heading1="Benefits of Self-" heading2="Publishing" />

        {/* pros of self publishing */}
        <div className='max-w-[1250px] flex justify-start mx-auto my-12 sm:px-5 md:px-10'>
          <div className="max-w-[780px] md:w-[clamp(26.25rem,16vw,37rem)] lg:w-[620px] xl:w-[780px] px-5 py-6">
            {/* heading */}
            <h1 className="text-[20px] sm:text-[24px] md:text-[20px] xl:text-[30px] font-bold mb-3">
              There are so many <span className="text-[#4e9eb8] underline">pros of self-publishing</span> a book.
            </h1>

            {/* seperator */}
            <div className='w-[100px] h-1 mb-7 bg-[#4e9eb8]'></div>

            {/* pros list */}
            <ProsList propsList={prosList} />
            {/* footer heading */}
            <div className="text-center text-[20px] sm:text-[24px] mt-12">
              <p className=" font-semibold mb-1">So what are you waiting for?</p>
              <p className=" text-gray-800 font-medium">
                Let’s learn more about how to publish a book yourself.
              </p>
            </div>
          </div>
        </div>

        {/* 8steps banner */}
        <BgBanner id='eight-steps-to-publish' bgImage="/self-publish-page-bg3.jpg" heading1="8 Steps to" heading2="Self-Publishing a Book" />

        {/* 8 steps to self-publishing a book */}
        <SelfPublishingSteps />

        {/* costs to self publish */}
        <BgBanner id='costs-to-publish' bgImage='/self-publish-page-bg4.jpg' heading1='How Much Does It Cost to Self-Publish a Book?' />

        {/* 6 steps of costs to self publish */}
        <SelfPublishingCosts />

        {/* pricing your book banner*/}
        <BgBanner id='pricing-your-book' bgImage='/self-publish-page-bg5.jpg' heading1='Pricing Your Book' />
        {/* pricing your book component */}
        <PricingYourBook />

        {/* author salary banner*/}
        <BgBanner id='author-salary' bgImage='/self-publish-page-bg6.jpg' heading1='Author Salary' />
        {/* author salary component */}
        <AuthorSalary />

        {/* final tips to publish banner */}
        <BgBanner id='final-tips-to-publish' bgImage='/self-publish-page-bg7.jpg' heading1='Final Tips for' heading2='Self-Publishing' />
        {/* final tips to publish component */}
        <FinalTips />
      </main>
    </div>

  )
}

export default HowToSelfPublish