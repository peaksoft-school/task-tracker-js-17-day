import { Avatar, AvatarGroup, Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Header } from '../../layouts/header/Header'
import {
   CheckMarkIcon,
   CommunicationIcon,
   HourglassIcon,
   NotifyIcon,
   PenselIcon,
   PeopleIcon,
   TemplateIcon,
   ThreeDotsIcon,
   TypographyIcon,
} from '../../assets/AllExportIcon'
import styled from '@emotion/styled'
import AddIcon from '@mui/icons-material/Add'
import FilterListIcon from '@mui/icons-material/FilterList'
import AppsIcon from '@mui/icons-material/Apps'
import { AppButton } from '../../components/UI/AppButton'

export const InnerPageBoard = ({ columns = 1 }) => {
   return (
      <>
         <Header notificationCount={12} favouritesCount={0} />
         <StyledBox>
            <Box>LMS</Box>
            <StyledBoxRights>
               <StyledBoxRightHeader>
                  <Box>
                     <StyledBoxRightHeaderMini>
                        <Box>{<PenselIcon />}</Box>
                        <StyledTypographyTitle>Title</StyledTypographyTitle>
                     </StyledBoxRightHeaderMini>

                     <StyledBoxRightHeaderMini>
                        <Typography>Columns:</Typography>
                        <Typography>{columns}</Typography>
                     </StyledBoxRightHeaderMini>
                  </Box>
                  <StyledBoxAvatarButton>
                     <AvatarGroup max={9}>
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/1.jpg"
                        />

                        <Avatar
                           alt="Travis Howard"
                           src="/static/images/avatar/2.jpg"
                        />

                        <Avatar
                           alt="Cindy Baker"
                           src="/static/images/avatar/3.jpg"
                        />

                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/1.jpg"
                        />

                        <Avatar
                           alt="Travis Howard"
                           src="/static/images/avatar/2.jpg"
                        />
                        <Avatar
                           alt="Cindy Baker"
                           src="/static/images/avatar/3.jpg"
                        />
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/1.jpg"
                        />
                        <Avatar
                           alt="Travis Howard"
                           src="/static/images/avatar/2.jpg"
                        />
                        <Avatar
                           alt="Cindy Baker"
                           src="/static/images/avatar/3.jpg"
                        />
                        <Avatar
                           alt="Remy Sharp"
                           src="/static/images/avatar/1.jpg"
                        />
                        <Avatar
                           alt="Travis Howard"
                           src="/static/images/avatar/2.jpg"
                        />
                        <Avatar
                           alt="Cindy Baker"
                           src="/static/images/avatar/3.jpg"
                        />
                     </AvatarGroup>
                     <Typography>Invite</Typography>

                     <StyledAvatar>
                        <StyledPlusIcon />
                     </StyledAvatar>

                     <StyledButton startIcon={<FilterListIcon />}>
                        Filter (2)
                     </StyledButton>

                     <StyledButton startIcon={<AppsIcon />}>Menu</StyledButton>
                  </StyledBoxAvatarButton>
               </StyledBoxRightHeader>

               <StyledBoxCardContainer>
                  <StyledCard>
                     <StyledBoxCardHeader>
                        <Box>Title</Box>

                        <Box>
                           <NotifyIcon />
                           <ThreeDotsIcon />
                        </Box>
                     </StyledBoxCardHeader>
                     <StyledBoxRightsContainerTop>
                        <StyledBoxColor>
                           <StyledBoxColors green></StyledBoxColors>

                           <StyledBoxColors red></StyledBoxColors>

                           <StyledBoxColors yellow></StyledBoxColors>

                           <StyledBoxColors blue></StyledBoxColors>

                           <StyledBoxColors red></StyledBoxColors>
                        </StyledBoxColor>
                        <Typography>
                           Какая то задача, которую нужно выполнить
                        </Typography>
                        <StyledBoxTask>
                           <StyledBoxHourglass>
                              <HourglassIcon />
                              <StyledTypography>2 month</StyledTypography>
                           </StyledBoxHourglass>

                           <TypographyIcon />

                           <CommunicationIcon />

                           <CheckMarkIcon />

                           <StyledTypographyIcon>1/3</StyledTypographyIcon>

                           <PeopleIcon />

                           <StyledTypographyIcon>5</StyledTypographyIcon>
                        </StyledBoxTask>
                     </StyledBoxRightsContainerTop>
                     <StyledBoxRightsContainerBottom>
                        <StyledBoxColorContainer>
                           <StyledBoxColorsContainer green>
                              Сделано
                           </StyledBoxColorsContainer>

                           <StyledBoxColorsContainer red>
                              Срочно начать с этого
                           </StyledBoxColorsContainer>
                        </StyledBoxColorContainer>

                        <StyledBoxColorsContainer yellow>
                           Обратите на это внимание
                        </StyledBoxColorsContainer>

                        <StyledBoxColorsContainer blue>
                           Хорошего всем настроения, друзья
                        </StyledBoxColorsContainer>

                        <StyledBoxColorsContainer red>
                           Срочно начать с этого
                        </StyledBoxColorsContainer>

                        <Typography>
                           Какая то задача, которую нужно выполнить
                        </Typography>
                        <StyledBoxFuters>
                           <StyledButtonBlek>Checklist</StyledButtonBlek>
                           <StyledBoxIconsFuter>
                              <CheckMarkIcon />
                              <StyledTypographyIcon>1/3</StyledTypographyIcon>
                              <PeopleIcon />
                              <StyledTypographyIcon>5</StyledTypographyIcon>
                           </StyledBoxIconsFuter>
                        </StyledBoxFuters>
                     </StyledBoxRightsContainerBottom>
                     <StyledBoxButtons>
                        <StyledButtonPlus>+ Add a card</StyledButtonPlus>
                        <TemplateIcon />
                     </StyledBoxButtons>
                  </StyledCard>
                  <StyledCard>
                     <StyledBoxCardHeader>
                        <Box>Title</Box>

                        <Box>
                           <NotifyIcon />
                           <ThreeDotsIcon />
                        </Box>
                     </StyledBoxCardHeader>
                     <StyledBoxRightsContainerTop>
                        <StyledBoxColor>
                           <StyledBoxColors green></StyledBoxColors>

                           <StyledBoxColors red></StyledBoxColors>

                           <StyledBoxColors yellow></StyledBoxColors>

                           <StyledBoxColors blue></StyledBoxColors>

                           <StyledBoxColors red></StyledBoxColors>
                        </StyledBoxColor>
                        <Typography>
                           Какая то задача, которую нужно выполнить
                        </Typography>
                        <StyledBoxTask>
                           <StyledBoxHourglass>
                              <HourglassIcon />
                              <StyledTypography>2 month</StyledTypography>
                           </StyledBoxHourglass>

                           <TypographyIcon />

                           <CommunicationIcon />

                           <CheckMarkIcon />

                           <StyledTypographyIcon>1/3</StyledTypographyIcon>

                           <PeopleIcon />

                           <StyledTypographyIcon>5</StyledTypographyIcon>
                        </StyledBoxTask>
                     </StyledBoxRightsContainerTop>
                     <StyledBoxRightsContainerBottom>
                        <StyledBoxColorContainer>
                           <StyledBoxColorsContainer green>
                              Сделано
                           </StyledBoxColorsContainer>

                           <StyledBoxColorsContainer red>
                              Срочно начать с этого
                           </StyledBoxColorsContainer>
                        </StyledBoxColorContainer>

                        <StyledBoxColorsContainer yellow>
                           Обратите на это внимание
                        </StyledBoxColorsContainer>

                        <StyledBoxColorsContainer blue>
                           Хорошего всем настроения, друзья
                        </StyledBoxColorsContainer>

                        <StyledBoxColorsContainer red>
                           Срочно начать с этого
                        </StyledBoxColorsContainer>

                        <Typography>
                           Какая то задача, которую нужно выполнить
                        </Typography>
                     </StyledBoxRightsContainerBottom>
                     <StyledBoxButtons>
                        <StyledButtonPlus>+ Add a card</StyledButtonPlus>
                        <TemplateIcon />
                     </StyledBoxButtons>
                  </StyledCard>
               </StyledBoxCardContainer>
            </StyledBoxRights>
         </StyledBox>
      </>
   )
}
const StyledTypographyTitle = styled(Typography)(() => ({
   color: '#000000',
   fontSize: '20px',
   fontWeight: '500',
}))

const StyledBoxCardContainer = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '16px',
}))

const StyledBoxButtons = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
}))

const StyledButtonPlus = styled(Button)({
   color: '#000000',
})

const StyledBoxRightsContainerBottom = styled(Box)(() => ({
   backgroundColor: '#f4f4f4',
   padding: '8px',
   borderRadius: '8px',
}))

const StyledBoxRightsContainerTop = styled(Box)(() => ({
   backgroundColor: '#f4f4f4',
   padding: '8px',
   borderRadius: '8px',
   marginBottom: '16px',
}))

const StyledBoxRights = styled(Box)(() => ({
   padding: '16px',
}))

const StyledBoxFuters = styled(Box)(() => ({
   marginTop: '16px',
   display: 'flex',
   justifyContent: 'end',
   alignItems: 'end',
   flexDirection: 'column',
}))

const StyledBoxIconsFuter = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '8px',
}))

const StyledButtonBlek = styled(AppButton)({
   backgroundColor: '#121212',
   '&:hover': {
      backgroundColor: '#121212',
   },

   '&:active': {
      backgroundColor: '#121212',
   },
})

const StyledBoxColorsContainer = styled(Box)((props) => ({
   backgroundColor: props.green
      ? '#61bd4f'
      : 'white' && props.red
        ? '#eb5a46'
        : 'white' && props.yellow
          ? '#f2d600'
          : 'white' && props.blue
            ? '#0079bf'
            : 'white',
   borderRadius: '8px',
   width: 'fit-content',
   color: 'white',
   marginBottom: '8px',
   fontSize: '12px',
   fontWeight: 500,
}))

const StyledBoxColorContainer = styled(Box)(() => ({
   display: 'flex',
   gap: '8px',
}))

const StyledBoxTask = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '12px',
}))

const StyledTypographyIcon = styled(Typography)(() => ({
   color: '#919191',
   fontWeight: 500,
   fontSize: '14px',
}))

const StyledBoxHourglass = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#faddb4',
   width: '91px',
   height: '22px',
   borderRadius: '8px',
}))

const StyledTypography = styled(Typography)(() => ({
   color: '#c7842c',
   fontWeight: 500,
   fontSize: '14px',
}))

const StyledBoxColor = styled(Box)(() => ({
   display: 'flex',
   gap: '8px',
}))

const StyledBoxColors = styled(Box)((props) => {
   return {
      backgroundColor: props.green
         ? '#61bd4f'
         : 'white' && props.red
           ? '#eb5a46'
           : 'white' && props.yellow
             ? '#f2d600'
             : 'white' && props.blue
               ? '#0079bf'
               : 'white',
      width: '45px',
      height: '5px',
      borderRadius: '8px',
   }
})

const StyledBoxCardHeader = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
}))

const StyledCard = styled(Box)(() => ({
   maxWidth: '290px',
   maxHeight: '430px',
   backgroundColor: '#e6e6e6',
   borderRadius: '8px',
   padding: '16px',
}))

const StyledBoxAvatarButton = styled(Box)(({}) => ({
   display: 'flex',
   alignItems: 'center',
   gap: '8px',
}))

const StyledButton = styled(Button)({
   backgroundColor: '#F2F4F8',
   color: '#0079bf',
   borderRadius: '50px',
   textTransform: 'none',
   fontWeight: 600,
   fontSize: '14px',
   padding: '6px 16px',
   display: 'flex',
   alignItems: 'center',
   gap: '8px',
   '&:hover': {
      backgroundColor: '#E4E9F0',
   },
})

const StyledAvatar = styled(AppButton)(({}) => ({
   backgroundColor: '#ffffff',
   borderRadius: '50%',
   width: '32px',
   height: '32px', 
   minWidth: '32px', 
   padding: 0, 
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   '&:hover': {
     backgroundColor: '#E4E9F0',
   },
}))

const StyledPlusIcon = styled(AddIcon)(({}) => ({
   color: '#0079bf',
   width: '15px',
   height: '15px',
}))

const StyledBoxRightHeaderMini = styled(Box)(({}) => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '5px',
}))

const StyledBoxRightHeader = styled(Box)(({}) => ({
   display: 'flex',
   justifyContent: 'space-between',
   gap: '5px',
}))

const StyledBox = styled(Box)(() => ({
   backgroundColor: '#414141',
   width: '100%',
   height: '92vh',
}))
