import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/UI/sidebar/Sidebar'
import { Header } from '../../layouts/header/Header'
import styled from '@emotion/styled'
import FilterBarParticipantsPage from './FilterBarParticipantsPage'
import TableParticipantsPage from './TableParticipantsPage'
import { StyledBackground } from '../all-issuis/issues.styles'
import { useDispatch, useSelector } from 'react-redux'
import { PARTISPANTS_THUNK } from '../../store/slices/participants/ParticipantsThunk'
import { Box, CircularProgress } from '@mui/material'

function ParticipantsPage() {
   const dispatch = useDispatch()
   const { participans, isLoading } = useSelector((state) => state.participans)

   const [filterRole, setFilterRole] = useState('ALL')
   const currentWorkspaceId = 1

   useEffect(() => {
      const roleParam = filterRole === 'ALL' ? null : filterRole
      dispatch(
         PARTISPANTS_THUNK.getAllParticipant({
            workspaceId: currentWorkspaceId,
            role: roleParam,
         })
      )
   }, [dispatch, filterRole])

   return (
      <StyledBackground>
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
