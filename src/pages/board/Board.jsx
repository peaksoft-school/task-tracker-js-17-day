import { Box, styled, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from '../../layouts/header/Header'
import { AppButton } from '../../components/UI/AppButton'
import { CardBoard } from './CardBoard'
import { BOARD_THUNK } from '../../store/slices/board/boardThunk'
import Sidebar from '../../components/UI/sidebar/Sidebar'

export default function Board() {
   const dispatch = useDispatch()
   const { boards, loading } = useSelector((state) => state.board)

   useEffect(() => {
      dispatch(BOARD_THUNK.workSpaceById({ workspaceId: '1' }))
   }, [dispatch])
   console.log(boards.id,"boards");
   return (
      <Box>
         <Header />
         <StyledBoxBoards>
            <Box>
               <Sidebar />
            </Box>
            <Box>
               <StyledBoxHeaders>
                  <Typography variant="h6">All boards</Typography>
                  <AppButton>+ Create new board</AppButton>
               </StyledBoxHeaders>
               {loading ? (
                  <Typography>Loading...</Typography>
               ) : (
                  boards.map((item) => <Box key={item.id}>{item.name}</Box>)
               )}
              
               <CardBoard />
            </Box>
         </StyledBoxBoards>
      </Box>
   )
}

const StyledBoxBoards = styled(Box)({
   display: 'grid',
   gridTemplateColumns: '250px 1fr',
   padding: '16px 40px',
})

const StyledBoxHeaders = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
   padding: '16px 40px',
   backgroundColor: '#ffffff',
})
