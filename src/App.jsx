import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/AppRoutes'
// import Issues from './pages/all-issuis/Issues'
import ParticipantsPage from './pages/participants/ParticipantsPage'

const App = () => {
   return (
      <>
         <RouterProvider router={routes} />
         {/* <ParticipantsPage /> */}
      </>
   )
}

export default App
