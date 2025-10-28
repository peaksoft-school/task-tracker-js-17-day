import { createRoot } from 'react-dom/client'
import './index.css'
import App from '././App.jsx'
import Notification from './components/Notification.jsx'
import { ThemeProvider } from '@mui/material'
import { themeColors } from './styles/appColors.js'
import { Provider } from 'react-redux'
import { persistor, store } from './store/store.js'
import { injectStore } from './configs/axiosinstance.js'
import { PersistGate } from 'redux-persist/integration/react'
// import { injectStoreFile } from './configs/axiosInstanceFile.js'

injectStore(store)
// injectStoreFile(store)

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
      <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
         <Notification />

         <ThemeProvider theme={themeColors}>
            <App />
         </ThemeProvider>
      </PersistGate>
   </Provider>
)
