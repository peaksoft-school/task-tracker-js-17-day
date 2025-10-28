import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/auth/authSlice'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import { workspacesReducer } from './slices/workspaces/WorkspacesSlice'
import {
   FLUSH,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
   REHYDRATE,
} from 'redux-persist'

const rootReducer = combineReducers({
   [authSlice.name]: authSlice.reducer,
   workspaces: workspacesReducer,
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
         serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
})

const persistore = persistStore(store)

export { store, persistore }
