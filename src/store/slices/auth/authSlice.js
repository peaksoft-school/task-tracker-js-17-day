import { createSlice } from '@reduxjs/toolkit'
import { ROLES } from '../../../routes/routes'
import { AUTH_THUNK } from './authThunk'

const initialState = {
   role: ROLES.GUEST,
   email: null,
   token: null,
   isAuth: false,
   isLoading: false,
   userId: null,
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase('auth/signUp/fulfilled', (state, action) => {
            state.role = action.payload.role
            state.email = action.payload.email
            state.token = action.payload.token
            state.userId = action.payload.userId
            state.isAuth = true
            state.isLoading = false
         })
         .addCase(AUTH_THUNK.signUP.pending, (state) => {
            state.isLoading = true
         })
         .addCase(AUTH_THUNK.signUP.rejected, (state) => {
            state.isLoading = false
         })
         .addCase(AUTH_THUNK.signIn.fulfilled, (state, action) => {
            state.role = action.payload.role
            state.email = action.payload.email
            state.token = action.payload.token
            state.isAuth = true
            state.isLoading = false
         })
         .addCase(AUTH_THUNK.signIn.pending, (state) => {
            state.isLoading = true
         })
         .addCase(AUTH_THUNK.signIn.rejected, (state) => {
            state.isLoading = false
         })
         .addCase(AUTH_THUNK.authWithGoogle.fulfilled, (state, action) => {
            state.email = action.payload.email
            state.token = action.payload.token
            state.isAuth = true
            state.isLoading = false
         })
         .addCase(AUTH_THUNK.authWithGoogle.pending, (state) => {
            state.isLoading = true
         })
         .addCase(AUTH_THUNK.authWithGoogle.rejected, (state) => {
            state.isLoading = false
         })
         .addCase(AUTH_THUNK.register.fulfilled, (state, action) => {
            state.token = action.payload.token
            state.isAuth = true
            state.isLoading = false
         })
         .addCase(AUTH_THUNK.register.pending, (state) => {
            state.isLoading = true
         })
         .addCase(AUTH_THUNK.register.rejected, (state) => {
            state.isLoading = false
         })
   },
})

export { authSlice }
