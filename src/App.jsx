import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/AppRoutes'
import Issues from './pages/all-issuis/Issues'

const App = () => {
   return (
      <>
         <RouterProvider router={routes} />
         {/* <Issues /> */}
      </>
   )
}

export default App
