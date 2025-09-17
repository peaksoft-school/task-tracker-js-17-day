import * as React from 'react'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import {
   DoneNotificationIcon,
   ErrorNotificationIcon,
   ExitIcon,
   WarningNotificationIcon,
} from '../../assets/AllExportIcon'
import styled from '@emotion/styled'

export default function CustomNotification({
   open,
   onClose,
   severity,
   title,
   description,
}) {
   return (
      <Snackbar
         open={open}
         autoHideDuration={4000}
         onClose={onClose}
         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
         <ConteinerCustomNotification style={variantStyles[severity]}>
            {/* Левая иконка */}
            <LeftIcon>{icons[severity]}</LeftIcon>

            {/* Контент (заголовок + описание) */}
            <NotificationContent>
               <NotificationTitle>{title}</NotificationTitle>
               <NotificationDescription>{description}</NotificationDescription>
            </NotificationContent>

            {/* Кнопка закрытия */}
            <CloseButton onClick={onClose} size="small">
               <ExitIcon
                  style={{ fill: closeColors[severity], width: 20, height: 20 }}
               />
            </CloseButton>
         </ConteinerCustomNotification>
      </Snackbar>
   )
}

// Цвета и стили для разных типов уведомлений
const variantStyles = {
   success: {
      border: '1px solid #4CAF50',
      backgroundColor: '#F1FAF3',
      color: '#2E7D32',
   },
   error: {
      border: '1px solid #F44336',
      backgroundColor: '#FDEDED',
      color: '#B71C1C',
   },
   warning: {
      border: '1px solid #FF9800',
      backgroundColor: '#FFF8E1',
      color: '#E65100',
   },
}

// Кастомные иконки
const icons = {
   success: <DoneNotificationIcon />,
   error: <ErrorNotificationIcon />,
   warning: <WarningNotificationIcon />,
}

// Цвета для ExitIcon
const closeColors = {
   success: '#2E7D32',
   error: '#B71C1C',
   warning: '#E65100',
}

const ConteinerCustomNotification = styled('div')({
   display: 'flex',
   alignItems: 'center',
   gap: '12px',
   borderRadius: '8px',
   padding: '12px 16px',
   minWidth: '320px',
   maxWidth: '400px',
   // Стили по variantStyles добавляются в компоненте через пропсы
})

const LeftIcon = styled('div')({
   fontSize: '22px',
})

const NotificationContent = styled('div')({
   flex: 1,
})

const NotificationTitle = styled('div')({
   fontWeight: 600,
   fontSize: '16px',
})

const NotificationDescription = styled('div')({
   fontSize: '14px',
   opacity: 0.85,
})

const CloseButton = styled(IconButton)({
   padding: 4,
})
