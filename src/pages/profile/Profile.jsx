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

   useEffect(() => {
      dispatch(PROFILE_THUNK.profileSlice())
   }, [])
   console.log(data, 'data profile')

   const [showPassword, setShowPassword] = useState(false)
   const [showRepitPassword, setShowRepitPassword] = useState(false)

   const inputPassword = () => {
      setShowPassword(!showPassword)
   }
   const inputRepitPassword = () => {
      setShowRepitPassword(!showRepitPassword)
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
                           <StyledAvatar src={UserImage} />
                        </StyledBoxImgProfil>
                        <Typography>
                           {data.profileFul.name} {data.profileFul.lastName}
                        </Typography>
                     </StyledBoxPortfolioHeader>
                     <StyledBoxInputs>
                        <Box>
                           <StyledInput
                              label="Name"
                              value={data.profileFul.name}
                           />
                           <StyledInput
                              label="LastName"
                              value={data.profileFul.lastName}
                           />
                           <StyledInput
                              label="Email"
                              value={data.profileFul.email}
                           />
                        </Box>
                        <StyledBoxIputs>
                           <StyledInput
                              label="Possword"
                              placeholder="Password"
                              type={showPassword ? 'text' : 'password'}
                              iconPosition="end"
                              icon={
                                 showPassword ? (
                                    <ShowIcon onClick={inputRepitPassword} />
                                 ) : (
                                    <HideIcon onClick={inputRepitPassword} />
                                 )
                              }
                           />
                           <StyledInput
                              label="RepitPassword"
                              placeholder="Repit Password"
                              type={showRepitPassword ? 'text' : 'password'}
                              iconPosition="end"
                              icon={
                                 showRepitPassword ? (
                                    <ShowIcon onClick={inputRepitPassword} />
                                 ) : (
                                    <HideIcon onClick={inputRepitPassword} />
                                 )
                              }
                           />
                           <StyledButton>
                              <AppButton>Save</AppButton>
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
   maxWidth: '296px',
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
