import { Avatar, Box, Typography, styled } from '@mui/material'
import { Input } from '../../components/UI/Input'
import { AppButton } from '../../components/UI/AppButton'
import { Black, GoogleIcon, HideIcon } from '../../assets/AllExportIcon'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { VALIDATION_SIGN_IN } from '../../utils/helpers/validation'

export const SignIn = () => {
   const dispatch = useDispatch()

   const onSubmit = (values) => dispatch(AUTH_THUNK.signIN({ values }))

   const { handleSubmit, values, handleChange, touched, errors } = useFormik({
      initialValues: {
         email: '',
         password: '',
      },

      validationSchema: VALIDATION_SIGN_IN,
      onSubmit,
   })

   return (
      <StylesBox onSubmit={handleSubmit}>
         <StylesBoxRight>
            <StylesBoxLogo>
               <Black />
               Task Tracker
            </StylesBoxLogo>

            <StylesBoxInput>
               <Typography fontSize={18}>Sign In</Typography>

               <StyledBoxGoogle>
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
                     type="password"
                     iconPosition="end"
                     name="password"
                     value={values.password}
                     onChange={handleChange}
                     error={touched.password && Boolean(errors.password)}
                     icon={<HideIcon />}
                  />
                  <ErrorText>
                     {touched.password && errors.password
                        ? errors.password
                        : ' '}
                  </ErrorText>
               </InputWrapper>

               <StyledBoxFrogot>
                  <Typography color="#393939">Forgot Password?</Typography>
               </StyledBoxFrogot>

               <StyledButton type="submit">Log In</StyledButton>

               <Typography>
                  Not a member?
                  <StyledA href="/sign-up">Sign up now</StyledA>
               </Typography>
            </StylesBoxInput>
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

const StylesBox = styled('form')({
   display: 'flex',
   fontFamily: 'Cera Pro, sans-serif',
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
