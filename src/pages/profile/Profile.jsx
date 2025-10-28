import { Box, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Header } from '../../layouts/header/Header'
import { Input } from '../../components/UI/Input'
import { AppButton } from '../../components/UI/AppButton'
import ProfileBackg from '../../assets/profileBackgImg/profileBackgImg.jpg'
import { HideIcon, ShowIcon } from '../../assets/AllExportIcon'

export const Profile = () => {
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
               <StyledBoxPortfolioHeader>
                  <StyledBoxImgProfil>img</StyledBoxImgProfil>
                  <Typography>Riko Rikovich</Typography>
               </StyledBoxPortfolioHeader>
               <StyledBoxInputs>
                  <Box>
                     <StyledInput label="Name" value="Riko Rikovich" />
                     <StyledInput label="Name" value="Riko Rikovich" />
                     <StyledInput label="Name" value="Riko Rikovich" />
                  </Box>
                  <StyledBoxIputs>
                     <StyledInput
                        label="Possword"
                        value="Riko Rikovich"
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
                        value="Riko Rikovich"
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
            </StyledBoxPortfolio>
         </StyledBox>
      </Box>
   )
}
const StyledBoxIputs = styled(Box)({
   marginBottom: '30px',
})

const StyledBoxPortfolioHeader = styled(Box)({
   maxWidth: '286px',
   display: 'flex',
   justifyContent: 'space-between',
})

const StyledBoxImgProfil = styled(Box)({
   width: '141px',
   height: '141px',
   border: '5px solid #000000',
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
