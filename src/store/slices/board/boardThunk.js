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

const boardPost = createAsyncThunk('api/boards', async (req) => {
   const { name, description, backgroundUrl, workspaceId = 1 } = req
   console.log(req)
   try {
      const { data } = await axiosInstance.post(
         `api/boards?workspaceId=${workspaceId}`,
         req
      )

      return data
   } catch (error) {
      console.log(error.massage)
   }
})

export const BOARD_THUNK = { workSpaceById, boardPost }
