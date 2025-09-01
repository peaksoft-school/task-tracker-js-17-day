import { IconButton, styled } from '@mui/material'
import { useState } from 'react'
import {
   DownIcon,
   FilesAndFoldersIcon,
   GraphicIcon,
   LayoutIcon,
   MenuIconRight,
   PeopleIcon,
   ToolsIcon,
} from '../../assets/AllExportIcon'

export default function Sidebar_2_() {
   const [open, setOpen] = useState(false)

   const handleToggle = () => {
      setOpen((prev) => !prev) // одно событие для открытия/закрытия
   }

   return (
      <SidebarContainer open={open}>
         {/* Верхняя панель */}
         <TopSection>
            <CircleIconButton onClick={handleToggle}>
               <span>L</span>
            </CircleIconButton>

            <NoRippleIconButton onClick={handleToggle}>
               <MenuIconRight />
            </NoRippleIconButton>
         </TopSection>

         <Divider />

         {/* Layout */}
         <SelectedMenuItem open={open}>
            <LayoutIcon />
            {open && <span style={{ marginLeft: 12 }}>Layout</span>}
         </SelectedMenuItem>

         <Divider />

         {/* Основные иконки */}
         <MainIcons>
            <NoRippleIconButton>
               <FilesAndFoldersIcon />
            </NoRippleIconButton>

            <NoRippleIconButton>
               <PeopleIcon />
            </NoRippleIconButton>

            <NoRippleIconButton>
               <ToolsIcon />
            </NoRippleIconButton>
         </MainIcons>

         <Divider />

         {/* WorkSpaces */}
         <WorkSpaces>
            <NoRippleIconButton>
               <GraphicIcon />
            </NoRippleIconButton>

            <SectionsWorkSpaces>
               <SectionWrapperOne>
                  <span>A</span>
               </SectionWrapperOne>
            </SectionsWorkSpaces>

            <SectionWrapperL>
               <span>L</span>
            </SectionWrapperL>

            <SectionWrapperA>
               <span>A</span>
            </SectionWrapperA>

            <SectionWrapperL>
               <span>L</span>
            </SectionWrapperL>

            <SectionWrapperA>
               <span>A</span>
            </SectionWrapperA>

            <SectionWrapperL>
               <span>L</span>
            </SectionWrapperL>

            <NoRippleIconButton>
               <DownIcon />
            </NoRippleIconButton>
         </WorkSpaces>
      </SidebarContainer>
   )
}

// ==================== styled ====================

const SidebarContainer = styled('div')(({ open }) => ({
   width: open ? 240 : 80, // ширина меняется
   height: '100vh',
   background: 'rgba(248, 248, 248, 0.6)',
   paddingTop: '40px',
   display: 'flex',
   flexDirection: 'column',
   alignItems: open ? 'flex-start' : 'center', // при закрытии иконки по центру
   transition: 'width 0.3s ease', // анимация открытия/закрытия
}))

const TopSection = styled('div')({
   display: 'flex',
   gap: '16px',
   marginBottom: '20px',
})

const Divider = styled('div')({
   width: '100%',
   border: '1px solid rgba(224, 224, 224, 1)',
   margin: '8.5px 0',
})

const SelectedMenuItem = styled('div')(({ open }) => ({
   width: '100%',
   height: '40px',
   borderRadius: '0px 24px 24px 0px',
   background: 'rgba(58, 104, 131, 0.6)',
   padding: open ? '8px 16px' : '8px 0',
   marginTop: '11.5px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: open ? 'flex-start' : 'center',
   color: '#fff',
   fontFamily: 'sans-serif Gilroy',
   fontSize: 14,
   fontWeight: 500,
   transition: 'all 0.3s ease',
}))

const MainIcons = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   marginTop: '20.5px',
   gap: '20px',
   marginBottom: '19.5px',
})

const WorkSpaces = styled('div')({
   marginTop: '21.5px',
   display: 'flex',
   flexDirection: 'column',
   gap: '16px',
})

//todo    Кнопка без ripple и hover фона
const NoRippleIconButton = styled(IconButton)({

   padding: 0,
   margin: 0,
   backgroundColor: 'transparent',
   '&:hover': {
      backgroundColor: 'transparent',
   },
})

//todo    Кнопка с кругом для буквы L
const CircleIconButton = styled('div')({
   borderRadius: '24px',
   backgroundColor: 'rgba(0, 121, 191, 1)',
   padding: '5px 13px',
   fontFamily: 'sans-serif Gilroy',
   cursor: 'pointer',

   '& span': {
      color: '#fff',
      fontSize: '20px',
      fontWeight: 400,
   },
})

//todo      /* --------------------- A L ---------------------- */
const SectionsWorkSpaces = styled('div')({
   width: '100px',
   height: '37px',
   borderRadius: ' 0px 16px 16px 0px',
   background: 'rgba(58, 104, 131, 0.1)',
   padding: '5px  29px 5px 40px',
})

const SectionWrapperOne = styled('div')({
   fontFamily: 'sans-serif Gilroy',
   width: '27px',
   height: '27px',
   padding: '4px 8px 3px 8px',
   borderRadius: '16px',
   background: 'rgba(44, 177, 7, 1)',

   '& span ': {
      color: '#fff',
   },
})

const SectionWrapperL = styled('div')({
   width: '27px',
   height: '27px',
   padding: '4px 9px 3px 9px',
   borderRadius: '16px',
   background: 'rgba(44, 177, 7, 1)',
   marginLeft: '40px',

   '& span ': {
      color: '#fff',
   },
})

const SectionWrapperA = styled('div')({
   width: '27px',
   height: '27px',
   padding: '4px 8px 3px 8px',
   borderRadius: '16px',
   background: 'rgba(44, 177, 7, 1)',
   marginLeft: '40px',

   '& span ': {
      color: '#fff',
   },
})
   