import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosinstance'

const signUP = createAsyncThunk('auth/signUp', async ({ values, navigate }) => {
   try {
      const { data } = await axiosInstance.post('/api/auth/sign-up', values)

      navigate('/main-page')

      return data
   } catch (error) {
      console.log(error.massage)
   }
})

const signIn = createAsyncThunk('auth/signIn', async ({ values, navigate }) => {
   try {
      const { data } = await axiosInstance.post('/api/auth/sign-in', values)

      navigate('/main-page')

      return data
   } catch (error) {
      console.log(error.massage)
   }
})

const password = createAsyncThunk('auth/password', async ({ values }) => {
   try {
      const { data } = await axiosInstance.post('/api/auth/password', values)
      return data
   } catch (error) {
      console.log(error.massage)
   }
})

const getAllMembers = createAsyncThunk('auth/getAll', async ({ id }) => {
   try {
      const { data } = await axiosInstance.get(`/api/workspaces/${id}`)
      return data
   } catch (error) {
      console.error(error.massage)
   }
})

export const AUTH_THUNK = {
   signUP,
   signIn,
   getAllMembers,
   password,
}
