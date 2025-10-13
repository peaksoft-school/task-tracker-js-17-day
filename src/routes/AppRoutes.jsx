import { Navigate, Route, Routes } from 'react-router'
import { PrivateRoute } from './PrivateRoute'
import UserRoute from './UserRoute'
import AdminRoute from './AdminRoute'
import { ROLES } from './routes'
import { SignUp } from '../pages/sign-up/SignUp'
import { SignIn } from '../pages/sign-in/SignIn'
import { Passwordd } from '../pages/password/Passwordd'
import { Board } from '../pages/board/Board'

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Navigate to="/sign-in" replace />} />
         <Route path="/sign-in" element={<SignIn />} />
         <Route path="/sign-up" element={<SignUp />} />
         <Route path="/password" element={<Passwordd />} />

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
         <Route path='/board' element={<Board/>} />   
      </Routes>
   )
}

export default AppRoutes
