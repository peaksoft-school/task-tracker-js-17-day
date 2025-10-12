import { useState } from 'react'
import { IconButton, styled } from '@mui/material'
import { Title, AccountingLMS } from '../../utils/constants/index'
import {
   DownIcon,
   FilesAndFoldersIcon,
   GraphicIcon,
   LayoutIcon,
   LeftIcon,
   MenuIconRight,
   PeopleIcon,
   PlusIcon,
   ToolsIcon,
} from '../../assets/AllExportIcon'
import SidebarItem from './SidebarItem'
import Section from './Section'

export default function Sidebar() {
   const [open, setOpen] = useState(false)
   const [activeIndex, setActiveIndex] = useState(null)
   const [activeAL, setActiveAL] = useState(null)
   const [downAL, setDownAL] = useState({})
   const [showBoards, setShowBoards] = useState(false)

   const toggleSidebar = () => setOpen((prev) => !prev)
   const toggleAL = (id) => setDownAL((prev) => ({ ...prev, [id]: !prev[id] }))
   const toggleBoards = () => setShowBoards((prev) => !prev)

   return (
      <SidebarContainer open={open}>
         <TopSection>
            <CircleIconButton open={open} onClick={toggleSidebar}>
               {open ? (
                  <MiniLMS>
                     <LeftIcon />
                     <LMSSpan>LMS</LMSSpan>
                  </MiniLMS>
               ) : (
                  <span>L</span>
               )}
            </CircleIconButton>

            <MenuButton onClick={toggleSidebar}>
               <MenuIconRight />
            </MenuButton>
         </TopSection>

         <Divider open={open} />

         <SelectedMenuItem open={open}>
            <LayoutIcon />
            {open && (
               <>
                  <LabelText>Boards</LabelText>
                  <PlusIconWrapper>
                     <PlusIcon />
                  </PlusIconWrapper>
                  <DownButton onClick={toggleBoards}>
                     <DownIcon />
                  </DownButton>
               </>
            )}
         </SelectedMenuItem>

         {open && showBoards && (
            <BoardsContainer>
               {Title.map((label, idx) => (
                  <TitleItem
                     key={idx}
                     isActive={activeIndex === idx}
                     onClick={() => setActiveIndex(idx)}
                  >
                     {label}
                  </TitleItem>
               ))}
            </BoardsContainer>
         )}

         <Divider open={open} />

         <MainIcons>
            <SidebarItem
               icon={<FilesAndFoldersIcon />}
               label="All issues"
               count="(267)"
               isActive={activeIndex === 122}
               onClick={() => setActiveIndex(122)}
               open={open}
            />
            <SidebarItem
               icon={<PeopleIcon />}
               label="Participants"
               count="(17)"
               isActive={activeIndex === 288}
               onClick={() => setActiveIndex(288)}
               open={open}
            />
            <SidebarItem
               icon={<ToolsIcon />}
               label="Setting"
               isActive={activeIndex === 377}
               onClick={() => setActiveIndex(377)}
               open={open}
            />
         </MainIcons>

         <Divider open={open} />

         <Workspaces>
            <WorkspaceHeader>
               <GraphicIconWrapper>
                  <GraphicIcon />
               </GraphicIconWrapper>
               {open && (
                  <>
                     <LabelText>Workspaces</LabelText>
                     <PlusIconWrapper>
                        <PlusIcon />
                     </PlusIconWrapper>
                  </>
               )}
            </WorkspaceHeader>

            {AccountingLMS.map((label, id) => (
               <Section
                  key={id}
                  id={id}
                  label={label}
                  open={open}
                  downAL={!!downAL[id]}
                  toggleDownAL={() => toggleAL(id)}
                  isActive={activeAL === id}
                  onClick={() => setActiveAL(id)}
               />
            ))}

            <ShowMore>
               <DownIcon />
               {open && <span>Show more</span>}
            </ShowMore>
         </Workspaces>
      </SidebarContainer>
   )
}

const SidebarContainer = styled('div')(({ open }) => ({
   width: open ? 250 : 116,
   transition: 'width 0.5s',
   height: '100vh',
   display: 'flex',
   flexDirection: 'column',
   paddingTop: 93,
   overflow: 'auto',
   background: 'rgba(248,248,248,0.6)',
   alignItems: 'center',
}))

const TopSection = styled('div')({
   display: 'flex',
   alignItems: 'center',
   marginLeft: 40,
   marginBottom: 22,
})

const CircleIconButton = styled('div')(({ open }) => ({
   borderRadius: 24,
   padding: open ? undefined : '5px 13px',
   backgroundColor: open ? undefined : 'rgba(0,121,191,1)',
   cursor: 'pointer',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   '& span': {
      color: open ? 'black' : '#fff',
      fontSize: open ? 18 : 20,
      fontWeight: open ? 500 : 400,
   },
}))

const MiniLMS = styled('div')({
   display: 'flex',
   alignItems: 'center',
   gap: 11,
})

const LMSSpan = styled('span')({ width: 135 })

const MenuButton = styled(IconButton)({
   width: 23,
   height: 22,
   padding: 0,
   marginLeft: 23,
   '& svg': { width: 20, height: 20 },
})

const Divider = styled('div')(({ open }) => ({
   width: open ? 170 : 36,
   border: '1px solid rgba(224,224,224,1)',
}))

const SelectedMenuItem = styled('div')(({ open }) => ({
   width: open ? '100%' : 100,
   height: 37,
   borderRadius: '0 24px 24px 0',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   padding: open ? '8px 32px 8px 32px' : '8px 32px 9px 32px',
   background: open ? 'rgba(58,104,131,0.6)' : undefined,
   margin: '10px 0',
}))

const BoardsContainer = styled('div')({
   margin: '10px 0',
   justifyContent: 'center',
   display: 'flex',
   flexDirection: 'column',
   borderLeft: '1px solid rgba(224,224,224,1)',
   minHeight: 200,
})

const TitleItem = styled('div')(({ isActive }) => ({
   maxWidth: isActive ? 172 : 54,
   borderRadius: isActive ? '0 24px 24px 0' : undefined,
   background: isActive ? 'rgba(230,234,237,1)' : undefined,
   height: 36,
   display: 'flex',
   alignItems: 'center',
   padding: '0 21px',
   cursor: 'pointer',
}))

const MainIcons = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   margin: '20px 0',
   gap: 16,
})

const PlusIconWrapper = styled('div')({
   marginLeft: 6,
   '& svg': { width: 20, height: 20 },
})
const LabelText = styled('span')({ marginLeft: 12 })

const Workspaces = styled('div')({
   marginTop: 21.5,
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: 16,
})
const WorkspaceHeader = styled('div')({ display: 'flex', alignItems: 'center' })

const GraphicIconWrapper = styled('div')({
   width: 20,
   height: 20,
})

const DownButton = styled(IconButton)({ padding: 0, marginLeft: 7 })

const ShowMore = styled('div')({
   display: 'flex',
   alignItems: 'center',
   cursor: 'pointer',
})
