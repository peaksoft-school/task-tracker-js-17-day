import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosinstance'

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

const deleteWorkspace = createAsyncThunk(
   'delete/deleteWorkspace',
   async ({ id, token }, { dispatch, rejectWithValue }) => {
      try {
         await axiosInstance.delete(`/api/workspaces/${id}`)

         // После удаления обновляем список всех воркспейсов
         dispatch(getAllMain({ token }))

         return id
      } catch (error) {
         console.error('Ошибка при удалении workspace:', error)
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

const modalCreateWorkSpase = createAsyncThunk(
   'post/modalCreateWorkSpase',
   async ({ data, onClose, token }, { rejectWithValue, dispatch }) => {
      try {
         await axiosInstance.post(`/api/workspaces`, data)

         onClose()

         dispatch(getAllMain({ token }))
      } catch (error) {
         console.log(error)
         rejectWithValue(error.message)
      }
   }
)

export const MAIN_THUNK = {
   getAllMain,
   favoritesWorkSpase,
   modalCreateWorkSpase,
   getAllBoards,
   deleteWorkspace,
}
