import { createSlice } from '@reduxjs/toolkit'
import { PROFILE_THUNK } from './profileThunk'

export const initialState = {
   isLoading: false,
   profileFul: [],
}
export const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(PROFILE_THUNK.profileSlice.pending, (state) => {
            state.isLoading = true
         })
         .addCase(PROFILE_THUNK.profileSlice.fulfilled, (state, action) => {
            state.isLoading = false
            state.profileFul = action.payload
            console.log('✅ Получено из API:', action.payload)
            
         })
         .addCase(PROFILE_THUNK.profileSlice.rejected, (state) => {
            state.isLoading = false
         })
   },
})
