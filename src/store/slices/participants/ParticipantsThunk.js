import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosinstance'

const getAllParticipant = createAsyncThunk(
   'get/getAllParticipant',
   async ({ workspaceId, role }, { rejectWithValue }) => {
      try {
         const params = { workspaceId }

         if (role) {
            params.role = role
         }

         const { data } = await axiosInstance.get(
            `/api/participants/getParticipants`,
            { params }
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

const changeParticipantRole = createAsyncThunk(
   'put/changeParticipantRole',
   async (
      { workspaceId, userId, membershipId, role, currentFilterRole },
      { dispatch, rejectWithValue }
   ) => {
      try {
         const targetId = membershipId || userId

         console.log(
            `🚀 Отправляем запрос смены роли. Используем ID: ${targetId}`
         )

         const dataToSend = {
            userId: Number(targetId),
            role: role.toUpperCase(),
         }

         await axiosInstance.post(
            `/api/workspaces/${workspaceId}/change-role`,
            dataToSend
         )

         dispatch(
            getAllParticipant({
               workspaceId,
               role: currentFilterRole === 'ALL' ? null : currentFilterRole,
            })
         )
      } catch (error) {
         console.error('Ошибка смены роли:', error)
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

export const PARTISPANTS_THUNK = {
   getAllParticipant,
   postParticipant,
   changeParticipantRole,
}
