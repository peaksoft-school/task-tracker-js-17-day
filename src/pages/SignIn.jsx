import { Box } from '@mui/material'
import { Input } from '../components/UI/input/Input'
import { Black, HideIcon } from '../assets/AllExportIcon'
import { AppButton } from '../components/UI/AppButton'
import styled from '@emotion/styled'

export const SignIn = () => {
   return (
      <StylesBox>
         <StylesBoxRight>
            <StylesBoxLogo>
               <Black />
               Task Tracker
            </StylesBoxLogo>
            <Box>
               <StylesBoxInput>
                  <h2>Sign In</h2>
                  <Input placeholder="example@gmail.com" type="email" />
                  <Input
                     placeholder="Password"
                     type="password"
                     iconPosition="end"
                     icon={<HideIcon />}
                  />
                  <p>Forgot Password ?</p>
                  <StyledButton>Log In</StyledButton>
                  <p>
                     Not a member? <StyledA href="">Sign up now</StyledA>
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
