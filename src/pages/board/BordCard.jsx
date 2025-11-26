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
import {
   closestCorners,
   DndContext,
   DragOverlay,
   KeyboardSensor,
   PointerSensor,
   useSensor,
   useSensors,
} from '@dnd-kit/core'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import { Item } from '../card/SortableCard'
import { useParams } from 'react-router-dom'
import ZadachaCards from '../card/ZadachaCards'

export default function BordCard({ IdBoard }) {
   const [modalOpen, setModalOpen] = useState(false)
   const [open, setOpen] = useState(false)
   const [deleetOpen, setDeleettOpen] = useState(false)
   const [addCardOpen, setAddCardOpen] = useState({})
   const [name, setName] = useState('')
   const [titeleValue, setTiteleValue] = useState('')
   const [currentColId, setCurrentColId] = useState(null)

   const columns = useSelector((state) => state.column.columns)
   const flatCards = columns.flatMap((col) => col.cards)
   console.log(flatCards, 'flatCarddds')

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

   const handleOpenDelete = () => {
      setDeleettOpen(true)
   }

   const handlerDelete = () => {
      dispatch(COLUMN_THUNK.deleteColumnThunk({ id }))
      setDeleettOpen(false)
   }
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

   ///dnd

   const wrapperStyle = {
      display: 'flex',
      flexDirection: 'row',
   }

   const [items, setItems] = useState(null)

   useEffect(() => {
      if (!columns) return

      const converted = {}

      columns.forEach((col) => {
         converted[col.id] = col?.cards?.map((c) => c.id) || []
      })

      setItems(converted)
   }, [columns])

   const [activeId, setActiveId] = useState()

   const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, {
         coordinateGetter: sortableKeyboardCoordinates,
      })
   )

   const defaultAnnouncements = {
      onDragStart(id) {
         console.log(`Picked up draggable item ${id}.`)
      },
      onDragOver(id, overId) {
         if (overId) {
            console.log(
               `Draggable item ${id} was moved over droppable area ${overId}.`
            )
            return
         }

         console.log(`Draggable item ${id} is no longer over a droppable area.`)
      },
      onDragEnd(id, overId) {
         if (overId) {
            console.log(
               `Draggable item ${id} was dropped over droppable area ${overId}`
            )
            return
         }

         console.log(`Draggable item ${id} was dropped.`)
      },
      onDragCancel(id) {
         console.log(
            `Dragging was cancelled. Draggable item ${id} was dropped.`
         )
      },
   }

   function findContainer(id) {
      if (id in items) {
         return id
      }

      return Object.keys(items).find((key) => items[key].includes(id))
   }

   function handleDragStart(event) {
      const { active } = event
      const { id } = active

      setActiveId(id)
   }

   function handleDragOver(event) {
      const { active, over, draggingRect } = event
      const { id } = active

      const { id: overId } = over
      // Find the containers
      const activeContainer = findContainer(id)
      const overContainer = findContainer(overId)

      if (
         !activeContainer ||
         !overContainer ||
         activeContainer === overContainer
      ) {
         return
      }

      setItems((prev) => {
         const activeItems = prev[activeContainer]
         const overItems = prev[overContainer]

         // Find the indexes for the items
         const activeIndex = activeItems.indexOf(id)
         const overIndex = overItems.indexOf(overId)

         let newIndex
         if (overId in prev) {
            // We're at the root droppable of a container
            newIndex = overItems.length + 1
         } else {
            const isBelowLastItem =
               over &&
               overIndex === overItems.length - 1 &&
               draggingRect?.offsetTop >
                  over?.rect?.offsetTop + over?.rect?.height

            const modifier = isBelowLastItem ? 1 : 0

            newIndex =
               overIndex >= 0 ? overIndex + modifier : overItems.length + 1
         }

         return {
            ...prev,
            [activeContainer]: [
               ...prev[activeContainer].filter((item) => item !== active.id),
            ],
            [overContainer]: [
               ...prev[overContainer].slice(0, newIndex),
               items[activeContainer][activeIndex],
               ...prev[overContainer].slice(
                  newIndex,
                  prev[overContainer].length
               ),
            ],
         }
      })
   }

   function handleDragEnd(event) {
      const { active, over } = event
      const { id } = active
      const { id: overId } = over

      const activeContainer = findContainer(id)
      const overContainer = findContainer(overId)

      if (
         !activeContainer ||
         !overContainer ||
         activeContainer !== overContainer
      ) {
         return
      }

      const activeIndex = items[activeContainer].indexOf(active.id)
      const overIndex = items[overContainer].indexOf(overId)

      if (activeIndex !== overIndex) {
         setItems((items) => ({
            ...items,
            [overContainer]: arrayMove(
               items[overContainer],
               activeIndex,
               overIndex
            ),
         }))
      }

      setActiveId(null)
   }
   //dnd
   return (
      <DndContext
         announcements={defaultAnnouncements}
         sensors={sensors}
         collisionDetection={closestCorners}
         onDragStart={handleDragStart}
         onDragOver={handleDragOver}
         onDragEnd={handleDragEnd}
      >
         <StyledBoxColumnContainer>
            {columns?.map((col) => {
               const title = JSON.parse(col.title).name

               const isCardOpen = addCardOpen[col.id] || false

               console.log(isCardOpen, 'isCardOpen')

               return (
                  <StyledFormContainer key={col.id}>
                     <StyledBoxNweContainerHeader>
                        <StyledTypographyTitle>{title}</StyledTypographyTitle>
                        <ThreeDotsIcon onClick={handleOpenDelete} />
                     </StyledBoxNweContainerHeader>
                     {/* {!columns && 'Loading...'}

                     <StyledBoxContainerZadacha>
                        {columns &&
                           columns?.map((key) => (
                              <ZadachaCards
                                 key={key}
                                 id={key}
                                 items={flatCards}
                              />
                           ))}
                     </StyledBoxContainerZadacha>

                     <DragOverlay>
                        {activeId ? <Item id={activeId} /> : null}
                     </DragOverlay> */}

                     {col?.cards?.map((card) => (
                        <StyledBoxContainerZadacha
                           key={card.id}
                           onClick={() => handleOpenModal(card.id)}
                        >
                           <StyledTypographyTitlele>
                              {card.title}
                           </StyledTypographyTitlele>
                           <StyledTypographyTitlele>d</StyledTypographyTitlele>
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
            {deleetOpen && (
               <CustomModal
                  isVisible={deleetOpen}
                  handleVisible={handleOpenDelete}
                  onClose={handleOpenDelete}
               >
                  <Box>
                     <Typography>Удалить колонку</Typography>
                     <Box>
                        <Button onClick={handlerDelete}>Да</Button>
                        <Button onClick={handleOpenDelete}>Нет</Button>
                     </Box>
                  </Box>
               </CustomModal>
            )}
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
