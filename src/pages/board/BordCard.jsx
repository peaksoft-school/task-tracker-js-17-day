import React, { useEffect, useState } from 'react'
import { Box, Typography, TextField, IconButton, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch, useSelector } from 'react-redux'
import { COLUMN_THUNK } from '../../store/slices/column/columnThunk'
import { ThreeDotsIcon } from '../../assets/AllExportIcon'
import { Card } from '../card/Card'
import { CustomModal } from '../../components/UI/modal/Modal'
import { CARD_THUNK } from '../../store/slices/card/cardThunk'
import { DndContext } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import SortableCard from '../card/SortableCard'
import { useParams } from 'react-router-dom'

export default function BordCard({ IdBoard }) {
   const [modalOpen, setModalOpen] = useState(false)
   const [open, setOpen] = useState(false)
   const [addCardOpen, setAddCardOpen] = useState({})
   const [name, setName] = useState('')
   const [titeleValue, setTiteleValue] = useState('')
   const [currentColId, setCurrentColId] = useState(null)

   const columns = useSelector((state) => state.column.columns)
   console.log(columns, 'columns')

   const { cards } = useSelector((state) => state.card)

   const { id } = useParams()

   const dispatch = useDispatch()

   const firstColumnId = columns[0]?.id

   const handleOpen = () => setOpen(true)
   const handleClose = () => setOpen(false)

   useEffect(() => {
      dispatch({ type: 'column/resetColumns' })

      dispatch(COLUMN_THUNK.getColumnsThunk({ id }))
   }, [IdBoard, dispatch])

   const handleOpenModal = (cardId) =>
      dispatch(CARD_THUNK.getCardsThunk({ cardId, setModalOpen }))

   const handleCloseModal = () => setModalOpen(false)

   const openAddCard = (colId) =>
      setAddCardOpen((prev) => ({ ...prev, [colId]: true }))

   const closeAddCard = (colId) =>
      setAddCardOpen((prev) => ({ ...prev, [colId]: false }))

   const handleAddCard = (colId) => {
      if (!titeleValue.trim()) return

      dispatch(
         CARD_THUNK.createCardThunk({ columnId: colId, title: titeleValue, id })
      )

      setTiteleValue('')
      closeAddCard(colId)
   }

   const handleAddColumn = async () => {
      if (!name.trim()) return

      const resultAction = await dispatch(
         COLUMN_THUNK.columnThunk({ id: IdBoard, name })
      )

      if (COLUMN_THUNK.columnThunk.fulfilled.match(resultAction)) {
         setName('') // очищаем инпут
      } else {
         console.error('Ошибка при создании колонки:', resultAction.payload)
      }
   }


   





   return (
      <DndContext>
         <StyledBoxColumnContainer>
            {columns?.map((col) => {
               const title = JSON.parse(col.title).name

               const isCardOpen = addCardOpen[col.id] || false

               console.log(isCardOpen, 'isCardOpen')

               return (
                  <StyledFormContainer key={col.id}>
                     <StyledBoxNweContainerHeader>
                        <StyledTypographyTitle>{title}</StyledTypographyTitle>
                        <ThreeDotsIcon />
                     </StyledBoxNweContainerHeader>

                     {col?.cards?.map((card) => (
                        <StyledBoxContainerZadacha
                           key={card.id}
                           onClick={() => handleOpenModal(card.id)}
                        >
                           <StyledTypographyTitlele>
                              {card.title}
                           </StyledTypographyTitlele>
                        </StyledBoxContainerZadacha>
                     ))}

                     {!isCardOpen ? (
                        <StyledButtonApp onClick={() => openAddCard(col.id)}>
                           + Add a card
                        </StyledButtonApp>
                     ) : (
                        <Box>
                           <StyledBoxAddCard>
                              <StyledInputAddCard
                                 type="text"
                                 value={titeleValue}
                                 onChange={(e) =>
                                    setTiteleValue(e.target.value)
                                 }
                                 placeholder="Enter card title"
                              />
                              <StyledButtonApp
                                 onClick={() => handleAddCard(col.id)}
                              >
                                 + Add a card
                              </StyledButtonApp>
                           </StyledBoxAddCard>
                        </Box>
                     )}
                  </StyledFormContainer>
               )
            })}

            {modalOpen && (
               <CustomModal
                  isVisible={modalOpen}
                  handleVisible={handleCloseModal}
                  onClose={handleCloseModal}
               >
                  <StyledModalBox>
                     <Card
                        titele={cards.title}
                        id={cards.id}
                        handler={handleCloseModal}
                     />
                  </StyledModalBox>
               </CustomModal>
            )}

            {!open ? (
               <StyledBoxCardContainer onClick={handleOpen}>
                  <StyledTypographyButton>
                     + Add a column
                  </StyledTypographyButton>
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

                  <StyledButton variant="contained" onClick={handleAddColumn}>
                     Create
                  </StyledButton>
               </StyledFormContainer>
            )}
         </StyledBoxColumnContainer>
      </DndContext>
   )
}
const StyledTypographyTitlele = styled(Typography)(() => ({
   color: '#000',
   fontSize: '16px',
   fontWeight: 500,
   display: 'flex',
   justifyContent: 'start',
}))

const StyledInputAddCard = styled('input')({
   border: 'none',
   height: '25px',
   border: 'none',
   padding: '0 10px',
   borderRadius: '8px',
})

const StyledBoxAddCard = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: '10px 8px',
   cursor: 'pointer',
   borderRadius: '8px',
}))

const StyledButtonApp = styled('button')(() => ({
   border: 'none',
   background: 'none',
   cursor: 'pointer',
   fontWeight: '500',
   display: 'flex',
   justifyContent: 'start',
}))

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
   cursor: 'pointer',
   color: '#000000',
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
   gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
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
