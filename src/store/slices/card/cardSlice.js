import { createSlice } from "@reduxjs/toolkit"
import { createCardThunk } from "./cardThunk"

const initialState = {
    cards: [],
    loading: false,
    error: null
}

export const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createCardThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(createCardThunk.fulfilled, (state, action) => {
                state.loading = false
                state.cards.push(action.payload)
            })
            .addCase(createCardThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export default cardSlice.reducer
