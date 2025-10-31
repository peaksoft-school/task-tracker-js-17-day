import { createSlice } from '@reduxjs/toolkit'
import { MAIN_THUNK } from './mainThunk'

const initialState = {
   // initialState ==> это и есть state

   isloading: false, // состояния загрузки  false
   main: [], // это для сохраниение данных приходящих бекенда
   error: null,
} //данные с бекенда , первоначальное состояние

const mainSlice = createSlice({
   name: 'main',
   initialState, // первоначальное состояние
   reducers: {}, // тут только локальные функции пишется

   extraReducers: (builder) => {
      // зарпос get
      builder
         .addCase(MAIN_THUNK.getAllMain.pending, (state) => {
            // initialState ==> это и есть state
            state.isloading = true // тут сотояние загрузки включается
         }) // кайсыл запросту кандай соостояниясыннда надо обрабатывать
         .addCase(MAIN_THUNK.getAllMain.fulfilled, (state, action) => {
            // fulfilled === "успешно" state состояние келет а если бир нерсе кайтарсак то бизге action деген нерсе келет
            state.isloading = false
            state.main = action.payload
         })
         .addCase(MAIN_THUNK.getAllMain.rejected, (state, action) => {
            state.isloading = false
            state.error = action.error //показать ошибку от бекенда
         })

         // post
         .addCase(MAIN_THUNK.modalCreateWorkSpase.pending, (state) => {
            state.isloading = true
         })
         .addCase(MAIN_THUNK.modalCreateWorkSpase.fulfilled, (state) => {
            state.isloading = false
         })
         .addCase(MAIN_THUNK.modalCreateWorkSpase.rejected, (state, action) => {
            state.isloading = false
            state.error = action.error
         })
   }, //запростордун состояния ларын обработка кылыш учун
})

export { mainSlice }
