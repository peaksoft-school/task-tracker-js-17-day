import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '././App.jsx'
import { ThemeProvider } from '@mui/material'
import { themeColors } from './styles/appColors.js'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { persistore, store } from './store/store.js'
import { injectStore } from './configs/axiosinstance.js'
import { PersistGate } from 'redux-persist/integration/react'

injectStore(store)

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <Provider store={store}>
         <PersistGate persistor={persistore}>
            <ThemeProvider theme={themeColors}>
               <App />
            </ThemeProvider>
         </PersistGate>
      </Provider>
   </BrowserRouter>
)
