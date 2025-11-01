import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosinstance'

// пишем get запрос с асинхронным функциями
// тут у нас getAllMain деген запрос бар
const getAllMain = createAsyncThunk('post/getAllMain', async ({ token }) => {
   try {
      const { data } = await axiosInstance.get(
         `/api/workspaces/user/token?token=${token}`
      )

      return data
   } catch (error) {
      console.error(error)
   }
})

const getAllBoards = createAsyncThunk(
   'get/getAllBoards',
   async ({ id }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(`api/boards/workspace/${id}`)
         return data
      } catch (error) {
         console.error('ошибка при переходе на старницу бордс', error)
         return rejectWithValue(error.response.data)
      }
   }
)

const favoritesWorkSpase = createAsyncThunk(
   'post/favoritesWorkSpase',
   // примнимает workspaceId вместо data
   async ({ id, token }, { dispatch }) => {
      try {
         const response = await axiosInstance.post(
            `/api/favorites/workspace/${id}`
         )

         dispatch(getAllMain({ token }))

         return response.data
      } catch (error) {
         console.error('ошибка при перключение избранного :', error)
         throw error
      }
   }
)

const modalCreateWorkSpase = createAsyncThunk(
   'post/modalCreateWorkSpase',
   async ({ data }) => {
      try {
         await axiosInstance.post(`/api/workspaces`, data)
      } catch (error) {
         console.log(error)
      }
   }
)

export const MAIN_THUNK = {
   getAllMain,
   favoritesWorkSpase,
   modalCreateWorkSpase,
   getAllBoards,
}
