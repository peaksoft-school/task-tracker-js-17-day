import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SignUp = () => {
   const navigate = useNavigate()

   return (
      <div>
         up
         <button onClick={() => navigate('/')}>Go to Dashboard</button>
      </div>
   )
}
