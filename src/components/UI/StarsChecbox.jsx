import React from 'react'
import GradeIcon from '@mui/icons-material/Grade'
import { Box, Checkbox } from '@mui/material'

export const StarsChecbox = ({...props}) => {
  return (
    <Box>
           <Checkbox {...props} icon={<GradeIcon />} checkedIcon={<GradeIcon />} />
    </Box>
  )
}
