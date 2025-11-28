import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
   FavoriteIconstarBlue,
   FavoriteIconstarSilver,
} from '../../assets/AllExportIcon'
import { BOARD_THUNK } from '../../store/slices/board/boardThunk'
import { useDispatch } from 'react-redux'

export const CardBoard = ({
   name,
   background,
   favorite,
   description,
   key,
   id,
}) => {
   console.log(id, 'indexeex')
   console.log(favorite, 'favorite')

   const navigate = useNavigate()
   const dispach = useDispatch()

   const handlerNavigate = () => {
      navigate(`/boards/${id}/columns-with-cards`)
   }

   const handleFavoriteToogle = (id) => {
      dispach(BOARD_THUNK.favoritesBoards({ boardId: id }))
   }

   return (
      <Box>
         <StyledCardBox
            onClick={handlerNavigate}
            key={id}
            name={name}
            background={background}
            favorite={favorite}
         >
            <StyledTypography>{name}</StyledTypography>
            <Typography>{description}</Typography>
         </StyledCardBox>
      </Box>
   )
}
const StyledFavoriteIconstarSilver = styled(FavoriteIconstarSilver)({
   cursor: 'pointer',
   background: 'none',
})

const FavoriteIconBox = styled(Box)({
   cursor: 'pointer',
   display: 'flex',
   justifyContent: 'end',
   alignItems: 'end',
   position: 'relative',
   bottom: '45px',
   right: '8px',
})

const StyledTypography = styled(Typography)(() => ({
   color: '#ffffff',
   fontWeight: 500,
   fontSize: '16px',
}))

const StyledCardBox = styled(Box)(({ background }) => {
   const isColor = typeof background === 'string' && background.startsWith('#')

   return {
      backgroundColor: isColor ? background : 'transparent',
      backgroundImage: !isColor && background ? `url(${background})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '271px',
      height: '122px',
      border: '1px solid #000000',
      borderRadius: '8px',
      cursor: 'pointer',
      padding: '10px',
   }
})
