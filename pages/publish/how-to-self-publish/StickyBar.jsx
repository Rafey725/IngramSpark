"use client"

import React from 'react'
import { useState, useRef, useEffect } from 'react'

const StickyBar = () => {
    const [isTableContentsOpen, setIsTableContentsOpen] = useState(false)

    function toggleTableContents() {
        setIsTableContentsOpen(!isTableContentsOpen)
    }

    const [isSticky, setIsSticky] = useState(false)
    const stickyBox = useRef(null)
    const originalOffset = useRef(0)


    console.log('render');
    useEffect(() => {
        if (!stickyBox.current) return
        originalOffset.current = stickyBox.current.offsetTop
        function handleScroll() {
            let scrollY = window.scrollY || window.pageYOffset
            if (scrollY >= originalOffset.current) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            {/* sticky box */}
            <aside ref={stickyBox} className={`${isSticky ? 'fixed top-6 right-[5.5%] lg:right-[4%] xl:right-[10%] 2xl:right-[16.5%]' : ''} z-111 bg-white hidden md:block self-start border border-[#d0d5db87] p-5 max-w-[300px] rounded-[5px] shadow-[0_0px_10px_4px_rgba(0,0,0,0.05)]`}>
                <h2 className="text-[#3a7c92] text-[16px] font-bold underline flex items-center gap-2 decoration-[#3a7c92] hover:decoration-white cursor-pointer">
                    <span className="bg-[#ffc20d] h-4.5 w-[5px] inline-block"></span>
                    <span>Introduction</span>
                </h2>
                <ul className="text-[#4e9eb8] text-[16px]font-medium space-y-2 mt-4">
                    <li className="cursor-pointer underline hover:decoration-[#ace3f5]">Benefits of Self Publishing</li>
                    <li className="cursor-pointer underline hover:decoration-[#ace3f5]">8 Steps to Self-Publishing a Book</li>
                    <li className="cursor-pointer underline hover:decoration-[#ace3f5]">How Much Does It Cost to Self-Publish a Book?</li>
                    <li className="cursor-pointer underline hover:decoration-[#ace3f5]">Pricing Your Book</li>
                    <li className="cursor-pointer underline hover:decoration-[#ace3f5]">Author Salary</li>
                    <li className="cursor-pointer underline hover:decoration-[#ace3f5]">Final Tips for Self-Publishing</li>
                </ul>
            </aside>


            {/* bottom bar */}
            <div
                onClick={toggleTableContents}
                className='fixed bottom-0 left-0 z-30 md:hidden w-full max-w-screen h-10 bg-[#3a7c92] text-white flex justify-center items-center gap-4'>
                {/* hamburger */}
                <button className="flex flex-col gap-1 cursor-pointer">
                    <span className="w-5 h-[3px] bg-white rounded-[1px]"></span>
                    <span className="w-5 h-[3px] bg-white rounded-[1px]"></span>
                    <span className="w-5 h-[3px] bg-white rounded-[1px]"></span>
                </button>
                <h2>Table of Contents</h2>
            </div>

            {/* full screen table box */}
            <div className={`${isTableContentsOpen ? 'visible opacity-100' : 'invisible opacity-0'} fixed top-0 left-0 z-100 w-full h-full bg-black/60 transition-all duration-300 flex items-center justify-center`}>

                <div className={`${isTableContentsOpen ? 'translate-y-0' : 'translate-y-10'} transition-all duration-300 bg-white border border-[#d0d5db87] p-5 mx-5 max-w-[500px] rounded-[5px] shadow-[0_0px_10px_4px_rgba(0,0,0,0.05)]`}>
                    <div className='flex justify-between items-center'>
                        <h2 className="text-[#3a7c92] text-[16px] font-bold underline flex items-center gap-2 decoration-[#3a7c92] hover:decoration-white cursor-pointer">
                            <span className="bg-[#ffc20d] h-4.5 w-[5px] inline-block"></span>
                            <span>Introduction</span>
                        </h2>
                        <button onClick={toggleTableContents} className='relative text-[18px] text-black/70 cursor-pointer'>
                            <span className="w-3 h-0.5 bg-[#636363] rounded rotate-45 absolute top-0 left-0"></span>
                            <span className="w-3 h-0.5 bg-[#636363] rounded -rotate-45 absolute top-0 left-0"></span>
                        </button>
                    </div>
                    <ul className="text-[#4e9eb8] text-[16px] font-medium space-y-2 mt-4 flex flex-col gap-2.5">
                        <li className="cursor-pointer underline hover:decoration-[#ace3f5]">Benefits of Self Publishing</li>
                        <li className="cursor-pointer underline hover:decoration-[#ace3f5]">8 Steps to Self-Publishing a Book</li>
                        <li className="cursor-pointer underline hover:decoration-[#ace3f5]">How Much Does It Cost to Self-Publish a Book?</li>
                        <li className="cursor-pointer underline hover:decoration-[#ace3f5]">Pricing Your Book</li>
                        <li className="cursor-pointer underline hover:decoration-[#ace3f5]">Author Salary</li>
                        <li className="cursor-pointer underline hover:decoration-[#ace3f5]">Final Tips for Self-Publishing</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default StickyBar