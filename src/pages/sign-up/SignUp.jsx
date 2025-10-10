import styled from '@emotion/styled'
import { Avatar, Box, Checkbox, Typography } from '@mui/material'
import { Input } from '../../components/UI/input/Input'
import {
   Black,
   GoogleIcon,
   HideIcon,
   ShowIcon,
} from '../../assets/AllExportIcon'
import { AppButton } from '../../components/UI/AppButton'
import React from 'react'
import { useNavigate } from 'react-router'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { AUTH_THUNK } from '../../store/slices/auth/authThunk'
import * as yup from 'Yup'

export const SignUp = () => {
   const navigate = useNavigate()
   const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
   const dispath = useDispatch()

   const signUpSchema = yup.object().shape({
      name: yup.string().required('Имя обязательно'),
      lastName: yup.string().required('Фамилия обязательна'),
      email: yup.string().email().required('Email обязателен'),
      password: yup
         .string()
         .required('Пароль обязателен')
         .min(6, 'Пароль должен быть не менее 6 символов'),
      repeatPassword: yup
         .string()
         .required('Повторите пароль')
         .oneOf([yup.ref('password')], 'Пароли должны совпадать'),
   })

   // const onSubmit = (values) => {
   //    console.log(values)

   //    dispath(AUTH_THUNK.signUP({ values }))
   // }

   const formik = useFormik({
      initialValues: {
         name: '',
         lastName: '',
         email: '',
         password: '',
         repeatPassword: '',
      },
      validationSchema: signUpSchema,
      onSubmit: (values) => {
         console.log(values, 'values')
         dispath(AUTH_THUNK.signUP(values))
      },
   })
   console.log(signUpSchema, 'dl')
   return (
      <StylesBox onSubmit={formik.handleSubmit}>
         <StylesBoxRight>
            <StylesBoxLogo>
               <Black />
               Task Tracker
            </StylesBoxLogo>
            <Box>
               <StylesBoxInput>
                  <h2>Sign Un</h2>
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

                  <StyledP>or</StyledP>

                  <Input
                     placeholder="Name"
                     type="text"
                     value={formik.values.name}
                     onChange={formik.handleChange}
                     name="name"
                     error={formik.touched.name && Boolean(formik.errors.name)}
                  />
                  {formik.touched.name && formik.errors.name && (
                     <p style={{ color: 'red' }}>{formik.errors.name}</p>
                  )}

                  <Input
                     placeholder="Surname"
                     type="text"
                     value={formik.values.lastName}
                     onChange={formik.handleChange}
                     name="lastName"
                     error={
                        formik.touched.lastName &&
                        Boolean(formik.errors.lastName)
                     }
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                     <p style={{ color: 'red' }}>{formik.errors.lastName}</p>
                  )}

                  <Input
                     placeholder="example@gmail.com"
                     type="email"
                     value={formik.values.email}
                     onChange={formik.handleChange}
                     name="email"
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
                     icon={<HideIcon />}
                     value={formik.values.password}
                     onChange={formik.handleChange}
                     name="password"
                     error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                     }
                  />
                  {formik.touched.password && formik.errors.password && (
                     <p style={{ color: 'red' }}>{formik.errors.password}</p>
                  )}

                  <Input
                     placeholder="Repeat password"
                     type="password"
                     iconPosition="end"
                     icon={<ShowIcon />}
                     error={
                        formik.touched.repeatPassword &&
                        Boolean(formik.errors.repeatPassword)
                     }
                  />
                  {formik.touched.repeatPassword &&
                     formik.errors.repeatPassword && (
                        <p style={{ color: 'red' }}>
                           {formik.errors.repeatPassword}
                        </p>
                     )}

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

                  <Typography>
                     You already have an account?{' '}
                     <StyledA href="/sign-in">Log In</StyledA>
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
