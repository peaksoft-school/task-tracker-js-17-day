import { Box, styled } from '@mui/material'
import { FilterTitle, TotalBox } from '../all-issuis/issues.styles'
import { DownIcon } from '../../assets/AllExportIcon'
import { AppButton } from '../../components/UI/AppButton'
import { CustomModal } from '../../components/UI/modal/Modal'
import { useState } from 'react'
import ModalCrateParticipans from './ModalParticipans/ModalCrateParticipans'

function FilterBarParticipantsPage() {
   const [createModalParticipans, setCreateModalParticipans] = useState(false)

   const OpenCreateParticipans = () =>
      setCreateModalParticipans((prev) => !prev)

   return (
      <FilterParticipantsPage>
         <FilterHeader>
            <FilterTitle>
               <p>View all issues</p>
            </FilterTitle>
            <FilterControls>
               <LabelsSelect>
                  Role
                  <span>
                     <DownIcon />
                  </span>
               </LabelsSelect>

               <CrateAppButton onClick={OpenCreateParticipans}>
                  Create
               </CrateAppButton>

               <CustomModalCrate
                  isVisible={createModalParticipans}
                  handleVisible={OpenCreateParticipans}
               >
                  <ModalCrateParticipans onClose={OpenCreateParticipans} />
               </CustomModalCrate>
            </FilterControls>
         </FilterHeader>
         <TotalBox>
            <span>
               Total: <span>{null}</span>
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
})

const CrateAppButton = styled(AppButton)({})

const CustomModalCrate = styled(CustomModal)({})
