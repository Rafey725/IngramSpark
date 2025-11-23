import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [
        {
            id: "self-publish-introduction-link",
            scrollToThis: "self-publish-introduction",
            title: "Introduction"
        },
        {
            id: "benefits-to-publish-link",
            scrollToThis: "benefits-to-publish",
            title: "Benefits of Self Publishing"
        },
        {
            id: "eight-steps-to-publish-link",
            scrollToThis: "eight-steps-to-publish",
            title: "8 Steps to Self-Publishing a Book",
            subLinks: [
                {
                    id: "step-one-link",
                    scrollToThis: "step-one",
                    title: "Step1: Writing"
                },
                {
                    id: "step-two-link",
                    scrollToThis: "step-two",
                    title: "Step2: Book Editing"
                },
                {
                    id: "step-three-link",
                    scrollToThis: "step-three",
                    title: "Step3: Book Design"
                },
                {
                    id: "step-four-link",
                    scrollToThis: "step-four",
                    title: "Step4: Book Metadata"
                },
                {
                    id: "step-five-link",
                    scrollToThis: "step-five",
                    title: "Step5: Publishing"
                },
                {
                    id: "step-six-link",
                    scrollToThis: "step-six",
                    title: "Step6: Distribution"
                },
                {
                    id: "step-seven-link",
                    scrollToThis: "step-seven",
                    title: "Step7: Marketing"
                },
                {
                    id: "step-eight-link",
                    scrollToThis: "step-eight",
                    title: "Step8: Join the Indie Publishing Community"
                },
            ]
        },
        {
            id: "costs-to-publish-link",
            scrollToThis: "costs-to-publish",
            title: "How Much Does It Cost to Self-Publish a Book?",
            subLinks: [
                {
                    id: "costs-step-one-link",
                    scrollToThis: "costs-step-one",
                    title: "Step1: Book Editing"
                },
                {
                    id: "costs-step-two-link",
                    scrollToThis: "costs-step-two",
                    title: "Step2: Interior Design"
                },
                {
                    id: "costs-step-three-link",
                    scrollToThis: "costs-step-three",
                    title: "Step3: Book Cover Design"
                },
                {
                    id: "costs-step-four-link",
                    scrollToThis: "costs-step-four",
                    title: "Step4: Publishing"
                },
                {
                    id: "costs-step-five-link",
                    scrollToThis: "costs-step-five",
                    title: "Step5: Printing & Shipping"
                },
                {
                    id: "costs-step-six-link",
                    scrollToThis: "costs-step-six",
                    title: "Step6: Book Marketing"
                }
            ]
        },
        {
            id: "pricing-your-book-link",
            scrollToThis: "pricing-your-book",
            title: "Pricing Your Book"
        },
        {
            id: "author-salary-link",
            scrollToThis: "author-salary",
            title: "Author Salary"
        },
        {
            id: "final-tips-to-publish-link",
            scrollToThis: "final-tips-to-publish",
            title: "Final Tips for Self-Publishing"
        },
    ],
}

export const selfPublishSlice = createSlice({
    name: 'selfPublish',
    initialState,
    reducers: {
    },
})

// Action creators are generated for each case reducer function
export const {  } = selfPublishSlice.actions

export default selfPublishSlice.reducer