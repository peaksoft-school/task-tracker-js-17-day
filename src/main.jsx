import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material'
import { themeColors } from './styles/appColors.js'

createRoot(document.getElementById('root')).render(
   <ThemeProvider theme={themeColors}>
      <App />
   </ThemeProvider>
)
