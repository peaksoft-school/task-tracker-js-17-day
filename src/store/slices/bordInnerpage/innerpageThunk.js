// innerpageThunk.js
import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosinstance'


export const innerpageThunk = createAsyncThunk(
   'innerpage/innerpageThunk',
   async ({ id }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(`/api/boards/${id}/columns-with-cards`)
         return data
      } catch (error) {
         console.log("SERVER ERROR:", error.response?.data)  // <<< ВОТ СЮДА
         console.log("FULL ERROR:", error)                    // (тоже полезно)
         
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

export const boardThunk = createAsyncThunk(
   'innerpage/boardThunk',
   async ({ id }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(`/api/boards/${id}`)
         return data
      } catch (error) {
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

export const INNER_PAGE_THUNK = { innerpageThunk, boardThunk }
