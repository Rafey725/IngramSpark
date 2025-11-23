import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [
        {
            id: "design-book-introduction-link",
            scrollToThis: "design-book-introduction",
            title: "Introduction"
        },
        {
            id: "printing-options-link",
            scrollToThis: "printing-options",
            title: "Printing Options for Self-Publishers"
        },
        {
            id: "formats-link",
            scrollToThis: "formats",
            title: "Formats: Ebook, Paperback, and Hardcover"
        },
        {
            id: "trim-size-link",
            scrollToThis: "trim-size",
            title: "Picking Your Book’s Trim Size"
        },
        {
            id: "cover-design-basics-link",
            scrollToThis: "cover-design-basics",
            title: "Book Cover Design Basics"
        },
        {
            id: "top-8-cover-tips-link",
            scrollToThis: "top-8-cover-tips",
            title: "Top 8 Cover Design Tips"
        },
        {
            id: "cover-design-ideas-link",
            scrollToThis: "cover-design-ideas",
            title: "Cover Design Ideas"
        },
        {
            id: "diy-book-design-link",
            scrollToThis: "diy-book-design",
            title: "DIY Book Design"
        },
        {
            id: "hiring-cover-designer-link",
            scrollToThis: "hiring-cover-designer",
            title: "Hiring a Book Cover Designer"
        }
    ]
}

export const designBookSlice = createSlice({
    name: 'designBook',
    initialState,
    reducers: {
    },
})

// Action creators are generated for each case reducer function
export const { } = designBookSlice.actions

export default designBookSlice.reducer