import React from 'react'
import { Route, Routes } from 'react-router'
import { MainLayout } from '../pages/Layout'

const UserRoute = () => {
   return (
      <Routes>
         <Route path="/" element={<MainLayout />} />
      </Routes>
   )
}

export default UserRoute
