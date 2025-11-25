import { createSlice } from '@reduxjs/toolkit'
import { BOARD_THUNK } from './boardThunk'

export const initialState = {
   boards: [],
   loading: false,
   error: null,
   bgUrl: null,
}

export const boardSlice = createSlice({
   name: 'board',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(BOARD_THUNK.workSpaceById.pending, (state) => {
            state.loading = true
         })
         .addCase(BOARD_THUNK.workSpaceById.fulfilled, (state, action) => {
            state.loading = false
            state.boards = action.payload
         })
         .addCase(BOARD_THUNK.workSpaceById.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase('/api/boards/workspaceId', (state, action) => {
            state.name = action.payload.name
            state.description = action.payload.description
            state.backgroundUrl = action.payload.backgroundUrl
         })
         .addCase(BOARD_THUNK.boardPost.pending, (state) => {
            state.loading = true
         })
         .addCase(BOARD_THUNK.boardPost.rejected, (state) => {
            state.loading = false
         })
         .addCase(BOARD_THUNK.boardPost.fulfilled, (state, action) => {
            state.loading = false
            state.boards.push(action.payload)
         })
         .addCase(BOARD_THUNK.uploadImage.pending, (state) => {
            state.loading = true
         })
         .addCase(BOARD_THUNK.uploadImage.rejected, (state) => {
            state.loading = false
         })
         .addCase(BOARD_THUNK.uploadImage.fulfilled, (state, action) => {
            state.loading = false
            state.bgUrl = action.payload
         })

         .addCase(BOARD_THUNK.favoritesBoards.pending, (state) => {
            state.loading = true
         })
         .addCase(BOARD_THUNK.favoritesBoards.fulfilled, (state, action) => {
            state.loading = false
            state.boards = action.payload
         })
         .addCase(BOARD_THUNK.favoritesBoards.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })
   },
})

export default boardSlice.reducer
