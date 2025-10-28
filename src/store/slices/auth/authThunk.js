import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosinstance'
import { useNavigate } from 'react-router-dom'
import { showNotification } from '../../../utils/helpers/notification'

const signUP = createAsyncThunk('auth/signUp', async ({ values }) => {
   try {
      const { data } = await axiosInstance.post('/api/auth/sign-up', values)
      showNotification({
         title: 'Success',
         message: 'Успешная регистрация!',
         type: 'success',
      })
      return data
   } catch (error) {
      showNotification({
         title: 'error',
         message: error?.response?.data.message || 'something went wrong',
         type: 'error',
      })
      console.log(error.massage)
   }
})

const signIn = createAsyncThunk('auth/signIn', async ({ values, navigate }) => {
   try {
      const { data } = await axiosInstance.post('/api/auth/sign-in', values)
      navigate('/board')
      showNotification({
         title: 'Success',
         message: 'Успешная регистрация!',
         type: 'success',
      })
      return data
   } catch (error) {
      console.log(error)
      showNotification({
         title: 'error',
         message: error?.response?.data.message || 'something went wrong',
         type: 'error',
      })
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

const authWithGoogle = createAsyncThunk(
   'auth/authWithGoogle',

   async ({ tokenId }) => {
      try {
         await axiosInstance.post('/api/auth/google', { tokenId })
      } catch (error) {
         console.log(error.massage)
      }
   }
)

export const AUTH_THUNK = {
   signUP,
   signIn,
   password,
   authWithGoogle,
}
