import React, { useEffect } from 'react'
import AppRoutes from './routes/AppRoutes'
import { useDispatch, useSelector } from 'react-redux'
import { AUTH_THUNK } from './store/slices/auth/authThunk'

const App = () => {
   const dispath = useDispatch()
   // const data = useSelector()

   useEffect(() => {
      dispath(AUTH_THUNK.getAllMembers({ id: 1 }))
   })

   return (
      <>
         <AppRoutes />
         {/* <h1>hello</h1> */}
      </>
   )
}

export default App
