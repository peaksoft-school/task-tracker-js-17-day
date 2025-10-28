import { createAsyncThunk } from '@reduxjs/toolkit'

import { axiosInstance } from '../../../configs/axiosinstance'

export const getWorkspaces = createAsyncThunk(
   'workspaces/getWorkspaces',

   async ({ token }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(
            `/api/workspaces/user/token`,

            {
               params: {
                  token: token,
               },
            }
         )

         return data
      } catch (error) {
         console.error('Ошибка при получении Workspaces:', error)

         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

export const WORKSPACES_THUNK = {
   getWorkspaces,
}
