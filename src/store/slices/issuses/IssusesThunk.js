import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosinstance'

const getAllIssues = createAsyncThunk(
   //Вызов Thunk (в IssusesThunk.js): Хук отправляет (dispatch) thunk getAllIssues с новыми параметрами, которые включают дату.
   'get/getAllIssues',
   async (
      { id, startDate, endDate, labelId, assigneeId, hasChecklist },
      { rejectWithValue }
   ) => {
      try {
         // собираем все возможные параметры
         const params = {
            startDate,
            endDate,
            labelId,
            assigneeId,
            hasChecklist,
         }

         // создаём объект для query-параметров, исключая пустые значения
         const searchParams = new URLSearchParams()

         Object.entries(params).forEach(([key, value]) => {
            if (
               value !== undefined &&
               value !== null &&
               value !== '' &&
               value !== false
            ) {
               searchParams.append(key, value)
            }
         })

         const query = searchParams.toString()
         const url = query
            ? `api/boards/${id}/issues/filter?${query}`
            : `api/boards/${id}/issues/filter`

         const { data } = await axiosInstance.get(url)
         return data
      } catch (error) {
         console.error('Ошибка при переходе на страницу issues с id:', error)
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

export const ISSUES_THUNK = {
   getAllIssues,
}
