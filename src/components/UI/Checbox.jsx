import { Box, Button, Checkbox, Radio } from '@mui/material'
import React from 'react'

export const Checbox = ({...props}) => {
   return (
      <div>
         <Box>
            <Checkbox 
            {...props}/>
         </Box>
      </div>
   )
}
