import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosinstance'
import { axiosInstanceFile } from '../../../configs/axiosInstanceFile'

const workSpaceById = createAsyncThunk(
   'board/workSpaceById',

   async ({ workspaceId = 1 }, { rejectWithValue }) => {
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

const boardPost = createAsyncThunk(
   'board/boardPost',

   async (
      { name, description, backgroundUrl, workspaceId },
      { rejectWithValue }
   ) => {
      try {
         const body = { name, description, backgroundUrl }
         const { data } = await axiosInstance.post(
            `/api/boards?workspaceId=${workspaceId}`,
            body
         )
         return data
      } catch (error) {
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

const uploadImage = createAsyncThunk('board/uploadImage', async (file) => {
   try {
      const formData = new FormData()

      formData.append('files', file)

      const { data } = await axiosInstanceFile.post(
         '/api/s3file/upload',
         formData
      )

      return data
   } catch (error) {
      console.log(error)
   }
})



export const BOARD_THUNK = { workSpaceById, boardPost, uploadImage, }
