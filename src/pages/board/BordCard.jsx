import React, { useEffect, useState } from 'react'
import { Box, Typography, TextField, IconButton, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch, useSelector } from 'react-redux'
import { COLUMN_THUNK } from '../../store/slices/column/columnThunk'

export default function BordCard({ IdBoard }) {
   const [open, setOpen] = useState(false)
   const [name, setName] = useState('')
   const dispatch = useDispatch()
   const columns = useSelector((state) => state.column.columns)

   console.log(columns.map((item) => item.name), 'data0')

   const handleOpen = () => setOpen(true)
   const handleClose = () => setOpen(false)

   useEffect(() => {
      dispatch(COLUMN_THUNK.getColumnsThunk(IdBoard, dispatch))
   }, [dispatch, IdBoard])
   const handleCreate = async () => {
      if (!name.trim()) return
      await dispatch(COLUMN_THUNK.columnThunk({ id: IdBoard, name }))
      setName('')
      setOpen(false)
   }

   return (
      <StyledBoxColumnContainer>
         {!open ? (
            <StyledBoxCardContainer onClick={handleOpen}>
               <StyledTypographyButton>+ Add a column</StyledTypographyButton>
            </StyledBoxCardContainer>
         ) : (
            <StyledFormContainer>
               <FormHeader>
                  <StyledTypography>Name of the column</StyledTypography>
                  <IconButton onClick={handleClose} size="small">
                     <CloseIcon fontSize="small" />
                  </IconButton>
               </FormHeader>

               <StyledTextField
                  placeholder="Name"
                  size="small"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
               />

               <StyledButton variant="contained" onClick={handleCreate}>
                  Create
               </StyledButton>
            </StyledFormContainer>
         )}
         <StyledFormContainer>
            <Typography>{}</Typography>
         </StyledFormContainer>
      </StyledBoxColumnContainer>
   )
}
const StyledBoxColumnContainer = styled(Box)(() => ({
   display: 'grid',
   gridTemplateColumns:'1fr 1fr 1fr',
   gap: '8px',
}))

const StyledTypography = styled(Typography)(() => ({
   fontSize: '14px',
   color: '#8c8c8c',
}))

const StyledTextField = styled(TextField)(() => ({
   width: '100%',
   backgroundColor: '#f9f9f9',
   borderRadius: '8px',
   mb: 2,
   '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
   },
}))

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
