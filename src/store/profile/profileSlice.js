import { createSlice } from '@reduxjs/toolkit'
import { PROFILE_THUNK } from './profileThunk'

export const initialState = {
   isLoading: false,
   profileFul: {},
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

         .addCase(PROFILE_THUNK.updateProfile.pending, (state) => {
            state.isLoading = true
         })
         .addCase(PROFILE_THUNK.updateProfile.fulfilled, (state, action) => {
            state.isLoading = false
            state.profileFul = action.payload // обновляем профиль
         })
         .addCase(PROFILE_THUNK.updateProfile.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(PROFILE_THUNK.updatePassword.pending, (state) => {
            state.isLoading = true
         })
         .addCase(PROFILE_THUNK.updatePassword.fulfilled, (state) => {
            state.isLoading = false
         })
         .addCase(PROFILE_THUNK.updatePassword.rejected, (state) => {
            state.isLoading = false
         })
   },
})