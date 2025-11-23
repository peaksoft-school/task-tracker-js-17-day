import { createSlice } from '@reduxjs/toolkit'
import { BOARDS_THUNK } from './BoardsThunk'

const initialState = {
   boards: [],
   currentBackground: null, 
   isLoading: false,
   error: null,
}

export const boardsSlice = createSlice({
   name: 'boards',
   initialState,
   reducers: {
      setBoardBackground: (state, action) => {
         state.currentBackground = action.payload
      },
      resetBoardBackground: (state) => {
         state.currentBackground = null
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(BOARDS_THUNK.getBoardsByWorkspaceId.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
         .addCase(
            BOARDS_THUNK.getBoardsByWorkspaceId.fulfilled,
            (state, action) => {
               state.isLoading = false
               state.boards = action.payload
            }
         )
         .addCase(
            BOARDS_THUNK.getBoardsByWorkspaceId.rejected,
            (state, action) => {
               state.isLoading = false
               state.error = action.payload
            }
         )
   },
})

export const { setBoardBackground, resetBoardBackground } = boardsSlice.actions
