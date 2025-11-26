import { useDroppable } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { styled, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import SortableItem from './SortableCard'
import PropTypes from 'prop-types'

export default function ZadachaCards({ id, items }) {
   console.log(items, 'item09')
   console.log(id, '09')

   const { setNodeRef } = useDroppable({ id })
   const { cards } = useSelector((state) => state.card)

   return (
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
         <StyledBoxContainerZadacha>
            <div ref={setNodeRef} className="droppable-container">
               {items?.map((itemId) => (
                  <SortableItem key={itemId} id={itemId} title={cards?.title} />
               ))}
            </div>

            {/* <StyledTypographyTitlele>
               {cards?.title}
            </StyledTypographyTitlele> */}
         </StyledBoxContainerZadacha>
      </SortableContext>
   )
}

ZadachaCards.propTypes = {
   id: PropTypes.string.isRequired,
   items: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const StyledBoxContainerZadacha = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   padding: '10px 8px',
   backgroundColor: '#fff',
   width: '264px',
   minHeight: '100%',
   cursor: 'pointer',
   color: '#000',
   borderRadius: 6,
}))

const StyledTypographyTitlele = styled(Typography)(() => ({
   color: '#000',
   fontSize: '16px',
   fontWeight: 500,
   display: 'flex',
   justifyContent: 'start',
}))
