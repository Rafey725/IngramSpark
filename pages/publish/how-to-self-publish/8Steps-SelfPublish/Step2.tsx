import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Step2 = () => {
    const editingTypes: { title: string, description: string }[] = [
        {
            title: "Manuscript Critique",
            description: "This is a high-level examination of your manuscript. It looks at things like narrative voice, plot, and character development. With this type of critique, editors give feedback on items that will help improve your overall story."
        },
        {
            title: "Comprehensive Edit / Line Edit",
            description: "A comprehensive edit addresses structural issues (similar to a manuscript critique), but it also involves a line edit, which looks closely at writing style and language. With a line edit, an editor focuses on the use of language to communicate your story to a reader."
        },
        {
            title: "Copyedit",
            description: "A copyedit is often confused with a line edit, but they're very different steps in the editing process. A copyedit reviews technical flaws—issues with spelling, grammar, and punctuation—and looks for internal inconsistencies throughout the text."
        },
        {
            title: "Proofread",
            description: "This is the final step in the editing process. A proofreader examines the final copy of the manuscript (usually after typesetting) for any awkward page breaks, and he or she might perform some light copyediting."
        }
    ];

    return (
        <div className="max-w-[48.75rem] md:w-[26.25rem] lg:w-[38.75rem] xl:w-[48.75rem] px-5 py-6">
            { /* Step 2: Book Editing */}
            <div className="mb-7">
                <h2 className="text-[clamp(24px,4vw,32px)] text-[#4e9eb8] font-bold mb-4 border-l-4 border-[#ffca38] pl-4">
                    Step 2: Book Editing
                </h2>

                <p className="text-[clamp(1rem,2.5vw,1.5rem)] font-light text-[#3c3c3c] mb-0.25rem">
                    There are a few{" "}
                    <Link href="#" className="text-[#4e9eb8] underline hover:text-[#4e9eb8]/70">different types of editing</Link>
                    —and each serves a unique purpose for a manuscript. You’ll have to assess your work to determine what level of editing to start with.
                </p>
            </div>

            {/* things to consider */}
            <div className='bg-[#f4f6f8] w-full h-auto rounded-[5px] border border-gray-200'>
                {/* image */}
                <div className='w-full h-16.5 bg-[#4e9eb8] text-white flex justify-center items-center '>
                    <h2 className="text-[clamp(1rem,3vw,1.25rem)] font-bold">
                        Things to Consider
                    </h2>
                </div>
                {/* right side */}
                <div className="flex flex-col lg:flex-row lg:justify-start gap-y-0.25rem py-10 px-5">
                    <div className="relative shrink-0 w-full lg:w-[17.5rem] h-[18.75rem] lg:h-[25.875rem] lg:-ml-5 flex items-center justify-center">
                        <Image src="/8StepsImages/image2.webp" alt="Editing Image" fill className="object-contain" />
                    </div>

                    {/* Text Content - Right Side */}
                    <div className="flex-1 space-y-6">
                        {editingTypes.map((type, idx) => (
                            <div key={idx}>
                                <h4 className="text-[clamp(1rem,2.5vw,1.25rem)] font-bold text-[#4e9eb8] mb-0.125rem">
                                    {type.title}
                                </h4>
                                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-700 leading-relaxed">
                                    {type.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step2