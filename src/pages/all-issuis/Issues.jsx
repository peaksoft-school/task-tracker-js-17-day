import React, { useState } from 'react'
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
   styled,
} from '@mui/material'
import Sidebar from '../../components/UI/sidebar/Sidebar'
import { Header } from '../../layouts/header/Header'
import { CalendarIcon, DownIcon } from '../../assets/AllExportIcon'
import { CustomModal } from '../../components/UI/modal/Modal'
import { Input } from '../../components/UI/Input'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

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

export default function IssuesPage() {
   const [isModalOpen, setIsModalOpen] = useState(false)
   const handlModalVisible = () => setIsModalOpen((prev) => !prev)

   const [isLabelsModalOpen, setIsLabelsModalOpen] = useState(false)
   const handlLabelsModalVisible = () => setIsLabelsModalOpen((prev) => !prev)

   const [isDataModalOpen, setIsDataModalOpen] = useState(false)
   const handlDataModalVisible = () => setIsDataModalOpen((prev) => !prev)

   const [isDataStartModalOpen, setIsDataStartModalOpen] = useState(false)
   const handlDataStartModalVisible = () =>
      setIsDataStartModalOpen((prev) => !prev)

   const [startDate, setStartDate] = useState(dayjs())
   const [endDate, setEndDate] = useState(dayjs())

   return (
      <StyledBackground>
         <Header />
         <MainLayout>
            <Sidebar />
            <IssuesContainer component={Paper}>
               <FilterSection>
                  <FilterHeader>
                     <FilterTitle>
                        <p>View all issues</p>
                     </FilterTitle>
                     <FilterControls>
                        <StartDateButton onClick={handlDataStartModalVisible}>
                           00.00.00
                           <span>
                              <CalendarIcon />
                           </span>
                        </StartDateButton>
                        <CustomModalDataStart
                           isVisible={isDataStartModalOpen}
                           handleVisible={handlDataStartModalVisible}
                        >
                           {/* === Start Date Picker === */}
                           <LocalizationProvider
                              dateAdapter={AdapterDayjs}
                              adapterLocale="ru"
                           >
                              <DatePicker
                                 label="Начало"
                                 value={startDate}
                                 onChange={(newValue) => setStartDate(newValue)}
                                 format="DD.MM.YYYY"
                                 slotProps={{
                                    textField: {
                                       variant: 'outlined',
                                       sx: muiDateTextFieldStyle,
                                    },
                                    popper: {
                                       sx: muiDatePopperStyle,
                                    },
                                 }}
                              />
                           </LocalizationProvider>
                        </CustomModalDataStart>
                        <EndDateButton onClick={handlDataModalVisible}>
                           до
                           <span>
                              <CalendarIcon />
                           </span>
                        </EndDateButton>
                        <CustomModalData
                           isVisible={isDataModalOpen}
                           handleVisible={handlDataModalVisible}
                        >

                           {/* === End Date Picker === */}
                           <LocalizationProvider
                              dateAdapter={AdapterDayjs}
                              adapterLocale="ru"
                           >
                              <DatePicker
                                 label="Конец"
                                 value={endDate}
                                 onChange={(newValue) => setEndDate(newValue)}
                                 format="DD.MM.YYYY"
                                 slotProps={{
                                    textField: {
                                       variant: 'outlined',
                                       sx: muiDateTextFieldStyle,
                                    },
                                    popper: {
                                       sx: muiDatePopperStyle,
                                    },
                                 }}
                              />
                           </LocalizationProvider>
                        </CustomModalData>

                        {/* Labels ----------Btn------------- Labels */}
                        <LabelsSelect onClick={handlLabelsModalVisible}>
                           All Labels
                           <span>
                              <DownIcon />
                           </span>
                        </LabelsSelect>

                        {/* Labels ----------Modal------------- Labels -----------*/}
                        <CustomModalLabels
                           isVisible={isLabelsModalOpen}
                           handleVisible={handlLabelsModalVisible}
                        >
                           <Box>
                              <CheksNoLabeles>
                                 <input type="checkbox" />
                                 <span>No ladels</span>
                              </CheksNoLabeles>
                              <CheksColorsLabeles>
                                 <input type="checkbox" /> <StyleBoxGreen />
                              </CheksColorsLabeles>
                              <CheksColorsLabeles>
                                 <input type="checkbox" /> <StyleBoxOreng />
                              </CheksColorsLabeles>
                              <CheksColorsLabeles>
                                 <input type="checkbox" /> <StyleBoxBlue />
                              </CheksColorsLabeles>
                              <CheksColorsLabeles>
                                 <input type="checkbox" /> <StyleBoxRed />
                              </CheksColorsLabeles>
                           </Box>
                        </CustomModalLabels>

                        {/* Assignee ----------Btn------------- Assignee */}
                        <AssigneeSelect onClick={handlModalVisible}>
                           Assignee
                           <span>
                              <DownIcon />
                           </span>
                        </AssigneeSelect>

                        {/* Assignee ----------Modal------------- Assignee ----------- */}
                        <CustomModalAssignee
                           isVisible={isModalOpen}
                           handleVisible={handlModalVisible}
                        >
                           <StylesInput
                              placeholder="Search"
                              iconPosition="start"
                           />
                           <StylesConteinerBoxProfilesUser>
                              <StylesBoxUsers>
                                 <input type="checkbox" />
                                 <StylesAvatar />
                                 <Box>title</Box>
                              </StylesBoxUsers>
                           </StylesConteinerBoxProfilesUser>
                        </CustomModalAssignee>

                        {/* Checklist ----------Btn------------- Checklist */}
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
               <>
                  <TableIssues>
                     <TableHeadGrayLine>
                        <TableRow>
                           <StyledTableCellCreated>
                              Created
                           </StyledTableCellCreated>
                           <StyledTableCellPeriod>Period</StyledTableCellPeriod>
                           <StyledTableCellCreator>
                              Creator
                           </StyledTableCellCreator>
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
               </>
            </IssuesContainer>
         </MainLayout>
      </StyledBackground>
   )
}

// ============================
// 🔹 Styled Components
// ============================

// подбор бональных стилей
const StyledChekbox = {
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
}
const StyledBagrauntLables = {
   width: '230px',
   height: '32px',

   marginLeft: '6px',
   borderRadius: '6px',
   marginBottom: '12px',
}

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

const TableIssues = styled(Table)({
   borderCollapse: 'collapse',
   width: '100%',
   tableLayout: 'fixed',

   '& thead': {
      display: 'table',
      width: '100%',
      tableLayout: 'fixed',
   },

   '& tbody tr': {
      display: 'table',
      width: '100%',
      tableLayout: 'fixed',
   },
})

const TableHeadGrayLine = styled(TableHead)({
   width: '100%',
   borderBottom: '1px solid rgba(215,215,215,1)',
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

const CustomModalDataStart = styled(CustomModal)({})

const EndDateButton = styled(Box)({ ...commonButtonStyle, width: '110px' })
const CustomModalData = styled(CustomModal)({})
// ============================
// 🔹 MUI COMPONENT STYLES
// ============================
export const muiDateTextFieldStyle = {
   width: '220px',
   height: '36px',
   '& .MuiInputBase-root': {
      fontSize: '14px',
      borderRadius: '8px',
   },
   '& .MuiInputLabel-root': {
      fontSize: '13px',
   },
}

export const muiDatePopperStyle = {
   '& .MuiPickersDay-root': {
      fontSize: '14px',
      width: 36,
      height: 36,
   },
   '& .Mui-selected': {
      backgroundColor: '#1976d2 !important',
      color: '#fff !important',
   },
   '& .MuiPickersCalendarHeader-label': {
      fontSize: '16px',
      fontWeight: 500,
   },
}

const LabelsSelect = styled(Box)({
   ...commonButtonStyle,
   width: '154px',
   padding: '9px 14px 9px 16px',
})

const CustomModalLabels = styled(CustomModal)({
   width: '304px',
   height: '236px',
   border: '1px red solid',
})
const CheksNoLabeles = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   marginLeft: '6px',
   marginBottom: '12px',

   '& span': {
      marginLeft: '6px',
   },
   ...StyledChekbox,
})

const CheksColorsLabeles = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   marginLeft: '6px',
   ...StyledChekbox,
})

const StyleBoxGreen = styled(Box)({
   backgroundColor: '#61BD4F',
   ...StyledBagrauntLables,
})
const StyleBoxOreng = styled(Box)({
   backgroundColor: '#EB8900',
   ...StyledBagrauntLables,
})
const StyleBoxBlue = styled(Box)({
   backgroundColor: '#0079BF',
   ...StyledBagrauntLables,
})
const StyleBoxRed = styled(Box)({
   backgroundColor: '#EB5A46',
   ...StyledBagrauntLables,
})

const AssigneeSelect = styled(Box)({
   ...commonButtonStyle,

   width: '219px',
   padding: '9px 14px 9px 16px',
})

const CustomModalAssignee = styled(CustomModal)({
   width: '310px',
   height: '512px',

   display: 'flex',
})

const StylesInput = styled(Input)({
   width: '270px',
   margin: '0',
})

const StylesConteinerBoxProfilesUser = styled(Box)({
   height: '456px',

   overflow: 'auto',

   scrollbarWidth: 'none',
   msOverflowStyle: 'none',

   '&::-webkit-scrollbar': {
      display: 'none',
   },
})

const StylesBoxUsers = styled(Box)({
   width: '284px',
   height: '56px',
   display: 'flex',
   alignItems: 'center',

   ...StyledChekbox,
})

const StylesAvatar = styled(Avatar)({
   marginLeft: '8px',
   marginRight: '10px',
})

const ChecklistWrapper = styled(Box)({
   width: '140px',
   height: '36px',
   display: 'flex',
   alignItems: 'center',
   gap: '8px',
   borderRadius: '8px',
   padding: '9px 14px 9px 16px',
   ...StyledChekbox,
   '& span': { fontSize: '14px', color: '#0d0d0d', userSelect: 'none' },
})
