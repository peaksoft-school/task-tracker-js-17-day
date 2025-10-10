import React from 'react'
import { NavLink, Outlet } from 'react-router'
import { SignIn } from './sign-in/SignIn'

export const MainLayout = () => {
   return (
      <div>
         <SignIn />

         <nav>
            <NavLink to={'/sign-in'}>Signin</NavLink>
            <NavLink to={'/sign-up'}>SignUp</NavLink>
         </nav>

         <div>
            <Outlet />
         </div>
      </div>
   )
}
