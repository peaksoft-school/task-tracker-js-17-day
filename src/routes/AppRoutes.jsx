import { createBrowserRouter } from 'react-router-dom'
import { ROLES } from './routes'
import { SignIn } from '../pages/sign-in/SignIn'

import { SignUp } from '../pages/sign-up/SignUp'
import { ChangePassword } from '../pages/change-password/ChangePassword'
import { InnerPageBoard } from '../pages/board/InnerPageBoard'
import Board from '../pages/board/Board'
import { Profile } from '../pages/profile/Profile'
import IssuesPage from '../pages/all-issuis/Issues'
import PrivateRoute from './PrivateRoute'
import Main from '../pages/mainWorkSpace/Main'


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
            Component={<Board />}
            isAllowed={true}
            fallBacPath="/"
         />
      ),
   },
   {
      path: '/all-issuis',
      element: (
         <PrivateRoute
            Component={<IssuesPage />}
            isAllowed={true}
            fallBacPath="/"
         />
      ),
   },

   {
      path: '/profile',
      element: <Profile />,
   },
   {
      path: '/boards/:id/columns-with-cards',
      element: <InnerPageBoard/>,
   },

   {
      path: '*',
      element: <h1>Этой страницы не существует!!!</h1>,
   },
])
