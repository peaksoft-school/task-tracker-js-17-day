import { Box, styled } from '@mui/material'
import React, { useState } from 'react'
import { AppButton } from '../AppButton'
import { CustomModal } from '../modal/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { MAIN_THUNK } from '../../../store/slices/workspaces/mainThunk'

function SidebarSettingModal({ id, workspaceName, onClose }) {
   const dispatch = useDispatch()
   const { token } = useSelector((state) => state.auth) 

   const [openDeleteWorkspace, setOpenDeleteWorkspace] = useState(false)

   const toggleDeleteModal = () => {
      setOpenDeleteWorkspace((prev) => !prev)
   }

   const handleDelete = () => {
      if (id && token) {
         dispatch(MAIN_THUNK.deleteWorkspace({ id, token }))
            .unwrap()
            .then(() => {
               toggleDeleteModal() 
               if (onClose) onClose() 
            })
            .catch((err) => console.error(err))
      }
   }
   return (
      <BoxSidebarSetting>
         <Title>Setting</Title>
         <StyledInput defaultValue={workspaceName} />
         <DeleteText onClick={toggleDeleteModal}>
            Delete this workspace?
         </DeleteText>

         <CustomModal
            isVisible={openDeleteWorkspace}
            handleVisible={toggleDeleteModal}
         >
            <BoxDeleteWorkspace>
               <Title>Delete workspace</Title>
               <DeleteWorkspaceText>
                  Are you sure to delete this workspace?
               </DeleteWorkspaceText>

               <ButtonContainer>
                  <AppButton
                     onClick={toggleDeleteModal}
                     sx={{
                        backgroundColor: 'rgba(245, 245, 245, 1)',
                        color: 'rgba(141, 147, 153, 1)',
                        fontSize: '14px',
                        fontWeight: '400',
                        borderRadius: '24px',
                        padding: '8px 16px',
                        '&:hover': {
                           backgroundColor: 'rgba(230, 230, 230, 1)',
                        },
                     }}
                  >
                     Cancel
                  </AppButton>

                  <AppButton
                     onClick={handleDelete}
                     sx={{
                        backgroundColor: '#D91212',
                        color: '#ffffff',
                        fontSize: '14px',
                        fontWeight: '400',
                        borderRadius: '24px',
                        padding: '8px 16px',
                        '&:hover': {
                           backgroundColor: '#cd2b2b',
                        },
                     }}
                  >
                     Delete
                  </AppButton>
               </ButtonContainer>
            </BoxDeleteWorkspace>
         </CustomModal>
         <ButtonContainer>
            <AppButton
               onClick={onClose}
               sx={{
                  backgroundColor: 'rgba(245, 245, 245, 1)',
                  color: 'rgba(141, 147, 153, 1)',
                  fontSize: '14px',
                  fontWeight: '400',
                  borderRadius: '24px',
                  padding: '8px 16px',
                  '&:hover': {
                     backgroundColor: 'rgba(230, 230, 230, 1)',
                  },
               }}
            >
               Cancel
            </AppButton>
            <AppButton>Save</AppButton>
         </ButtonContainer>
      </BoxSidebarSetting>
   )
}

export default SidebarSettingModal

const BoxDeleteWorkspace = styled(Box)({
   width: '328px',
   display: 'flex',
   flexDirection: 'column',
   gap: '16px',
})
const BoxSidebarSetting = styled(Box)({
   width: '477px',
   display: 'flex',
   flexDirection: 'column',
   gap: '16px',
})

const Title = styled('p')({
   fontFamily: 'Inter, sans-serif',
   fontSize: '18px',
   fontWeight: 500,
   textAlign: 'center',
   margin: 0,
   color: '#333',
})

const DeleteWorkspaceText = styled('p')({
   fontFamily: 'Inter, sans-serif',
   fontSize: '16px',
   textAlign: 'center',
   color: '#555',
   margin: 0,
})

const StyledInput = styled('input')({
   width: '100%',
   padding: '12px 16px',
   borderRadius: '8px',
   border: '1px solid rgba(224, 224, 224, 1)',
   boxSizing: 'border-box',
   fontSize: '16px',
   fontFamily: 'inherit',
   outline: 'none',
   '&:focus': {
      borderColor: 'rgba(0, 121, 191, 1)',
   },
})

const DeleteText = styled('div')({
   fontFamily: 'Inter, sans-serif',
   fontSize: '14px',
   color: 'red',
   margin: 0,
   cursor: 'pointer',
   alignSelf: 'flex-start',
   '&:hover': {
      textDecoration: 'underline',
   },
})

const ButtonContainer = styled(Box)({
   display: 'flex',
   justifyContent: 'flex-end',
   gap: '12px',
   marginTop: '24px',
})
