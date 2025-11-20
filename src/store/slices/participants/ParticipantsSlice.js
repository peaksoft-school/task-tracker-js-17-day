import { createSlice } from '@reduxjs/toolkit'
import { PARTISPANTS_THUNK } from './ParticipantsThunk'

const initialState = {
   // Исправим на isLoading (CamelCase), это стандарт
   isLoading: false, 
   participans: [],
   error: null,
}

const participants = createSlice({
   name: 'participans',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         // --- GET ---
         .addCase(PARTISPANTS_THUNK.getAllParticipant.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
         .addCase(PARTISPANTS_THUNK.getAllParticipant.fulfilled, (state, action) => {
            state.isLoading = false
            state.participans = action.payload
         })
         .addCase(PARTISPANTS_THUNK.getAllParticipant.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
         })

         // --- POST ---
         .addCase(PARTISPANTS_THUNK.postParticipant.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
         .addCase(PARTISPANTS_THUNK.postParticipant.fulfilled, (state) => {
            state.isLoading = false
            // Данные не меняем тут, они придут через getAllParticipant
         })
         .addCase(PARTISPANTS_THUNK.postParticipant.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
         })
   },
})

export { participants }