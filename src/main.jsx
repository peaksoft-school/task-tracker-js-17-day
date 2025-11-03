import { createRoot } from 'react-dom/client'
import './index.css'
import App from '././App.jsx'
import Notification from './components/Notification.jsx'
import { ThemeProvider } from '@mui/material'
import { themeColors } from './styles/appColors.js'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { injectStore } from './configs/axiosinstance.js'

injectStore(store)

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
      <ThemeProvider theme={themeColors}>
         <App />
         <Notification />
      </ThemeProvider>
   </Provider>
)
