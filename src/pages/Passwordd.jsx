import { Box } from '@mui/material'
import React from 'react'
import { Input } from '../components/UI/input/Input'
import { AppButton } from '../components/UI/AppButton'
import styled from '@emotion/styled'

export const Passwordd = () => {
   return (
      <StyledBox>
         <StyledH2>Forgot password?</StyledH2>
         <StyledP>
            A link will be sent to your Email, follow the link sent to the mail
         </StyledP>
         <StyledInput placeholder="example@gmail.com" type="email" />
         <StyledButtonBox>
            <StylesButton>Send</StylesButton>
         </StyledButtonBox>
      </StyledBox>
   )
}
const StyledInput = styled(Input)({
   marginTop: '16px',
   width: '100%',
})

const StyledH2 = styled('h2')({
   fontSize: '24px',
   fontWeight: '500',
})

const StyledBox = styled(Box)({
   padding: '20px',
})

const StyledP = styled('p')({
   fontSize: '12px',
   fontWeight: '400',
   color: '#707070',
})

const StyledButtonBox = styled(Box)({
   marginTop: '24px',
   display: 'flex',
   justifyContent: 'end',
})

const StylesButton = styled(AppButton)({
   width: '150px',
})
