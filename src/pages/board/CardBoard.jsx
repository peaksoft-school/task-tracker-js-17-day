import { Box, styled, Typography } from '@mui/material'
import React from 'react'

export const CardBoard = ({ name, background, fevered, description }) => {
   return (
      <StyledCardBox name={name} background={background} fevered={fevered}>
         <Typography>{name}</Typography>
         <Typography>{description}</Typography>
      </StyledCardBox>
   )
}
const StyledCardBox = styled(Box)(({ background }) => ({
   backgroundImage: `url(${background})`,
   backgroundSize: 'cover',
   backgroundPosition: 'center',
   backgroundRepeat: 'no-repeat',
   width: '250px',
   height: '100px',
   border: '1px solid #000000',
}))
