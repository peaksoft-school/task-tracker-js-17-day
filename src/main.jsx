import { createRoot } from 'react-dom/client'
import './index.css'
import App from '././App.jsx'
// import Notification from './components/Notification.jsx'
import { ThemeProvider } from '@mui/material'
import { themeColors } from './styles/appColors.js'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
      <BrowserRouter                                                                            >
         <ThemeProvider theme={themeColors}>
            <App />
         </ThemeProvider>
      </BrowserRouter>
   </Provider>
)
