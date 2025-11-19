import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosinstance'

const getAllParticipant = createAsyncThunk(
   'get/getAllParticipant', // это имя запроса
   async ({ workspaceId, role }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/api/participants/getParticipants`,
            {
               params: {
                  workspaceId: workspaceId,
                  role: role,
               },
            }
         )

         console.log('успешно сработало :', response.data)

         return response.data
      } catch (error) {
         return rejectWithValue(error.response?.data || error.massage)
      }
   } // а это тело запроса , так сказать сам запрос
)

export const PARTISPANTS_THUNK = {
   getAllParticipant,
}
