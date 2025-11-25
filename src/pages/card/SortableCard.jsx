import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'


export default function SortableCard({ card }) {
   const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id: String(card.id) })

   const style = {
      transform: transform ? CSS.Transform.toString(transform) : undefined,
      transition,
      padding: '12px',
      marginBottom: '8px',
      background: '#fff',
      borderRadius: '8px',
      cursor: 'grab',
   }

   return (
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
         {card.title}
      </div>
   )
}
