import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/AppRoutes'
import Main from './pages/mainWorkSpace/Main'

const App = () => (
   <>
      <RouterProvider router={routes} />
      {/* <Main/> */}
   </>
)

export default App


