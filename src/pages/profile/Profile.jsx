import { Avatar, Box, styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Header } from '../../layouts/header/Header'
import { Input } from '../../components/UI/Input'
import { AppButton } from '../../components/UI/AppButton'
import ProfileBackg from '../../assets/profileBackgImg/profileBackgImg.jpg'
import { HideIcon, ShowIcon } from '../../assets/AllExportIcon'
import { useDispatch, useSelector } from 'react-redux'
import { PROFILE_THUNK } from '../../store/profile/profileThunk'
import UserImage from '../../assets/images/icon/iconpeople/ikonmen.jpg'

export const Profile = () => {
   const data = useSelector((state) => state.profile)
   const dispatch = useDispatch()

   const [form, setForm] = useState({
      name: '',
      lastName: '',
      avatarUrl: '',
   })

   const [passwords, setPasswords] = useState({
      oldPassword: '',
      newPassword: '',
   })

   useEffect(() => {
      if (data.profileFul) {
         setForm({
            firstName: data.profileFul.name || '',
            lastName: data.profileFul.lastName || '',
            avatarUrl: data.profileFul.avatarUrl || '',
         })
      }
   }, [data.profileFul])

   useEffect(() => {
      dispatch(PROFILE_THUNK.profileSlice())
   }, [])

   const [showPassword, setShowPassword] = useState(false)
   const [showRepitPassword, setShowRepitPassword] = useState(false)
   const [showNewPassword, setShowNewPassword] = useState(false)

   const inputPassword = () => {
      setShowPassword(!showPassword)
   }
   const inputRepitPassword = () => {
      setShowRepitPassword(!showRepitPassword)
   }

   const handleChange = (e) => {
      const { name, value } = e.target
      setForm((prev) => ({ ...prev, [name]: value }))
   }

   const handlePasswordChange = (e) => {
      const { name, value } = e.target
      setPasswords((prev) => ({ ...prev, [name]: value }))
   }
   const handleSave = () => {
      dispatch(PROFILE_THUNK.updateProfile(form))
   }
   const handleSaveProfile = async () => {
      try {

         await dispatch(PROFILE_THUNK.updateProfile(form)).unwrap()


         if (passwords.oldPassword && passwords.newPassword) {
            await dispatch(PROFILE_THUNK.updatePassword(passwords)).unwrap()
         }
      } catch (error) {
         console.error('Ошибка при обновлении профиля:', error)
      }
   }
   return (
      <Box>
         <Header />
         <StyledBox>
            <StyledBoxProfileBackg></StyledBoxProfileBackg>
            <StyledBoxPortfolio>
               {data.profileFul && (
                  <Box key={data.profileFul.id}>
                     <StyledBoxPortfolioHeader>
                        <StyledBoxImgProfil>
                           <StyledAvatar src={form.avatarUrl || UserImage} />
                        </StyledBoxImgProfil>
                        <Typography>
                           {data.profileFul.name} {data.profileFul.lastName}
                        </Typography>
                     </StyledBoxPortfolioHeader>
                     <StyledBoxInputs>
                        <Box>
                           <StyledInput
                              label="name"
                              name="firstName"
                              placeholder={data.profileFul.name}
                              value={form.name}
                              onChange={handleChange}
                           />
                           <StyledInput
                              label="Last Name"
                              name="lastName"
                              value={form.lastName}
                              placeholder={data.profileFul.lastName}
                              onChange={handleChange}
                           />
                           <StyledInput
                              label="Email"
                              value={data.profileFul.email}
                           />
                        </Box>
                        <StyledBoxIputs>
                           <StyledInput
                              label="Old Password"
                              name="oldPassword"
                              type={showPassword ? 'text' : 'password'}
                              value={passwords.oldPassword}
                              onChange={handlePasswordChange}
                              placeholder="••••••••"
                              iconPosition="end"
                              icon={
                                 showPassword ? (
                                    <ShowIcon
                                       onClick={() => setShowPassword(false)}
                                    />
                                 ) : (
                                    <HideIcon
                                       onClick={() => setShowPassword(true)}
                                    />
                                 )
                              }
                           />

                           <StyledInput
                              label="New Password"
                              name="newPassword"
                              type={showNewPassword ? 'text' : 'password'}
                              value={passwords.newPassword}
                              onChange={handlePasswordChange}
                              placeholder="••••••••"
                              iconPosition="end"
                              icon={
                                 showNewPassword ? (
                                    <ShowIcon
                                       onClick={() => setShowNewPassword(false)}
                                    />
                                 ) : (
                                    <HideIcon
                                       onClick={() => setShowNewPassword(true)}
                                    />
                                 )
                              }
                           />
                           <StyledButton>
                              <AppButton
                                 onClick={handleSaveProfile}
                                 disabled={data.isLoading}
                              >
                                 {data.isLoading ? 'Saving...' : 'Save Profile'}
                              </AppButton>
                           </StyledButton>
                        </StyledBoxIputs>
                     </StyledBoxInputs>
                     <StyledBoxInvolved>
                        <StyledTypograpthy>
                           Involved in projects
                        </StyledTypograpthy>
                        <StyledBoxInvolvedNumber>
                           {data.profileFul?.workspaces?.length || 0}
                        </StyledBoxInvolvedNumber>
                     </StyledBoxInvolved>

                     <StyledBoxWorkspace>
                        {data.profileFul?.workspaces?.map((el) => (
                           <StyledBoxAvatar key={el.id}>
                              <Box>
                                 <StyledAvatarName
                                    alt={el.name}
                                    src="/broken-image.jpg"
                                 />
                              </Box>
                              <Box>
                                 <Typography>{el.name}</Typography>
                                 <Typography>{el.description}</Typography>
                              </Box>
                           </StyledBoxAvatar>
                        ))}
                     </StyledBoxWorkspace>
                  </Box>
               )}
            </StyledBoxPortfolio>
         </StyledBox>
      </Box>
   )
}
const StyledTypography = styled(Typography)({
   color: '#ffffff',
   marginInline: '10px',
})

const StyledBoxWorkspace = styled(Box)({
   display: 'grid',
   gridTemplateColumns: 'repeat(2, 1fr)',
   gap: '20px',
})

const StyledAvatarName = styled(Avatar)({
   backgroundColor: '#2E7DCC',
   width: 64,
   height: 64,
   fontSize: 32,
   borderRadius: 2, // квадрат
})

const StyledBoxAvatar = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   gap: '20px',
   marginTop: '20px',
})

const StyledTypograpthy = styled(Box)({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
})

const StyledBoxInvolvedNumber = styled(Box)({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   width: '19px',
   height: '19px',
   backgroundColor: '#b3b3b3',
   borderRadius: '50%',
   color: '#ffffff',
})

const StyledBoxInvolved = styled(Box)({
   display: 'flex',
   justifyContent: 'start',
   alignItems: 'center',
   gap: '10px',
})

const StyledAvatar = styled(Avatar)({
   width: '131px',
   height: '131px',
})

const StyledBoxIputs = styled(Box)({
   marginBottom: '30px',
})

const StyledBoxPortfolioHeader = styled(Box)({
   maxWidth: '350px',
   display: 'flex',
   justifyContent: 'space-between',
})

const StyledBoxImgProfil = styled(Box)({
   width: '141px',
   height: '141px',
   border: '5px solid #fffefe',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   position: 'relative',
   top: '-70px',
   left: '30px',
   borderRadius: '50%',
})

const StyledBox = styled(Box)({
   margin: '0 30px 0 30px',
})

const StyledBoxProfileBackg = styled(Box)({
   width: '100%',
   height: '185px',
   borderTopRightRadius: '8px',
   borderTopLeftRadius: '8px',
   backgroundImage: `url(${ProfileBackg})`,
   backgroundRepeat: 'no-repeat',
   backgroundSize: 'cover',
   backgroundPosition: 'center',
})

const StyledBoxPortfolio = styled(Box)({
   maxWidth: '746px',
   height: 'auto',
})

const StyledButton = styled(Box)({
   display: 'flex',
   justifyContent: 'end',
})

const StyledBoxInputs = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
   gap: '20px',
})

const StyledInput = styled(Input)({
   marginBottom: '24px',
})
