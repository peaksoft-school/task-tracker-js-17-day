import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material'
import { themeColors } from './styles/appColors.js'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <ThemeProvider theme={themeColors}>
         <App />
      </ThemeProvider>
   </BrowserRouter>
)
