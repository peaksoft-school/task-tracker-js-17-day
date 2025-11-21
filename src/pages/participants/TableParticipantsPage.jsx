import styled from '@emotion/styled'
import React, { useState } from 'react'
import {
   Box,
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableRow,
   Menu,
   MenuItem,
} from '@mui/material'
import { DeleteIcon, DownIcon, CheckIcon } from '../../assets/AllExportIcon'
import { useDispatch } from 'react-redux'
import { PARTISPANTS_THUNK } from '../../store/slices/participants/ParticipantsThunk'

const RoleSelect = ({ currentRole, onChange }) => {
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const handleClick = (event) => setAnchorEl(event.currentTarget)
   const handleClose = () => setAnchorEl(null)
   const handleSelect = (role) => {
      if (onChange) onChange(role)
      handleClose()
   }

   return (
      <>
         <LabelsSelect onClick={handleClick}>
            <TitleRole>{currentRole}</TitleRole>
            <span>
               <DownIcon />
            </span>
         </LabelsSelect>
         <StyledMenu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            transitionDuration={0}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
         >
            {['Admin', 'Member'].map((role) => (
               <StyledMenuItem
                  key={role}
                  onClick={() => handleSelect(role)}
                  selected={role.toUpperCase() === currentRole?.toUpperCase()}
                  disableRipple
               >
                  {role}
                  {role.toUpperCase() === currentRole?.toUpperCase() && (
                     <CheckIcon />
                  )}
               </StyledMenuItem>
            ))}
         </StyledMenu>
      </>
   )
}

function TableParticipantsPage({ rows, workspaceId, currentFilterRole }) {
   const dispatch = useDispatch()

   const handleChangeRole = (row, newRole) => {
      dispatch(
         PARTISPANTS_THUNK.changeParticipantRole({
            workspaceId: workspaceId,
            userId: row.userId,
            membershipId: row.membershipId,
            role: newRole.toUpperCase(),
            currentFilterRole: currentFilterRole || 'ALL',
         })
      )
   }

   const handleDelete = (row) => {
      const confirmDelete = window.confirm(
         `Are you sure you want to remove ${row.name}?`
      )

      if (confirmDelete) {
         const idToDelete = row.membershipId || row.id

         if (!idToDelete) {
            console.error('Не найден membershipId для удаления!', row)
            return
         }

         dispatch(
            PARTISPANTS_THUNK.deleteParticipant({
               workspaceId: workspaceId,
               participantId: idToDelete,
               currentFilterRole: currentFilterRole || 'ALL',
            })
         )
      }
   }

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
               {rows?.map((row) => (
                  <StyledTableRow key={row.userId || row.membershipId}>
                     <StyledTableCellBodyName>
                        <BoxMail>
                           <span>{row.name}</span>
                        </BoxMail>
                     </StyledTableCellBodyName>

                     <StyledTableCellBodyEmail>
                        <BoxMail>
                           <span>{row.email}</span>
                        </BoxMail>
                     </StyledTableCellBodyEmail>

                     <StyledTableCellBodyRole>
                        <BoxMailMember>
                           <BoxTable>
                              <RoleSelect
                                 currentRole={row.role}
                                 onChange={(newRole) =>
                                    handleChangeRole(row, newRole)
                                 }
                              />

                              <div
                                 onClick={() => handleDelete(row)}
                                 style={{ cursor: 'pointer', display: 'flex' }}
                              >
                                 <DeleteIcon />
                              </div>
                           </BoxTable>
                        </BoxMailMember>
                     </StyledTableCellBodyRole>
                  </StyledTableRow>
               ))}
            </StyledTableBody>
         </TableParticipants>
      </ContainerTableParticipantsPage>
   )
}

export default TableParticipantsPage
const StyledMenu = styled(Menu)({
   '& .MuiPaper-root': {
      width: '165px',
      borderRadius: '8px',
      marginTop: '8px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      padding: 0,
   },
   '& .MuiList-root': {
      padding: '4px 0',
   },
})

const StyledMenuItem = styled(MenuItem)({
   fontSize: '14px',
   padding: '10px 16px',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   '&:hover': {
      backgroundColor: '#F3F4F6',
   },
   '&.Mui-selected': {
      backgroundColor: 'transparent',
      fontWeight: 500,
      '&:hover': {
         backgroundColor: '#F3F4F6',
      },
   },
})

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

const StyledTableCellBodyName = styled(TableCell)({})

const StyledTableCellBodyEmail = styled(TableCell)({
   textAlign: 'end',
})

const BoxMail = styled(Box)({
   height: '36px',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',

   '& span': { minWidth: '74px' },
})

const StyledTableCellBodyRole = styled(TableCell)({})

const BoxTable = styled(Box)({
   width: '200px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
})

const BoxMailMember = styled(Box)({
   height: '36px',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'end',
})

const LabelsSelect = styled(Box)({
   height: '36px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   width: '130px',
   padding: '9px 14px 9px 16px',
   cursor: 'pointer',
   borderRadius: '6px',
   transition: 'background 0.2s',
   '&:hover': {
      backgroundColor: '#f5f5f5',
   },

   '& span': {
      marginLeft: '6px',
      display: 'flex',
   },
})

const TitleRole = styled(Box)({
   width: '62px',
   height: '20px',
})
