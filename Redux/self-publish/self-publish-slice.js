import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const selfPublishSlice = createSlice({
    name: 'selfPublish',
    initialState,
    reducers: {
        handleScrollTo: (state, action) => {
            console.log(action.payload);
        }
    },
})

// Action creators are generated for each case reducer function
export const { handleScrollTo } = selfPublishSlice.actions

export default selfPublishSlice.reducer