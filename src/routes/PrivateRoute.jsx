import React from 'react'
import { Navigate } from 'react-router'

export const PrivateRoute = ({ roles, component, fallbackPhath }) => {
   const role = 'USER'
   const allowedRole = roles.includes(role)

   if (!allowedRole) return <Navigate to={fallbackPhath} />

   return component
}
