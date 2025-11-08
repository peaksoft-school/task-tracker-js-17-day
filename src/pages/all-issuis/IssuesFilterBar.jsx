import { Box, Popover } from '@mui/material'
import { CalendarIcon, DownIcon } from '../../assets/AllExportIcon'
import {
   AssigneeSelect,
   ChecklistWrapper,
   CheksColorsLabeles,
   CheksNoLabeles,
   EndDateButton,
   FilterControls,
   FilterHeader,
   FilterSection,
   FilterTitle,
   LabelsSelect,
   StartDateButton,
   StyleBoxBlue,
   StyleBoxGreen,
   StyleBoxOreng,
   StyleBoxRed,
   StylesAvatar,
   StylesBoxUsers,
   StylesConteinerBoxProfilesUser,
   StylesInput,
   TotalBox,
} from './issues.styles'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useState } from 'react'

export const IssuesFilterBar = ({
   rowsLength,
   startDate,
   setStartDate,
   endDate,
   setEndDate,
   selectedLabels,
   setSelectedLabels,
}) => {
   const [assigneeAnchorEl, setAssigneeAnchorEl] = useState(null)

   const handleAssigneeClick = (event) => {
      setAssigneeAnchorEl(event.currentTarget)
   }
   const handleAssigneeClose = () => {
      setAssigneeAnchorEl(null)
   }

   const isAssigneeOpen = Boolean(assigneeAnchorEl)
   const assigneePopoverId = isAssigneeOpen ? 'assignee-popover' : undefined

   const [labelsAnchorEl, setLabelsAnchorEl] = useState(null)

   const handleLabelsClick = (event) => {
      setLabelsAnchorEl(event.currentTarget)
   }

   const handleLabelsClose = () => {
      setLabelsAnchorEl(null)
   }

   const isLabelsOpen = Boolean(labelsAnchorEl)
   const labelsPopoverId = isLabelsOpen ? 'labels-popover' : undefined

   const [startAnchorEl, setStartAnchorEl] = useState(null)
   const [endAnchorEl, setEndAnchorEl] = useState(null)

   const handleStartClick = (event) => {
      setStartAnchorEl(event.currentTarget)
   }
   const handleStartClose = () => {
      setStartAnchorEl(null)
   }
   const isStartOpen = Boolean(startAnchorEl)

   const handleEndClick = (event) => {
      setEndAnchorEl(event.currentTarget)
   }
   const handleEndClose = () => {
      setEndAnchorEl(null)
   }
   const isEndOpen = Boolean(endAnchorEl)

   // ↓↓↓ ДОБАВЬ ЭТУ ФУНКЦИЮ ↓↓↓
   const handleLabelChange = (labelId) => {
      // Проверяем, выбран ли уже этот ID
      const isAlreadySelected = selectedLabels[0] === labelId

      if (isAlreadySelected) {
         // Если да, убираем его (очищаем массив)
         setSelectedLabels([])
      } else {
         // Если нет, выбираем его (массив с одним этим ID)
         setSelectedLabels([labelId])
      }
   }
   return (
      <FilterSection>
         <FilterHeader>
            <FilterTitle>
               <p>View all issues</p>
            </FilterTitle>
            <FilterControls>
               <StartDateButton onClick={handleStartClick}>
                  {startDate ? startDate.format('YY.MM.DD') : '00.00.00'}
                  <span>
                     <CalendarIcon />
                  </span>
               </StartDateButton>

               <Popover
                  open={isStartOpen}
                  anchorEl={startAnchorEl}
                  onClose={handleStartClose}
                  anchorOrigin={{
                     vertical: 'bottom',
                     horizontal: 'left',
                  }}
                  PaperProps={{
                     style: {
                        borderRadius: '8px',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                     },
                  }}
               >
                  <LocalizationProvider
                     dateAdapter={AdapterDayjs}
                     adapterLocale="ru"
                  >
                     <DateCalendar
                        value={startDate}
                        onChange={(newValue) => {
                           setStartDate(newValue)
                           handleStartClose()
                        }}
                     />
                  </LocalizationProvider>
               </Popover>

               <EndDateButton onClick={handleEndClick}>
                  {endDate ? endDate.format('YY.MM.DD') : 'До'}
                  <span>
                     <CalendarIcon />
                  </span>
               </EndDateButton>

               <Popover
                  open={isEndOpen}
                  anchorEl={endAnchorEl}
                  onClose={handleEndClose}
                  anchorOrigin={{
                     vertical: 'bottom',
                     horizontal: 'left',
                  }}
                  PaperProps={{
                     style: {
                        borderRadius: '8px',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                     },
                  }}
               >
                  <LocalizationProvider
                     dateAdapter={AdapterDayjs}
                     adapterLocale="ru"
                  >
                     <DateCalendar
                        value={endDate}
                        onChange={(newValue) => {
                           setEndDate(newValue)
                           handleEndClose()
                        }}
                     />
                  </LocalizationProvider>
               </Popover>

               <LabelsSelect
                  aria-describedby={labelsPopoverId}
                  onClick={handleLabelsClick}
               >
                  All Labels
                  <span>
                     <DownIcon />
                  </span>
               </LabelsSelect>
               <Popover
                  id={labelsPopoverId}
                  open={isLabelsOpen}
                  anchorEl={labelsAnchorEl}
                  onClose={handleLabelsClose}
                  anchorOrigin={{
                     vertical: 'bottom',
                     horizontal: 'left',
                  }}
                  transformOrigin={{
                     vertical: 'top',
                     horizontal: 'left',
                  }}
                  PaperProps={{
                     style: {
                        width: '260px',
                        borderRadius: '8px',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                     },
                  }}
               >
                  <Box sx={{ padding: '16px' }}>
                     <CheksColorsLabeles>
                        <input
                           type="checkbox"
                           onChange={() => handleLabelChange(3)}
                           checked={selectedLabels[0] === 3}
                        />
                        <StyleBoxGreen />
                     </CheksColorsLabeles>
                     <CheksColorsLabeles>
                        <input
                           type="checkbox"
                           onChange={() => handleLabelChange(4)}
                           checked={selectedLabels[0] === 4}
                        />
                        <StyleBoxOreng />
                     </CheksColorsLabeles>
                     <CheksColorsLabeles>
                        <input
                           type="checkbox"
                           onChange={() => handleLabelChange(1)}
                           checked={selectedLabels[0] === 1}
                        />
                        <StyleBoxBlue />
                     </CheksColorsLabeles>
                     <CheksColorsLabeles>
                        <input
                           type="checkbox"
                           onChange={() => handleLabelChange(2)}
                           checked={selectedLabels[0] === 2}
                        />
                        <StyleBoxRed />
                     </CheksColorsLabeles>
                  </Box>
               </Popover>
               <AssigneeSelect
                  aria-describedby={assigneePopoverId}
                  onClick={handleAssigneeClick}
               >
                  Assignee
                  <span>
                     <DownIcon />
                  </span>
               </AssigneeSelect>

               <Popover
                  id={assigneePopoverId}
                  open={isAssigneeOpen}
                  anchorEl={assigneeAnchorEl}
                  onClose={handleAssigneeClose}
                  anchorOrigin={{
                     vertical: 'bottom',
                     horizontal: 'left',
                  }}
                  transformOrigin={{
                     vertical: 'top',
                     horizontal: 'left',
                  }}
                  PaperProps={{
                     style: {
                        width: '310px',
                        maxHeight: '512px',
                        borderRadius: '8px',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        padding: '16px',
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                     },
                  }}
               >
                  <StylesInput
                     placeholder="Search"
                     iconPosition="start"
                     style={{ width: '100%', margin: '0 0 12px 0' }}
                  />

                  <StylesConteinerBoxProfilesUser
                     style={{ height: '100%', overflowY: 'auto' }}
                  >
                     <StylesBoxUsers>
                        <input type="checkbox" />
                        <StylesAvatar />
                        <Box>Unassigned</Box>
                     </StylesBoxUsers>

                     <StylesBoxUsers>
                        <input type="checkbox" />
                        <StylesAvatar />
                        <Box className="user-info">
                           <span className="user-name">Nazira</span>
                           <span className="user-email">nazira@gmail.com</span>
                        </Box>
                     </StylesBoxUsers>
                  </StylesConteinerBoxProfilesUser>
               </Popover>

               <ChecklistWrapper>
                  <input type="checkbox" />
                  <span>Checklist</span>
               </ChecklistWrapper>
            </FilterControls>
         </FilterHeader>
         <TotalBox>
            <span>
               Total: <span>{rowsLength}</span>
            </span>
         </TotalBox>
      </FilterSection>
   )
}
