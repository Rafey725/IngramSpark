"use client"

import React from 'react'
import { useState, useRef, useEffect } from 'react'

const StickyBar = ({ handleScrollToClick, activeSection, allLinks }) => {

    const [isTableContentsOpen, setIsTableContentsOpen] = useState(false)

    function toggleTableContents() {
        setIsTableContentsOpen(!isTableContentsOpen)
    }

    const [isSticky, setIsSticky] = useState(false)
    const stickyBox = useRef(null)
    const originalOffset = useRef(0)

    // auto stick functionality
    useEffect(() => {
        if (!stickyBox.current) return
        originalOffset.current = stickyBox.current.offsetTop
        function handleScroll() {
            let scrollY = window.scrollY || window.pageYOffset
            if (scrollY >= originalOffset.current - 24) {
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
            <aside ref={stickyBox} className={` ${isSticky ? 'fixed top-6 right-[10%] xl:right-[14%]' : 'absolute top-[75%] right-[10%] xl:right-[14%]'} z-111 bg-white hidden md:block self-start border border-[#d0d5db87] p-5 max-w-[300px] rounded-[5px] shadow-[0_0px_10px_4px_rgba(0,0,0,0.05)]`}>
                <ul id='publishLinks' className="text-[#4e9eb8] text-[16px] font-medium space-y-2 transition-all duration-100">
                    {allLinks.map(link => {
                        const getSubLinksClass = (link) => {

                            if (link.id === "eight-steps-to-publish-link") {
                                return (activeSection === link.scrollToThis || activeSection.startsWith("step-")) ?
                                    'h-53.5 pointer-events-auto mt-0'
                                    : 'h-0 pointer-events-none -mt-2';
                            }
                            else if (link.id === "costs-to-publish-link") {
                                return (activeSection === link.scrollToThis || activeSection.startsWith("costs-step-")) ?
                                    'h-35 pointer-events-auto mt-0'
                                    : 'h-0 pointer-events-none -mt-2';
                            }
                        }

                        return (
                            <li
                                key={link.id}
                                onClick={() => handleScrollToClick(link.scrollToThis)}
                            >
                                <span id={link.id} className='cursor-pointer hover:text-[#4e9eb8]/60'>{link.title}</span>

                                {/* sub links */}
                                {link.subLinks && (
                                    <ul id={'sub-' + link.scrollToThis + '-links'}
                                        className={`${getSubLinksClass(link)} transition-all duration-300 overflow-hidden`} >
                                        {
                                            link.subLinks.map(subLink => {
                                                return (
                                                    <li
                                                        key={subLink.id}
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            handleScrollToClick(subLink.scrollToThis)
                                                        }}
                                                    >
                                                        <span id={subLink.id} className='cursor-pointer hover:text-[#4e9eb8]/60'>{subLink.title}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                )
                                }
                            </li>
                        )
                    }
                    )}
                </ul>
            </aside >


            {/* bottom bar */}
            < div
                onClick={toggleTableContents}
                className='fixed bottom-0 left-0 z-30 md:hidden w-full max-w-screen h-10 bg-[#3a7c92] text-white flex justify-center items-center gap-4' >
                {/* hamburger */}
                < button className="flex flex-col gap-1 cursor-pointer" >
                    <span className="w-5 h-[3px] bg-white rounded-[1px]"></span>
                    <span className="w-5 h-[3px] bg-white rounded-[1px]"></span>
                    <span className="w-5 h-[3px] bg-white rounded-[1px]"></span>
                </button >
                <h2>Table of Contents</h2>
            </div >

            {/* full screen table box */}
            <div className={`${isTableContentsOpen ? 'visible opacity-100' : 'invisible opacity-0'} fixed top-0 left-0 z-100 w-full h-full bg-black/60 transition-all duration-300 flex items-center justify-center`}>

                <div className={`${isTableContentsOpen ? 'translate-y-0' : 'translate-y-10'} transition-all duration-300 bg-white border border-[#d0d5db87] p-5 mx-5 max-w-[500px] rounded-[5px] shadow-[0_0px_10px_4px_rgba(0,0,0,0.05)]`}>
                    <ul onClick={toggleTableContents} className="text-[#4e9eb8] text-[16px] font-medium space-y-4">
                        {allLinks.map(link => {
                            return (
                                <li
                                    key={link.id}
                                    onClick={() => handleScrollToClick(link.scrollToThis)}
                                    className={`${link.scrollToThis.endsWith('introduction') ? "flex justify-between items-center" : ''}`}
                                >
                                    <span id={link.id} className='cursor-pointer hover:text-[#4e9eb8]/60'>{link.title}</span>
                                    {link.scrollToThis.endsWith('introduction') ?
                                        (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleTableContents()
                                                }}
                                                className='relative text-[18px] text-black/70 cursor-pointer'>
                                                <span className="w-5 h-0.5 bg-[#636363] rounded rotate-45 absolute top-0 right-0"></span>
                                                <span className="w-5 h-0.5 bg-[#636363] rounded -rotate-45 absolute top-0 right-0"></span>
                                            </button>
                                        ) : null}
                                </li>
                            )
                        }
                        )}
                    </ul>
                </div>

            </div >
        </>
    )
}

export default StickyBar