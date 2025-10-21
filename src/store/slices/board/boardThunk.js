import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosinstance'

const workSpaceById = createAsyncThunk(
   'board/workSpaceById',
   async ({ workspaceId }) => {
      try {
         const { data } = await axiosInstance.get(
            `api/boards/workspace/${workspaceId}`
         )
         return data
      } catch (error) {
         console.log(error.massage)
      }
   }
)

export const BOARD_THUNK = { workSpaceById }
