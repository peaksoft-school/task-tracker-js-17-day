import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import { authSlice } from './slices/auth/authSlice'
import { issuesSlice } from './slices/issuses/IssusesSlise'
import storage from 'redux-persist/lib/storage'
import { mainSlice } from './slices/workspaces/MainSlice'
import { boardsSlice } from './slices/board/BoardsSlice'
import { participants } from './slices/participants/participantsSlice'

const rootReducer = combineReducers({
   [authSlice.name]: authSlice.reducer,
   [issuesSlice.name]: issuesSlice.reducer,
   [mainSlice.name]: mainSlice.reducer,
   [boardsSlice.name]: boardsSlice.reducer,
   [participants.name]: participants.reducer,
})

const persistConfig = {
   key: 'TASK-TRACER',
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
