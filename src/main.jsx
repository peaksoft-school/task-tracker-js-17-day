import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '././App.jsx'
import { ThemeProvider } from '@mui/material'
import { themeColors } from './styles/appColors.js'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
      <BrowserRouter>
         <ThemeProvider theme={themeColors}>
            <App />
         </ThemeProvider>
      </BrowserRouter>
   </Provider>
)
