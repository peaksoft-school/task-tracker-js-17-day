import { createSlice } from '@reduxjs/toolkit'

import { getWorkspaces } from './WorkspacesThunk'

const initialState = {
   list: [],

   isLoading: false,

   error: null,
}

const workspacesSlice = createSlice({
   name: 'workspaces',

   initialState,

   reducers: {},

   extraReducers: (builder) => {
      builder

         .addCase(getWorkspaces.pending, (state) => {
            state.isLoading = true

            state.error = null
         })

         .addCase(getWorkspaces.fulfilled, (state, action) => {
            state.list = action.payload

            state.isLoading = false
         })

         .addCase(getWorkspaces.rejected, (state, action) => {
            state.isLoading = false

            state.error = action.payload || 'Failed to fetch workspaces'
         })
   },
})

export const workspacesReducer = workspacesSlice.reducer
