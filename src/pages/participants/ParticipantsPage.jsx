import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/UI/sidebar/Sidebar'
import { Header } from '../../layouts/header/Header'
import styled from '@emotion/styled'
import FilterBarParticipantsPage from './FilterBarParticipantsPage'
import TableParticipantsPage from './TableParticipantsPage'
import { StyledBackground } from '../all-issuis/issues.styles'
import { useDispatch, useSelector } from 'react-redux'
import { Box, CircularProgress } from '@mui/material'
import { useParams } from 'react-router-dom'
import { BOARDS_THUNK } from '../../store/slices/board/BoardsThunk'
import { setBoardBackground } from '../../store/slices/board/BoardsSlice'
import { PARTISPANTS_THUNK } from '../../store/slices/participants/participansThunk'

function ParticipantsPage() {
   const dispatch = useDispatch()
   const { id } = useParams()
   const { participans, isLoading } = useSelector((state) => state.participans)
   const { currentBackground } = useSelector((state) => state.boards)

   const [filterRole, setFilterRole] = useState('ALL')

   const currentWorkspaceId = Number(id)

   useEffect(() => {
      if (!currentBackground) {
         const savedBg = localStorage.getItem('lastBoardBg')
         if (savedBg) {
            dispatch(setBoardBackground(savedBg))
         } else if (currentWorkspaceId) {
            dispatch(BOARDS_THUNK.getBoardsByWorkspaceId(currentWorkspaceId))
         }
      }
   }, [dispatch, currentBackground, currentWorkspaceId])

   useEffect(() => {
      if (currentWorkspaceId) {
         const roleParam = filterRole === 'ALL' ? null : filterRole
         dispatch(
            PARTISPANTS_THUNK.getAllParticipant({
               workspaceId: currentWorkspaceId,
               role: roleParam,
            })
         )
      }
   }, [dispatch, filterRole, currentWorkspaceId])

   return (
      <StyledBackground background={currentBackground}>
         <Header />
         <div style={{ display: 'flex' }}>
            <Sidebar />
            <ParticipantsPageContainer>
               <FilterBarParticipantsPage
                  totalCount={participans?.length || 0}
                  workspaceId={currentWorkspaceId}
                  onFilterChange={setFilterRole}
                  currentFilter={filterRole}
               />

               {isLoading ? (
                  <Box
                     sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '400px',
                     }}
                  >
                     <CircularProgress />
                  </Box>
               ) : (
                  <TableParticipantsPage
                     rows={participans || []}
                     workspaceId={currentWorkspaceId}
                     currentFilterRole={filterRole}
                  />
               )}
            </ParticipantsPageContainer>
         </div>
      </StyledBackground>
   )
}

export default ParticipantsPage

const ParticipantsPageContainer = styled('div')({
   width: '100% ',
   margin: '12px 24px 0px 20px',
   background: 'rgba(255, 255, 255, 0.6)',
   borderRadius: '8px',
})
