// cardThunk.js
import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosinstance'
import { COLUMN_THUNK } from '../column/columnThunk'

const getCardsThunk = createAsyncThunk(
   'card/getCardsThunk',
   async ({ cardId, setModalOpen }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(`/cards/${cardId}`)

         setModalOpen((prev) => !prev)

         return data
      } catch (error) {
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

const createCardThunk = createAsyncThunk(
   'card/createCard',
   async ({ columnId, title, id }, { dispatch, rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.post('/cards', {
            columnId,
            title,
         })

         dispatch(COLUMN_THUNK.getCardsThunk({ id }))

         return data
      } catch (error) {
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

const checklistThunk = createAsyncThunk(
   'card/createChecklist',
   async ({ cardId, title,id }, { rejectWithValue, dispatch }) => {
      try {
         const { data } = await axiosInstance.post(
            `/cards/${cardId}/checklists?title=${encodeURIComponent(title)}`
         )
         dispatch(COLUMN_THUNK.getCardsThunk({ id }))
         return data
      } catch (error) {
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

const labelsThunk = createAsyncThunk(
   'card/createLabels',
   async ({ cardId, labelId,id }, { rejectWithValue, dispatch }) => {
      try {
         const { data } = await axiosInstance.post(
            `/cards/${cardId}/labels`,
            null,
            {
               params: { labelId },
            }
         )
         dispatch(COLUMN_THUNK.getCardsThunk({ id }))
         return data
      } catch (error) {
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

const attachmentsThunk = createAsyncThunk(
   'card/createAttachments',

   async ({ cardId, file,id }, { rejectWithValue, dispatch }) => {
      try {
         const formData = new FormData()
         formData.append('file', file)

         const { data } = await axiosInstance.post(
            `/cards/${cardId}/attachments`,
            formData,
            {
               headers: {
                  'Content-Type': 'multipart/form-data',
               },
            }
         )
         dispatch(COLUMN_THUNK.getCardsThunk({ id }))

         return data
      } catch (error) {
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

const estimateThunk = createAsyncThunk(
   'card/estimateThunk',
   async ({ cardId, estimate,id}, { rejectWithValue, dispatch }) => {
      try {
         const { data } = await axiosInstance.patch(
            `/cards/${cardId}/attachments`,
            {
               startDate: estimate.startDate,
               dueDateWithTime: estimate.dueDateWithTime,
               reminder: estimate.reminder,
            }
         )
         dispatch(COLUMN_THUNK.getCardsThunk({ id }))

         return data
      } catch (error) {
         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

const userThunk = createAsyncThunk(
   'card/userThunk',
   async ({ cardId, userId }, { rejectWithValue, dispatch }) => {
     try {
       const { data } = await axiosInstance.post(
         `/cards/${cardId}/members`,
         null, // тело POST можно оставить пустым
         { params: { userId } } // <-- вот так передаём query параметр
       )
 
       // обновляем колонки, если нужно
       dispatch(COLUMN_THUNK.getCardsThunk({ id: cardId }))
 
       return data
     } catch (error) {
       return rejectWithValue(error.response?.data || error.message)
     }
   }
 )

export const CARD_THUNK = {
   getCardsThunk,
   createCardThunk,
   checklistThunk,
   labelsThunk,
   attachmentsThunk,
   estimateThunk,
   userThunk,
}
