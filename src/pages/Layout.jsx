import React from 'react'
import { Header } from '../layouts/header/Header'
import { NavLink, Outlet } from 'react-router'
import { SignIn } from './SignIn'

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
