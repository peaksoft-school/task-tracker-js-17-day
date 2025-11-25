import { Box, styled, Typography } from '@mui/material'
import { Black, HideIcon, ShowIcon } from '../../assets/AllExportIcon'
import { AppButton } from '../../components/UI/AppButton'
import { Input } from '../../components/UI/Input'
import BackgroundImage from '../../assets/images/icon/imgbackraund/bg-register.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { PROFILE_THUNK } from '../../store/profile/profileThunk'

export const ChangePassword = () => {
   const [showPassword, setShowPassword] = useState(false)

   const [showRepitPassword, setShowRepitPassword] = useState(false)

   const [passwords, setPasswords] = useState({
      oldPassword: '',
      newPassword: '',
   })

   const dispatch = useDispatch()

   

   const hendlerRepitPassword = () => {
      try {
         dispatch(PROFILE_THUNK.updatePassword(passwords)).unwrap()
      } catch (error) {
         console.log(error)
      }
   }

   const handlePasswordChange = (e) => {
      const { name, value } = e.target
      setPasswords((prev) => ({ ...prev, [name]: value }))
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
                     placeholder="Old-Password"
                     type={showPassword ? 'text' : 'password'}
                     iconPosition="end"
                     onChange={handlePasswordChange}
                     value={passwords.oldPassword}
                     icon={
                        showPassword ? (
                           <StyledIconShow onClick={() =>  setShowPassword(false)} />
                        ) : (
                           <StyledIconHide onClick={() =>  setShowPassword(true)} />
                        )
                     }
                  />

                  <Input
                     placeholder="New-Password"
                     type={showRepitPassword ? 'text' : 'password'}
                     onChange={handlePasswordChange}
                     value={passwords.newPassword}
                     icon={
                        showRepitPassword ? (
                           <StyledIconShow onClick={() => setShowRepitPassword(false)} />
                        ) : (
                           <StyledIconHide onClick={ () => setShowRepitPassword(true)} />
                        )
                     }
                     iconPosition="end"
                  />

                  <StyledButton onClick={hendlerRepitPassword}>
                     Log In
                  </StyledButton>
               </StylesBoxInput>
            </Box>
         </StylesBoxRight>

         <StylesBoxLeft>
            <img src={BackgroundImage} alt="" />
         </StylesBoxLeft>
      </StylesBox>
   )
}
const StyledIconHide = styled(HideIcon)({
   cursor: 'pointer',
})

const StyledIconShow = styled(ShowIcon)({
   cursor: 'pointer',
})

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
