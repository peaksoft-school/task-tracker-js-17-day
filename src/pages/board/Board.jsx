import {
   Box,
   CircularProgress,
   styled,
   TableCell,
   TableRow,
   Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from '../../layouts/header/Header'
import { AppButton } from '../../components/UI/AppButton'
import { CardBoard } from './CardBoard'
import { BOARD_THUNK } from '../../store/slices/board/boardThunk'
import Sidebar from '../../components/UI/sidebar/Sidebar'
import { backgroundImages } from '../../assets/backgroundImg/background'
import { CustomModal } from '../../components/UI/modal/Modal'
import { Input } from '../../components/UI/Input'
import { Colors } from '../../assets/backgroundImg/backgroundColors'
import CheckIcon from '@mui/icons-material/Check'
import { useParams } from 'react-router-dom'
import { XIcon } from '../../assets/AllExportIcon'

export default function Board() {
   const { id } = useParams()
   const { boards, loading } = useSelector((state) => state.board)
   console.log('boards', boards)

   const dispatch = useDispatch()

   const [boardsImg, setBoardsImg] = useState(false)
   const [backgroundImg, setBackgroundImg] = useState(false)
   const [backgroundColorModal, setBackgroundColorModal] = useState(false)
   const [backgroundModalImages, setBackgroundModalImages] = useState(false)
   const [backgroundModalColors, setBackgroundModalColors] = useState(false)

   // === Локальные стейты ===
   const [name, setName] = useState('')
   const [selectedItem, setSelectedItem] = useState(null)
   const [selectedBg, setSelectedBg] = useState(null)
   const [loadingItem, setLoadingItem] = useState(null)

   // === Обработчик названия ===
   const handlerName = (e) => setName(e.target.value)

   // === Клик по фото ===
   const handlerClickIdBackImg = async (imageUrl) => {
      try {
         setLoadingItem(imageUrl)

         // Загружаем файл
         const response = await fetch(imageUrl)
         const blob = await response.blob()
         const file = new File([blob], 'background.jpg', { type: blob.type })

         const result = await dispatch(BOARD_THUNK.uploadImage(file))

         if (result.payload && result.payload[0]) {
            // Предполагаем, что сервер возвращает объект { url: '...' } или строку
            const uploadedUrl = result.payload[0].url || result.payload[0]

            setSelectedBg({ type: 'image', value: uploadedUrl })
            setSelectedItem(imageUrl)
         }
      } catch (error) {
         console.error('Ошибка при загрузке изображения:', error)
      } finally {
         setLoadingItem(null)
      }
   }

   useEffect(() => {
      if (id) {
         dispatch(BOARD_THUNK.workSpaceById({ workspaceId: Number(id) }))
      }
   }, [id, dispatch])
   // === Клик по цвету ===
   const handlerClickIdColor = (color) => {
      setSelectedBg({ type: 'color', value: color }) // сохраняем строку цвета
      setSelectedItem(color) // для UI (чекмарка)
   }

   // === Создание доски ===
   const handleCreateBoard = async () => {
      if (!name.trim()) {
         alert('Введите название доски!')
         return
      }

      if (!selectedBg) {
         alert('Выберите фон (цвет или изображение)')
         return
      }

      const body = {
         name,
         description: 'Created from modal',
         workspaceId: Number(id),
      }

      if (selectedBg.type === 'color') {
         body.backgroundUrl = selectedBg.value
      } else if (selectedBg.type === 'image') {
         body.backgroundUrl = selectedBg.value
      }

      try {
         await dispatch(BOARD_THUNK.boardPost(body))

         // Сброс стейтов
         setBoardsImg(false)
         setSelectedBg(null)
         setSelectedItem(null)
         setName('')
      } catch (error) {
         console.error('Ошибка при создании доски:', error)
      }
   }

   // === Управление модалками ===
   const handlerSerImg = () => setBoardsImg((prev) => !prev)
   const handlerSerBackImg = () => setBackgroundImg((prev) => !prev)
   const handlerSerBackColor = () => setBackgroundColorModal((prev) => !prev)
   const handlerModelImg = () => setBackgroundModalImages((prev) => !prev)
   const handlerModelColor = () => setBackgroundModalColors((prev) => !prev)

   return (
      <>
         <Header favouritesCount="boardCount" />
         <StyledBoxBoards>
            <Box>
               <Sidebar />
            </Box>
            <Box>
               <StyledBoxHeaders>
                  <Typography variant="h6">All boards</Typography>
                  <AppButton onClick={handlerSerImg}>
                     + Create new board
                  </AppButton>
               </StyledBoxHeaders>

               {boards.length === 0 ? (
                  <StyledBoxDefoldimg>
                     <TableRow>
                        <TableCell colSpan={4} align="center">
                           <Box>
                              <p>
                                 <img
                                    src="https://cdn-icons-png.flaticon.com/512/7466/7466073.png"
                                    alt="нету данных"
                                 />
                              </p>
                              <h3 style={{ marginTop: '10px' }}>Нет данных</h3>
                             
                           </Box>
                        </TableCell>
                     </TableRow>
                  </StyledBoxDefoldimg>
               ) : (
                  <StyledCardBoard>
                     {boards.map((item) => (
                        <CardBoard
                           key={item.id}
                           id={item.id}
                           name={item.name}
                           background={item.backgroundUrl}
                           favorite={item.favorite}
                           description={item.description}
                        />
                     ))}
                  </StyledCardBoard>
               )}
            </Box>
         </StyledBoxBoards>

         {/* === Модалка создания доски === */}
         {boardsImg && (
            <ModalBox isVisible={boardsImg} handleVisible={handlerSerImg}>
               <Box>
                  <StyledModalTypography>
                     Create new board
                  </StyledModalTypography>
                  <StyledInput
                     value={name}
                     onChange={handlerName}
                     placeholder="Board title*"
                  />

                  <StyledTypography>Add background</StyledTypography>

                  {/* === Фото === */}
                  <StyledBoxSeeMore>
                     <Styledtypography>Photo</Styledtypography>
                     <StyledA onClick={handlerModelImg}>See more</StyledA>
                  </StyledBoxSeeMore>

                  <StyledCardModal>
                     {backgroundImages.slice(0, 4).map((bgItem) => (
                        <StyledCardModalImg
                           key={bgItem}
                           onClick={() => handlerClickIdBackImg(bgItem)}
                        >
                           <StyledImg src={bgItem} alt="background" />

                           {loadingItem === bgItem && (
                              <StyledOverlay>
                                 <CircularProgress size={24} color="inherit" />
                              </StyledOverlay>
                           )}
                           {selectedItem === bgItem && (
                              <StyledOverlay>
                                 <CheckIcon />
                              </StyledOverlay>
                           )}
                        </StyledCardModalImg>
                     ))}
                  </StyledCardModal>

                  {/* === Цвета === */}
                  <StyledBoxSeeMore>
                     <Styledtypography>Colors</Styledtypography>
                     <StyledA onClick={handlerModelColor}>See more</StyledA>
                  </StyledBoxSeeMore>

                  <StyledColorsBox>
                     {Colors.map((color) => (
                        <StyledBoxColors
                           key={color}
                           onClick={() => handlerClickIdColor(color)}
                           colors={color}
                        >
                           {loadingItem === color && (
                              <StyledOverlay>
                                 <CircularProgress size={24} color="inherit" />
                              </StyledOverlay>
                           )}
                           {selectedItem === color && (
                              <StyledOverlay>
                                 <CheckIcon />
                              </StyledOverlay>
                           )}
                        </StyledBoxColors>
                     ))}
                  </StyledColorsBox>

                  <StyledBoxButtons>
                     <StyledButtonWhite onClick={handlerSerImg}>
                        Cancel
                     </StyledButtonWhite>
                     <AppButton onClick={handleCreateBoard}>
                        Create board
                     </AppButton>
                  </StyledBoxButtons>
               </Box>
            </ModalBox>
         )}

         {backgroundModalImages && (
            <StyledModalBakg
               isVisible={backgroundModalImages}
               handleVisible={handlerModelImg}
            >
               <Box>
                  <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                     <Box></Box>
                     <StyledModalTypography>Photo</StyledModalTypography>
                     <StyledXIcon onClick={handlerModelImg} />
                  </Box>

                  <StyledBoxModalsBack>
                     {backgroundImages?.map((bgItem) => (
                        <StyledBoxBg
                           key={bgItem}
                           onClick={() => handlerClickIdBackImg(bgItem)}
                           bg={bgItem}
                        >
                           {selectedItem === bgItem && (
                              <StyledOverlay>
                                 <CheckIcon />
                              </StyledOverlay>
                           )}
                        </StyledBoxBg>
                     ))}
                  </StyledBoxModalsBack>
               </Box>
            </StyledModalBakg>
         )}

         {backgroundModalColors && (
            <ModalBox
               isVisible={backgroundModalColors}
               handleVisible={handlerModelColor}
            >
               <Box>
                  {' '}
                  <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} >
                     <Box></Box>
                  <StyledModalTypography>Colors</StyledModalTypography>
                  <StyledXIcon onClick={handlerModelColor} />
                  </Box>
                 
                  <StyledBoxModalsColors>
                     {Colors.map((items) => (
                        <StyledColorsModal
                           key={items}
                           onClick={() => handlerClickIdColor(items)}
                           colors={items}
                        >
                            {loadingItem === items && (
                              <StyledOverlay>
                                 <CircularProgress size={24} color="inherit" />
                              </StyledOverlay>
                           )}
                           {selectedItem === items && (
                              <StyledOverlay>
                                 <CheckIcon />
                              </StyledOverlay>
                           )}
                        </StyledColorsModal>
                     ))}
                  </StyledBoxModalsColors>
               </Box>
            </ModalBox>
         )}
      </>
   )
}

const StyledXIcon = styled(XIcon)(() => ({
   cursor: 'pointer',
}))

const StyledBoxDefoldimg = styled(Box)({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'column',
   padding: '40px',
})

const StyledOverlay = styled(Box)({
   position: 'absolute',
   top: 0,
   left: 0,
   width: '100%',
   height: '100%',
   borderRadius: '8px',
   // backgroundColor: 'rgba(249, 242, 242, 0.3)',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   color: 'white',
})

const StyledColorsBox = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
})

const StyledModalBakg = styled(CustomModal)({
   marginLeft: '200px',
})

const StyledModalTypography = styled(Typography)({
   display: 'flex',
   justifyContent: 'center',
})

const StyledBoxModalsColors = styled(Box)({
   padding: '20px 16px',
   width: 'fit-content',
   display: 'grid',
   gridTemplateColumns: '1fr 1fr 1fr',
   gap: '16px',
})

const StyledBoxModalsBack = styled(Box)({
   padding: '20px 16px',
   width: 'fit-content',
   display: 'grid',
   gridTemplateColumns: '1fr 1fr',
   gap: '16px',
   cursor: 'pointer',
})

const StyledColorsModal = styled(Box)(({ colors }) => ({
   display: 'inline-block',
   marginRight: '8px',
   backgroundColor: colors,
   width: '79px',
   height: '40px',
   borderRadius: '8px',
   position: 'relative',
   '&:hover': {
      transform: 'scale(1.05)',
      cursor: 'pointer',
   },
}))

const StyledBoxBg = styled(Box)(({ bg }) => ({
   backgroundImage: `url(${bg})`,
   backgroundSize: 'cover',
   backgroundPosition: 'center',
   backgroundRepeat: 'no-repeat',
   width: '132px',
   height: '62px',
   borderRadius: '8px',
   display: 'flex',
   flexWrap: 'wrap',
   flexDirection: 'column',
   marginRight: '8px',
   cursor: 'pointer',
   '&:hover': {
      transform: 'scale(1.05)',
      cursor: 'pointer',
   },
}))

const StyledA = styled('a')({
   color: '#919191',
   fontSize: '14px',
   marginTop: '8px',
   marginBottom: '8px',
   cursor: 'pointer',
})

const StyledTypography = styled(Typography)({
   fontSize: '16px',
   fontWeight: '400',
   color: '#919191',
   marginTop: '16px',
})

const Styledtypography = styled(Typography)({
   fontSize: '14px',
   fontWeight: '400',
   color: '#919191',
   marginTop: '8px',
   marginBottom: '8px',
})

const StyledButtonWhite = styled(AppButton)({
   backgroundColor: '#f0f0f0',
   color: '#919191',
})

const StyledBoxButtons = styled(Box)({
   display: 'flex',
   justifyContent: 'end',
   alignItems: 'center',
   gap: '8px',
   marginTop: '24px',
})

const StyledBoxSeeMore = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
})

const StyledInput = styled(Input)({
   maxWidth: '437px',
   minHeight: '32px',
})

const StyledBoxColors = styled(Box)(({ colors }) => ({
   position: 'relative',
   backgroundColor: colors,
   width: '59px',
   height: '31px',
   borderRadius: '8px',
   display: 'flex',
   marginRight: '8px',
   '&:hover': {
      transform: 'scale(1.05)',
      cursor: 'pointer',
   },
}))

const ModalBox = styled(CustomModal)({
   padding: '20px 16px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
})

const StyledImg = styled('img')({
   width: '135px',
   height: '62px',
   borderRadius: '8px',
})

const StyledCardModal = styled(Box)({
   display: 'flex',
   borderRadius: '8px',
   gap: '8px',
})

const StyledCardModalImg = styled(Box)({
   position: 'relative',
   gap: '16px',
   '&:hover': {
      transform: 'scale(1.05)',
      cursor: 'pointer',
   },
})

const StyledCardBoard = styled(Box)({
   display: 'grid',
   gridTemplateColumns: '1fr 1fr 1fr 1fr',
   gap: '16px',
   marginTop: '16px',
   borderRadius: '8px',
})

const StyledBoxBoards = styled(Box)({
   display: 'grid',
   gridTemplateColumns: '250px 1fr',

})

const StyledBoxHeaders = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
   padding: '16px 40px',
   backgroundColor: '#ffffff',
})
