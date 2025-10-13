import { Navigate } from 'react-router'

export const PrivateRoute = ({ roles, component, fallBacPath }) => {
   const role = 'GUEST'

   const allowedRole = roles.includes(role)

   if (!allowedRole) return <Navigate to={fallBacPath} />

   return component
}
