import React from 'react'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const SelfPublishingSteps = () => {
    return (
        <>
            <div className='max-w-[78.125rem] flex flex-col items-start gap-7 mx-auto my-12 sm:px-5 md:px-10'>
                <Step1 />
                <Step2 />
                <Step3 />
                <Step4 />
            </div>
        </>
    )
}

export default SelfPublishingSteps