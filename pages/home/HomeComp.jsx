import CardsCrousal from "@/components/Cards-Crousal"
import AICrousal from '@/components/AICrousal'
import InfiniteCrousal from "@/components/Infinite-Crousal"
import React from "react"
import Image from "next/image"

const HomeComp = () => {
    return (
        <>
            {/* crousal */}
            <CardsCrousal />
            {/* <AICrousal /> */}

            {/* service cards */}
            <div className="w-full mt-15 mb-15">
                <div className="max-w-[1200px] w-full mx-auto px-4 gap-8 grid justify-items-center align-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 md:grid-rows-2 lg:grid-rows-1">
                    <div className="max-w-[400px] w-full bg-[#f7f8f9] flex flex-col justify-between items-center py-7 px-5 rounded-[15px]">
                        <div className="flex justify-center items-center flex-col gap-2">
                            <Image src="/service-cards/publish-book.svg" alt="service 1" width={80} height={80} />
                            <h2 className="text-[22px] font-bold ">Publish a Book</h2>
                            <p className="text-center text-[17px]">Congratulations! Let’s start with what it costs, what you need, and what we offer.</p>
                        </div>
                        <button className="mb-1 mt-7 w-[132px] h-[44px] text-[20px] font-medium bg-[#4e9eb8]/90 hover:bg-[#4e9eb8] text-white/85 cursor-pointer transition duration-100 rounded-[10px]">Get Started</button>
                    </div>
                    <div className="max-w-[400px] w-full bg-[#f7f8f9] flex flex-col justify-between items-center py-7 px-5 rounded-[15px]">
                        <div className="flex justify-center items-center flex-col gap-2">
                            <Image src="/service-cards/learn-about-spark.svg" alt="service 1" width={80} height={80} />
                            <h2 className="text-[22px] font-bold ">Learn About IngramPublishers</h2>
                            <p className="text-center text-[17px]">Hardcover, paperback, ebooks, and global book distribution are our specialties!</p>
                        </div>
                        <button className="mb-1 mt-7 w-[132px] h-[44px] text-[20px] font-medium bg-[#4e9eb8]/90 hover:bg-[#4e9eb8] text-white/85 cursor-pointer transition duration-100 rounded-[10px]">Learn More</button>
                    </div>
                    <div className="max-w-[400px] w-full bg-[#f7f8f9] flex flex-col justify-between items-center py-7 px-5 rounded-[15px]">
                        <div className="flex justify-center items-center flex-col gap-2">
                            <Image src="/service-cards/learn-about-self-pub.svg" alt="service 1" width={80} height={80} />
                            <h2 className="text-[22px] font-bold ">Learn About Self-Publishing</h2>
                            <p className="text-center text-[17px]">Knowledge is power! Check out free resources to help you self-publish successfully.</p>
                        </div>
                        <button className="mb-1 mt-7 w-[132px] h-[44px] text-[20px] font-medium bg-[#4e9eb8]/90 hover:bg-[#4e9eb8] text-white/85 cursor-pointer transition duration-100 rounded-[10px]">Get Started</button>
                    </div>
                </div>
            </div>
            {/* create account banner */}
            <div className="w-full h-[220px] flex justify-center items-center mb-15">
                <div className="text-center flex flex-col justify-center items-center gap-3">
                    <h2 className="text-[#4a97af] text-[30px] font-bold">It’s your content. Do more with it.</h2>
                    <p className="text-[#666] text-[20px]">Publish on Demand® with IngramPublishers</p>
                    <button className='w-fit px-7 h-[48px] text-nowrap bg-[#febe10]/90 hover:bg-[#febe10] transition duration-100 rounded-[12px] mt-2.5 text-[20px] font-medium cursor-pointer'>Create an Account Today</button>
                </div>
            </div>
            {/* infinite crousal */}
            <InfiniteCrousal />
        </>
    )
}

export default HomeComp