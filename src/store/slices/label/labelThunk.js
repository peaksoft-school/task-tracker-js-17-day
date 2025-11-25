import { createAsyncThunk } from '@reduxjs/toolkit'

const getLabel = createAsyncThunk(
   'label/getLabel',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(`/api/label`)
         return data
      } catch (error) {
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

export const postLabel = createAsyncThunk(
   'label/postLabel',
   async ({ labelData, cardId }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.post(
            `/api/label/${cardId}`,
            labelData
         )
         return data
      } catch (error) {
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

export const LABEL_THUNK = { getLabel, postLabel }
