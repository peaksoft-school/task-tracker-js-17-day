import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled'
// import { Input } from '../../components/UI/input/Input'
import UserImage from '../../assets/images/icon/iconpeople/ikonmen.jpg'
import Logo from '../../assets/images/icon/system/Black and White Collection 2.svg'
import Notify from '../../assets/images/icon/system/Notify.svg'
import StrelkaDown from '../../assets/images/icon/arrows/down.svg'
import { Input } from '../../components/UI/Input'

// const existsRoutes = [ROUTES.HOME, ROUTES.ALL_BOARDS] // роуты, для которых нужно показывать Header

export const Header = ({ favouritesCount, notificationCount }) => {
   // if (!favouritesCount) return null // если нет избранных элементов, возвращаем null
   // const ctateHeders = 12 // количество заголовков, можно заменить на состояние или пропс
   // const isShowHeader = existsRoutes.includes(window.location.pathname) // проверяем, нужно ли показывать Header в зависимости от текущего пути
   // if (!isShowHeader) return null // если Header не нужен, возвращаем null

   return (
      <header>
         <StylesDivHeder>
            <StylesBoxOneHeader>
               <StylesTypography variant="h6" component="div">
                  <StylesTypographyBox>
                     <img src={Logo} alt="" />
                     Task Tracker
                  </StylesTypographyBox>
               </StylesTypography>

               <StylesBoxOneHeaderDoucher>
                  {favouritesCount !== 0 && (
                     <Typography>
                        Favourites {favouritesCount}{' '}
                        <img src={StrelkaDown} alt="" />
                     </Typography>
                  )}
               </StylesBoxOneHeaderDoucher>
            </StylesBoxOneHeader>
            <StylesBoxTwoHeader>
               <StylesInpurt placeholder="Search" iconPosition="start" />
               <StylesBoxImg>
                  <StylesImg src={Notify} alt="'notify'" />
                  <StylesNonotificationBox>
                     {notificationCount}
                  </StylesNonotificationBox>
               </StylesBoxImg>
               <StylesImgUser alt="Remy Sharp" src={UserImage} />
            </StylesBoxTwoHeader>
         </StylesDivHeder>
      </header>
   )
}
const StylesDivHeder = styled(Box)(({}) => ({
   display: 'flex',
   justifyContent: 'space-between',
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
}))

const StylesImg = styled('img')(({}) => ({
   width: '24px',
   height: '24px',
   marginRight: '8px',
   position: 'absolute',
   color: 'white',
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
}))

const StylesInpurt = styled(Input)(({}) => ({
   minWidth: '444px',
}))
