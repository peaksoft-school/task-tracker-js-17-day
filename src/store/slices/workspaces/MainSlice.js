import { createSlice } from '@reduxjs/toolkit'
import { MAIN_THUNK } from './mainThunk'

const initialState = {
   isloading: false,
   main: [],
   error: null,
}

const mainSlice = createSlice({
   name: 'main',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(MAIN_THUNK.getAllMain.pending, (state) => {
            state.isloading = true
         })
         .addCase(MAIN_THUNK.getAllMain.fulfilled, (state, action) => {
            state.isloading = false
            state.main = action.payload
         })
         .addCase(MAIN_THUNK.getAllMain.rejected, (state, action) => {
            state.isloading = false
            state.error = action.error
         })

         .addCase(MAIN_THUNK.modalCreateWorkSpase.pending, (state) => {
            state.isloading = true
         })
         .addCase(MAIN_THUNK.modalCreateWorkSpase.fulfilled, (state) => {
            state.isloading = false
         })
         .addCase(MAIN_THUNK.modalCreateWorkSpase.rejected, (state, action) => {
            state.isloading = false
            state.error = action.error
         })

         .addCase(MAIN_THUNK.favoritesWorkSpase.pending, (state) => {
            state.isloading = true
         })
         .addCase(MAIN_THUNK.favoritesWorkSpase.fulfilled, (state, action) => {
            state.isloading = false

            const { favorite } = action.payload

            const index = state.main.findIndex()

            if (index !== -1) {
               state.main[index].fav = favorite
            }
         })
         .addCase(MAIN_THUNK.favoritesWorkSpase.rejected, (state, action) => {
            state.isloading = false
            state.error = action.error
         })

         .addCase(MAIN_THUNK.getAllBoards.pending, (state) => {
            state.isloading = true
         })
         .addCase(MAIN_THUNK.getAllBoards.fulfilled, (state) => {
            state.isloading = false
         })
         .addCase(MAIN_THUNK.getAllBoards.rejected, (state, action) => {
            state.isloading = false
            state.error = action.error
         })
   },
})

export { mainSlice }
