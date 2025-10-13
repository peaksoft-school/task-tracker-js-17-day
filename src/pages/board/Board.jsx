import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../configs/axiosinstance'
import { baseURL } from '../../constants/constants'

export const Board = ({ workspaceId = 1 }) => {
   const [boards, setBoards] = useState([])
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)

   const getAllBoards = async () => {
      try {
         setLoading(true)
         const response = await axiosInstance.get(
            `${baseURL}/boards/workspace/${workspaceId}`
         )
         console.log('response.data:', response) // <-- текшерүү үчүн
      } catch (err) {
         setError(err.message)
      } finally {
         setLoading(false)
      }
   }

   useEffect(() => {
      getAllBoards()
   }, [workspaceId])

   if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>
   if (error)
      return <p style={{ color: 'red', textAlign: 'center' }}>Error: {error}</p>

   return (
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
         <h2 style={{ marginBottom: '20px' }}>
            Boards in workspace #{workspaceId}
         </h2>

         {boards.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#777' }}>
               No boards found
            </p>
         ) : (
            <div
               style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                  gap: '16px',
               }}
            >
               {boards.map((board) => (
                  <div
                     key={board.id}
                     style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                        backgroundColor: '#fff',
                     }}
                  >
                     <div
                        style={{
                           backgroundImage: `url(${board.backgroundUrl})`,
                           backgroundSize: 'cover',
                           backgroundPosition: 'center',
                           height: '120px',
                        }}
                     />
                     <div style={{ padding: '12px' }}>
                        <h3 style={{ margin: 0 }}>{board.name}</h3>
                        <p style={{ fontSize: '14px', color: '#555' }}>
                           {board.description}
                        </p>
                        <p style={{ fontSize: '12px', color: '#777' }}>
                           ID: {board.id}
                        </p>
                        <p
                           style={{
                              fontSize: '12px',
                              color:
                                 board.state === 'ACTIVE' ? 'green' : 'gray',
                           }}
                        >
                           State: {board.state}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         )}
      </div>
   )
}
