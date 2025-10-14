import { Box, styled, Typography } from '@mui/material'
import { Black, HideIcon, ShowIcon } from '../../assets/AllExportIcon'
import { AppButton } from '../../components/UI/AppButton'
import { Input } from '../../components/UI/Input'
import BackgroundImage from '../../assets/images/icon/imgbackraund/bg-register.png'
import { useState } from 'react'

export const ChangePassword = () => {
   const [showPassword, setShowPassword] = useState(false)

   const [showRepitPassword, setShowRepitPassword] = useState(false)

   const inputPassword = () => {
      setShowPassword(!showPassword)
   }
   const inputRepitPassword = () => {
      setShowRepitPassword(!showRepitPassword)
   }

   return (
      <StylesBox>
         <StylesBoxRight>
            <StylesBoxLogo>
               <Black />
               Task Tracker
            </StylesBoxLogo>

            <Box>
               <StylesBoxInput>
                  <Typography variant="h2">Password</Typography>

                  <Input
                     placeholder="Password"
                     type={showPassword ? 'text' : 'password'}
                     iconPosition="end"
                     onClick={inputPassword}
                     icon={showPassword ? <ShowIcon /> : <HideIcon />}
                  />

                  <Input
                     placeholder="Repeat password"
                     type={showRepitPassword ? 'text' : 'password'}
                     onClick={inputRepitPassword}
                     icon={showRepitPassword ? <ShowIcon /> : <HideIcon />}
                     iconPosition="end"
                  />

                  <StyledButton>Log In</StyledButton>
               </StylesBoxInput>
            </Box>
         </StylesBoxRight>

         <StylesBoxLeft>
            <img src={BackgroundImage} alt="" />
         </StylesBoxLeft>
      </StylesBox>
   )
}

const StyledA = styled('a')({
   color: '#0079c0',
})

const StyledButton = styled(AppButton)({
   padding: '8px 60px',
})

const StylesBox = styled(Box)({
   display: 'flex',
})

const StylesBoxLeft = styled(Box)({
   width: '40%',
   height: '100vh',
})

const StylesImg = styled('img')({
   width: '100%',
   height: '100%',
})

const StylesBoxLogo = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   color: '#0580d1',
   position: 'absolute',
   top: '20px',
   left: '20px',
   gap: '8px',
})

const StylesBoxRight = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   flexDirection: 'column',
   width: '50%',
   height: '100vh',
})

const StylesBoxInput = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   flexDirection: 'column',
   width: '321px',
   height: '261px',
   gap: '16px',
})
