import { createBrowserRouter } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoute'
import { ROLES } from './routes'
import { SignIn } from '../pages/sign-in/SignIn'
import { Board } from '../pages/board/Board'
import { SignUp } from '../pages/sign-up/SignUp'
import { ChangePassword } from '../pages/change-password/ChangePassword'
import { InnerPageBoard } from '../pages/board/InnerPageBoard'

export const routes = createBrowserRouter([
   {
      path: '/',
      element: (
         <PrivateRoute
            component={<SignIn />}
            roles={[ROLES.GUEST]}
            fallBacPath="/main-page"
         />
      ),
   },

   {
      path: '/sign-up',
      element: (
         <PrivateRoute
            component={<SignUp />}
            roles={[ROLES.GUEST]}
            fallBacPath="/main-page"
         />
      ),
   },

   {
      path: `/forgot-password/:id`,
      element: (
         <PrivateRoute
            component={<ChangePassword />}
            roles={[ROLES.GUEST]}
            fallBacPath="/"
         />
      ),
   },

   {
      path: '/main-page',
      element: (
         <PrivateRoute
            component={
               <>
                  <h1>Headers</h1>
                  <h1>Workspaces</h1>
               </>
            }
            roles={[ROLES.ADMIN, ROLES.USER]}
            fallBacPath="/"
         />
      ),
   },

   {
      path: '/board',
      element:  <Board/>,
   },
   {
      path: '/InnerPage-board',
      element:  <InnerPageBoard/>,
   },

   {
      path: '*',
      element: <h1>Этой страницы не существует!!! </h1>,
   },
])
