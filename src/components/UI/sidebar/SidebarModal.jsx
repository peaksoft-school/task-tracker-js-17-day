import { Box, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AppButton } from '../AppButton'
import { useDispatch, useSelector } from 'react-redux'
import { MAIN_THUNK } from '../../../store/slices/workspaces/mainThunk'
import CustomModal from '../modal/Modal'

function SidebarSettingModal({ id, workspaceName, onClose }) {
   const dispatch = useDispatch()
   const { token } = useSelector((state) => state.auth)
   const { main } = useSelector((state) => state.main)

   const [inputValue, setInputValue] = useState(workspaceName || '')

   const [openDeleteWorkspace, setOpenDeleteWorkspace] = useState(false)

   useEffect(() => {
      setInputValue(workspaceName || '')
   }, [workspaceName])

   const toggleDeleteModal = () => {
      setOpenDeleteWorkspace((prev) => !prev)
   }

   const handleDelete = () => {
      const targetWorkspace = main?.find((w) => w.name === inputValue)
      const idToDelete = targetWorkspace ? targetWorkspace.id : id

      if (idToDelete && token) {
         dispatch(MAIN_THUNK.deleteWorkspace({ id: idToDelete, token }))
            .unwrap()
            .then(() => {
               setOpenDeleteWorkspace(false)
               if (onClose) onClose()
            })
            .catch((err) => console.error(err))
      } else {
         console.error('Workspace с таким именем не найден')
      }
   }
   return (
      <BoxSidebarSetting>
         <Title>Setting</Title>
         <StyledInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter workspace name"
         />

         <CustomModal open={openDeleteWorkspace} onClose={toggleDeleteModal}>
            <BoxDeleteWorkspace>
               <Title>Delete workspace</Title>
               <DeleteWorkspaceText>
                  Are you sure to delete this workspace "{inputValue}"?
               </DeleteWorkspaceText>

               <ButtonContainer>
                  <AppButtonCancel onClick={toggleDeleteModal}>
                     Cancel
                  </AppButtonCancel>

                  <AppButtonDelete onClick={handleDelete}>
                     Delete
                  </AppButtonDelete>
               </ButtonContainer>
            </BoxDeleteWorkspace>
         </CustomModal>
         <ButtonContainer>
            <AppButtonSettingCancel onClick={onClose}>
               Cancel
            </AppButtonSettingCancel>
            <AppButtonDelete onClick={toggleDeleteModal}>
               Delete
            </AppButtonDelete>
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

const ButtonContainer = styled(Box)({
   display: 'flex',
   justifyContent: 'flex-end',
   gap: '12px',
   marginTop: '24px',
})

const AppButtonCancel = styled(AppButton)({
   backgroundColor: 'rgba(245, 245, 245, 1)',
   color: 'rgba(141, 147, 153, 1)',
   fontSize: '14px',
   fontWeight: '400',
   borderRadius: '24px',
   padding: '8px 16px',
   '&:hover': {
      backgroundColor: 'rgba(230, 230, 230, 1)',
   },
})

const AppButtonDelete = styled(AppButton)({
   backgroundColor: '#D91212',
   color: '#ffffff',
   fontSize: '14px',
   fontWeight: '400',
   borderRadius: '24px',
   padding: '8px 16px',
   '&:hover': {
      backgroundColor: '#cd2b2b',
   },
})

const AppButtonSettingCancel = styled(AppButton)({
   backgroundColor: 'rgba(245, 245, 245, 1)',
   color: 'rgba(141, 147, 153, 1)',
   fontSize: '14px',
   fontWeight: '400',
   borderRadius: '24px',
   padding: '8px 16px',
   '&:hover': {
      backgroundColor: 'rgba(230, 230, 230, 1)',
   },
})
