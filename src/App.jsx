import { useState } from 'react'
import { Button, Typography } from '@mui/material'
import DeleteModal from './components/modal/DeleteModal'
import { CustomModal } from './components/modal/Modal'
import styled from '@emotion/styled'

const App = () => {
   const [openModal, setOpenModal] = useState(false)
   const [openDeleteModal, setOpenDeleteModal] = useState(false)

   const handleVisibleModal = () => setOpenModal((prev) => !prev)
   const handleVisibleDelete = () => setOpenDeleteModal((prev) => !prev)

   const handleDelete = () => {
      console.log('delete')
      setOpenDeleteModal(false) // закрыть после удаления
   }

   return (
      <ConteinerButtunModal>
         {/* кнопка для обычной модалки */}
         <Button variant="contained" onClick={handleVisibleModal}>
            Открыть модалку
         </Button>

         {/* кнопка для DeleteModal */}
         <Button
            variant="outlined"
            onClick={handleVisibleDelete}
            sx={{ mt: 2 }}
         >
            Открыть Deletemodal
         </Button>

         {/* обычный Modal */}
         <CustomModal isVisible={openModal} handleVisible={handleVisibleModal}>
            <h2 id="basic-modal-title">Обычная модалка</h2>
            <p id="basic-modal-desc">Тут может быть любой контент</p>
         </CustomModal>

         {/* DeleteModal */}
         <DeleteModal
            isVisible={openDeleteModal}
            handleVisible={handleVisibleDelete}
            onDelete={handleDelete}
         >
            <h1 id="delete-title">Delete comment?</h1>
            <Typography id="delete-desc">Hello</Typography>
         </DeleteModal>
      </ConteinerButtunModal>
   )
}

export default App

const ConteinerButtunModal = styled('div')({
   minHeight: '100vh',
   background: 'silver',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',   // Центрует кнопки по вертикали
   alignItems: 'center',       // Центрует по горизонтали
   gap: 16,                    // расстояние между кнопками
})

