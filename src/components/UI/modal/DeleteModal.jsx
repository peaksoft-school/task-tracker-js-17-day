import { Modal as MuiModal, Box, IconButton, styled } from '@mui/material'
import { ExitIcon } from '../../assets/AllExportIcon'
import { AppButton } from '../UI/AppButton'

const DeleteModal = ({ children, isVisible, handleVisible, onDelete }) => (
   <StyledModal
      open={isVisible}
      onClose={handleVisible}
      aria-labelledby="delete-title"
      aria-describedby="delete-desc"
      aria-hidden={!isVisible}
      inert={!isVisible ? '' : undefined}
      disableEnforceFocus
      keepMounted
   >
      <ContentBox>
         <Header>
            <IconButton aria-label="close" onClick={handleVisible} size="small">
               <ExitIcon />
            </IconButton>
         </Header>

         <Body>{children}</Body>

         <Actions>
            <AppButton onClick={handleVisible}>Cancel</AppButton>
            <AppButton
               variant="contained"
               color="error"
               onClick={onDelete}
               className="delete-btn"
            >
               Delete
            </AppButton>
         </Actions>
      </ContentBox>
   </StyledModal>
)

export default DeleteModal

const StyledModal = styled(MuiModal)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
})

const ContentBox = styled(Box)({
   minWidth: 320,
   maxWidth: 420,
   width: '90%',
   background: '#fff',
   borderRadius: 10,
   boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
   padding: 20,
   animation: 'fadeIn 0.25s ease-in-out',
   '@keyframes fadeIn': {
      from: { opacity: 0, transform: 'translateY(-6px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
   },
   display: 'flex',
   flexDirection: 'column',
   gap: 16,
})

const Header = styled('div')({
   display: 'flex',
   justifyContent: 'flex-end',
})

const Body = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   textAlign: 'center',
   gap: 8,
})

const Actions = styled('div')({
   display: 'flex',
   justifyContent: 'center',
   gap: 12,

   '.delete-btn': {
      backgroundColor: 'red',
   },
})
