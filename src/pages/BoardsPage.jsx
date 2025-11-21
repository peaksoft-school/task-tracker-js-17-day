import React, { useEffect } from 'react'
import Sidebar from '../components/UI/sidebar/Sidebar'
import { Header } from '../layouts/header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { Box, CircularProgress, Typography } from '@mui/material'
import { BOARDS_THUNK } from '../store/slices/board/BoardsThunk'

function BoardsPage() {
   const dispatch = useDispatch()
   const { id } = useParams() // Получаем ID из URL (workspace/:id/boards)
   const { boards, isLoading } = useSelector((state) => state.boards)

   useEffect(() => {
      if (id) {
         dispatch(BOARDS_THUNK.getBoardsByWorkspaceId(id))
      }
   }, [dispatch, id])

   return (
      <Box>
         <Header />
         <div style={{ display: 'flex' }}>
            <Sidebar />

            <PageContainer>
               <Title>Boards</Title>

               {isLoading ? (
                  <LoaderContainer>
                     <CircularProgress />
                  </LoaderContainer>
               ) : (
                  <BoardsGrid>
                     {/* Отрисовка полученных досок */}
                     {boards?.map((board) => (
                        <BoardCard
                           key={board.id}
                           bg={board.backgroundUrl} // Используем URL из ответа
                        >
                           <BoardName>{board.name}</BoardName>
                        </BoardCard>
                     ))}

                     {/* Кнопка создания новой доски (заглушка для UI) */}
                     <CreateBoardCard>
                        <span>Create new board</span>
                     </CreateBoardCard>
                  </BoardsGrid>
               )}
            </PageContainer>
         </div>
      </Box>
   )
}

export default BoardsPage

// --- Styled Components ---

const PageContainer = styled('div')({
   padding: '20px 40px',
   width: '100%',
   marginTop: '60px', // Отступ от хедера
})

const Title = styled(Typography)({
   fontSize: '24px',
   fontWeight: 600,
   marginBottom: '20px',
   color: '#333',
})

const BoardsGrid = styled('div')({
   display: 'flex',
   flexWrap: 'wrap',
   gap: '20px',
})

const BoardCard = styled('div')(({ bg }) => ({
   width: '190px',
   height: '100px',
   backgroundColor: bg ? 'transparent' : '#0079bf',
   backgroundImage: bg ? `url(${bg})` : 'none',
   backgroundSize: 'cover',
   backgroundPosition: 'center',
   borderRadius: '8px',
   padding: '10px',
   cursor: 'pointer',
   position: 'relative',
   boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
   transition: 'filter 0.2s',

   '&:hover': {
      filter: 'brightness(0.9)',
   },
}))

const BoardName = styled('span')({
   color: '#fff',
   fontWeight: 'bold',
   fontSize: '16px',
   textShadow: '0px 1px 2px rgba(0,0,0,0.8)', // Тень, чтобы текст читался на картинке
   overflow: 'hidden',
   display: '-webkit-box',
   WebkitLineClamp: 2,
   WebkitBoxOrient: 'vertical',
})

const CreateBoardCard = styled('div')({
   width: '190px',
   height: '100px',
   backgroundColor: '#F0F2F5',
   borderRadius: '8px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   cursor: 'pointer',
   color: '#172B4D',
   fontSize: '14px',

   '&:hover': {
      backgroundColor: '#E4E6EA',
   },
})

const LoaderContainer = styled(Box)({
   display: 'flex',
   justifyContent: 'center',
   marginTop: '50px',
})
