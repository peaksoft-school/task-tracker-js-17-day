import { toast } from 'react-toastify'
import { Box, Typography, styled } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import {
   DoneNotificationIcon,
   ErrorNotificationIcon,
   ExitIcon,
   WarningNotificationIcon,
} from '../../assets/AllExportIcon'

const CustomToastContent = ({
   closeToast,
   toastProps,
   isPaused,
   title,
   message,
   icon,
   type,
   ...rest
}) => (
   <StyledBox {...rest}>
      <StyledIcon className={type}> {icon}</StyledIcon>

      <Box>
         <StyledTitle variant="h1" className={type}>
            {title}
         </StyledTitle>
         <StyledMessage className={type}>{message}</StyledMessage>
      </Box>
   </StyledBox>
)

export const showNotification = ({
   title = 'Success',
   message = 'Successfully',
   type = 'success',
   duration = 4000,
}) => {
   let icon

   if (type === 'success') {
      icon = <DoneNotificationIcon />
   } else if (type === 'error') {
      icon = <ErrorNotificationIcon />
      //  icon = <ErrorNotificationIcon customFrame="true" />
   } else if (type === 'warning') {
      icon = <WarningNotificationIcon color="inherit" />
   } else if (type === 'info') {
      icon = <InfoIcon sx={{ color: 'blue' }} />
   }

   toast[type](
      <CustomToastContent
         title={title}
         message={message}
         icon={icon}
         type={type}
      />,
      {
         autoClose: duration,
         closeOnClick: true,
         closeToast: <ExitIcon />,
      }
   )
}

const StyledIcon = styled(Box)(() => ({
   '&.info': {
      position: 'absolute',
      top: '12px',
      left: '20px',
   },

   '&.success': {
      position: 'absolute',
      top: '12px',
      left: '20px',
   },

   '&.error': {
      position: 'absolute',
      top: '12px',
      left: '20px',
   },

   '&.warning': {
      position: 'absolute',
      top: '12px',
      left: '20px',
      color: '#8caaec',

      '& > .MuiCircularProgress-root': {
         width: '1.6rem !important',
         height: '1.6rem !important',
      },
   },
}))

const StyledBox = styled(Box)(() => ({
   display: 'flex',
   gap: '12px',
   alignItems: 'start',
}))

const StyledTitle = styled(Typography)(() => ({
   position: 'relative',
   fontFamily: 'Gilroy',
   fontSize: '18px',
   fontWeight: 400,
   paddingLeft: '2rem',
   fontFamily: 'Cera Pro, sans-serif',
   lineHeight: '100%',

   '&.info': {
      color: '#053c89ff',
   },

   '&.success': {
      color: '#218905',
   },

   '&.error': {
      color: '#D91212',
   },

   '&.warning': {
      color: '#EB8900',
   },
}))

const StyledMessage = styled(Typography)(() => ({
   marginTop: '0.5rem',
   width: '100%',
   height: '100%',
   wordWrap: 'break-word',
   fontSize: '1rem',
   fontWeight: 400,
   padding: '0 2rem',
   textOverflow: 'ellipsis',
   overflow: 'hidden',
   fontFamily: 'Cera Pro, sans-serif',
   lineHeight: '100%',

   '&.info': {
      color: '#5998c5ff',
   },

   '&.success': {
      color: '#71C559',
   },

   '&.error': {
      color: '#E77A7A',
   },

   '&.warning': {
      color: '#EDA034',
   },
}))
