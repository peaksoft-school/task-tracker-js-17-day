import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const CardBoard = ({ name, background, fevered, description, key, id }) => {
   console.log(id, 'indexx')
   const navigate=useNavigate(); 

   const handlerNavigate=()=>{
navigate(`/boards/${id}/columns-with-cards`)
   }

   return (
      <StyledCardBox
      onClick={handlerNavigate}
         key={id}
         name={name}
         background={background}
         fevered={fevered}
      >
         <StyledTypography>{name}</StyledTypography>
         <Typography>{description}</Typography>
      </StyledCardBox>
   )
}
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
