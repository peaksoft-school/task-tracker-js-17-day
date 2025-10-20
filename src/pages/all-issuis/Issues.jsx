import React from 'react'
import styled from '@emotion/styled'
import {
   Avatar,
   AvatarGroup,
   Box,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@mui/material'
import { Header } from '../../layouts/header/Header'
import Sidebar from '../../components/UI/sidebar/Sidebar'
import { CalendarIcon, DownIcon } from '../../assets/AllExportIcon'

// ============================
// 🔹 Data Setup
// ============================
function createData(
   created,
   period,
   creator,
   column,
   assignee,
   labels,
   checklist,
   description
) {
   return {
      created,
      period,
      creator,
      column,
      assignee,
      labels,
      checklist,
      description,
   }
}

const rows = [
   createData(
      '2025-10-18',
      'Weekly',
      'alex@mail.com',
      'To Do',
      ['/avatars/1.png', '/avatars/2.png', '/avatars/3.png'],
      ['#FF8042', '#82ca9d'],
      '3/5',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit...'
   ),
   createData(
      '2025-10-19',
      'Monthly',
      'john@mail.com',
      'Done',
      ['/avatars/1.png', '/avatars/2.png', '/avatars/3.png'],
      ['#FF8042', '#82ca9d'],
      '5/5',
      'Resolved'
   ),
   createData(
      '2025-10-20',
      'Daily',
      'kate@mail.com',
      'In Progress',
      ['/avatars/1.png', '/avatars/2.png', '/avatars/3.png', '/avatars/3.png'],
      ['#FF8042', '#82ca9d'],
      '2/4',
      'Lorem ipsum dolor sit'
   ),
]

// ============================
// 🔹 Main Component
// ============================
export default function IssuesPage() {
   return (
      <StyledBackground>
         <Header />
         <MainLayout>
            <Sidebar />
            <IssuesContainer component={Paper}>
               {/* === Filter Section === */}
               <FilterSection>
                  <FilterHeader>
                     <FilterTitle>
                        <p>View all issues</p>
                     </FilterTitle>
                     <FilterControls>
                        <StartDateButton>
                           00.00.00{' '}
                           <span>
                              <CalendarIcon />
                           </span>
                        </StartDateButton>
                        <EndDateButton>
                           до{' '}
                           <span>
                              <CalendarIcon />
                           </span>
                        </EndDateButton>
                        <LabelsSelect>
                           All Labels{' '}
                           <span>
                              <DownIcon />
                           </span>
                        </LabelsSelect>
                        <AssigneeSelect>
                           Assignee{' '}
                           <span>
                              <DownIcon />
                           </span>
                        </AssigneeSelect>
                        <ChecklistWrapper>
                           <input type="checkbox" />
                           <span>Checklist</span>
                        </ChecklistWrapper>
                     </FilterControls>
                  </FilterHeader>
                  <TotalBox>
                     <span>
                        Total: <span>{rows.length}</span>
                     </span>
                  </TotalBox>
               </FilterSection>

               {/* === Table === */}
               <TableIssues>
                  <TableHeadGrayLine>
                     <TableRow>
                        <StyledTableCellCreated>Created</StyledTableCellCreated>
                        <StyledTableCellPeriod>Period</StyledTableCellPeriod>
                        <StyledTableCellCreator>Creator</StyledTableCellCreator>
                        <StyledTableCellColumn>Column</StyledTableCellColumn>
                        <StyledTableCellAssignee>
                           Assignee
                        </StyledTableCellAssignee>
                        <StyledTableCellLabels>Labels</StyledTableCellLabels>
                        <StyledTableCellChecklist>
                           Checklist
                        </StyledTableCellChecklist>
                        <StyledTableCellDescription>
                           Description
                        </StyledTableCellDescription>
                     </TableRow>
                  </TableHeadGrayLine>

                  <StyledTableBody>
                     {rows.map((row, index) => (
                        <StyledTableRow key={index}>
                           <StyledTableCellBodyCreated>
                              <span>{row.created}</span>
                           </StyledTableCellBodyCreated>
                           <StyledTableCellBodyPeriod>
                              {row.period}
                           </StyledTableCellBodyPeriod>
                           <StyledTableCellBodyCreator>
                              {row.creator}
                           </StyledTableCellBodyCreator>
                           <StyledTableCellBodyColumn>
                              {row.column}
                           </StyledTableCellBodyColumn>
                           <StyledTableCellBodyAssignee>
                              <AvatarGroup max={3}>
                                 {row.assignee.map((src, i) => (
                                    <Avatar key={i} src={src} />
                                 ))}
                              </AvatarGroup>
                           </StyledTableCellBodyAssignee>
                           <StyledTableCellBodyLabels>
                              {row.labels.map((color, i) => (
                                 <Label key={i} color={color} />
                              ))}
                           </StyledTableCellBodyLabels>
                           <StyledTableCellBodyChecklist>
                              {row.checklist}
                           </StyledTableCellBodyChecklist>
                           <StyledTableCellBodyDescription>
                              {row.description}
                           </StyledTableCellBodyDescription>
                        </StyledTableRow>
                     ))}
                  </StyledTableBody>
               </TableIssues>
            </IssuesContainer>
         </MainLayout>
      </StyledBackground>
   )
}

// ============================
// 🔹 Styled Components
// ============================

// Layout
const StyledBackground = styled('div')({
   backgroundColor: '#537081',
   minHeight: '100vh',
})
const MainLayout = styled(Box)({ display: 'flex' })
const IssuesContainer = styled(TableContainer)({
   width: '91.9%',
   margin: '12px 24px 12px 20px',
   borderRadius: '8px',
   background: 'rgba(248, 248, 248, 0.9)',
})

// Filter
const FilterSection = styled(Box)({ margin: '22px 0 0 16px' })
const FilterHeader = styled(Box)({
   width: '80%',
   height: '36px',
   display: 'flex',
   alignItems: 'center',
})
const FilterTitle = styled(Box)({
   minWidth: '134px',
   height: '25px',
   display: 'flex',
   alignItems: 'center',
   marginRight: '33px',
   '& p': {
      fontWeight: 500,
      fontSize: '20px',
      fontFamily: 'Cera Pro',
      color: '#0d0d0d',
   },
})
const FilterControls = styled(Box)({
   width: '90%',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
})
const TotalBox = styled(Box)({
   width: '80px',
   height: '24px',
   '& span': {
      color: 'rgba(145,145,145,1)',
      fontSize: '16px',
      '& span': {
         color: 'white',
         background: 'rgba(178,178,178,1)',
         padding: '0 5px',
         borderRadius: '16px',
      },
   },
})

// Table
const TableIssues = styled(Table)({
   borderCollapse: 'collapse',
   width: '100%',
   tableLayout: 'fixed',
   '& thead': { display: 'table', width: '100%', tableLayout: 'fixed' },
   '& tbody tr': { display: 'table', width: '100%', tableLayout: 'fixed' },
})
const TableHeadGrayLine = styled(TableHead)({
   width: '100%',
   borderBottom: '1px solid rgba(215,215,215,1)',
})

// Header cells
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
const StyledTableCellCreated = styled(TableCell)({
   ...baseHeaderCell,
   width: '8.37%',
})
const StyledTableCellPeriod = styled(TableCell)({
   ...baseHeaderCell,
   width: '6.97%',
})
const StyledTableCellCreator = styled(TableCell)({
   ...baseHeaderCell,
   width: '11%',
})
const StyledTableCellColumn = styled(TableCell)({
   ...baseHeaderCell,
   width: '11%',
})
const StyledTableCellAssignee = styled(TableCell)({
   ...baseHeaderCell,
   width: '10%',
})
const StyledTableCellLabels = styled(TableCell)({
   ...baseHeaderCell,
   width: '11%',
})
const StyledTableCellChecklist = styled(TableCell)({
   ...baseHeaderCell,
   width: '8%',
})
const StyledTableCellDescription = styled(TableCell)({
   ...baseHeaderCell,
   width: '32%',
})

// Body
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
const StyledTableCellBodyCreated = styled(TableCell)({
   width: '8.37%',
   '& span': { width: '74px' },
})
const StyledTableCellBodyPeriod = styled(TableCell)({ width: '6.97%' })
const StyledTableCellBodyCreator = styled(TableCell)({ width: '11%' })
const StyledTableCellBodyColumn = styled(TableCell)({ width: '11%' })
const StyledTableCellBodyAssignee = styled(TableCell)({ width: '10%' })
const StyledTableCellBodyLabels = styled(TableCell)({ width: '11%' })
const StyledTableCellBodyChecklist = styled(TableCell)({ width: '8%' })
const StyledTableCellBodyDescription = styled(TableCell)({ width: '32%' })

// Label
const Label = styled('span')(({ color }) => ({
   display: 'inline-block',
   width: '32px',
   height: '6px',
   borderRadius: '8px',
   backgroundColor: color,
   marginRight: '4px',
}))

// Buttons & Inputs
const commonButtonStyle = {
   height: '36px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   borderRadius: '8px',
   border: '1px solid rgba(208,208,208,1)',
   padding: '7px 14px 7px 16px',
}
const StartDateButton = styled(Box)({
   ...commonButtonStyle,
   width: '109px',
   gap: '4px',
})
const EndDateButton = styled(Box)({ ...commonButtonStyle, width: '110px' })
const LabelsSelect = styled(Box)({
   ...commonButtonStyle,
   width: '154px',
   padding: '9px 14px 9px 16px',
})
const AssigneeSelect = styled(Box)({
   ...commonButtonStyle,
   width: '219px',
   padding: '9px 14px 9px 16px',
})
const ChecklistWrapper = styled(Box)({
   width: '140px',
   height: '36px',
   display: 'flex',
   alignItems: 'center',
   gap: '8px',
   borderRadius: '8px',
   padding: '9px 14px 9px 16px',
   '& input': {
      appearance: 'none',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      width: '18px',
      height: '18px',
      border: '1px solid rgba(208,208,208,1)',
      borderRadius: '4px',
      cursor: 'pointer',
      background: 'rgba(248,248,248,0.6)',
      position: 'relative',
   },
   '& input:checked': { backgroundColor: '#1976d2', borderColor: '#1976d2' },
   '& input:checked::after': {
      content: '""',
      position: 'absolute',
      left: '5px',
      top: '2px',
      width: '5px',
      height: '10px',
      border: 'solid white',
      borderWidth: '0 2px 2px 0',
      transform: 'rotate(45deg)',
   },
   '& span': { fontSize: '14px', color: '#0d0d0d', userSelect: 'none' },
})
