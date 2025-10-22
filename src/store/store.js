import storageSession from 'redux-persist/lib/storage/session'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import { authSlice } from './slices/auth/authSlice'

const rootReducer = combineReducers({
   [authSlice.name]: authSlice.reducer,
})

const persistConfig = {
   key: 'TASK-TRACKER',
   storage: storageSession,
   whitelist: [authSlice.name],
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
