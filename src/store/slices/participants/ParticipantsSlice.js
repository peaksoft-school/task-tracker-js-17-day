import { createSlice } from '@reduxjs/toolkit'
import { PARTISPANTS_THUNK } from './ParticipantsThunk'

const initialState = {
   isloading: false,
   participans: [],
   error: null,
}

const participants = createSlice({
   name: 'participans',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         //pending — запрос начался
         .addCase(PARTISPANTS_THUNK.getAllParticipant.pending, (state) => {
            state.isloading = true
            state.error = null
         })
         //fulfilled — запрос успешный, данные получены
         .addCase(
            PARTISPANTS_THUNK.getAllParticipant.fulfilled,
            (state, action) => {
               state.isloading = false
               state.participans = action.payload
            }
         )
         // rejected - запрос провальный , с ошибкой
         .addCase(
            PARTISPANTS_THUNK.getAllParticipant.rejected,
            (state, action) => {
               state.isloading = false
               state.error = action.payload
            }
         )

         // --- POST NEW PARTICIPANT (Добавил этот блок) ---
         .addCase(PARTISPANTS_THUNK.postParticipant.pending, (state) => {
            state.isloading = true
            state.error = null
         })
         .addCase(PARTISPANTS_THUNK.postParticipant.fulfilled, (state) => {
            state.isloading = false
            // Данные обновятся через getAllParticipant, который вызывается внутри Thunk
         })
         .addCase(
            PARTISPANTS_THUNK.postParticipant.rejected,
            (state, action) => {
               state.isloading = false
               state.error = action.payload
            }
         )
   },
})

export { participants }
