import React, { useState } from 'react'
import { Box, Typography, TextField, IconButton, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'

export default function BordCard() {
   const [open, setOpen] = useState(false)
   const [name, setName] = useState('')

   const handleOpen = () => setOpen(true)
   const handleClose = () => setOpen(false)

   const handleCreate = () => {
      console.log('Создана колонка:', name)
      setName('')
      setOpen(false)
   }

   return (
      <Box>
         {!open ? (
            <StyledBoxCardContainer onClick={handleOpen}>
               <StyledTypographyButton>+ Add a column</StyledTypographyButton>
            </StyledBoxCardContainer>
         ) : (
            <StyledFormContainer>
               <FormHeader>
                  <Typography sx={{ fontSize: '14px', color: '#8c8c8c' }}>
                     Name of the column
                  </Typography>
                  <IconButton onClick={handleClose} size="small">
                     <CloseIcon fontSize="small" />
                  </IconButton>
               </FormHeader>

               <TextField
                  placeholder="Name"
                  size="small"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  sx={{
                     width: '100%',
                     backgroundColor: '#f9f9f9',
                     borderRadius: '8px',
                     mb: 2,
                     '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                     },
                  }}
               />

               <StyledButton variant="contained" onClick={handleCreate}>
                  Create
               </StyledButton>
            </StyledFormContainer>
         )}
      </Box>
   )
}


const StyledButton = styled(Button)(() => ({
   backgroundColor: '#2f80ed',
   textTransform: 'none',
   borderRadius: '20px',
   padding: '4px 20px',
   alignSelf: 'flex-end',
}))

const StyledTypographyButton = styled(Typography)(() => ({
   color: '#000',
   fontSize: '16px',
   fontWeight: 400,
   cursor: 'pointer',
}))

const StyledBoxCardContainer = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#e6e6e6',
   color: 'black',
   width: '280px',
   padding: '11px 16px',
   borderRadius: '8px',
   cursor: 'pointer',
}))

const StyledFormContainer = styled(Box)(() => ({
   backgroundColor: '#e6e6e6',
   width: '280px',
   display: 'flex',
   flexDirection: 'column',
   gap: '8px',
   padding: '12px',
   borderRadius: '8px',
}))

const FormHeader = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
}))
