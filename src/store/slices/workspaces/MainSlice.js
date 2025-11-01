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

         // post fovorites
         .addCase(MAIN_THUNK.favoritesWorkSpase.pending, (state) => {
            state.isloading = true
         })
         // В MainSlice.jsx
         .addCase(MAIN_THUNK.favoritesWorkSpase.fulfilled, (state, action) => {
            // 👈 Здесь нам нужен action
            state.isloading = false

            // 1. Получаем данные из ответа
            const { workSpaceId, favorite } = action.payload

            // 2. Находим индекс элемента, который нужно обновить
            // Какой метод массива лучше всего подходит, чтобы найти индекс элемента по его ID?
            const index = state.main
               .findIndex
               // ... что здесь должно быть?
               ()

            // 3. Обновляем элемент по найденному индексу
            if (index !== -1) {
               // Redux Toolkit позволяет менять стейт напрямую (иммер-двойник),
               // поэтому мы можем написать:
               state.main[index].fav = favorite // 👈 Обновляем поле fav
            }

            // 4. (Опционально) Обновляем основной массив
            // Если ты хочешь использовать map для создания нового массива (более традиционный Redux подход):
            /*
        state.main = state.main.map(workspace => 
            workspace.id === workSpaceId 
                ? { ...workspace, fav: favorite } 
                : workspace
        )
        */
         })
         .addCase(MAIN_THUNK.favoritesWorkSpase.rejected, (state, action) => {
            state.isloading = false
            state.error = action.error
         })

         .addCase(MAIN_THUNK.getAllBoards.pending, (state) => {
            // initialState ==> это и есть state
            state.isloading = true // тут сотояние загрузки включается
         }) // кайсыл запросту кандай соостояниясыннда надо обрабатывать
         .addCase(MAIN_THUNK.getAllBoards.fulfilled, (state, action) => {
            // fulfilled === "успешно" state состояние келет а если бир нерсе кайтарсак то бизге action деген нерсе келет
            state.isloading = false
         })
         .addCase(MAIN_THUNK.getAllBoards.rejected, (state, action) => {
            state.isloading = false
            state.error = action.error //показать ошибку от бекенда
         })
   }, //запростордун состояния ларын обработка кылыш учун
})

export { mainSlice }
