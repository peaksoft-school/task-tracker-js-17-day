import { Avatar, Box, Checkbox, Typography, styled } from '@mui/material'
import { Input } from '../../components/UI/Input'
import { AppButton } from '../../components/UI/AppButton'
import {
   Black,
   GoogleIcon,
   HideIcon,
   ShowIcon,
} from '../../assets/AllExportIcon'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { AUTH_THUNK } from '../../store/slices/auth/authThunk'
import { VALIDATION_SIGN_UP } from '../../utils/helpers/validation'
import BackgroundImage from '../../assets/images/icon/imgbackraund/bg-register.png'
import { useState } from 'react'
import { auth, provider } from '../../configs/firebase'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'

export const SignUp = () => {
   const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
   const navigate = useNavigate()

   const { status, acceptToken } = useSelector((state) => state.main)

   const dispatch = useDispatch()

   const onSubmit = (values) =>
      dispatch(AUTH_THUNK.signUP({ values, navigate }))

   const { handleSubmit, values, handleChange, touched, errors } = useFormik({
      initialValues: {
         name: '',
         lastName: '',
         email: '',
         password: '',
         repeatPassword: '',
      },

      validationSchema: VALIDATION_SIGN_UP,
      onSubmit,
   })
   const [showPassword, setShowPassword] = useState(false)

   const [showRepitPassword, setShowRepitPassword] = useState(false)

   const inputPassword = () => {
      setShowPassword(!showPassword)
   }
   const inputRepitPassword = () => {
      setShowRepitPassword(!showRepitPassword)
   }

   const handlerGoogle= async () => {
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
               <Typography fontSize={18}>Sign Up</Typography>

               <StyledBoxGoogle onClick={handlerGoogle}>
                  <StyledBox>
                     <Box>
                        <Typography>Войти через Google</Typography>
                     </Box>
                  </StyledBox>
                  <StyledAvatarGoogle>
                     <GoogleIcon />
                  </StyledAvatarGoogle>
               </StyledBoxGoogle>

               <StyledP>or</StyledP>

               <InputWrapper>
                  <Input
                     placeholder="Name"
                     type="text"
                     name="name"
                     value={values.name}
                     onChange={handleChange}
                     error={touched.name && Boolean(errors.name)}
                  />
                  <ErrorText>
                     {touched.name && errors.name ? errors.name : ' '}
                  </ErrorText>
               </InputWrapper>

               <InputWrapper>
                  <Input
                     placeholder="Surname"
                     type="text"
                     name="lastName"
                     value={values.lastName}
                     onChange={handleChange}
                     error={touched.lastName && Boolean(errors.lastName)}
                  />
                  <ErrorText>
                     {touched.lastName && errors.lastName
                        ? errors.lastName
                        : ' '}
                  </ErrorText>
               </InputWrapper>

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
                     icon={
                        showPassword ? (
                           <ShowIcon onClick={inputPassword} />
                        ) : (
                           <HideIcon onClick={inputPassword} />
                        )
                     }
                     name="password"
                     value={values.password}
                     onChange={handleChange}
                     error={touched.password && Boolean(errors.password)}
                  />
                  <ErrorText>
                     {touched.password && errors.password
                        ? errors.password
                        : ' '}
                  </ErrorText>
               </InputWrapper>

               <InputWrapper>
                  <Input
                     placeholder="Repeat password"
                     type={showRepitPassword ? 'text' : 'password'}
                     iconPosition="end"
                     name="repeatPassword"
                     onChange={handleChange}
                     icon={
                        showRepitPassword ? (
                           <ShowIcon onClick={inputRepitPassword} />
                        ) : (
                           <HideIcon onClick={inputRepitPassword} />
                        )
                     }
                     value={values.repeatPassword}
                     error={
                        touched.repeatPassword && Boolean(errors.repeatPassword)
                     }
                  />
                  <ErrorText>
                     {touched.repeatPassword && errors.repeatPassword
                        ? errors.repeatPassword
                        : ' '}
                  </ErrorText>
               </InputWrapper>

               <StylesBoxCheckbox>
                  <Checkbox
                     {...label}
                     defaultChecked
                     sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                  />
                  <StylesP>
                     Creating an account means you're okay with our Terms of
                     Service, Privacy Policy.
                  </StylesP>
               </StylesBoxCheckbox>

               <StyledButton type="submit">Sign Up</StyledButton>

               <Typography>
                  You already have an account?
                  <StyledA href="/">Log In</StyledA>
               </Typography>
            </StylesBoxInput>
         </StylesBoxRight>

         <StylesBoxLeft>
            <StyledImg src={BackgroundImage} alt="" />
         </StylesBoxLeft>
      </StylesBox>
   )
}
const StyledImg = styled('img')({
   width: '597px',
   height: '100%',
})

const StylesBox = styled('form')({
   display: 'flex',
   fontFamily: 'Cera Pro, sans-serif',
})

const StylesBoxLeft = styled(Box)({
   width: '40%',
   height: '100vh',
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

const StylesP = styled('p')({
   fontSize: '12px',
   fontWeight: '400',
})

const StylesBoxCheckbox = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   gap: '8px',
   width: '100%',
})

const StylesBoxInput = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   width: '321px',
   gap: '8px',
})

const InputWrapper = styled(Box)({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '4px',
})

const ErrorText = styled(Typography)({
   color: 'red',
   minHeight: '16px',
   fontSize: '12px',
})
