import { Box, Chip, Stack, styled } from '@mui/material'
import React from 'react'
import { ExitIcon, PlusIcon, WhitePliusIcon } from '../../assets/AllExportIcon'

export default function Chipp() {
   const handleClick = () => {
      console.info('You clicked the Chip.')
   }

   const handleDelete = () => {
      console.info('You clicked the delete icon.')
   }

   return (
      <StyledBox>
         <StyledStack direction="row" spacing={1}>
            <StylesChip
               colors="greny"
               label={
                  <StyledSpan>
                     Done
                     <StyledExitIcon />
                  </StyledSpan>
               }
               onClick={handleClick}
            />
            <StylesChip
               colors="red"
               label={
                  <StyledSpan>
                     The task is burning
                     <StyledExitIcon />
                  </StyledSpan>
               }
               onClick={handleClick}
            />
            <StylesChip
               colors="orange"
               label={
                  <StyledSpan>
                     Pay attention to task 1
                     <StyledExitIcon />
                  </StyledSpan>
               }
               onClick={handleClick}
            />
            <StyledChipPlus
               label={
                  <StyledSpan>
                     <StyledExitIconPlus />
                  </StyledSpan>
               }
               onClick={handleClick}
            />
         </StyledStack>
      </StyledBox>
   )
}

const StyledBox = styled(Box)({
   padding: '20px',
   width: '520px',
   height: '30px',
})

const StyledStack = styled(Stack)({
   display: 'flex',
   alignItems: 'center',
})

const StylesChip = styled(Chip)(({ colors }) => ({
   maxwidth: '100%',
   maxHeight: '100]',
   padding: '10px',
   borderRadius: '6px',
   color: 'white',
   fontWeight: '500',
   fontSize: '16px',
   backgroundColor:
      colors === 'greny'
         ? 'rgb(48, 176, 9)'
         : colors === 'red'
           ? 'rgb(217, 21, 17)'
           : colors === 'orange'
             ? 'rgb(237, 138, 0)'
             : '#rgb(201, 201, 201)',
}))

const StyledChipPlus = styled(Chip)(({}) => ({
   borderRadius: '100%',
   width: '40px',
   height: '40px',
   backgroundColor: 'rgb(201, 201, 201)',
}))

const StyledExitIconPlus = styled(WhitePliusIcon)({
   width: '19px',
   height: '19px',
})

const StyledExitIcon = styled(ExitIcon)({
   opacity: 2,
})

const StyledSpan = styled('span')({
   display: 'flex',
   alignItems: 'center',
   gap: '6px',
})
