import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../configs/axiosinstance'

const profileSlice = createAsyncThunk(
   'profile/profileSlice',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(`/api/profile`)

         return data
      } catch (error) {
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

export const PROFILE_THUNK = { profileSlice }
