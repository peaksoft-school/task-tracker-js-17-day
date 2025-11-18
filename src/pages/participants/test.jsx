import React from 'react'
import {
   AssigneeSelect,
   ChecklistWrapper,
   CheksColorsLabeles,
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
} from '../all-issuis/issues.styles'
import { CalendarIcon, DownIcon } from '../../assets/AllExportIcon'
import { Box, Popover } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'

function TableParticipantsPage() {
   return (
      <FilterSection>
         <FilterHeader>
            <FilterTitle>
               <p>View all issues</p>
            </FilterTitle>
            <FilterControls>
               <StartDateButton onClick={null}>
                  <span>
                     <CalendarIcon />
                  </span>
               </StartDateButton>

               <Popover
                  open={null}
                  anchorEl={null}
                  onClose={null}
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
                  <LocalizationProvider dateAdapter={null} adapterLocale="ru">
                     <DateCalendar
                        value={null}
                        onChange={(newValue) => {
                           setStartDate(newValue)
                           handleStartClose()
                        }}
                     />
                  </LocalizationProvider>
               </Popover>

               <EndDateButton onClick={null}>
                  <span>
                     <CalendarIcon />
                  </span>
               </EndDateButton>

               <Popover
                  open={null}
                  anchorEl={null}
                  onClose={null}
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
                  <LocalizationProvider dateAdapter={null} adapterLocale="ru">
                     <DateCalendar
                        value={null}
                        onChange={(newValue) => {
                           setEndDate(newValue)
                           handleEndClose()
                        }}
                     />
                  </LocalizationProvider>
               </Popover>

               <LabelsSelect aria-describedby={null} onClick={null}>
                  All Labels
                  <span>
                     <DownIcon />
                  </span>
               </LabelsSelect>
               <Popover
                  id={null}
                  open={null}
                  anchorEl={null}
                  onClose={null}
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
                           checked={null}
                        />
                        <StyleBoxGreen />
                     </CheksColorsLabeles>
                     <CheksColorsLabeles>
                        <input
                           type="checkbox"
                           onChange={() => handleLabelChange(4)}
                           checked={null}
                        />
                        <StyleBoxOreng />
                     </CheksColorsLabeles>
                     <CheksColorsLabeles>
                        <input
                           type="checkbox"
                           onChange={() => handleLabelChange(1)}
                           checked={null}
                        />
                        <StyleBoxBlue />
                     </CheksColorsLabeles>
                     <CheksColorsLabeles>
                        <input
                           type="checkbox"
                           onChange={() => handleLabelChange(2)}
                           checked={null}
                        />
                        <StyleBoxRed />
                     </CheksColorsLabeles>
                  </Box>
               </Popover>
               <AssigneeSelect aria-describedby={null} onClick={null}>
                  Assignee
                  <span>
                     <DownIcon />
                  </span>
               </AssigneeSelect>

               <Popover
                  id={null}
                  open={null}
                  anchorEl={null}
                  onClose={null}
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
                        <input type="checkbox" checked={null} />
                        <StylesAvatar />
                        <Box>Unassigned</Box>
                     </StylesBoxUsers>
                     {/* {  .map((assignee) => (
                        <StylesBoxUsers>
                           <input
                              type="checkbox"
                              onChange={() => handleAssigneeChange(assignee.id)}
                              checked={selectedAssignees[0] === assignee.id}
                           />
                           <StylesAvatar src={assignee.avatarUrl} />
                           <Box className="user-info">
                              <span className="user-name">
                                 {assignee.firstName} {assignee.lastName}
                              </span>
                              <span className="user-email">
                                 {assignee.email}
                              </span>
                           </Box>
                        </StylesBoxUsers>
                     ))} */}
                  </StylesConteinerBoxProfilesUser>
               </Popover>

               <ChecklistWrapper>
                  <input type="checkbox" onChange={null} checked={null} />
                  <span>Checklist</span>
               </ChecklistWrapper>
            </FilterControls>
         </FilterHeader>
         <TotalBox>
            <span>
               Total: <span>{null}</span>
            </span>
         </TotalBox>
      </FilterSection>
   )
}

export default TableParticipantsPage
