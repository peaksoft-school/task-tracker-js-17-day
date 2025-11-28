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

const updateProfile = createAsyncThunk(
   'profile/updateProfile',
   async (updatedData, {  dispatch }) => {
      try {
         const { data } = await axiosInstance.put(`/api/profile/update-profile`, updatedData)
         dispatch(profileSlice()) 
         return data
      } catch (error) {
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

const updatePassword = createAsyncThunk(
   'profile/updatePassword',
   async (passwordData, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.put(`/api/profile/password`, passwordData)
         dispatch(profileSlice()) 
         return data
      } catch (error) {
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)


export const PROFILE_THUNK = { profileSlice, updateProfile, updatePassword }
