import { createBrowserRouter } from 'react-router-dom'
import { ROLES } from './routes'
import { SignIn } from '../pages/sign-in/SignIn'
import { SignUp } from '../pages/sign-up/SignUp'
import { ChangePassword } from '../pages/change-password/ChangePassword'
import Main from '../pages/Main'
import Issues from '../pages/all-issuis/Issues'

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
      path: '/all-issuis',
      element: (
         <PrivateRoute
            Component={<Issues />}
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
