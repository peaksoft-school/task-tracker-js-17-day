import { createSlice } from '@reduxjs/toolkit'
import { FAVORITE_COUNT_THUNK } from './favoriteThunk'

export const initialState = {
   boardCount: 0,
   workspaceCount: 1,
   isLoading: false,
}

export const favoriteCountSlice = createSlice({
   name: 'favoriteCount',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(FAVORITE_COUNT_THUNK.favoriteCountThunk.pending, (state) => {
            state.isLoading = true
         })
         .addCase(
            FAVORITE_COUNT_THUNK.favoriteCountThunk.fulfilled,
            (state, action) => {
               state.isLoading = false
               state.boardCount = action.payload // допустим, сервер возвращает число
               //console.log('✅ Получено из API:', action.payload)
            }
         )
         .addCase(FAVORITE_COUNT_THUNK.favoriteCountThunk.rejected, (state) => {
            state.isLoading = false
         })

         // .addCase(
         //    FAVORITE_COUNT_THUNK.favoriteAllWorkspace.pending,(state) => {
         //       state.isLoading = true
         //    }
         // )
         // .addCase(FAVORITE_COUNT_THUNK.favoriteAllWorkspace.fulfilled, (state, action) => {
         //    state.isLoading = false
         //    state.workspaceCount = action.payload // допустим, сервер возвращает число
         //    console.log('✅ Получено из API:', action.payload)
         // })
         // .addCase(FAVORITE_COUNT_THUNK.favoriteAllWorkspace.rejected, (state) => {
         //    state.isLoading = false
         // })
   },
})
