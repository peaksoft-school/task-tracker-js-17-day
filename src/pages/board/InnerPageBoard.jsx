import {
   Avatar,
   AvatarGroup,
   Box,
   Button,
   FormControl,
   FormControlLabel,
   Radio,
   RadioGroup,
   Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { Header } from '../../layouts/header/Header'
import {
   CheckMarkIcon,
   CommunicationIcon,
   DoneIcon,
   DownIcon,
   HourglassIcon,
   LeftIcon,
   NotifyIcon,
   PenselIcon,
   PeopleIcon,
   RightIcon,
   TemplateIcon,
   XIcon,
   // ThreeDotsIcon,
   // TypographyIcon,
} from '../../assets/AllExportIcon'
import styled from '@emotion/styled'
import AddIcon from '@mui/icons-material/Add'
import FilterListIcon from '@mui/icons-material/FilterList'
import AppsIcon from '@mui/icons-material/Apps'
import { AppButton } from '../../components/UI/AppButton'
import { CustomModal } from '../../components/UI/modal/Modal'
import { Input } from '../../components/UI/Input'
import Sidebar from '../../components/UI/sidebar/Sidebar'
import { backgroundImages } from '../../assets/backgroundImg/background'
import { Colors } from '../../assets/backgroundImg/backgroundColors'

export const InnerPageBoard = ({ columns = 1 }) => {
   const [modalInvite, setModalInvite] = useState(false)
   const [participant, setParticipant] = useState(false)
   const [ikon, setIkon] = useState(false)
   const [menuModal, setMenuModal] = useState(false)
   const [backgroundModalImages, setBackgroundModalImages] = useState(false)
   const [backgroundModalColors, setBackgroundModalColors] = useState(false)
   const [chatBackground, setChatBackground] = useState(false)
   const [fellterModal, setFellterModal] = useState(false)
   const [ikonDown, setIkonDown] = useState(null)




   const handlerFellterModal=()=>{
      setFellterModal((prev) => !prev)
   }
   const handlerModelImg = () => setBackgroundModalImages((prev) => !prev)
   const handlerModelColor = () => setBackgroundModalColors((prev) => !prev)
   const hedlerOpenChatBackground = () => {
      setChatBackground((prev) => !prev)
   }
   const hendlerOpenMenuModal = () => {
      setMenuModal((prev) => !prev)
   }
   const hedledownIkon = (value) => {
      setIkonDown(value)
   }
   const handlerOpenModalInvite = () => {
      setModalInvite((prev) => !prev)
   }

   const handlerIkon = () => {
      setIkon((prev) => !prev)
   }
   const handlerParticipant = () => {
      setParticipant((prev) => !prev)
      console.log(participant, 'clicki')
   }

   return (
      <>
         <Header notificationCount={12} favouritesCount={0} />
         <StyledBox>
            <Sidebar />

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
                     <StyledAvatarGroup
                        onClick={handlerOpenModalInvite}
                        max={9}
                     >
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
                     </StyledAvatarGroup>
                     <StyledTypographyInvite onClick={handlerParticipant}>
                        Invite
                     </StyledTypographyInvite>
                     {participant && (
                        <StyledCustomModalPersson
                           isVisible={participant}
                           handleVisible={handlerParticipant}
                        >
                           <StyledBoxModalPractice>
                              <StyledBoxIconModal>
                                 <LeftIcon />
                                 <Typography>
                                    Invite a new participant
                                 </Typography>
                                 <XIcon />
                              </StyledBoxIconModal>
                              <Input placeholder="Email" />
                              <FormControl>
                                 <RadioGroup>
                                    <StyledBoxCheckbox>
                                       <Box>
                                          <FormControlLabel
                                             value="member"
                                             control={<StyledRadio />}
                                             label="Member"
                                          />
                                       </Box>
                                       <Box>
                                          <FormControlLabel
                                             value="admin"
                                             control={<StyledRadio />}
                                             label="Admin"
                                          />
                                       </Box>
                                    </StyledBoxCheckbox>
                                 </RadioGroup>
                              </FormControl>

                              <StyledBoxButtonContainer>
                                 <StyledAppButton>Delete</StyledAppButton>
                                 <AppButton>Create</AppButton>
                              </StyledBoxButtonContainer>
                           </StyledBoxModalPractice>
                        </StyledCustomModalPersson>
                     )}
                     {modalInvite && (
                        <CustomModal
                           isVisible={modalInvite}
                           handleVisible={handlerOpenModalInvite}
                        >
                           <StyledModalBoxInvite>
                              <Typography>Participant</Typography>
                              <Input placeholder="Email" />
                              <StyledModalTypographyInvite>
                                 <Box>
                                    <Typography>Permission</Typography>
                                 </Box>
                                 <Box>
                                    <Typography>Permission</Typography>
                                 </Box>
                              </StyledModalTypographyInvite>
                              <StyledBoxTypographyPerson>
                                 <Box>
                                    <Typography>Juma</Typography>
                                 </Box>
                                 <Box>
                                    <StyledBoxTypographyPersonIcon>
                                       <Typography>Juma</Typography>
                                       <DownIcon onClick={handlerIkon} />
                                       {ikon && (
                                          <StyledModalperson
                                             isVisible={ikon}
                                             handleVisible={handlerIkon}
                                          >
                                             <StyledBoxModalContent>
                                                <StyledBoxIkons
                                                   onClick={() =>
                                                      hedledownIkon('text1')
                                                   }
                                                >
                                                   <Typography>
                                                      Admin
                                                   </Typography>
                                                   {ikonDown === 'text1' && (
                                                      <StyledTypographyAdmin />
                                                   )}
                                                </StyledBoxIkons>
                                                <StyledBoxIkons
                                                   onClick={() =>
                                                      hedledownIkon('text2')
                                                   }
                                                >
                                                   <Typography>
                                                      Member
                                                   </Typography>
                                                   {ikonDown === 'text2' && (
                                                      <StyledTypographyAdmin />
                                                   )}
                                                </StyledBoxIkons>
                                             </StyledBoxModalContent>
                                          </StyledModalperson>
                                       )}
                                    </StyledBoxTypographyPersonIcon>
                                 </Box>
                              </StyledBoxTypographyPerson>
                              <Box>
                                 <StyledTypographyModalInvite
                                    onClick={handlerParticipant}
                                 >
                                    + Invite a new participant
                                 </StyledTypographyModalInvite>
                                 {participant && (
                                    <StyledCustomModalPersson
                                       isVisible={participant}
                                       handleVisible={handlerParticipant}
                                    >
                                       <StyledBoxModalPractice>
                                          <StyledBoxIconModal>
                                             <LeftIcon />
                                             <Typography>
                                                Invite a new participant
                                             </Typography>
                                             <XIcon />
                                          </StyledBoxIconModal>
                                          <Input placeholder="Email" />
                                          <FormControl>
                                             <RadioGroup>
                                                <StyledBoxCheckbox>
                                                   <Box>
                                                      <FormControlLabel
                                                         value="member"
                                                         control={
                                                            <StyledRadio />
                                                         }
                                                         label="Member"
                                                      />
                                                   </Box>
                                                   <Box>
                                                      <FormControlLabel
                                                         value="admin"
                                                         control={
                                                            <StyledRadio />
                                                         }
                                                         label="Admin"
                                                      />
                                                   </Box>
                                                </StyledBoxCheckbox>
                                             </RadioGroup>
                                          </FormControl>

                                          <StyledBoxButtonContainer>
                                             <StyledAppButton>
                                                Delete
                                             </StyledAppButton>
                                             <AppButton>Create</AppButton>
                                          </StyledBoxButtonContainer>
                                       </StyledBoxModalPractice>
                                    </StyledCustomModalPersson>
                                 )}
                              </Box>
                           </StyledModalBoxInvite>
                        </CustomModal>
                     )}

                     <StyledAvatar>
                        <StyledPlusIcon />
                     </StyledAvatar>

                     <StyledButton onClick={handlerFellterModal} startIcon={<FilterListIcon />}>
                        Filter (2)
                     </StyledButton>
                     {fellterModal&&(
                        <CustomModal isVisible={fellterModal} handleVisible={handlerFellterModal}>
                           <Box>
                              <Box>
                                 <Typography>Filter</Typography>
                              </Box>

                              



                           </Box>
                        </CustomModal>
                     )}

                     <StyledButton
                        onClick={hendlerOpenMenuModal}
                        startIcon={<AppsIcon />}
                     >
                        Menu
                     </StyledButton>
                     {menuModal && (
                        <CustomModal
                           isVisible={menuModal}
                           handleVisible={hendlerOpenMenuModal}
                        >
                           <StyledBoxModalContainerMenu>
                              <StyledBoxMenu>
                                 <StyledBoxMenu2>
                                    <Typography>Menu</Typography>
                                    <XIcon />
                                 </StyledBoxMenu2>
                              </StyledBoxMenu>
                              <StyledBoxModalContainerImges>
                                 <Box>Change the background</Box>
                                 <Box>
                                    {backgroundImages.slice(0, 1).map((img) => (
                                       <Box key={img.id}>
                                          <StyledModalContainerImges
                                             onClick={hedlerOpenChatBackground}
                                             src={img}
                                             alt="img"
                                          />
                                          {chatBackground && (
                                             <CustomModal
                                                isVisible={chatBackground}
                                                handleVisible={
                                                   hedlerOpenChatBackground
                                                }
                                             >
                                                <StyledBoxChange>
                                                   <LeftIcon />
                                                   <Typography>
                                                      Change the background
                                                   </Typography>
                                                   <XIcon />
                                                </StyledBoxChange>
                                                <StyledBoxModalImgColor>
                                                   <Box>
                                                      <StyledImg2
                                                         onClick={
                                                            handlerModelImg
                                                         }
                                                         src={img}
                                                         alt="img"
                                                      />
                                                      {backgroundModalImages && (
                                                         <StyledModalBakg
                                                            isVisible={
                                                               backgroundModalImages
                                                            }
                                                            handleVisible={
                                                               handlerModelImg
                                                            }
                                                         >
                                                            <Box>
                                                               <StyledModalTypography>
                                                                  Photo
                                                               </StyledModalTypography>
                                                               <StyledBoxModalsBack>
                                                                  {backgroundImages.map(
                                                                     (
                                                                        bgItem
                                                                     ) => (
                                                                        <StyledBoxBg
                                                                           key={
                                                                              bgItem
                                                                           }
                                                                           onClick={() =>
                                                                              handlerClickIdBackImg(
                                                                                 bgItem
                                                                              )
                                                                           }
                                                                           bg={
                                                                              bgItem
                                                                           }
                                                                        />
                                                                     )
                                                                  )}
                                                               </StyledBoxModalsBack>
                                                            </Box>
                                                         </StyledModalBakg>
                                                      )}
                                                   </Box>
                                                   <StyledBox4>
                                                      {Colors.map(
                                                         (color, index) => (
                                                            <Box key={color}>
                                                               <StyledBox3
                                                                  onClick={
                                                                     handlerModelColor
                                                                  }
                                                                  isFirst={
                                                                     index === 0
                                                                  }
                                                                  isLast={
                                                                     index ===
                                                                     Colors.length -
                                                                        1
                                                                  }
                                                                  colors={color}
                                                               ></StyledBox3>
                                                            </Box>
                                                         )
                                                      )}
                                                      {backgroundModalColors && (
                                                         <ModalBox
                                                            isVisible={
                                                               backgroundModalColors
                                                            }
                                                            handleVisible={
                                                               handlerModelColor
                                                            }
                                                         >
                                                            <Box>
                                                               {' '}
                                                               <StyledModalTypography>
                                                                  Colors
                                                               </StyledModalTypography>
                                                               <StyledBoxModalsColors>
                                                                  {Colors.map(
                                                                     (
                                                                        items
                                                                     ) => (
                                                                        <StyledColorsModal
                                                                           key={
                                                                              items
                                                                           }
                                                                           onClick={() =>
                                                                              handlerClickIdColor(
                                                                                 items
                                                                              )
                                                                           }
                                                                           colors={
                                                                              items
                                                                           }
                                                                        />
                                                                     )
                                                                  )}
                                                               </StyledBoxModalsColors>
                                                            </Box>
                                                         </ModalBox>
                                                      )}
                                                   </StyledBox4>
                                                </StyledBoxModalImgColor>
                                             </CustomModal>
                                          )}
                                       </Box>
                                    ))}
                                 </Box>
                              </StyledBoxModalContainerImges>
                              <Typography>
                                 In archive <span>(2)</span>
                              </Typography>
                              <Typography>Delete this board</Typography>
                           </StyledBoxModalContainerMenu>
                        </CustomModal>
                     )}
                  </StyledBoxAvatarButton>
               </StyledBoxRightHeader>
            </StyledBoxRights>
         </StyledBox>
      </>
   )
}
const StyledBoxBg = styled(Box)(({ bg }) => ({
   backgroundImage: `url(${bg})`,
   backgroundSize: 'cover',
   backgroundPosition: 'center',
   backgroundRepeat: 'no-repeat',
   width: '132px',
   height: '62px',
   borderRadius: '8px',
   display: 'inline-block',
   marginRight: '8px',
   '&:hover': {
      transform: 'scale(1.05)',
      cursor: 'pointer',
   },
}))

const StyledColorsModal = styled(Box)(({ colors }) => ({
   display: 'inline-block',
   marginRight: '8px',
   backgroundColor: colors,
   width: '79px',
   height: '40px',
   borderRadius: '8px',
   position: 'relative',
   '&:hover': {
      transform: 'scale(1.05)',
      cursor: 'pointer',
   },
}))
const StyledBoxModalsColors = styled(Box)({
   padding: '20px 16px',
   width: 'fit-content',
   display: 'grid',
   gridTemplateColumns: '1fr 1fr 1fr',
   gap: '16px',
})

const ModalBox = styled(CustomModal)({
   padding: '20px 16px',
   width: 'fit-content',
   marginLeft: '400px',
   marginTop: '50px',
})

const StyledBoxModalsBack = styled(Box)({
   padding: '20px 16px',
   width: 'fit-content',
   display: 'grid',
   gridTemplateColumns: '1fr 1fr',
   gap: '16px',
})

const StyledModalTypography = styled(Typography)({
   display: 'flex',
   justifyContent: 'center',
})

const StyledModalBakg = styled(CustomModal)({
   marginLeft: '200px',
})

const StyledBoxModalImgColor = styled(Box)({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '10px',
   marginTop: '20px',
})

const StyledBox4 = styled(Box)({
   display: 'flex',
   overflow: 'hidden',
   cursor: 'pointer',
})

const StyledBox3 = styled(Box)(({ colors, isFirst, isLast }) => ({
   backgroundColor: colors,
   flex: 1,
   borderTopLeftRadius: isFirst ? '20px' : 0,
   borderBottomLeftRadius: isFirst ? '20px' : 0,
   borderTopRightRadius: isLast ? '20px' : 0,
   borderBottomRightRadius: isLast ? '20px' : 0,
   width: '20px',
   height: '80px',
}))

const StyledImg2 = styled('img')({
   width: '160px',
   height: '80px',
   borderRadius: '5px',
   cursor: 'pointer',
})

const StyledBoxChange = styled(Box)({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '10px',
})

const StyledBoxMenu2 = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
   width: '350px',
})

const StyledBoxMenu = styled(Box)({
   display: 'flex',
   justifyContent: 'center',
})

const StyledBoxModalContainerMenu = styled(Box)({
   width: '400px',
   height: '100px',
})

const StyledBoxModalContainerImges = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
   gap: '10px',
})

const StyledModalContainerImges = styled('img')({
   width: '59px',
   height: '26px',
   borderRadius: '5px',
})

const StyledAvatarGroup = styled(AvatarGroup)({
   cursor: 'pointer',
})

const StyledModalperson = styled(CustomModal)({
   marginLeft: '580px',
   marginTop: '100px',
})

const StyledTypographyAdmin = styled(DoneIcon)({
   marginLeft: '10px',
})

const StyledBoxModalContent = styled(Box)({
   width: '100px',
   height: '50px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'column',
})

const StyledBoxIkons = styled(Box)({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
})

const StyledBoxTypographyPersonIcon = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   gap: '5px',
})

const StyledBoxTypographyPerson = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
   marginTop: '5px',
})

const StyledTypographyModalInvite = styled(Typography)({
   cursor: 'pointer',
})

const StyledCustomModalPersson = styled(CustomModal)({
   marginTop: '100px',
})

const StyledAppButton = styled(AppButton)({
   backgroundColor: '#f0f0f0',
   color: '#919191',
})

const StyledBoxButtonContainer = styled(Box)({
   display: 'flex',
   alignItems: 'end',
   justifyContent: 'end',
   gap: '15px',
})

const StyledBoxCheckbox = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
   marginTop: '20px',
})

const StyledRadio = styled(Radio)({
   color: 'grey.400',
   '&.Mui-checked': {
      color: '#1976d2',
   },
})

const StyledBoxModalPractice = styled(Box)({
   width: '400px',
   height: '165px',
})

const StyledBoxIconModal = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
})

const StyledModalBoxInvite = styled(Box)({
   width: '400px',
   height: '200px',
})

const StyledModalTypographyInvite = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
})

const StyledTypographyInvite = styled(Typography)(() => ({
   color: '#000000',
   fontSize: '16px',
   fontWeight: '500',
   cursor: 'pointer',
}))

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
   display: 'grid',
   gridTemplateColumns: '240px 1fr',
   width: '100%',
   height: '100%',
}))
