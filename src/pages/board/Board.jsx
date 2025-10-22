import { Box, styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
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
import { useParams } from 'react-router-dom'

export default function Board() {
   const { workSpaceById } = useParams()
   const dispatch = useDispatch()
   const { boards, loading } = useSelector((state) => state.board)

   const [boardsImg, setBoardsImg] = useState(false)

   const [backgroundImg, setBackgroundImg] = useState(false)

   const [backgroundColor, setBackgroundColor] = useState(false)

   console.log(boardsImg, 'dld')
   console.log(backgroundImg, 'img')
   console.log(backgroundColor, 'clo')

   const handlerSerImg = () => {
      setBoardsImg((prev) => !prev)
   }

   const handlerSerBackImg = () => {
      setBackgroundImg((prev) => !prev)
   }

   const handlerSerBackColor = () => {
      setBackgroundColor((prev) => !prev)
   }

   useEffect(() => {
      dispatch(BOARD_THUNK.boardPost({ workspaceId: workSpaceById }))
   }, [dispatch])
   const boardPostParams = {
      name: 'we',
      description: 'we',
      backgroundUrl: 'kdkd',
   }

   return (
      <Box>
         <Header />
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
                  boards.map((item) => {
                     return (
                        <StyledCardBoard key={item.id}>
                           <CardBoard
                              name={item.name}
                              background={item.backgroundUrl}
                              fevered={item.fevered}
                              description={item.description}
                           />
                           {/* {backgroundImages.map((bgItem, i) => {
                              return (
                                 <CardBoard
                                    key={i}
                                    name={item.name}
                                    background={bgItem.bg}
                                    fevered={item.fevered}
                                    description={item.description}
                                 />
                              )
                           })} */}
                        </StyledCardBoard>
                     )
                  })
               )}
            </Box>
         </StyledBoxBoards>

         {boardsImg && (
            <ModalBox isVisible={boardsImg} handleVisible={handlerSerImg}>
               <Box>
                  <StyledModalTypography>
                     Create new board
                  </StyledModalTypography>
                  <StyledInput placeholder="Board title*" />
                  <StyledTypography>Add background</StyledTypography>
                  <StyledBoxSeeMore>
                     <Styledtypography>Photo</Styledtypography>
                     <StyledA onClick={handlerSerBackImg}>See more</StyledA>
                  </StyledBoxSeeMore>
                  <StyledCardModal>
                     {backgroundImages.slice(0, 3).map((bgItem, i) => {
                        return (
                           <StyledCardModalImg key={i}>
                              <StyledImg src={bgItem.bg} alt="background" />
                           </StyledCardModalImg>
                        )
                     })}
                  </StyledCardModal>

                  <StyledBoxSeeMore>
                     <Styledtypography>Colors</Styledtypography>
                     <StyledA onClick={handlerSerBackColor}>See more</StyledA>
                  </StyledBoxSeeMore>
                  {Colors.map((items, i) => {
                     return (
                        <StyledBoxColors
                           key={i}
                           colors={items.color}
                        ></StyledBoxColors>
                     )
                  })}
                  <StyledBoxButtons>
                     <StyledButtonWhite>Cancel</StyledButtonWhite>
                     <AppButton
                        onClick={() =>
                           dispatch(BOARD_THUNK.boardPost(boardPostParams))
                        }
                     >
                        Create board
                     </AppButton>
                  </StyledBoxButtons>
               </Box>
            </ModalBox>
         )}

         {backgroundImg && (
            <StyledModalBakg
               isVisible={backgroundImg}
               handleVisible={handlerSerBackImg}
            >
               <Box>
                  <StyledModalTypography>Photo</StyledModalTypography>
                  <StyledBoxModalsBack>
                     {backgroundImages.map((bgItem) => {
                        return <StyledBoxBg bg={bgItem.bg}></StyledBoxBg>
                     })}
                  </StyledBoxModalsBack>
               </Box>
            </StyledModalBakg>
         )}

         {backgroundColor && (
            <ModalBox
               isVisible={backgroundColor}
               handleVisible={handlerSerBackColor}
            >
               <Box>
                  <StyledModalTypography>Colors</StyledModalTypography>
                  <StyledBoxModalsColors>
                     {Colors.map((items) => {
                        return (
                           <StyledColorsModal
                              colors={items.color}
                           ></StyledColorsModal>
                        )
                     })}
                  </StyledBoxModalsColors>
               </Box>
            </ModalBox>
         )}
      </Box>
   )
}
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
   backgroundColor: colors,
   width: '59px',
   height: '31px',
   borderRadius: '8px',
   display: 'inline-block',
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
   gap: '16px',
   '&:hover': {
      transform: 'scale(1.05)',
      cursor: 'pointer',
   },
})

const StyledCardBoard = styled(Box)({
   display: ' grid',
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
