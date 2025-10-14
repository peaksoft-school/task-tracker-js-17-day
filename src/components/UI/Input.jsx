import { forwardRef } from 'react'
import { InputAdornment, InputBase, styled } from '@mui/material'
import { HideIcon, SearchIcon } from '../../assets/AllExportIcon'
import { blue, grey, red } from '@mui/material/colors'

export const Input = forwardRef(function (
   {
      error = false,
      iconPosition,
      icon = <SearchIcon />,
      eye = <HideIcon />,
      value,
      onChange,
      type,
      onClick,

      ...rest
   },

   ref
) {
   return (
      <>
         <StyledInput
            error={error}
            onClick={onClick} 
            inputRef={ref}
            startAdornment={
               iconPosition === 'start' ? (
                  <InputAdornment position="start">{icon}</InputAdornment>
               ) : null
            }
            endAdornment={
               iconPosition === 'end' ? (
                  <InputAdornment position="end">{icon}</InputAdornment>
               ) : null
            }
            fullWidth
            value={value}
            onChange={onChange}
            type={type}
            {...rest}
         />
      </>
   )
})

const StyledInput = styled(InputBase)(({ error, theme }) => {
   return {
      gap: 8,
      padding: '6px 16px 6px 16px',
      border: `1px solid ${error ? red[500] : grey[400]}`,
      borderRadius: 8,
      '&:hover': {
         border: `1px solid ${error ? red[500] : blue[500]}`,
      },
      '&:focus-within': {
         border: `1px solid ${error ? red[500] : theme.palette.secondary.grey}`,
      },
   }
})
