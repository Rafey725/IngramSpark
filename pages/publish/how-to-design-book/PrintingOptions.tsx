"use client"

import { title } from 'process'
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const PrintingOptions = () => {
    // Outside the Book 
    let outSideOfBook = [
        {
            image: "",
            title: "Book Cover Options",
            types: [
                {
                    title: "Paperback",
                    description: "Full-color laminated cover with perfect-bound binding",
                },
                {
                    title: "Hardcover",
                    description: "Available with or without dust jacket"
                }
            ]
        },
        {
            image: "",
            title: "Book Textures",
            types: [
                {
                    title: "Matte Cover",
                    description: "Soft feel, no glare, polished",
                },
                {
                    title: "Gloss Cover",
                    description: "High shine, smooth finish"
                },
                {
                    title: "Digital Cloth™ Cover ",
                    description: "Subtle, cloth-like look (available with or without dust jacket. Textured feel available for hardcover books printed in the U.S. and U.K. only)"
                },
            ]
        },
        {
            image: "",
            title: "Book Binding",
            types: [
                {
                    title: "Paperback",
                    description: "Full-color laminated cover with perfect-bound binding",
                },
                {
                    title: "Hardcover",
                    description: "Available with or without dust jacket"
                }
            ]
        },
    ]

    // Inside the Book - Ink Qualities
    const inkQualities = [
        {
            type: "Black-and-White Printing",
            description: "Most economical",
            paper: "50 lb / 74 gsm paper in crème or white"
        },
        {
            type: "Standard Color Printing",
            description: "Standard color quality",
            paper: "50 lb / 74 gsm or 70 lb / 104 gsm white paper"
        },
        {
            type: "Premium Color Printing",
            description: "Highest color quality with more vivid color",
            paper: "70 lb / 104 gsm white paper"
        }
    ]

    // Inside the Book - Paper Color and Weights
    const paperOptions = [
        {
            type: "Groundwood 38 lb / 56 gsm",
            description: "Available for black-and-white printing and select, small-format trim sizes in the U.S. and U.K."
        },
        {
            type: "Crème 50 lb / 74 gsm",
            description: "Available for black-and-white printing."
        },
        {
            type: "White 50 lb / 74 gsm",
            description: "Available for black-and-white printing and standard color printing."
        },
        {
            type: "White 70 lb / 104 gsm",
            description: "Available in standard and premium color printing options"
        }
    ]

    // Testimonials
    const testimonials = [
        {
            rating: 5,
            quote: "I used IngramSpark Australia to print my paperback novel. The formatting instructions were clear for both the interior and cover. The quality of the finished product was excellent. Delivery was about a week. I was pleased with the whole efficient process.",
            author: "Larry Smart"
        }
    ]

    // Videos
    const videos = [
        {
            title: "NEW! Introducing the Jack...",
            subtitle: "Introducing Jacketed Case Laminate Books",
            thumbnail: "/how-to-design-book/video1-thumbnail.webp"
        },
        {
            title: "Unboxing: Publishers Revie...",
            subtitle: "UNBOXING",
            thumbnail: "/how-to-design-book/video2-thumbnail.webp"
        }
    ]

    return (
        <div className='max-w-[78.125rem] flex flex-col items-start md:gap-4 xl:gap-7 mx-auto my-12 px-5 md:px-10'>
            <div className="max-w-195 md:w-[clamp(20rem,50vw,48.75rem)] py-6">

            </div>
        </div>
    )
}

export default PrintingOptions
