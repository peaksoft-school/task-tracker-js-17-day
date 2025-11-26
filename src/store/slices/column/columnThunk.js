import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosinstance'

const getColumnsThunk = createAsyncThunk(
   'column/getColumnsThunk',

   async ({ id }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(
            `/api/boards/${id}/columns-with-cards`
         )

         return data
      } catch (error) {
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

const columnThunk = createAsyncThunk(
   'column/columnThunk',

   async ({ id, name }, { rejectWithValue, dispatch }) => {
      try {
         const { data } = await axiosInstance.post(
            `/api/boards/${id}/columns`,
            { name }
         )

         dispatch(getColumnsThunk({ id }))

         return data
      } catch (error) {
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

const deleteColumnThunk = createAsyncThunk(
   'column/deleteColumnThunk',
   async ({ id, columnId }, { rejectWithValue, dispatch }) => {
      try {
         const { data } = await axiosInstance.delete(
            `/api/boards/${id}/columns/${columnId}`
         )

         dispatch(getColumnsThunk({ id }))

         return data
      } catch (error) {
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

export const COLUMN_THUNK = { columnThunk, getColumnsThunk,deleteColumnThunk }
