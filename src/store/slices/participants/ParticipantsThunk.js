import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosinstance'

const getAllParticipant = createAsyncThunk(
   'get/getAllParticipant',
   async ({ workspaceId, role }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(
            `/api/participants/getParticipants`,
            {
               params: {
                  workspaceId,
                  role,
               },
            }
         )
         return data
      } catch (error) {
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

const postParticipant = createAsyncThunk(
   'post/postParticipant',
   async ({ workspaceId, email, role }, { dispatch, rejectWithValue }) => {
      try {
         const dataToSend = {
            workspaceId: Number(workspaceId),
            emails: [email],
            role: role.toUpperCase(),
            link: window.location.origin,
         }

         console.log(
            '📤 Пробуем отправить на /api/workspaces/invite:',
            dataToSend
         )

         await axiosInstance.post(`/api/workspaces/invite`, dataToSend)

         console.log('✅ Приглашение отправлено!')

         dispatch(
            getAllParticipant({
               workspaceId,
               role: role.toUpperCase(),
            })
         )
      } catch (error) {
         console.error(
            '❌ Ошибка сервера:',
            error.response?.data || error.message
         )
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)
export const PARTISPANTS_THUNK = {
   getAllParticipant,
   postParticipant,
}
