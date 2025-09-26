import styled from '@emotion/styled'
import { Box, Checkbox } from '@mui/material'
import { Input } from '../components/UI/input/Input'
import { Black, HideIcon, ShowIcon } from '../assets/AllExportIcon'
import { AppButton } from '../components/UI/AppButton'
import React from 'react'
import { useNavigate } from 'react-router'

export const SignUp = () => {
   const navigate = useNavigate()
   const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

   return (
      <StylesBox>
         <StylesBoxRight>
            <StylesBoxLogo>
               <Black />
               Task Tracker
            </StylesBoxLogo>
            <Box>
               <StylesBoxInput>
                  <h2>Sign Un</h2>
                  <Input placeholder="Name" type="text" />
                  <Input placeholder="Surname" type="text" />
                  <Input placeholder="example@gmail.com" type="email" />
                  <Input
                     placeholder="Password"
                     type="password"
                     iconPosition="end"
                     icon={<HideIcon />}
                  />
                  <Input
                     placeholder="Repeat password"
                     type="password"
                     iconPosition="end"
                     icon={<ShowIcon />}
                  />
                  <StylesBoxCheckbox>
                     <Checkbox
                        {...label}
                        defaultChecked
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                     />
                     <StylesP>
                        Creating an account means you,re okay with our Terms of
                        Service, Privacy Policy.
                     </StylesP>
                  </StylesBoxCheckbox>
                  <StyledButton>Sign Up</StyledButton>
                  <p>
                     You already have an account?{' '}
                     <StyledA href="">Log In</StyledA>
                  </p>
               </StylesBoxInput>
            </Box>
         </StylesBoxRight>
         <StylesBoxLeft>
            <StylesImg
               src="src/assets/images/icon/imgbackraund/Rectangle 77.png"
               alt=""
            />
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

const StylesP = styled('p')({
   fontSize: '12px',
   fontWeight: '400',
})

const StylesBoxCheckbox = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   gap: '8px',
   width: '350px',
   height: '100%',
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
