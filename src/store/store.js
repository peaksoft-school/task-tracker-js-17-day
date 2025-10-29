import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import { authSlice } from './slices/auth/authSlice'
import storage from 'redux-persist/lib/storage'
import { mainSlice } from './slices/workspaces/MainSlice'

const rootReducer = combineReducers({
   [authSlice.name]: authSlice.reducer,
   [mainSlice.name]: mainSlice.reducer,
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
