import * as React from 'react'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import Stack from '@mui/material/Stack'
import {
   DoneNotificationIcon,
   ErrorNotificationIcon,
   WarningNotificationIcon,
} from '../../assets/AllExportIcon'
import CustomNotification from './CustomNotification'

export default function AlertNotification() {
   const [severity, setSeverity] = React.useState('success')
   const [open, setOpen] = React.useState(false)

   const handleClick = () => setOpen(true)
   const handleClose = () => setOpen(false)

   // Заголовки и описания под каждый тип уведомления
   const titles = {
      success: 'Avatar removed',
      error: 'Error',
      warning: 'Warning',
   }

   const descriptions = {
      success: "We've deleted your avatar.",
      error: 'Error description',
      warning: 'Warning description',
   }

   return (
      <div>
         <Stack spacing={2}>
            {/* Радио-переключатели для выбора типа */}
            <FormControl>
               <FormLabel id="alert-notification-severity">Severity</FormLabel>
               <RadioGroup
                  row
                  value={severity}
                  onChange={(event) => setSeverity(event.target.value)}
                  aria-labelledby="alert-notification-severity"
                  name="severity"
               >
                  <FormControlLabel
                     value="success"
                     control={
                        <Radio
                           icon={<DoneNotificationIcon />}
                           checkedIcon={<DoneNotificationIcon />}
                        />
                     }
                     label="Success"
                  />
                  <FormControlLabel
                     value="warning"
                     control={
                        <Radio
                           icon={<WarningNotificationIcon />}
                           checkedIcon={<WarningNotificationIcon />}
                        />
                     }
                     label="Warning"
                  />
                  <FormControlLabel
                     value="error"
                     control={
                        <Radio
                           icon={<ErrorNotificationIcon />}
                           checkedIcon={<ErrorNotificationIcon />}
                        />
                     }
                     label="Error"
                  />
               </RadioGroup>
            </FormControl>

            {/* Кнопка запуска уведомления */}
            <Button variant="contained" onClick={handleClick}>
               Notify me
            </Button>

            {/* Кастомное уведомление */}
            <CustomNotification
               open={open}
               onClose={handleClose}
               severity={severity}
               title={titles[severity]}
               description={descriptions[severity]}
            />
         </Stack>
      </div>
   )
}
