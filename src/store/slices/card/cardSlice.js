import { createSlice } from '@reduxjs/toolkit'
import { CARD_THUNK } from './cardThunk'

const initialState = {
   card: null,
   loading: false,
   error: null,
   members: [],
}

export const cardSlice = createSlice({
   name: 'card',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder

         .addCase(CARD_THUNK.createCardThunk.pending, (state) => {
            state.loading = true
         })
         .addCase(CARD_THUNK.createCardThunk.fulfilled, (state, action) => {
            state.loading = false
            state.card = action.payload
         })
         .addCase(CARD_THUNK.createCardThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })
         .addCase(CARD_THUNK.checklistThunk.pending, (state) => {
            state.loading = true
         })
         .addCase(CARD_THUNK.checklistThunk.fulfilled, (state, action) => {
            state.loading = false
            state.card = action.payload
         })
         .addCase(CARD_THUNK.checklistThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })
         .addCase(CARD_THUNK.labelsThunk.pending, (state) => {
            state.loading = true
         })
         .addCase(CARD_THUNK.labelsThunk.fulfilled, (state, action) => {
            state.loading = false
            state.card = action.payload
         })
         .addCase(CARD_THUNK.labelsThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })

         .addCase(CARD_THUNK.attachmentsThunk.pending, (state) => {
            state.loading = true
         })
         .addCase(CARD_THUNK.attachmentsThunk.fulfilled, (state, action) => {
            state.loading = false
            state.card = action.payload
         })
         .addCase(CARD_THUNK.attachmentsThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })

         .addCase(CARD_THUNK.getCardsThunk.pending, (state) => {
            state.loading = true
         })
         .addCase(CARD_THUNK.getCardsThunk.fulfilled, (state, action) => {
            state.loading = false
            state.card = action.payload
         })
         .addCase(CARD_THUNK.getCardsThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })

         .addCase(CARD_THUNK.estimateThunk.pending, (state) => {
            state.loading = true
         })
         .addCase(CARD_THUNK.estimateThunk.fulfilled, (state, action) => {
            state.loading = false
            state.card = action.payload
         })
         .addCase(CARD_THUNK.estimateThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })

         .addCase(CARD_THUNK.userThunk.pending, (state) => {
            state.loading = true
         })
         .addCase(CARD_THUNK.userThunk.fulfilled, (state, action) => {
            state.loading = false
            state.members = action.payload
         })
         .addCase(CARD_THUNK.userThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })
   },
})

export default cardSlice.reducer
