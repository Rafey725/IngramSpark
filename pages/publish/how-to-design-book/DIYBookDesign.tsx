"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const DIYBookDesign = () => {
    // Quote section data
    const quoteData = {
        quote: "The beauty of technology is that it helps you craft, finalize, publish, print, and distribute your book. Book publishing and self-publishing is a business, and when time and budget are limited, it's helpful for independent publishers to enlist technology and industry experts for help.",
        author: "Julie-Ann Harper",
        authorCompany: "Pick-a-WooWoo Publishing Group",
        authorLink: "https://www.pickawoowoo.com/"
    }

    // Educational resources sections
    const educationalResources = [
        {
            icon: "/online-course-icon.webp",
            title: "Book Design Online Course",
            description: (
                <>
                    Learn {" "}
                    <Link href="/" className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>
                        how to design a book cover
                    </Link>{" "}
                    and interior with book design tips that will help your book reach more readers. This IngramPublisher Academy course reveals important publishing industry standards to keep in mind for your book design, whether you create your cover and interior yourself or work with a professional book designer.
                </>
            ),
            buttonText: "Start Course",
            buttonLink: "/"
        },
        {
            icon: "/blog-post-icon.webp",
            title: "Book Design Blog Posts",
            description: (
                <>
                    Industry experts share their expertise with the IngramPublisher author community through our{" "}
                    <Link href="/" className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>
                        book design
                    </Link>{" "}
                    blog section.
                </>
            ),
            buttonText: "Read More",
            buttonLink: "/"
        }
    ]

    // Book design tools
    const designTools = [
        {
            title: "IngramPublisher's Book-Building Tool",
            description: "Create your own book online from your IngramPublisher account at no extra cost. Choose from pre-designed layouts or customize your own for both covers and interiors. The tool automatically formats your book to meet IngramPublisher's file requirements."
        },
        {
            title: "Canva",
            description: (
                <>
                    <Link href="https://www.canva.com/create/book-covers/" target='_blank' className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>
                        Canva
                    </Link>{" "} offers a free, simple design program that enables you to become a book designer. It contains {" "}
                    <Link href="https://www.canva.com/book-covers/templates/" target='_blank' className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>
                        templates
                    </Link>{" "}and predesigned drag-and-drop elements in an easy-to-use interface for designers and non-designers alike.
                </>
            )
        }
    ]

    // Premade book cover template services
    const premadeTemplateServices = [
        {
            name: "Joel Friedlander's Book Design Templates",
            link: "/",
            description: "let you quickly choose a professionally designed cover at an affordable price."
        },
        {
            name: "SelfPubBookCovers",
            link: "/",
            description: "offers thousands of premade, quality-vetted book covers created by designers all over the world. The book covers are ready to customize and download instantly."
        },
        {
            name: "The Book Cover Designer",
            link: "/",
            description: "has over 14,000 covers in their database."
        }
    ]

    // File requirements for book covers
    const fileRequirements = [
        "Must be uploaded as a separate PDF from the interior.",
        "Barcodes are mandatory on all covers; 100% black only and placed on a white box/background.",
        <><span className='font-bold'>Resolution</span>: 300ppi</>,
        <><span className="font-bold">Printed Line Screen</span>: 175 visual equivalent</>,
        <><span className="font-bold">Color Space</span>: CMYK</>,
        <><span className="font-bold">Bleed</span>: 0.125" (3mm) on all four sides except hardcover files,which require a 0.625" (16mm) wrap.</>,
        <><span className="font-bold">Type Safety</span>: 0.25" (6mm) minimum on all sides.</>,
        {
            title: "Spine Type Safety:",
            subItems: [
                "For page counts below 48, spine text is not available.",
                "Spines 0.35\" and larger - 0.0625\" (2mm) left/right sides.",
                "Spines smaller than 0.35\" - 0.03125\" (1mm) left/right sides."
            ]
        },
        "Text that is 24 pt. or below, please use 100% black only.",
        "All spot colors with/without transparencies must be converted to CMYK."
    ]

    return (
        <div className='max-w-[78.125rem] flex flex-col items-start md:gap-4 xl:gap-7 mx-auto my-12 overflow-hidden'>
            <div className="max-w-[765px] w-full md:max-w-[48.75rem] md:w-[clamp(20rem,50vw,48.75rem)] py-6 px-4 sm:px-5 md:px-10 box-border">

                {/* Quote Section */}
                <div className="bg-[#f6f8fa] border border-gray-200 rounded-lg p-6 md:p-8 mb-8 flex flex-col sm:flex-row md:flex-col xl:flex-row gap-10 items-center">
                    <div className="relative w-[clamp(100px,15vw,200px)] h-40 shrink-0">
                        <Image src="/woowoo-books.webp" alt='image' fill className='object-contain scale-130' />
                    </div>
                    <div className="">
                        <span className="italic text-[#3c3c3c] text-[clamp(18px,2.5vw,20px)] leading-relaxed">
                            "{quoteData.quote}"
                        </span>
                        <p className="text-[#3c3c3c] text-[clamp(16px,2.5vw,20px)] font-bold mt-4">
                            —{quoteData.author}, Founder of{" "}
                            <Link href={quoteData.authorLink} target='_blank' className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>
                                {quoteData.authorCompany}
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Introductory Sentence */}
                <p className="text-[#3c3c3c] text-[clamp(16px,2.5vw,18px)] mb-8">
                    There are several tools to help you with a{" "}
                    <Link href="/" className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>
                        DIY book cover design
                    </Link>
                    —let's look at a few.
                </p>

                {/* Educational Book Design Resources Section */}
                <div className="mb-12">
                    <h1 className="text-[clamp(23px,5vw,30px)] font-bold text-[#3c3c3c] mb-2">
                        Educational Book Design Resources
                    </h1>
                    <div className="w-24 h-1 bg-[#4e9eb8] mb-6"></div>
                    <p className="text-[#666] text-[clamp(14px,2.5vw,16px)] leading-[21px] mb-8">
                        At IngramPublisher, we believe knowledge is power and indie authors deserve access to it! Over the years, we've created several FREE resources to help you learn more about how to make your own book online.
                    </p>

                    {/* Educational Resources Items */}
                    <div className="space-y-8">
                        {educationalResources.map((resource, index) => (
                            <div key={index} className="flex gap-4 items-start">
                                <div className='shrink-0 relative w-30 h-25'>
                                    <Image src={resource.icon} alt='image' fill className='object-contain' />
                                </div>
                                <div className="">
                                    <h2 className="text-[clamp(20px,4vw,24px)] font-bold text-[#3c3c3c] mb-3">
                                        {resource.title}
                                    </h2>
                                    <p className="text-[#666] text-[clamp(14px,2.5vw,16px)] leading-[21px] mb-2">
                                        {resource.description}
                                    </p>
                                    <Link href={resource.buttonLink}>
                                        <button className="px-6 py-2 bg-[#ffca38] hover:bg-[#ffbb00] rounded-sm text-[clamp(16px,2.5vw,18px)] font-bold text-[#3c3c3c] transition-colors cursor-pointer">
                                            {resource.buttonText}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recommended Book Design Tools and Templates Section */}
                <div className="mb-12">
                    <h1 className="text-[clamp(23px,5vw,30px)] font-bold text-[#3c3c3c] mb-2">
                        Recommended Book Design Tools and Templates
                    </h1>
                    <div className="w-32 h-1 bg-[#4e9eb8] mb-6"></div>

                    {/* Design Tools */}
                    <div className="space-y-6 mb-10">
                        {designTools.map((tool, index) => (
                            <div key={index}>
                                <h2 className="text-[clamp(20px,4vw,24px)] font-bold text-[#3c3c3c] mb-3">
                                    {tool.title}
                                </h2>
                                <p className="text-[#666] text-[clamp(14px,2.5vw,16px)] leading-[21px]">
                                    {tool.description}
                                </p>
                            </div>
                        ))}

                        {/* Book Cover Ideas */}
                        <div className="relative w-full h-100">
                            <Image
                                src="/how-to-design-book/canva-book-designs.webp"
                                alt="image"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Premade Book Cover Templates Section */}
                <div className="mb-12">
                    <h1 className="text-[clamp(23px,5vw,30px)] font-bold text-[#3c3c3c] mb-2">
                        Premade Book Cover Templates
                    </h1>
                    <div className="w-32 h-1 bg-[#4e9eb8] mb-6"></div>
                    <p className="text-[#666] text-[clamp(14px,2.5vw,16px)] leading-[21px] mb-3">
                        There are several companies that offer premade book cover templates that are sold once and then removed from the website. These book cover templates are a great way for indie authors to affordably self-publish their work!
                    </p>

                    <ul className="space-y-3 mb-3">
                        {premadeTemplateServices.map((service, index) => (
                            <li key={index} className="text-[#666] text-[clamp(14px,2.5vw,16px)] leading-[21px]">
                                • <Link href={service.link} className='text-[#3a7c92] underline hover:text-[#4e9eb8] font-bold'>
                                    {service.name}
                                </Link>{" "}
                                {service.description}
                            </li>
                        ))}
                    </ul>

                    <p className="text-[#666] text-[clamp(14px,2.5vw,16px)] leading-[21px]">
                        Before purchasing a premade book cover template, make sure to double-check that you'll be receiving a file that suits your needs—whether that's a print book, ebook, or both!
                    </p>
                </div>

                {/* Uploading a Book Cover with IngramPublisher Section */}
                <div className="mb-12">
                    <h1 className="text-[clamp(23px,5vw,30px)] font-bold text-[#3c3c3c] mb-2">
                        Uploading a Book Cover with IngramPublisher
                    </h1>
                    <div className="w-23 h-1 bg-[#4e9eb8] mb-6"></div>
                    <p className="text-[#666] text-[clamp(14px,2.5vw,16px)] leading-[21px] mb-6">
                        When you upload a book cover with IngramPublisher, there are several file requirements to keep in mind.
                    </p>

                    <h2 className="text-[clamp(20px,4vw,24px)] font-bold text-[#4e9eb8] mb-4">
                        File Requirements for Book Covers
                    </h2>

                    <ul className="space-y-3 mb-6">
                        {fileRequirements.map((requirement, index) => {
                            if (typeof requirement === 'string' || React.isValidElement(requirement)) {
                                return (
                                    <li key={index} className="text-[#666] text-[clamp(14px,2.5vw,16px)] leading-[21px] flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>{requirement}</span>
                                    </li>
                                )
                            } else {
                                return (
                                    <li key={index} className="text-[#666] text-[clamp(14px,2.5vw,16px)] leading-[21px] ">
                                        <div className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <div>
                                                <span className="font-semibold">{requirement.title}</span>
                                                <ul className="ml-6 mt-2 space-y-2">
                                                    {requirement.subItems.map((subItem: string, subIndex: number) => (
                                                        <li key={subIndex} className="flex items-start">
                                                            <span className="mr-2">-</span>
                                                            <span>{subItem}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                )
                            }
                        })}
                    </ul>

                    <p className="text-[#666] text-[clamp(14px,2.5vw,16px)] leading-[22px]  mb-6">
                        Check out the{" "}
                        <Link href="/" className='text-[#4e9eb8] underline hover:text-[#3a7c92] font-bold'>
                            File Creation Guide
                        </Link>
                        {" "}for complete information on files accepted within IngramPublisher. All the information on the front cover, back cover, spine, and flaps (if you have a dust jacket) needs to be assembled into a single PDF. To ensure accuracy, we recommend using our{" "}
                        <Link href="/" className='text-[#4e9eb8] underline hover:text-[#3a7c92] font-bold'>
                            cover template generator
                        </Link>
                        . Simply fill in the required fields and a custom template (barcode included) will be emailed to you!
                    </p>
                </div>

                {/* Cover Template Generator Section */}
                  <div className='relative w-full h-[clamp(150px,50vw,400px)] mt-3 md:h-[clamp(200px,20vw,400px)]'>
                  <Image src="/cover-templete-generator-image.webp" alt='image' fill className='object-contain'/>
                </div>

                {/* Final Section */}
                    <p className="text-[#666]  text-[clamp(14px,2.5vw,16px)] leading-[21px] my-6">
                    The beauty of self-publishing is that you have full control over your creative decisions. You can be the writer, editor, designer, publisher, and ultimately—the owner of your work! However, time is money, and your book design is an essential piece of discoverability and sales—so a lot of self-publishers still opt to enlist the help of professionals. If you’re interested in hiring an expert to assist you with book cover design, we’ll cover everything you need to know in the next section.
                    </p>

            </div>
        </div >
    )
}

export default DIYBookDesign
