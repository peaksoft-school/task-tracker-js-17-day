import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { PrivateRoute } from './PrivateRoute'
import UserRoute from './UserRoute'
import AdminRoute from './AdminRoute'
import { ROLES } from './routes'

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Navigate to="/sign-in" replace />} />
         <Route path="/sign-in" element={<SignIn />} />
         <Route path="/sign-up" element={<SignUp />} />

         <Route
            path="/user"
            element={
               <PrivateRoute
                  roles={[ROLES.USER]}
                  component={<UserRoute />}
                  fallbackPhath={'/sign-in'}
               />
            }
         />
         <Route
            path="/admin"
            element={
               <PrivateRoute
                  roles={[ROLES.ADMIN]}
                  component={<AdminRoute />}
                  fallbackPhath={'/sign-in'}
               />
            }
         />
      </Routes>
   )
}

export default AppRoutes
