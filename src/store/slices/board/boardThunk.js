import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosinstance'

const workSpaceById = createAsyncThunk(
   'board/workSpaceById',
   async ({ workspaceId }) => {
      const { data } = await axiosInstance.get(
         `/api/boards/workspace/${workspaceId}`
      )
      return data
   }
)

export const BOARD_THUNK = { workSpaceById }
