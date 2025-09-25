import { useNavigate } from 'react-router'

export const SignIn = () => {
   const navugate = useNavigate()

   return (
      <div>
         <h1 color="black">SignIn</h1>
         <button onClick={() => navugate('/sign-up')}>Go to Dashboard</button>
      </div>
   )
}
