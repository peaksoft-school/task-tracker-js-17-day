import { Avatar, Box, Typography, styled } from '@mui/material'
import { Input } from '../../components/UI/Input'
import { AppButton } from '../../components/UI/AppButton'
import {
   Black,
   GoogleIcon,
   HideIcon,
   ShowIcon,
} from '../../assets/AllExportIcon'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { VALIDATION_SIGN_IN } from '../../utils/helpers/validation'
import { useState } from 'react'
import BackgroundImage from '../../assets/images/icon/imgbackraund/bg-register.png'
import { AUTH_THUNK } from '../../store/slices/auth/authThunk'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../configs/firebase'

export const SignIn = () => {
   const [showPassword, setShowPassword] = useState(false)

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const onSubmit = (values) =>
      dispatch(AUTH_THUNK.signIn({ values, navigate }))

   const { handleSubmit, values, handleChange, touched, errors } = useFormik({
      initialValues: {
         email: '',
         password: '',
      },

      validationSchema: VALIDATION_SIGN_IN,
      onSubmit,
   })

   const inputPassword = () => setShowPassword(!showPassword)

   const hndlerGoogel = async () => {
      await signInWithPopup(auth, provider)
         .then((response) => {
            dispatch(
               AUTH_THUNK.authWithGoogle({
                  tokenId: response?.user?.accessToken,
                  navigate,
               })
            )
         })
         .catch((error) => {
            return error
         })
   }

   return (
      <StylesBox onSubmit={handleSubmit}>
         <StylesBoxRight>
            <StylesBoxLogo>
               <Black />
               Task Tracker
            </StylesBoxLogo>
            <StylesBoxInput>
               <Typography fontSize={18}>Sign In</Typography>
               <StyledBoxGoogle onClick={hndlerGoogel}>
                  <StyledBox>
                     <StyledAvatar>R</StyledAvatar>
                     <Box>
                        <StyledH3>Sign Up as Nazira</StyledH3>
                        <StyledP>example@gmail.com</StyledP>
                     </Box>
                  </StyledBox>
                  <StyledAvatarGoogle>
                     <GoogleIcon />
                  </StyledAvatarGoogle>
               </StyledBoxGoogle>
               <InputWrapper>
                  <Input
                     placeholder="example@gmail.com"
                     type="email"
                     name="email"
                     value={values.email}
                     onChange={handleChange}
                     error={touched.email && Boolean(errors.email)}
                  />
                  <ErrorText>
                     {touched.email && errors.email ? errors.email : ' '}
                  </ErrorText>
               </InputWrapper>
               <InputWrapper>
                  <Input
                     placeholder="Password"
                     type={showPassword ? 'text' : 'password'}
                     iconPosition="end"
                     name="password"
                     value={values.password}
                     onChange={handleChange}
                     error={touched.password && Boolean(errors.password)}
                     icon={
                        showPassword ? (
                           <ShowIcon onClick={inputPassword} />
                        ) : (
                           <HideIcon onClick={inputPassword} />
                        )
                     }
                  />
                  <ErrorText>
                     {touched.password && errors.password
                        ? errors.password
                        : ' '}
                  </ErrorText>
               </InputWrapper>
               <StyledBoxFrogot>
                  <StylesA href="/forgot-password/:id">
                     Forgot Password?
                  </StylesA>
               </StyledBoxFrogot>
               <StyledButton type="submit">Log In</StyledButton>
               <Typography>
                  Not a member?
                  <StyledA href="/sign-up">Sign up now</StyledA>
               </Typography>
            </StylesBoxInput>
         </StylesBoxRight>
         <StylesBoxLeft>
            <img src={BackgroundImage} alt="" />
         </StylesBoxLeft>
      </StylesBox>
   )
}
const StylesBox = styled('form')({
   display: 'flex',
   fontFamily: 'Cera Pro, sans-serif',
})
const StylesBoxLeft = styled(Box)({
   width: '40%',
   height: '100vh',
})
const StylesA = styled('a')({
   color: '#393939',
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
   gap: '16px',
})
const StyledBoxFrogot = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'end',
   width: '100%',
   '& .MuiTypography-root': {
      cursor: 'pointer',
   },
})
const StyledBox = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   gap: '12px',
})
const StyledBoxGoogle = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   backgroundColor: '#f0f0f0',
   padding: '11px 16px',
   borderRadius: '8px',
   width: '100%',
   cursor: 'pointer',
})
const StyledH3 = styled('h3')({
   fontWeight: '400',
   fontSize: '16px',
   color: '#b2b2b2',
})
const StyledP = styled('p')({
   fontWeight: '400',
   color: '#b2b2b2',
})
const StyledAvatarGoogle = styled(Avatar)({
   backgroundColor: '#f0f0f0',
})
const StyledAvatar = styled(Avatar)({
   backgroundColor: '#0580d1',
})
const StyledA = styled('a')({
   color: '#0079c0',
})
const StyledButton = styled(AppButton)({
   padding: '8px 60px',
})
const InputWrapper = styled(Box)({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
})
const ErrorText = styled(Typography)({
   color: 'red',
   minHeight: '20px',
   marginTop: '4px',
   fontSize: '14px',
})
