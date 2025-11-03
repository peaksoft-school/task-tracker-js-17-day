import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../configs/axiosinstance'

export const favoriteCountThunk = createAsyncThunk(
   'favoriteCount/getFavoriteCount', // правильный typePrefix
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get('/api/favorites/count')
         return data
      } catch (error) {
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

export const favoriteAllWorkspace= createAsyncThunk(
   'favoriteCount/getFavoriteCount', // правильный typePrefix
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get('/api/favorites')
         return data 
         
      } catch (error) {
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

export const FAVORITE_COUNT_THUNK = { favoriteCountThunk,favoriteAllWorkspace }
