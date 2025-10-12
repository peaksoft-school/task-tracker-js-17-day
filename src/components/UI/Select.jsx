import { useState } from 'react'
import {
   MenuItem,
   FormControl,
   Select as MuiSelect,
   styled,
} from '@mui/material'

export const Select = ({ options = [], label = 'Select', value, onChange }) => {
   const [selected, setSelected] = useState(value || '')

   const handleChange = (e) => {
      setSelected(e.target.value)

      if (onChange) onChange(e.target.value)
   }

   return (
      <StyledFormControl>
         <StyledMuiSelect
            value={selected}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': label }}
         >
            <MenuItem value="">
               <em>{label}</em>
            </MenuItem>

            {options.map((option) => (
               <MenuItem key={option.value} value={option.value}>
                  {option.label}
               </MenuItem>
            ))}
         </StyledMuiSelect>
      </StyledFormControl>
   )
}

const StyledFormControl = styled(FormControl)({
   maxWidth: '165px',
   width: '100%',
})

const StyledMuiSelect = styled(MuiSelect)({
   borderRadius: '8px',
})
