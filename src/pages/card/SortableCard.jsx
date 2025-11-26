import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import PropTypes from 'prop-types'

export function Item({ id, title }) {
   console.log(title, 'title')

   return (
      <div
         style={{
            width: '100%',
            height: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid black',
            margin: '10px 0',
            background: 'white',
         }}
      >
         {title}
      </div>
   )
}

export default function SortableItem({ id, title }) {
   const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id })

   console.log(id, 'id333')
   console.log(title, 'title333')

   return (
      <div
         ref={setNodeRef}
         style={{
            transform: CSS.Transform.toString(transform),
            transition,
         }}
         {...attributes}
         {...listeners}
      >
         <Item id={id} title={title} />
      </div>
   )
}

SortableItem.propTypes = {
   id: PropTypes.string.isRequired,
}
