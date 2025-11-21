import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosinstance'

const getBoardsByWorkspaceId = createAsyncThunk(
   'boards/getBoardsByWorkspaceId',
   async (workspaceId, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(
            `/api/boards/workspace/${workspaceId}`
         )
         return data
      } catch (error) {
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

export const BOARDS_THUNK = {
   getBoardsByWorkspaceId,
}