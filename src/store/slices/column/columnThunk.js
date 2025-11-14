import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosinstance'

 const getColumnsThunk = createAsyncThunk(
    'column/getColumnsThunk',
    async (id, { rejectWithValue }) => {
       try {
          const { data } = await axiosInstance.get(`/api/boards/${id}/columns`)
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
          const body = { name }   // <-- server-friendly form
 
          const { data } = await axiosInstance.post(
             `/api/boards/${id}/columns`,
             body,
             { headers: { 'Content-Type': 'application/json' } }
          )
          dispatch(getColumnsThunk(id))
 
          return data
       } catch (error) {
          return rejectWithValue(error.response?.data || error.message)
       }
    }
 )

 

export const COLUMN_THUNK = { columnThunk ,getColumnsThunk }
