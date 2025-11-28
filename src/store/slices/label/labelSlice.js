import { createSlice } from '@reduxjs/toolkit'
import { LABEL_THUNK } from './labelThunk'

export const initialState = {
   labels: [],
   loading: false,
   error: null,
}
export const labeleSlice = createSlice({
   name: 'label',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(LABEL_THUNK.getLabel.pending, (state) => {
            state.loading = true
         })
         .addCase(LABEL_THUNK.getLabel.fulfilled, (state, action) => {
            state.loading = false
            state.labels = action.payload
         })
         .addCase(LABEL_THUNK.getLabel.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })
         .addCase(LABEL_THUNK.postLabel.pending, (state) => {
            state.loading = true
         })
         .addCase(LABEL_THUNK.postLabel.fulfilled, (state, action) => {
            state.loading = false
            state.labels.push(action.payload)
         })
            .addCase(LABEL_THUNK.postLabel.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
   },
})
export default labeleSlice.reducer
