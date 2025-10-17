import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosinstance'
import { useNavigate } from 'react-router-dom'

const signUP = createAsyncThunk('auth/signUp', async ({ values }) => {
   try {
      const { data } = await axiosInstance.post('/api/auth/sign-up', values)

      return data
   } catch (error) {
      console.log(error.massage)
   }
})

const signIn = createAsyncThunk('auth/signIn', async ({ values, navigate }) => {
   try {
      const { data } = await axiosInstance.post('/api/auth/sign-in', values)
      navigate('/board')
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

export const AUTH_THUNK = {
   signUP,
   signIn,
   password,
}
