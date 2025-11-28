import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../configs/axiosinstance'

export const getAllMain = createAsyncThunk(
  'post/getAllMain',
  async ({ token }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/api/workspaces/user/token?token=${token}`)
      return data
    } catch (error) {
      console.error(error)
      return rejectWithValue(error.response?.data || error.message)
    }
  }
)

export const getAllBoards = createAsyncThunk(
  'get/getAllBoards',
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`api/boards/workspace/${id}`)
      return data
    } catch (error) {
      console.error('ошибка при переходе на страницу бордс', error)
      return rejectWithValue(error.response?.data || error.message)
    }
  }
)

export const favoritesWorkSpase = createAsyncThunk(
  'post/favoritesWorkSpase',
  async ({ id, token }, { dispatch, rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/api/favorites/workspace/${id}`)
      dispatch(getAllMain({ token }))
      return response.data
    } catch (error) {
      console.error('ошибка при переключении избранного:', error)
      return rejectWithValue(error.response?.data || error.message)
    }
  }
)

export const modalCreateWorkSpase = createAsyncThunk(
  'post/modalCreateWorkSpase',
  async ({ data, onClose, token }, { dispatch, rejectWithValue }) => {
    try {
      await axiosInstance.post(`/api/workspaces`, data)
      if (typeof onClose === 'function') onClose()
      dispatch(getAllMain({ token }))
    } catch (error) {
      console.error(error)
      return rejectWithValue(error.response?.data || error.message)
    }
  }
)

export const MAIN_THUNK = {
  getAllMain,
  getAllBoards,
  favoritesWorkSpase,
  modalCreateWorkSpase,
}
