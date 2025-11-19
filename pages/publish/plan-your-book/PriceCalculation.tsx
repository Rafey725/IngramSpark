/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import { useState, useRef } from 'react'

type ContainerProps = {
    heading: string,
    description: string,
    image: string
}

const Container = (props: ContainerProps) => {
    return (
        <div className={`flex flex-col items-center px-3 md:gap-3 transition-all duration-500`}>
            <h1 className='text-[#4e9eb8] text-[clamp(20px,5vw,32px)] text-center font-bold'>{props.heading}</h1>
            <p className='text-[18px] text-center'>{props.description}</p>
            <div className='w-full h-full md:px-3 md:my-10 flex flex-col md:flex-row justify-between items-center md:gap-5'>
                {/* Image */}
                <div className='w-full md:w-[70%]'>
                    <img src={props.image} alt="image" className='w-full h-[300px] mx-auto object-contain' />
                </div>
                {/* Pricing */}
                <div className='w-[80%] md:w-[30%] flex flex-col items-center md:items-start'>
                    <h1 className='text-[#4e9eb8] text-[22px] font-bold text-center md:text-start'>Pricing Example for the Average Novel</h1>
                    <div className='w-full my-3'>
                        <ul className='flex flex-col gap-2 py-2.5 border-b'>
                            <li className='flex justify-between'>
                                <h2 className='font-bold'>List Price:</h2>
                                <p>$16.95</p>
                            </li>
                            <li className='flex justify-between'>
                                <h2 className='font-bold'>Wholesale Discount:</h2>
                                <p>- 53%</p>
                            </li>
                            <li className='flex justify-between'>
                                <h2 className='font-bold'>Print Fee:</h2>
                                <p>- $3.58*</p>
                            </li>
                        </ul>
                        <div>
                            <li className='flex justify-between py-2.5'>
                                <h2 className='font-bold'>You Earn:</h2>
                                <p>$4.39</p>
                            </li>
                        </div>
                    </div>
                    <p className='text-[16px]'>*Print fee is based off of specs listed in diagram. Calculate the actual cost to print a book of your choosing.</p>
                    <button className='px-5 py-1.5 mt-10 bg-[#4e9eb8] text-white rounded-[8px] text-[18px] font-medium'>Calculate Your Book</button>
                </div>
            </div>
        </div>
    )
}

const PriceCalculation = () => {
    const [priceContainer, setPriceContainer] = useState('novels')
    const priceContRef = useRef<HTMLDivElement>(null)

    function switchContainer(cont:string) {
        if (!priceContRef.current) return
        priceContRef.current.style.transition = `none`
        priceContRef.current.style.transform = `translateX(100%)`
        setTimeout(() => {
            if (!priceContRef.current) return
            priceContRef.current.style.transition = `transform 0.3s`
            priceContRef.current.style.transform = `translateX(0%)`
            setPriceContainer(cont)
        }, 20)
    }

    return (
        <div>
            <div className='mt-20 max-w-[1000px] mx-auto flex flex-col items-center gap-8'>
                <div className='flex flex-col gap-6 items-center'>
                    <h1 className='text-[clamp(20px,5vw,32px)] font-bold text-[#4e9eb8] text-center md:text-start'>Self-Publishing for Any Genre</h1>
                    <div className='w-[100px] h-1 bg-[#4e9eb8]'></div>
                </div>
                {/* links */}
                <nav className='w-full'>
                    <ul className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 text-nowrap border-b-2 px-2 border-[#3a7c92]'>
                        <li
                            onClick={() => switchContainer("novels")}
                            className={`text-center py-1 text-[18px] border border-[#00445b] transition-all duration-100 cursor-pointer lg:border-b-transparent rounded-tr-[5px] rounded-tl-[5px] ${priceContainer === "novels" ? 'bg-[#3a7c92] text-white' : 'bg-[#f8f9fa] text-[#3a7c92]'} hover:bg-[#4e9eb8] hover:text-white`}>Novels & Poetry Books</li>

                        <li
                            onClick={() => switchContainer("children-books")}
                            className={`text-center py-1 text-[18px] border border-[#00445b] transition-all duration-100 cursor-pointer lg:border-b-transparent rounded-tr-[5px] rounded-tl-[5px] ${priceContainer === "children-books" ? 'bg-[#3a7c92] text-white' : 'bg-[#f8f9fa] text-[#3a7c92]'} hover:bg-[#4e9eb8] hover:text-white`}>Children's & Cookbooks</li>

                        <li
                            onClick={() => switchContainer("business-books")}
                            className={`text-center py-1 text-[18px] border border-[#00445b] transition-all duration-100 cursor-pointer lg:border-b-transparent rounded-tr-[5px] rounded-tl-[5px] ${priceContainer === "business-books" ? 'bg-[#3a7c92] text-white' : 'bg-[#f8f9fa] text-[#3a7c92]'} hover:bg-[#4e9eb8] hover:text-white`}>Business & Health Books</li>
                        <li
                            onClick={() => switchContainer("graphic-novels")}
                            className={`md:col-span-3 lg:col-span-1 text-center py-1 text-[18px] border border-[#00445b] transition-all duration-100 lg:border-b-transparent cursor-pointer border-b-tr rounded-tr-[5px] rounded-tl-[5px] ${priceContainer === "graphic-novels" ? 'bg-[#3a7c92] text-white' : 'bg-[#f8f9fa] text-[#3a7c92]'} hover:bg-[#4e9eb8] hover:text-white`}>Graphic Novels</li>
                    </ul>
                </nav>
                {/* wrapper */}
                <div className='my-10 w-full overflow-x-hidden'>
                    <div ref={priceContRef} style={{ transform: "translateX(0%)", transition: "transform 0.3s" }}>
                        {priceContainer === "novels" ?
                            // Novel Books
                            <Container
                                heading="What Does the Average Novel Look Like?"
                                description="Check out the most commonly used specifications for novels published through IngamSpark."
                                image="/average-novel.webp" /> :
                            priceContainer === "children-books" ?
                                // Children Books
                                <Container
                                    heading="What Does the Average Children's Book Look Like?"
                                    description="Check out the most commonly used specifications for children's books published through IngamSpark."
                                    image="/childrens-book.webp" /> :
                                priceContainer === "business-books" ?
                                    // Business Books
                                    <Container
                                        heading="What Does the Average Business Book Look Like?"
                                        description="Check out the most commonly used specifications for business & health books published through IngamSpark."
                                        image="/childrens-book.webp" /> :
                                    // Graphic Novels
                                    <Container
                                        heading="What Does the Average Graphic Novel Look Like?"
                                        description="Check out the most commonly used specifications for graphic novels published through IngamSpark."
                                        image="/average-novel.webp" />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceCalculation