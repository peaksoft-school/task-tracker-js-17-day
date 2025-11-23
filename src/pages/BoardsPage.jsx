import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MAIN_THUNK } from '../store/slices/workspaces/mainThunk'

function BoardsPage() {
   const search = window.location.search

   const { token } = useSelector((state) => state.auth)

   const dispatch = useDispatch()

   const navigate = useNavigate()

   useEffect(() => {
      if (search.includes('token=')) {
         const acceptToken = search.split('token=')[1]

         dispatch(MAIN_THUNK.invitationAccept({ token, acceptToken, navigate }))
      }
   }, [search, dispatch, navigate])

   return (
      <div>
         <h1>hello</h1>
      </div>
   )
}

export default BoardsPage
