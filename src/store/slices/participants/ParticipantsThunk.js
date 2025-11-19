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
         // ОТПРАВЛЯЕМ ЗАПРОС
         await axiosInstance.post(`/api/participants`, {
            workspaceId: Number(workspaceId), // 1. Гарантируем, что это число
            email: email,
            role: role.toUpperCase(), // 2. Превращаем "admin" в "ADMIN"
            // userId: 0,  <--- 3. УДАЛИЛИ ЭТУ СТРОКУ. Она ломала сервер.
         })

         // Сразу обновляем список
         dispatch(getAllParticipant({ workspaceId, role: 'ADMIN' }))
         
      } catch (error) {
         // Логируем ошибку, чтобы видеть детали в консоли
         console.error("Ошибка при добавлении:", error)
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

export const PARTISPANTS_THUNK = {
   getAllParticipant,
   postParticipant,
}