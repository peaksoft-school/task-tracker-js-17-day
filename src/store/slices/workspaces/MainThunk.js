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

export const MAIN_THUNK = { getAllMain }
