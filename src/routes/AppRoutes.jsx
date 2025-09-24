import React from 'react'
import { Route, Routes } from 'react-router-dom'

export const AppRoutes = () => {
   return (
      <div>
         <Routes>
            <Route path="/" element={<App />} />
            <Route path="/date-picker" element={<DatePicker />} />
            <Route path="/select" element={<Selectt />} />
            <Route path="/chip" element={<Chipp />} />
         </Routes>
      </div>
   )
}
