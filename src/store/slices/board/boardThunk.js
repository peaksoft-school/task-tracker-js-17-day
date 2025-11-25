import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosinstance'
import { axiosInstanceFile } from '../../../configs/axiosInstanceFile'

const workSpaceById = createAsyncThunk(
   'board/workSpaceById',

   async ({ workspaceId }, { rejectWithValue }) => {
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
      { rejectWithValue, dispatch }
   ) => {
      try {
         const body = { name, description, backgroundUrl }
         const { data } = await axiosInstance.post(
            `/api/boards?workspaceId=${workspaceId}`,
            body
         )
         dispatch(workSpaceById({ workspaceId }))

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

const favoritesBoards = createAsyncThunk(
   'board/favoritesBoards',
   async ({ boardId }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.post(
            `/api/favorites/board/${boardId}`
         )
         return data
      } catch (error) {
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

export const BOARD_THUNK = {
   workSpaceById,
   boardPost,
   uploadImage,
   favoritesBoards,
}
