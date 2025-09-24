import React from 'react'

export const PrivateRoute = ({ roles, component, fallbackPhath }) => {
    const role = 'admin'
    const allowedRole = roles.includes(role)
    if (allowedRole) {
       return component
    }
   return <div></div>
}
