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
import { rows } from './issues.data'

export const IssuesFilterBar = ({
   rowsLength,
   startDate,
   setStartDate,
   endDate,
   setEndDate,

   selectedLabels,
   setSelectedLabels,
   selectedAssignees,
   setSelectedAssignees,
   showWithChecklist,
   setShowWithChecklist,
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

   // --- Обработчики для "Start Date" ---
   const handleStartClick = (event) => {
      setStartAnchorEl(event.currentTarget)
   }
   const handleStartClose = () => {
      setStartAnchorEl(null)
   }
   const isStartOpen = Boolean(startAnchorEl)

   // --- Обработчики для "End Date" ---
   const handleEndClick = (event) => {
      setEndAnchorEl(event.currentTarget)
   }
   const handleEndClose = () => {
      setEndAnchorEl(null)
   }
   const isEndOpen = Boolean(endAnchorEl)
   return (
      <FilterSection>
         <FilterHeader>
            <FilterTitle>
               <p>View all issues</p>
            </FilterTitle>
            <FilterControls>
               {/* ================== Start Date ================== */}
               <StartDateButton onClick={handleStartClick}>
                  {startDate ? startDate.format('DD.MM.YY') : '00.00.00'}
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

               {/* ================== End Date ================== */}
               <EndDateButton onClick={handleEndClick}>
                  {endDate ? endDate.format('DD.MM.YY') : 'До'}
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

               {/* Labels ----------Btn------------- Labels */}
               <LabelsSelect
                  aria-describedby={labelsPopoverId}
                  onClick={handleLabelsClick}
               >
                  All Labels
                  <span>
                     <DownIcon />
                  </span>
               </LabelsSelect>
               {/* Labels ----------Popover (ВМЕСТО MODAL)------------- Labels -----------*/}
               <Popover
                  id={labelsPopoverId}
                  open={isLabelsOpen} // 👈 ОБНОВЛЕНО
                  anchorEl={labelsAnchorEl} // 👈 "Якорь" - наша кнопка
                  onClose={handleLabelsClose} // 👈 Обработчик закрытия
                  anchorOrigin={{
                     // 👈 Откуда "растет" Popover
                     vertical: 'bottom',
                     horizontal: 'left',
                  }}
                  transformOrigin={{
                     // 👈 Точка "привязки" на самом Popover
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
                     <CheksNoLabeles>
                        <input type="checkbox" />
                        <span>No labels</span>{' '}
                        {/* 👈 Исправлена опечатка "ladels" */}
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
               </Popover>
               {/* Assignee ----------Btn------------- Assignee */}
               <AssigneeSelect
                  aria-describedby={assigneePopoverId}
                  onClick={handleAssigneeClick}
               >
                  Assignee
                  <span>
                     <DownIcon />
                  </span>
               </AssigneeSelect>

               {/* Assignee ----------Popover (ВМЕСТО MODAL)------------- Assignee ----------- */}
               <Popover // 👈 ЗАМЕНА
                  id={assigneePopoverId}
                  open={isAssigneeOpen} // 👈 ОБНОВЛЕНО
                  anchorEl={assigneeAnchorEl} // 👈 "Якорь"
                  onClose={handleAssigneeClose} // 👈 Обработчик закрытия
                  anchorOrigin={{
                     vertical: 'bottom',
                     horizontal: 'left',
                  }}
                  transformOrigin={{
                     vertical: 'top',
                     horizontal: 'left',
                  }}
                  // 🔽 Используем PaperProps для стилизации, как на скриншоте
                  PaperProps={{
                     style: {
                        width: '310px', // Ширина из вашего CustomModalAssignee
                        maxHeight: '512px', // Высота из вашего CustomModalAssignee
                        borderRadius: '8px',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        padding: '16px', // 👈 Добавляем отступы
                        boxSizing: 'border-box',
                        display: 'flex', // 👈 Важно для компоновки
                        flexDirection: 'column', // 👈 Важно для компоновки
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
                     {/* --- Unassigned --- */}
                     <StylesBoxUsers>
                        <input type="checkbox" />
                        <StylesAvatar />
                        {/* <--- Аватар по умолчанию */}
                        <Box>Unassigned</Box>
                     </StylesBoxUsers>

                     {/* --- User Example --- */}
                     <StylesBoxUsers>
                        <input type="checkbox" />
                        <StylesAvatar />
                        <Box className="user-info">
                           <span className="user-name">Nazira</span>
                           <span className="user-email">nazira@gmail.com</span>
                        </Box>
                     </StylesBoxUsers>

                     {/* ... (тут будет map по вашим юзерам) ... */}
                  </StylesConteinerBoxProfilesUser>
               </Popover>

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
   )
}
