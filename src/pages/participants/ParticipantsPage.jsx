import React from 'react'
import Sidebar from '../../components/UI/sidebar/Sidebar'
import { Header } from '../../layouts/header/Header'
import styled from '@emotion/styled'
import FilterBarParticipantsPage from './FilterBarParticipantsPage'
import TableParticipantsPage from './TableParticipantsPage'
import { StyledBackground } from '../all-issuis/issues.styles'

function ParticipantsPage() {
   return (
      <StyledBackground>
         <Header />
         <div style={{ display: 'flex' }}>
            <Sidebar />
            <ParticipantsPageContainer>
               <FilterBarParticipantsPage />

               {/* {isLoading ? ( */}
               {/* <Box
                  sx={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     height: '400px',
                  }}
               >
                  <CircularProgress />
               </Box> */}
               {/* ) : ( */}
               <TableParticipantsPage />
               {/* )} */}
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
