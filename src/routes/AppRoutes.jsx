import { createBrowserRouter } from 'react-router-dom'
import { ROLES } from './routes'
import { SignIn } from '../pages/sign-in/SignIn'
import { SignUp } from '../pages/sign-up/SignUp'
import { ChangePassword } from '../pages/change-password/ChangePassword'
import PrivateRoute from './PrivateRoute'
import Issues from '../pages/all-issuis/Issues'
import Main from '../pages/mainWorkSpace/Main'
import BoardsPage from '../pages/BoardsPage'
import ParticipantsPage from '../pages/participants/ParticipantsPage'

export const routes = createBrowserRouter([
   {
      path: '/',
      element: <SignIn />,
   },
   {
      path: '/sign-up',
      element: <SignUp />,
   },
   {
      path: '/forgot-password/:id',
      element: <ChangePassword />,
   },
   {
      path: '/main-page',
      element: (
         <PrivateRoute
            Component={
               <>
                  <Main />
               </>
            }
            isAllowed={true}
            fallBacPath="/"
         />
      ),
   },
   {
      path: '/workspace/:id/boards',
      element: (
         <PrivateRoute
            Component={<BoardsPage />}
            isAllowed={true}
            fallBacPath="/"
         />
      ),
   },
   {
      path: '/workspace/:id/boards/all-issuis',
      element: (
         <PrivateRoute
            Component={<Issues />}
            isAllowed={true}
            fallBacPath="/"
         />
      ),
   },
   {
      path: '/workspace/:id/participants',
      element: (
         <PrivateRoute
            Component={<ParticipantsPage />}
            isAllowed={true}
            fallBacPath="/"
         />
      ),
   },

   {
      path: '*',
      element: <h1>Этой страницы не существует!!!</h1>,
   },
])
