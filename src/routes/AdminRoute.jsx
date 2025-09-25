import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../pages/Layout'

const AdminRoute = () => {
   return (
      <Routes>
         <Route path="/" element={<MainLayout />} />
      </Routes>
   )
}

export default AdminRoute
