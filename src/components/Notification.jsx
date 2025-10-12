import { styled } from '@mui/material'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Notification = () => (
   <StyledToastContainer hideProgressBar={false} icon={false} limit={1} />
)

export default Notification

const StyledToastContainer = styled(ToastContainer)(() => ({
   maxWidth: '350px',
   width: '22rem',

   '& > div >  div > .Toastify__progress-bar--error': {
      background: 'none',
   },

   '& > div >  div > .Toastify__progress-bar--info': {
      background: 'none',
   },

   '& > div >  div > .Toastify__progress-bar--success': {
      background: 'none',
   },

   '& > div > div > .Toastify__progress-bar--warning': {
      background: 'none',
   },

   '& > .Toastify__toast--info': {
      backgroundColor: '#ffffff',
      border: '1px solid #8caaec',
      padding: '12px 20px',
      borderRadius: '8px',
   },

   '& > .Toastify__toast--warning': {
      backgroundColor: '#ffffff',
      border: '1px solid #EB8900',
      padding: '12px 20px',
      borderRadius: '8px',
   },

   '& > .Toastify__toast--success': {
      backgroundColor: '#ffffff',
      border: '1px solid #2CB107',
      padding: '12px 20px',
      borderRadius: '8px',
   },

   '& > .Toastify__toast--error': {
      backgroundColor: '#ffffff',
      border: '1px solid #D91212',
      padding: '12px 20px',
      borderRadius: '8px',
   },

   '& > div > .Toastify__close-button': {
      width: '1.5rem',
      height: '1.5rem',
      position: 'absolute',
      top: '0.4rem',
      right: '0.3rem',

      '&:hover > path': {
         fill: '#85CE71',
      },

      '& > path': {
         fill: '#85CE71',
      },
   },
}))
