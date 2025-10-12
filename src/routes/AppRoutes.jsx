import { createBrowserRouter } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoute'
import { ROLES } from './routes'

export const routes = createBrowserRouter([
   {
      path: '/',
      element: (
         <PrivateRoute
            component={<h1>Sign-in</h1>}
            roles={[ROLES.GUEST]}
            fallBacPath="/mainPage"
         />
      ),
   },

   {
      path: '/sign-up',
      element: (
         <PrivateRoute
            component={<h1>Sign-up</h1>}
            roles={[ROLES.GUEST]}
            fallBacPath="/mainPage"
         />
      ),
   },
   {
      path: `/forgotPassword/:id`,
      element: (
         <PrivateRoute
            component={<h1>ResetPasswordPage</h1>}
            roles={[ROLES.GUEST]}
            fallBacPath="/"
         />
      ),
   },
   {
      path: '/mainPage/',
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
      path: '*',
      element: <h1>Этой страницы не существует!!! </h1>,
   },
])
