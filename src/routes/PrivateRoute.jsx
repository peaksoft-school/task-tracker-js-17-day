import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ Component, fallbackPath, isAllowed }) => {
   if (!isAllowed) {
      return <Navigate to={fallbackPath} replace />
   }

   return Component
}

export default PrivateRoute
