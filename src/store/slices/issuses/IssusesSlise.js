import { createSlice } from '@reduxjs/toolkit'
import { ISSUES_THUNK } from './IssusesThunk'

const initialState = {
   issues: [],
   isLoading: false,
   error: null,
}

const issuesSlice = createSlice({
   name: 'issues',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(ISSUES_THUNK.getAllIssues.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
         .addCase(ISSUES_THUNK.getAllIssues.fulfilled, (state, action) => {
            state.isLoading = false
            state.issues = action.payload
         })
         .addCase(ISSUES_THUNK.getAllIssues.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
         })
   },
})

export { issuesSlice }
