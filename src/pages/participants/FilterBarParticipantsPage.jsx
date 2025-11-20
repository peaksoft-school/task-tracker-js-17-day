import { Box, styled, Menu, MenuItem } from '@mui/material'
import { FilterTitle, TotalBox } from '../all-issuis/issues.styles'
import { DownIcon } from '../../assets/AllExportIcon'
import { AppButton } from '../../components/UI/AppButton'
import { CustomModal } from '../../components/UI/modal/Modal'
import { useState } from 'react'
import ModalCrateParticipans from './ModalParticipans/ModalCrateParticipans'

function FilterBarParticipantsPage({ totalCount, workspaceId }) {
   const [createModalParticipans, setCreateModalParticipans] = useState(false)

   // Состояние для меню фильтрации
   const [anchorEl, setAnchorEl] = useState(null)
   const openFilter = Boolean(anchorEl)

   const OpenCreateParticipans = () =>
      setCreateModalParticipans((prev) => !prev)

   // Открытие меню
   const handleFilterClick = (event) => {
      setAnchorEl(event.currentTarget)
   }

   // Закрытие меню
   const handleFilterClose = () => {
      setAnchorEl(null)
   }

   return (
      <FilterParticipantsPage>
         <FilterHeader>
            <FilterTitle>
               <p>View all issues</p>
            </FilterTitle>
            <FilterControls>
               {/* Кнопка-триггер для меню */}
               <LabelsSelect onClick={handleFilterClick}>
                  Role
                  <span>
                     <DownIcon />
                  </span>
               </LabelsSelect>

               {/* Само выпадающее меню */}
               <StyledMenu
                  anchorEl={anchorEl}
                  open={openFilter}
                  onClose={handleFilterClose}
                  anchorOrigin={{
                     vertical: 'bottom',
                     horizontal: 'left',
                  }}
                  transformOrigin={{
                     vertical: 'top',
                     horizontal: 'left',
                  }}
               >
                  <StyledMenuItem onClick={handleFilterClose}>
                     All
                  </StyledMenuItem>
                  <StyledMenuItem onClick={handleFilterClose}>
                     Admin
                  </StyledMenuItem>
                  <StyledMenuItem onClick={handleFilterClose}>
                     Member
                  </StyledMenuItem>
               </StyledMenu>

               <CrateAppButton onClick={OpenCreateParticipans}>
                  Create
               </CrateAppButton>

               <CustomModalCrate
                  isVisible={createModalParticipans}
                  handleVisible={OpenCreateParticipans}
               >
                  <ModalCrateParticipans
                     onClose={OpenCreateParticipans}
                     workspaceId={workspaceId}
                  />
               </CustomModalCrate>
            </FilterControls>
         </FilterHeader>
         <TotalBox>
            <span>
               Total: <span>{totalCount}</span>
            </span>
         </TotalBox>
      </FilterParticipantsPage>
   )
}

export default FilterBarParticipantsPage

const commonButtonStyle = {
   height: '36px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   borderRadius: '8px',
   border: '1px solid rgba(208,208,208,1)',
   padding: '7px 14px 7px 16px',
   cursor: 'pointer',
}

const FilterParticipantsPage = styled(Box)({
   width: 'null',
   marginLeft: '16px',
})

const FilterHeader = styled(Box)({
   margin: '16px 16px 0px 0px ',
   height: '36px',
   display: 'flex',
   alignItems: 'center',
})

const FilterControls = styled(Box)({
   width: '100%',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
})

const LabelsSelect = styled(Box)({
   ...commonButtonStyle,
   width: '154px',
   padding: '9px 14px 9px 16px',
   transition: 'background 0.2s',
   '&:hover': {
      backgroundColor: '#f9f9f9',
   },
})

const StyledMenu = styled(Menu)({
   marginTop: '2px',
   '& .MuiPaper-root': {
      width: '165px',
      height: '130px',
      borderRadius: '10px',
      boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
      padding: 0,
      overflow: 'hidden',
   },
   '& .MuiList-root': {
      padding: 0,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
   },
})

const StyledMenuItem = styled(MenuItem)({
   fontSize: '16px',
   padding: '10px 15px',
   color: '#1C1C1C',
   '&:hover': {
      backgroundColor: '#F3F4F6',
   },
})

const CrateAppButton = styled(AppButton)({})

const CustomModalCrate = styled(CustomModal)({})
