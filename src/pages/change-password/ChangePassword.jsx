import { Box, styled, Typography } from '@mui/material'
import { Black, HideIcon } from '../../assets/AllExportIcon'
import { AppButton } from '../../components/UI/AppButton'
import { Input } from '../../components/UI/Input'
import BackgroundImage from '../../assets/images/icon/imgbackraund/bg-register.png'

export const ChangePassword = () => {
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
                     type="password"
                     iconPosition="end"
                     icon={<HideIcon />}
                  />

                  <Input
                     placeholder="Repeat password"
                     type="Password"
                     iconPosition="end"
                     icon={<HideIcon />}
                  />

                  <StyledButton>Log In</StyledButton>
               </StylesBoxInput>
            </Box>
         </StylesBoxRight>

         <StylesBoxLeft>
            <StylesImg src={BackgroundImage} alt="" />
         </StylesBoxLeft>
      </StylesBox>
   )
}

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
