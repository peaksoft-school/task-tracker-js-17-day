import { createSlice } from '@reduxjs/toolkit'
import { COLUMN_THUNK } from './columnThunk'

export const initialState = {
   columns: [],
   loading: false,
   error: null,
}

export const columnSlice = createSlice({
   name: 'column',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // Получение колонок
         .addCase(COLUMN_THUNK.getColumnsThunk.pending, (state) => {
            state.loading = true
         })
         .addCase(COLUMN_THUNK.getColumnsThunk.fulfilled, (state, action) => {
            state.loading = false
            state.columns = action.payload
         })
         .addCase(COLUMN_THUNK.getColumnsThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })

         // Создание новой колонки
         .addCase(COLUMN_THUNK.columnThunk.fulfilled, (state, action) => {
            state.columns.push(action.payload)
         })
         .addCase(COLUMN_THUNK.columnThunk.rejected, (state, action) => {
            state.error = action.payload
         })
         .addCase(COLUMN_THUNK.columnThunk.pending, (state) => {
            state.loading = true
         })
   },
})

export default columnSlice.reducer
