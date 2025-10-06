import { Avatar, Box, Typography } from '@mui/material'
import { Input } from '../../components/UI/input/Input'
import { Black, GoogleIcon, HideIcon } from '../../assets/AllExportIcon'
import { AppButton } from '../../components/UI/AppButton'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as yup from 'Yup'

export const SignIn = () => {
   const dispath = useDispatch()

   const onSubmit = (values) => {
      console.log(values)

      dispath(AUTH_THUNK.signIN({ values }))
   }

   const signUpSchema = yup.object().shape({
      email: yup.string().email().required('Email обязателен'),
      password: yup
         .string()
         .required('Пароль обязателен')
         .min(6, 'Пароль должен быть не менее 6 символов'),
   })

   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      validationSchema: signUpSchema,
      onSubmit,
   })

   return (
      <StylesBox onSubmit={formik.handleSubmit}>
         <StylesBoxRight>
            <StylesBoxLogo>
               <Black />
               Task Tracker
            </StylesBoxLogo>
            <Box>
               <StylesBoxInput>
                  <h2>Sign In</h2>
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
                  <Input
                     placeholder="example@gmail.com"
                     type="email"
                     name="email"
                     value={formik.values.email}
                     onChange={formik.handleChange}
                     error={
                        formik.touched.email && Boolean(formik.errors.email)
                     }
                  />
                  {formik.touched.email && formik.errors.email && (
                     <p style={{ color: 'red' }}>{formik.errors.email}</p>
                  )}

                  <Input
                     placeholder="Password"
                     type="password"
                     iconPosition="end"
                     name="password"
                     value={formik.values.password}
                     onChange={formik.handleChange}
                     error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                     }
                     icon={<HideIcon />}
                  />
                  {formik.touched.password && formik.errors.password && (
                     <p style={{ color: 'red' }}>{formik.errors.password}</p>
                  )}
                  <StyledBoxFrogot>
                     <Typography>Forgot Password ?</Typography>
                  </StyledBoxFrogot>

                  <StyledButton type="submit">Log In</StyledButton>
                  <Typography>
                     Not a member?{' '}
                     <StyledA href="/sign-up">Sign up now</StyledA>
                  </Typography>
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
const StyledBoxFrogot = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'end',
   width: '321px',
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
   minWidth: '321px',
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

const StylesBox = styled('form')({
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
