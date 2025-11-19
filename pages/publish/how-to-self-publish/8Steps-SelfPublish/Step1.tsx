import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Step1 = () => {
    return (
            <div className="max-w-[48.75rem] md:w-[26.25rem] lg:w-[38.75rem] xl:w-[48.75rem] px-5 py-6">
                {/* Step 1: Writing */}
                <div className="mb-16">
                    <h2 className="text-[clamp(24px,4vw,32px)] text-[#4e9eb8] font-bold mb-4 border-l-4 border-[#ffca38] pl-4">
                        Step 1: Writing
                    </h2>

                    <p className="text-[clamp(16px,2.5vw,24px)] font-light text-[#3c3c3c] mb-4">
                        This might sound obvious, but we can&apos;t overlook the writing process!
                    </p>

                    <p className="text-[clamp(14px,2vw,16px)] text-[#3c3c3c] mb-4">
                        Waking up every day and putting in the work to write a book is no easy feat.
                    </p>

                    <p className="text-[clamp(14px,2vw,16px)] text-[#3c3c3c] mb-2">
                        Here are a few of our favorite writing tips and resources to get your book ready for the next step:
                    </p>

                    <Link href="#" className="text-[#4e9eb8] underline hover:text-[#4e9eb8]/70">
                        7 Essential Writing Tips for Authors
                    </Link>
                </div>

                {/* Writing Inspiration Section */}
                <div className="rounded-lg p-8 md:p-12 my-12 text-center relative w-[45.6rem] h-103">
                    <Image src="/8StepsImages/image1.png" alt="image" fill className="object-contain" />
                </div>

                {/* Closing Section */}
                <div className="mt-12">
                    <p className="text-[clamp(14px,2vw,16px)] text-[#3c3c3c]">
                        Writing a book is a huge accomplishment. If you&apos;ve made it that far, we hope you take a moment
                        to stop and congratulate yourself on a job well done. Now, let&apos;s get ready to share it with the
                        world!
                    </p>
                </div>
            </div>
    )
}

export default Step1