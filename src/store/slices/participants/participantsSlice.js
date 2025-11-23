import { createSlice } from '@reduxjs/toolkit'
import { PARTISPANTS_THUNK } from './participansThunk'

const initialState = {
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
         .addCase(PARTISPANTS_THUNK.getAllParticipant.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
         .addCase(
            PARTISPANTS_THUNK.getAllParticipant.fulfilled,
            (state, action) => {
               state.isLoading = false
               state.participans = action.payload
            }
         )
         .addCase(
            PARTISPANTS_THUNK.getAllParticipant.rejected,
            (state, action) => {
               state.isLoading = false
               state.error = action.payload
            }
         )

         .addCase(PARTISPANTS_THUNK.postParticipant.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
         .addCase(PARTISPANTS_THUNK.postParticipant.fulfilled, (state) => {
            state.isLoading = false
         })
         .addCase(
            PARTISPANTS_THUNK.postParticipant.rejected,
            (state, action) => {
               state.isLoading = false
               state.error = action.payload
            }
         )

         .addCase(PARTISPANTS_THUNK.changeParticipantRole.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
         .addCase(
            PARTISPANTS_THUNK.changeParticipantRole.fulfilled,
            (state) => {
               state.isLoading = false
            }
         )
         .addCase(
            PARTISPANTS_THUNK.changeParticipantRole.rejected,
            (state, action) => {
               state.isLoading = false
               state.error = action.payload
            }
         )

         .addCase(PARTISPANTS_THUNK.deleteParticipant.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
         .addCase(PARTISPANTS_THUNK.deleteParticipant.fulfilled, (state) => {
            state.isLoading = false
         })
         .addCase(
            PARTISPANTS_THUNK.deleteParticipant.rejected,
            (state, action) => {
               state.isLoading = false
               state.error = action.payload
            }
         )
   },
})

export { participants }
