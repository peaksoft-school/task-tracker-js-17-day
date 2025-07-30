import React from 'react'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import { Box, Checkbox } from '@mui/material'

export const RadioCheckbox = ({...props}) => {
   return (
      <Box>
         <Checkbox
         
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<RadioButtonCheckedIcon />}
            {...props}
         />
      </Box>
   )
}
