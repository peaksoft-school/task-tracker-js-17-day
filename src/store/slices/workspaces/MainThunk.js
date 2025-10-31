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

const createWorkSpace = createAsyncThunk(
   'post/createWorkSpace',

   async ({ data }) => {
      try {
         await axiosInstance.get('/api/workspaces', data)

         // clous кылып жвбв
      } catch (error) {
         console.error(error)
      }
   }
)

const modalCreateWorkSpase = createAsyncThunk(
   'post/modalCreateWorkSpase',
   async ({ data }) => {
      try {
         await axiosInstance.post('/api/workspaces', data)
      } catch (error) {
         console.log(error)
      }
   }
)

export const MAIN_THUNK = { getAllMain, createWorkSpace, modalCreateWorkSpase }
