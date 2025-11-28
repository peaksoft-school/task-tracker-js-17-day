import { Modal as MuiModal, Box, styled } from '@mui/material'

const CustomModal = ({ open, onClose, children, title, ...props }) => (
   <StyledModal
      open={open} // isvisble
      onClose={onClose} // handlevisble
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      aria-hidden={!open}
      inert={!open ? '' : undefined}
      disableEnforceFocus
      {...props}
   >
      <ContentBox>
         {/* ваше содержимое */}
         {children}
      </ContentBox>
   </StyledModal>
)

export default CustomModal

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
