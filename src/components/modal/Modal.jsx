import { Modal as MuiModal, Box } from '@mui/material'
import styled from '@emotion/styled'

export const CustomModal = ({ children, isVisible, handleVisible }) => (
   <StyledModal
      open={isVisible}
      onClose={handleVisible}
      aria-labelledby="basic-modal-title"
      aria-describedby="basic-modal-desc"
      keepMounted
   >
      <ContentBox>{children}</ContentBox>
   </StyledModal>
)

const StyledModal = styled(MuiModal)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
})

const ContentBox = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   minWidth: 320,
   maxWidth: 420,
   width: '90%',
   boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
   padding: '24px 20px',
   outline: 'none',
   borderRadius: 10,
   background: '#fff',
   animation: 'fadeIn 0.25s ease-in-out',
   '@keyframes fadeIn': {
      from: { opacity: 0, transform: 'translateY(-6px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
   },
})
