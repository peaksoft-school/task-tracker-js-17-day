import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosinstance'
import { showNotification } from '../../../utils/helpers/notification'

const getAllMain = createAsyncThunk('post/getAllMain', async ({ token }) => {
   try {
      const { data } = await axiosInstance.get(
         `/api/workspaces/user/token?token=${token}`
      )

      return data
   } catch (error) {
      showNotification({
         title: 'Error',
         message: error?.response?.data?.message || 'something went wrong',
         type: 'error',
      })

      console.error(error)
   }
})

const getAllBoards = createAsyncThunk(
   'get/getAllBoards',

   async ({ id }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(`api/boards/workspace/${id}`)
         return data
      } catch (error) {
         console.error('ошибка при переходе на старницу бордс', error)

         showNotification({
            title: 'Error',
            message: error?.response?.data?.message || 'something went wrong',
            type: 'error',
         })
         return rejectWithValue(error.response.data)
      }
   }
)

const favoritesWorkSpase = createAsyncThunk(
   'post/favoritesWorkSpase',

   async ({ id, token }, { dispatch }) => {
      try {
         const response = await axiosInstance.post(
            `/api/favorites/workspace/${id}`
         )

         showNotification({
            message:
               response?.data?.favorite === true
                  ? 'Added to favorites!'
                  : 'Removed from favorites!',
         })

         dispatch(getAllMain({ token }))

         return response.data
      } catch (error) {
         console.error('ошибка при перключение избранного :', error)

         showNotification({
            title: 'Error',
            message: error?.response?.data?.message || 'something went wrong',
            type: 'error',
         })
         throw error
      }
   }
)

const deleteWorkspace = createAsyncThunk(
   'delete/deleteWorkspace',
   async ({ id, token }, { dispatch, rejectWithValue }) => {
      try {
         const response = await axiosInstance.delete(`/api/workspaces/${id}`)

         showNotification({
            message: response?.data?.message || 'Remote workplace',
         })

         dispatch(getAllMain({ token }))

         return id
      } catch (error) {
         showNotification({
            title: 'Error',
            message: error?.response?.data?.message || 'something went wrong',
            type: 'error',
         })

         return rejectWithValue(error.response?.data || error.message)
      }
   }
)

const invitationAccept = createAsyncThunk(
   'post/invitationAccept',

   async ({ token, acceptToken, navigate }, { rejectWithValue, dispatch }) => {
      try {
         const { data } = await axiosInstance.post(
            `/api/invitations/accept/${acceptToken}`
         )

         if (data?.status === 'NOT_FOUND') {
            showNotification({
               title: 'Error',
               message: data?.message || 'something went wrong',
               type: 'error',
            })

            navigate('/sign-up')
         } else if (data?.status === 'BAD_REQUEST') {
            showNotification({
               message: data?.message || 'something went wrong',
            })
         }

         dispatch(getAllMain({ token }))

         return data
      } catch (error) {
         showNotification({
            title: 'Error',
            message: error?.response?.data?.message || 'something went wrong',
            type: 'error',
         })
         rejectWithValue(error.message)
      }
   }
)

const modalCreateWorkSpase = createAsyncThunk(
   'post/modalCreateWorkSpase',

   async ({ data, onClose, token }, { rejectWithValue, dispatch }) => {
      try {
         await axiosInstance.post(`/api/workspaces`, data)

         onClose()

         showNotification({
            message: 'Added a workspace!',
         })

         dispatch(getAllMain({ token }))
      } catch (error) {
         showNotification({
            title: 'Error',
            message: error?.response?.data?.message || 'something went wrong',
            type: 'error',
         })

         rejectWithValue(error.message)
      }
   }
)

export const MAIN_THUNK = {
   getAllMain,
   favoritesWorkSpase,
   modalCreateWorkSpase,
   getAllBoards,
   deleteWorkspace,
   invitationAccept,
}
