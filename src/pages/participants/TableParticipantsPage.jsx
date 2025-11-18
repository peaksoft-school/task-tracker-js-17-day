import styled from '@emotion/styled'
import React from 'react'
import {
   Box,
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableRow,
} from '@mui/material'
import { DeleteIcon, DownIcon } from '../../assets/AllExportIcon'

function TableParticipantsPage() {
   return (
      <ContainerTableParticipantsPage>
         <TableParticipants>
            <TableHeader>
               <TableRow>
                  <StyledTableCellName>Name</StyledTableCellName>
                  <StyledTableCellEmail>E-mail</StyledTableCellEmail>
                  <StyledTableCellRole>Role</StyledTableCellRole>
               </TableRow>
            </TableHeader>

            <StyledTableBody>
               {/* {rows.map((row, index) => ( */}
               <StyledTableRow>
                  <StyledTableCellBodyCreated>
                     <BoxMail>
                        <span>Salamat Salamat</span>
                     </BoxMail>
                  </StyledTableCellBodyCreated>
                  <StyledTableCellBodyPeriod>
                     <BoxMail>
                        <span>salamat@gmail.com</span>
                     </BoxMail>
                  </StyledTableCellBodyPeriod>
                  <StyledTableCellBodyCreator>
                     <BoxTable>
                        <LabelsSelect>
                           <TitleRole>Member</TitleRole>
                           <span>
                              <DownIcon />
                           </span>
                        </LabelsSelect>

                        <DeleteIcon />
                     </BoxTable>
                  </StyledTableCellBodyCreator>
               </StyledTableRow>
               {/* ))} */}
            </StyledTableBody>
         </TableParticipants>
      </ContainerTableParticipantsPage>
   )
}

export default TableParticipantsPage

const baseHeaderCell = {
   border: 'none !important',
   height: '44px',
   fontWeight: 500,
   fontSize: '16px',
   color: '#1C1C1C',
   lineHeight: '20px',
   background: 'transparent',
   textAlign: 'left',
   verticalAlign: 'middle',
}

const ContainerTableParticipantsPage = styled(Box)({
   marginTop: '22px',
})

const TableParticipants = styled(Table)({
   borderCollapse: 'collapse',
   width: '100%',
   tableLayout: 'fixed',
   '& thead': { display: 'table', width: '100%', tableLayout: 'fixed' },
   '& tbody tr': { display: 'table', width: '100%', tableLayout: 'fixed' },
})

const TableHeader = styled(TableHead)({
   width: '100%',
   borderBottom: '1px solid rgba(215,215,215,1)',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',
})

const StyledTableCellName = styled(TableCell)({
   ...baseHeaderCell,
})

const StyledTableCellEmail = styled(TableCell)({
   ...baseHeaderCell,
   textAlign: 'end',
})

const StyledTableCellRole = styled(TableCell)({
   ...baseHeaderCell,
   textAlign: 'end',
})

const StyledTableBody = styled(TableBody)({
   display: 'block',
   maxHeight: '766px',
   overflowY: 'auto',
   overflowX: 'hidden',
   width: '100%',
   '&::-webkit-scrollbar': { width: '6px' },
   '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(180,180,180,0.5)',
      borderRadius: '8px',
   },
})

const StyledTableRow = styled(TableRow)({
   transition: 'background 0.2s ease',
   verticalAlign: 'top',
   '&:hover': { backgroundColor: 'rgba(243,244,246,0.5)' },
   '& td': {
      borderBottom: '1px solid #f0f0f0',
      padding: '14px 16px',
      fontSize: '14px',
      color: '#374151',
      verticalAlign: 'top',
   },
})

const StyledTableCellBodyCreated = styled(TableCell)({})
const StyledTableCellBodyPeriod = styled(TableCell)({
   textAlign: 'end',
})

const BoxMail = styled(Box)({
   height: '36px',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',

   '& span': { minWidth: '74px' },
})

const StyledTableCellBodyCreator = styled(TableCell)({
   display: 'flex',
   justifyContent: 'end',
})
const BoxTable = styled(Box)({
   width: '200px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
})

const LabelsSelect = styled(Box)({
   height: '36px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   padding: '7px 14px 7px 16px',

   width: '130px',
   padding: '9px 14px 9px 16px',

   '& span': {
      marginLeft: '6px',
      display: 'flex',
   },
})

const TitleRole = styled(Box)({
   width: '62px',
   height: '20px',
})
