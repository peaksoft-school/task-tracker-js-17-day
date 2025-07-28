import styled from '@emotion/styled'
import { InputAdornment, InputBase } from '@mui/material'
import React, { forwardRef } from 'react'
import { SearchIcon } from '../../../assets/AllExportIcon'
import { blue, grey, red } from '@mui/material/colors'

export const Input = forwardRef(function Input(
   { error = false, iconPosition = 'start', ...props },
   ref
) {
   return (
      <>
         <StyledInput
            {...props}
            error={error}
            inputRef={ref}
            startAdornment={
               iconPosition === 'start' ? (
                  <InputAdornment position="start">
                     <SearchIcon />
                  </InputAdornment>
               ) : null
            }
            endAdornment={
               iconPosition === 'end' ? (
                  <InputAdornment position="end">
                     <SearchIcon />
                  </InputAdornment>
               ) : null
            }
         />
      </>
   )
})

const StyledInput = styled(InputBase)(({ error }) => ({
   width: 282,
   height: 32,

   gap: 8,
   padding: '6px 16px 6px 16px',
   border: `1px solid ${grey[400]}`,
   borderRadius: 8,
   '&:hover': {
      border: `1px solid ${error ? red[500] : blue[500]}`,
   },
   '&:focus-within': {
      border: `1px solid ${error ? red[500] : grey[400]}`,
   },
}))
