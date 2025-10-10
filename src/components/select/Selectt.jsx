import React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import styled from '@emotion/styled'

export const Selectt = () => {
   const [age, setAge] = React.useState('')

   const handleChange = (event) => {
      setAge(event.target.value)
   }

   return (
      <div>
         <StyledFormControl>
            <StyledSelect
               value={age}
               onChange={handleChange}
               displayEmpty
               inputProps={{ 'aria-label': 'Without label' }}
            >
               <MenuItem value="">
                  <em>None</em>
               </MenuItem>
               <MenuItem value={5}>5 min. before</MenuItem>
               <MenuItem value={15}>15 min. before</MenuItem>
               <MenuItem value={30}>30 min. before</MenuItem>
               <MenuItem value={60}>1 hour before</MenuItem>
            </StyledSelect>
         </StyledFormControl>
      </div>
   )
}
const StyledFormControl = styled(FormControl)(({}) => ({
   minWidth: '100%',
}))

const StyledSelect = styled(Select)(({}) => ({
   minHeight: '32px',
   borderRadius: '8px',
}))
