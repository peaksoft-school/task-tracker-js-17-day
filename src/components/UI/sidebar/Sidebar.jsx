import { useEffect, useState } from 'react'
import { IconButton, styled } from '@mui/material'
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
} from '../../../assets/AllExportIcon'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import SidebarItem from './SidebarItem'
import Section from './Section'
import { CustomModal } from '../modal/Modal'
import SidebarSettingModal from './SidebarModal'
import { useDispatch, useSelector } from 'react-redux'
import { MAIN_THUNK } from '../../../store/slices/workspaces/mainThunk'

export default function Sidebar() {
   const Title = ['Title', 'Title', 'Title', 'Title', 'Title']
   const AccountingLMS = [
      'Accountingr',
      'LMS',
      // 'Accounting',
      // 'LMS',
      // 'Accounting',
      // 'LMS',
   ]

   const [OpenSidebarModal, setOpenSidebarModal] = useState(false)
   const OpenSidebarModalCrate = () => setOpenSidebarModal((prev) => !prev)

   const [open, setOpen] = useState(false)
   const [activeIndex, setActiveIndex] = useState(null)
   const [activeAL, setActiveAL] = useState(null)
   const [downAL, setDownAL] = useState({})
   const [showBoards, setShowBoards] = useState(false)
   const navigate = useNavigate()
   const { id } = useParams()

   const dispatch = useDispatch()
   const { token } = useSelector((state) => state.auth)
   const { main } = useSelector((state) => state.main)

   useEffect(() => {
      if (token) {
         dispatch(MAIN_THUNK.getAllMain({ token }))
      }
   }, [dispatch, token])

   const location = useLocation()
   const currentPath = location.pathname

   const toggleSidebar = () => setOpen((prev) => !prev)
   const toggleAL = (id) => setDownAL((prev) => ({ ...prev, [id]: !prev[id] }))
   const toggleBoards = () => setShowBoards((prev) => !prev)

   const pathBoards = `/workspace/${id}/boards`
   const pathAllIssues = `/workspace/${id}/boards/all-issuis`
   const pathParticipants = `/workspace/${id}/participants`

   console.log(main)
   console.log(token)

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

         <SelectedMenuItem
            open={open}
            isActive={currentPath === pathBoards}
            onClick={() => navigate(pathBoards)}
         >
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
               isActive={currentPath === pathAllIssues}
               onClick={() => {
                  navigate(`/workspace/${id}/boards/all-issuis`)
               }}
               open={open}
            />
            <SidebarItem
               icon={<PeopleIcon />}
               label="Participants"
               count="(17)"
               isActive={currentPath === pathParticipants}
               onClick={() => {
                  navigate(pathParticipants)
               }}
               open={open}
            />

            <SidebarItem
               icon={<ToolsIcon />}
               label="Setting"
               isActive={activeIndex}
               onClick={OpenSidebarModalCrate}
               open={open}
            />
         </MainIcons>

         <CustomModal
            isVisible={OpenSidebarModal}
            handleVisible={OpenSidebarModalCrate}
         >
            <SidebarSettingModal />
         </CustomModal>

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

            {/* {main &&
               main.length > 0 &&
               main.map((workspace) => (
                  <Section
                     key={workspace.id}
                     id={workspace.id}
                     label={"fff"}
                     open={open}
                     downAL={!!downAL[workspace.id]}
                     toggleDownAL={() => toggleAL(workspace.id)}
                     isActive={activeAL === workspace.id}
                     onClick={() => setActiveAL(workspace.id)}
                  />
               ))} */}

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
   height: '93.5vh',
   display: 'flex',
   flexDirection: 'column',
   paddingTop: 93,
   overflowY: 'auto',
   overflowX: 'hidden',
   background: 'rgba(248,248,248,0.6)',
   alignItems: 'center',

   scrollbarWidth: 'none',
   msOverflowStyle: 'none',

   '&::-webkit-scrollbar': {
      display: 'none',
   },
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

const SelectedMenuItem = styled('div')(({ open, isActive }) => ({
   width: open ? '100%' : 100,
   height: 37,
   borderRadius: '0 24px 24px 0',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   padding: open ? '8px 32px 8px 32px' : '8px 32px 9px 32px',
   background: open && isActive ? 'rgba(58,104,131,0.6)' : undefined,
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
const LabelText = styled('div')({ marginLeft: 12 })

const Workspaces = styled('div')({
   width: '100%',
   paddingLeft: '40px',
   marginTop: 21.5,
   display: 'flex',
   flexDirection: 'column',
   gap: 16,
})
const WorkspaceHeader = styled('div')({
   display: 'flex',
   alignItems: 'center',
})

const GraphicIconWrapper = styled('div')({
   width: 20,
   height: 20,
})

const DownButton = styled(IconButton)({ padding: 0, marginLeft: 7 })

const ShowMore = styled('div')({
   display: 'flex',
   alignItems: 'center',
   gap: '12px',
   cursor: 'pointer',
})
