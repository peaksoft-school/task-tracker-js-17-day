import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/AppRoutes'
import { Header } from './layouts/header/Header'

const App = () => {
   // return <RouterProvider router={routes} />
   return <Header />
}

export default App
