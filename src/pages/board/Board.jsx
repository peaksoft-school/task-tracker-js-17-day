import { Box, styled, Typography } from '@mui/material'
import { useState } from 'react'
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

export default function Board() {
   const { boards, loading } = useSelector((state) => state.board)
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
   const handlerClickIdBackImg = async (selectedImage) => {
      try {
         setLoadingItem(selectedImage)
         const response = await fetch(selectedImage)
         const blob = await response.blob()
         const file = new File([blob], 'background.jpg', { type: blob.type })
         const result = await dispatch(BOARD_THUNK.uploadImage(file))

         if (result.payload && result.payload[0]) {
            // просто сохраняем URL фото
            setSelectedBg({ type: 'image', value: result.payload[0] })
            setSelectedItem(selectedImage)
         }
      } catch (error) {
         console.error('Ошибка при загрузке изображения:', error)
      } finally {
         setLoadingItem(null)
      }
   }

   // === Клик по цвету ===
   const handlerClickIdColor = (selectedColor) => {
      // просто сохраняем цвет
      setSelectedBg({ type: 'color', value: selectedColor })
      setSelectedItem(selectedColor)
   }

   // === Создание доски ===
   const handleCreateBoard = async () => {
      if (!name.trim()) {
         alert('Введите название доски!')
         return
      }

      const body = {
         name,
         description: 'Created from modal',
         workspaceId: 1,
      }

      // передаём нужное поле в зависимости от типа фона
      if (selectedBg?.type === 'color') {
         body.backgroundColor = selectedBg.value
      } else if (selectedBg?.type === 'image') {
         body.backgroundUrl = selectedBg.value
      }

      try {
         await dispatch(BOARD_THUNK.boardPost(body))
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
         <Header favouritesCount={10} />
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

               {loading ? (
                  <Typography>Loading...</Typography>
               ) : (
                  <StyledCardBoard>
                     {boards.map((item) => (
                        <CardBoard
                           key={item.id}
                           name={item.name}
                           background={item.backgroundUrl}
                           fevered={item.fevered}
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
                     {backgroundImages.slice(0, 3).map((bgItem) => (
                        <StyledCardModalImg
                           key={bgItem}
                           onClick={() => handlerClickIdBackImg(bgItem)}
                        >
                           <StyledImg src={bgItem} alt="background" />

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
                  <StyledModalTypography>Photo</StyledModalTypography>
                  <StyledBoxModalsBack>
                     {' '}
                     {backgroundImages.map((bgItem) => (
                        <StyledBoxBg
                           key={bgItem}
                           onClick={() => handlerClickIdBackImg(bgItem)}
                           bg={bgItem}
                        />
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
                  <StyledModalTypography>Colors</StyledModalTypography>
                  <StyledBoxModalsColors>
                     {Colors.map((items) => (
                        <StyledColorsModal
                           key={items}
                           onClick={() => handlerClickIdColor(items)}
                           colors={items}
                        />
                     ))}
                  </StyledBoxModalsColors>
               </Box>
            </ModalBox>
         )}
      </>
   )
}

const StyledOverlay = styled(Box)({
   position: 'absolute',
   top: 0,
   left: 0,
   width: '100%',
   height: '100%',
   borderRadius: '8px',
   backgroundColor: 'rgba(0, 0, 0, 0.3)',
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
   display: 'inline-block',
   marginRight: '8px',
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
   width: 'fit-content',
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
