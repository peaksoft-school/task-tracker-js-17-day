import { AppBar, Avatar, Box, colors, Typography } from '@mui/material'
import React from 'react'
import { ROUTES } from '../../constants/routes'
import { Input } from '../UI/input/Input'
import styled from '@emotion/styled'

const existsRoutes = [ROUTES.HOME, ROUTES.ALL_BOARDS] // роуты, для которых нужно показывать Header
export const Header = () => {
   const favouritesCount = 1 // количество избранных элементов, можно заменить на состояние или пропс
   if (!favouritesCount) return null // если нет избранных элементов, возвращаем null
   const ctateHeders = 12 // количество заголовков, можно заменить на состояние или пропс
   const isShowHeader = existsRoutes.includes(window.location.pathname) // проверяем, нужно ли показывать Header в зависимости от текущего пути
   if (!isShowHeader) return null // если Header не нужен, возвращаем null
   return (
      <header>
         <StylesDivHeder>
            <StylesBoxOneHeader>
               <StylesTypography variant="h6" component="div">
                  <StylesTypographyBox>
                     <img
                        src="src/assets/images/icon/system/Black and White Collection 2.svg"
                        alt=""
                     />
                     Task Tracker
                  </StylesTypographyBox>
               </StylesTypography>

               <StylesBoxOneHeaderDoucher>
                  <p>
                     Favourites {!!favouritesCount && `(${favouritesCount})`}
                  </p>
               </StylesBoxOneHeaderDoucher>
            </StylesBoxOneHeader>
            <StylesBoxTwoHeader>
               <Input />
               <StylesBoxImg>
                  <StylesImg
                     src="src/assets/images/icon/system/Notify.svg"
                     alt=""
                  />
                  <StylesNonotificationBox>
                     {ctateHeders}
                  </StylesNonotificationBox>
               </StylesBoxImg>
               <StylesAvatar
                  alt="Remy Sharp"
                  src="src/assets/images/icon/iconpeople/998ee2fcb00a158723690e228b54c3f22009b81d.jpg"
               />
            </StylesBoxTwoHeader>
         </StylesDivHeder>
      </header>
   )
}
const StylesDivHeder = styled('div')(({ theme }) => ({
   display: 'flex',
   justifyContent: 'space-between',
}))
const StylesBoxOneHeader = styled(Box)(({ theme }) => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '70px',
}))
const StylesBoxTwoHeader = styled(Box)(({ theme }) => ({
   display: 'flex',
   gap: '20px',
}))
const StylesTypography = styled(Typography)(({ theme }) => ({
   flexGrow: 1,
   display: 'flex',
   alignItems: 'center',
   color: 'rgba(0, 121, 191, 1)',
}))
const StylesTypographyBox = styled(Box)(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   gap: '12px',
}))
const StylesBoxOneHeaderDoucher = styled(Box)(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
}))
const StylesBoxImg = styled(Box)(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
}))
const StylesImg = styled('img')(({ theme }) => ({
   width: '24px',
   height: '24px',
   marginRight: '8px',
   position: 'absolute',
}))
const StylesNonotificationBox = styled(Box)(({ theme }) => ({
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
const StylesAvatar = styled(Avatar)(({ theme }) => ({

}))
