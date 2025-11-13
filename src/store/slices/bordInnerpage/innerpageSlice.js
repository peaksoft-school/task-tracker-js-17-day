// innerpageSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { INNER_PAGE_THUNK } from './innerpageThunk'

const initialState = {
   loading: false,
   error: null,
   board: null,
   columns: [],
}

const innerpageSlice = createSlice({
   name: 'innerpage',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(INNER_PAGE_THUNK.innerpageThunk.pending, (state) => {
            state.loading = true
         })
         .addCase(INNER_PAGE_THUNK.innerpageThunk.fulfilled, (state, action) => {
            state.loading = false
            state.columns = action.payload
         })
         .addCase(INNER_PAGE_THUNK.innerpageThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })

         .addCase(INNER_PAGE_THUNK.boardThunk.pending, (state) => {
            state.loading = true
         })
         .addCase(INNER_PAGE_THUNK.boardThunk.fulfilled, (state, action) => {
            state.loading = false
            state.board = action.payload
         })
         .addCase(INNER_PAGE_THUNK.boardThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })
   },
})

export { innerpageSlice }
