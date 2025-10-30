import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/AppRoutes'
import { Profile } from './pages/profile/Profile'


const App = () => {
   return <RouterProvider router={routes} />

}

export default App
