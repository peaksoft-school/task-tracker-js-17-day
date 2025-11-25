import { Avatar, Box, Link, Typography, styled } from '@mui/material'
import { Input } from '../../components/UI/Input'
import UserImage from '../../assets/images/icon/iconpeople/ikonmen.jpg'
import Logo from '../../assets/images/icon/system/Black and White Collection 2.svg'
import Notify from '../../assets/images/icon/system/Notify.svg'
import StrelkaDown from '../../assets/images/icon/arrows/down.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { FAVORITE_COUNT_THUNK } from '../../store/favoriteCount/favoriteThunk'
import { CustomModal } from '../../components/UI/modal/Modal'

export const Header = ({ favouritesCount, notificationCount }) => {
   const statusInput = status
   const navigate = useNavigate()
   const { boardCount, isLoading } = useSelector((state) => state.favoriteCount)
   const data = useSelector((state) => state.profile)
   console.log(data.profileFul.avatarUrl, 'dd')

   const dispatch = useDispatch()

   const [modalFavorites, setModalFavorites] = useState(false)
   const [modalNotify, setModalNotify] = useState(false)
   const [modalUser, setModalUser] = useState(false)

   const [favorites, setFavorites] = useState()
   const boardCounts = boardCount.boardCount
   const workspaceCounts = boardCount.workspaceCount

   useEffect(() => {
      dispatch(FAVORITE_COUNT_THUNK.favoriteCountThunk())
   }, [dispatch])

   useEffect(() => {
      if (favouritesCount === 'boardCount') {
         setFavorites(boardCounts)
      } else if (favouritesCount === 'workspaceCount') {
         setFavorites(workspaceCounts)
      }
   }, [favouritesCount, boardCounts, workspaceCounts])
   const hendlerNavigateUser = () => {
      navigate('/profile')
   }
   const hendlerNavigateLogOut = () => {
      navigate(-1)
   }

   const hendlerFavorites = () => {
      setModalFavorites((prev) => !prev)
   }
   const hendlerNotify = () => {
      setModalNotify((prev) => !prev)
   }
   const hedlerUser = () => {
      setModalUser((prev) => !prev)
   }

   return (
      <header>
         <StylesBoxHeder>
            <StylesBoxOneHeader>
               <StylesTypography variant="h6" component="div">
                  <StylesTypographyBox>
                     <img src={Logo} alt="" />
                     Task Tracker
                  </StylesTypographyBox>
               </StylesTypography>

               <StylesBoxOneHeaderDoucher>
                  { favorites > 0 && (
                     <StyledTypography onClick={hendlerFavorites}>
                        Favourites({favorites})
                        <img src={StrelkaDown} alt="" />
                     </StyledTypography>
                  )}
                  {modalFavorites && (
                     <CustomModal
                        isVisible={modalFavorites}
                        handleVisible={hendlerFavorites}
                     >
                        <Box>
                           <Typography>Favourites</Typography>
                           <Box>
                              <Box>
                                 <img src="" alt="" />
                                 <Box>
                                    <Typography>Title</Typography>
                                    <Typography>Board</Typography>
                                 </Box>
                              </Box>
                              <Box>strs</Box>
                           </Box>
                        </Box>
                     </CustomModal>
                  )}
               </StylesBoxOneHeaderDoucher>
            </StylesBoxOneHeader>
            <StylesBoxTwoHeader>
               {statusInput && (
                  <StylesInpurt placeholder="Search" iconPosition="start" />
               )}

               <StylesBoxImg>
                  <StylesImg
                     onClick={hendlerNotify}
                     src={Notify}
                     alt="'notify'"
                  />
                  {modalNotify && (
                     <StyledModal
                        isVisible={modalNotify}
                        handleVisible={hendlerNotify}
                     >
                        <StyledBoxModal>
                           <Box>
                              <Typography>Notification</Typography>
                              <Link>Mark as read</Link>
                           </Box>
                           <Box>
                              <Box>
                                 <StyledBoxNonotificationKrug></StyledBoxNonotificationKrug>
                                 <Box>bak</Box>
                              </Box>
                              <Box>
                                 <Box>avatar</Box>
                                 <Box>strelka</Box>
                              </Box>
                           </Box>
                        </StyledBoxModal>
                     </StyledModal>
                  )}
               </StylesBoxImg>
               <StylesImgUser
                  onClick={hedlerUser}
                  alt="Remy Sharp"
                  src={data.profileFul.avatarUrl}
               />
               {modalUser && (
                  <StyledModalProfile
                     isVisible={modalUser}
                     handleVisible={hedlerUser}
                  >
                     <StyledUserProfile>
                        <StyledTypographyProfile onClick={hendlerNavigateUser}>
                           Profile
                        </StyledTypographyProfile>
                        <StyledTypographyProfile
                           onClick={hendlerNavigateLogOut}
                        >
                           Logout
                        </StyledTypographyProfile>
                     </StyledUserProfile>
                  </StyledModalProfile>
               )}
            </StylesBoxTwoHeader>
         </StylesBoxHeder>
      </header>
   )
}
const StyledModalProfile = styled(CustomModal)(({}) => ({
   display: 'flex',
   justifyContent: 'end',
   alignItems: 'start',
   marginTop: '60px',
   marginRight: '40px',
}))

const StyledTypographyProfile = styled(Typography)(({}) => ({
   display: 'flex',
   alignItems: 'center',
   gap: '10px',
   marginBottom: '5px',
   cursor: 'pointer',
}))

const StyledUserProfile = styled(Box)(({}) => ({
   width: '100px',
   height: '50px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'column',
}))

const StyledBoxModal = styled(Box)(({}) => ({
   width: '400px',
   height: '300px',
}))

const StyledModal = styled(CustomModal)(({}) => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
}))

const StyledBoxNonotificationKrug = styled(Box)(({}) => ({
   widows: '7px',
   height: '7px',
   borderRadius: '50%',
   backgroundColor: '#0079bf',
}))

const StyledTypography = styled(Typography)(({}) => ({
   cursor: 'pointer',
}))

const StylesBoxHeder = styled(Box)(({}) => ({
   display: 'flex',
   justifyContent: 'space-between',
   padding: '16px 40px',
   backgroundColor: '#ffffff',
}))

const StylesBoxOneHeader = styled(Box)(({}) => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '70px',
}))

const StylesBoxTwoHeader = styled(Box)(({}) => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '20px',
}))

const StylesTypography = styled(Typography)(({}) => ({
   flexGrow: 1,
   display: 'flex',
   alignItems: 'center',
   color: 'rgba(0, 121, 191, 1)',
}))

const StylesTypographyBox = styled(Box)(({}) => ({
   display: 'flex',
   alignItems: 'center',
   gap: '12px',
}))

const StylesBoxOneHeaderDoucher = styled(Box)(({}) => ({
   display: 'flex',
   alignItems: 'center',
}))

const StylesBoxImg = styled(Box)(({}) => ({
   display: 'flex',
   alignItems: 'center',
   marginRight: '8px',
}))

const StylesImg = styled('img')(({}) => ({
   width: '24px',
   height: '24px',
   marginRight: '8px',
   position: 'absolute',
   color: 'white',
   cursor: 'pointer',
}))

const StylesNonotificationBox = styled(Box)(({}) => ({
   background: 'rgba(217, 18, 18, 1)',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   color: 'white',
   borderRadius: '10px',
   width: '15px',
   height: '11px',
   padding: '10px',

   fontSize: '12px',
   position: 'relative',
   left: '14px',
   top: '-10px',
}))

const StylesImgUser = styled(Avatar)(({}) => ({
   width: '32px',
   height: '32px',
   backgroundPosition: 'center',
   cursor: 'pointer',
}))

const StylesInpurt = styled(Input)(({}) => ({
   minWidth: '444px',
}))
