import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import { authSlice } from './slices/auth/authSlice'
import { mainSlice } from './slices/workspaces/MainSlice'
import { boardSlice } from './slices/board/boardSlice'
import { profileSlice } from './profile/profileSlice'
import { favoriteCountSlice } from './favoriteCount/favoriteCountSlice'
import storage from 'redux-persist/lib/storage'
import { innerpageSlice } from './slices/bordInnerpage/innerpageSlice'
import { columnSlice } from './slices/column/columnSlice'
import { cardSlice } from './slices/card/cardSlice'
import { labeleSlice } from './slices/label/labelSlice'
import { issuesSlice } from './slices/issuses/IssusesSlise'
import { boardsSlice } from './slices/board/BoardsSlice'
import { participants } from './slices/participants/participantsSlice'

const rootReducer = combineReducers({
   [authSlice.name]: authSlice.reducer,
   [boardSlice.name]: boardSlice.reducer,
   [profileSlice.name]: profileSlice.reducer,
   [favoriteCountSlice.name]: favoriteCountSlice.reducer,
   [mainSlice.name]: mainSlice.reducer,
   [innerpageSlice.name]: innerpageSlice.reducer,
   [columnSlice.name]: columnSlice.reducer,
   [cardSlice.name]: cardSlice.reducer,
   [labeleSlice.name]: labeleSlice.reducer,
   [issuesSlice.name]: issuesSlice.reducer,
   [boardsSlice.name]: boardsSlice.reducer,
   [participants.name]: participants.reducer,
})

const persistConfig = {
   key: 'TASK_TRACKER',
   storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
   reducer: persistedReducer,

   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
})

const persistor = persistStore(store)

export { store, persistor }
