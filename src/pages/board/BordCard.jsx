import React, { useEffect, useState } from 'react'
import { Box, Typography, TextField, IconButton, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch, useSelector } from 'react-redux'
import { COLUMN_THUNK } from '../../store/slices/column/columnThunk'
import { ThreeDotsIcon } from '../../assets/AllExportIcon'
import { Card } from '../card/Card'
import { CustomModal } from '../../components/UI/modal/Modal'
import { createCardThunk } from '../../store/slices/card/cardThunk'

export default function BordCard({ IdBoard }) {
   const [modalOpen, setModalOpen] = useState(false)
   const [open, setOpen] = useState(false)
   const [name, setName] = useState('')
   const dispatch = useDispatch()
   const columns = useSelector((state) => state.column.columns)
   const firstColumnId = columns[0]?.id
   // console.log('firstColumnId', firstColumnId)

   const handleOpen = () => setOpen(true)
   const handleClose = () => setOpen(false)
   const hadlerOpenModal = async (colId) => {
      setModalOpen((prev) => !prev)

      // ждем, пока thunk выполнится
      await dispatch(
         createCardThunk({
            columnId: colId,
            title: 'New card',
         })
      )
      console.log(colId, 'colId')
   }

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
         {columns.map((col) => {
            const titleObj = JSON.parse(col.title) // превращаем строку JSON в объект
            return (
               <StyledFormContainer key={col.id}>
                  <StyledBoxNweContainerHeader>
                     <StyledTypographyTitle>
                        {titleObj.name}
                     </StyledTypographyTitle>
                     <ThreeDotsIcon />
                  </StyledBoxNweContainerHeader>
                  {/* <StyledBoxContainerZadacha onClick={hadlerOpenModal}>
                     <StyledTypographyTitle></StyledTypographyTitle>
                  </StyledBoxContainerZadacha> */}
                  <button onClick={() => hadlerOpenModal(col.id)}>
                     + Add a card
                  </button>
               </StyledFormContainer>
            )
         })}

         {modalOpen && (
            <CustomModal isVisible={modalOpen} handleVisible={hadlerOpenModal}>
               <StyledModalBox>
                  <Card handler={hadlerOpenModal} />
               </StyledModalBox>
            </CustomModal>
         )}

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
      </StyledBoxColumnContainer>
   )
}

const StyledModalBox = styled(Box)(() => ({
   width: '1000px',
   height: '450px',
}))

const StyledBoxContainerZadacha = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   padding: '10px 8px',
   backgroundColor: '#fff',
   width: '264px',
   height: '100%',
}))

const StyledTypographyTitle = styled(Typography)(() => ({
   fontSize: '16px',
   fontWeight: '500',
   color: '#121212',
}))

const StyledBoxNweContainerHeader = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
}))

const StyledBoxColumnContainer = styled(Box)(() => ({
   display: 'grid',
   gridTemplateColumns: '1fr 1fr 1fr',
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
   height: '44px',
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
   padding: '0 10px 10px 10px',
}))

const FormHeader = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
}))
