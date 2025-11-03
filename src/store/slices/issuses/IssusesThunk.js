import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosinstance'

/**
 * Thunk для получения отфильтрованных задач (issues)
 * @param {object} filterParams - Объект с параметрами фильтрации.
 * @param {number} filterParams.boardId - ID доски (из URL).
 * @param {number} [filterParams.assigneeId] - ID исполнителя.
 * @param {number} [filterParams.labelId] - ID метки.
 * @param {object} [filterParams.startDate] - Объект Dayjs.
 * @param {object} [filterParams.endDate] - Объект Dayjs.
 * @param {boolean} [filterParams.hasChecklist] - Наличие чек-листа.
 */
const getFilteredIssues = createAsyncThunk(
   'issues/getFiltered',
   async (filterParams, { rejectWithValue }) => {
      const {
         boardId,
         assigneeId,
         labelId,
         startDate,
         endDate,
         hasChecklist,
      } = filterParams

      const queryParams = {
         assigneeId,
         labelId,
         startDate: startDate ? startDate.format('YYYY-MM-DD') : undefined,
         endDate: endDate ? endDate.format('YYYY-MM-DD') : undefined,
         hasChecklist,
      }

      Object.keys(queryParams).forEach(
         (key) =>
            (queryParams[key] === undefined || queryParams[key] === null) &&
            delete queryParams[key]
      )

      try {
         // 3. Выполняем запрос
         const { data } = await axiosInstance.get(
            `/api/boards/${boardId}/issues/filter`,
            {
               params: queryParams, // axios сам подставит их как ?key=value
            }
         )
         return data
      } catch (error) {
         console.error(error)
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

export const ISSUES_THUNK = {
   getFilteredIssues,
}