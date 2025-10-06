import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";

const rootReducer=combineReducers({
    [authSlice.name]:authSlice.reducer,
})

const store=configureStore({
    reducer:rootReducer,
})

export {store}