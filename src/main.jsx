import { createRoot } from 'react-dom/client'
import './index.css'
import App from '././App.jsx'
import Notification from './components/Notification.jsx'
import { ThemeProvider } from '@mui/material'
import { themeColors } from './styles/appColors.js'
import { Provider } from 'react-redux'
import { injectStore } from './configs/axiosinstance.js'
import { injectStoreFile } from './configs/axiosInstanceFile.js'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store/store.js'

injectStore(store)
injectStoreFile(store)

createRoot(document.getElementById('root')).render(
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={themeColors}>
               <App />
               <Notification />
            </ThemeProvider>
         </PersistGate>
      </Provider>
)
