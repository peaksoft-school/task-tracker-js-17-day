import { useEffect, useMemo, useState } from 'react'
import { IconButton, styled } from '@mui/material'
import {
   DownIcon,
   FilesAndFoldersIcon,
   GraphicIcon,
   LayoutIcon,
   LeftIcon,
   MenuIconRight,
   MenuIconLeft,
   PeopleIcon,
   PlusIcon,
   ToolsIcon,
} from '../../../assets/AllExportIcon'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import SidebarItem from './SidebarItem'
import Section from './Section'
import SidebarSettingModal from './SidebarModal'
import { useDispatch, useSelector } from 'react-redux'
import { MAIN_THUNK } from '../../../store/slices/workspaces/mainThunk'
import CreateModal from '../../../pages/mainWorkSpace/mainModal/CreateModal'
import { BOARDS_THUNK } from '../../../store/slices/board/BoardsThunk'
import { setBoardBackground } from '../../../store/slices/board/BoardsSlice'
import CustomModal from '../modal/Modal'

export default function Sidebar({ rowsLength = 0 }) {
   const [CrateSidebarModal, setCrateSidebarModal] = useState(false)
   const OpenSidebarModalCrate = () => setCrateSidebarModal((prev) => !prev)

   const [OpenSidebarModal, setOpenSidebarModal] = useState(false)
   const OpenSidebarModalSetting = () => setOpenSidebarModal((prev) => !prev)

   const handleCloseSettings = () => {
      setOpenSidebarModal(false)
      setActiveSetting(false)
   }

   const [activeSetting, setActiveSetting] = useState(false)

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
   const { boards } = useSelector((state) => state.boards)
   const { participans } = useSelector((state) => state.participans)

   const handleBoardClick = (board) => {
      setActiveIndex(board.id)
      setActiveSetting(false)
      const bg = board.backgroundUrl || board.backgroundColor
      dispatch(setBoardBackground(bg))

      localStorage.setItem('lastBoard', bg)
   }

   const currentWorkspace = useMemo(() => {
      return main?.find((w) => w.id === Number(id))
   }, [main, id])

   useEffect(() => {
      if (token) {
         dispatch(MAIN_THUNK.getAllMain({ token }))
      }
   }, [dispatch, token])

   useEffect(() => {
      if (id) {
         dispatch(BOARDS_THUNK.getBoardsByWorkspaceId(id))
      }
   }, [dispatch, id])

   const location = useLocation()
   const currentPath = location.pathname

   const toggleSidebar = () => setOpen((prev) => !prev)
   const toggleAL = (id) => setDownAL((prev) => ({ ...prev, [id]: !prev[id] }))
   const toggleBoards = () => setShowBoards((prev) => !prev)

   const pathBoards = `/workspace/${id}`
   const pathAllIssues = `/workspace/${id}/all-issuis`
   const pathParticipants = `/workspace/${id}/participants`

   return (
      <SidebarContainer open={open}>
         <TopSection open={open}>
            <CircleIconButton open={open} onClick={toggleSidebar}>
               {open ? (
                  <MiniLMS>
                     <LeftIcon />
                     <LMSSpan>
                        {currentWorkspace
                           ? currentWorkspace.name
                           : 'Task Tracker'}
                     </LMSSpan>
                  </MiniLMS>
               ) : (
                  <span>
                     {currentWorkspace ? currentWorkspace.name[0] : 'T'}
                  </span>
               )}
            </CircleIconButton>

            <MenuButton onClick={toggleSidebar}>
               {open ? <MenuIconLeft /> : <MenuIconRight />}
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
               {boards && boards.length > 0 ? (
                  boards.map((board) => (
                     <TitleItem
                        key={board.id}
                        isActive={activeIndex === board.id}
                        onClick={() => handleBoardClick(board)}
                     >
                        {board.name}
                     </TitleItem>
                  ))
               ) : (
                  <TitleItem style={{ color: 'gray', cursor: 'default' }}>
                     No boards
                  </TitleItem>
               )}
            </BoardsContainer>
         )}

         <Divider open={open} />

         <MainIcons open={open}>
            <SidebarItem
               icon={<FilesAndFoldersIcon />}
               label="All issues"
               count={`(${rowsLength})`}
               isActive={currentPath === pathAllIssues}
               onClick={() => {
                  navigate(pathAllIssues)
               }}
               open={open}
            />
            <SidebarItem
               icon={<PeopleIcon />}
               label="Participants"
               count={`(${participans?.length || 0})`}
               isActive={currentPath === pathParticipants}
               onClick={() => {
                  navigate(`/workspace/${id}/participants`)
               }}
               open={open}
            />

            <SidebarItem
               icon={<ToolsIcon />}
               label="Setting"
               isActive={activeSetting}
               onClick={() => {
                  setActiveSetting(true)
                  OpenSidebarModalSetting()
               }}
               open={open}
            />
         </MainIcons>

         <CustomModal
            isVisible={OpenSidebarModal}
            handleVisible={handleCloseSettings}
         >
            <SidebarSettingModal
               onClose={handleCloseSettings}
               id={Number(id)}
               workspaceName={
                  main?.find((w) => w.id === Number(id))?.name || ''
               }
            />
         </CustomModal>

         <Divider open={open} />

         <Workspaces open={open}>
            <WorkspaceHeader>
               <GraphicIconWrapper open={open}>
                  <GraphicIcon />
               </GraphicIconWrapper>

               <HeaderLabelContainer
                  open={open}
                  onClick={OpenSidebarModalCrate}
               >
                  <LabelText>Workspaces</LabelText>
                  <PlusIconWrapper>
                     <PlusIcon />
                  </PlusIconWrapper>
               </HeaderLabelContainer>

               <CustomModalCrate
                  isVisible={CrateSidebarModal}
                  handleVisible={OpenSidebarModalCrate}
               >
                  <CreateModal onClose={OpenSidebarModalCrate} />
               </CustomModalCrate>
            </WorkspaceHeader>

            {main &&
               main.length > 0 &&
               main.map((workspace) => (
                  <Section
                     OpenSidebarModalSetting={OpenSidebarModalSetting}
                     OpenSidebarModal={OpenSidebarModal}
                     key={workspace.id}
                     id={workspace.id}
                     label={workspace.name}
                     open={open}
                     downAL={!!downAL[workspace.id]}
                     toggleDownAL={() => toggleAL(workspace.id)}
                     isActive={activeAL === workspace.id}
                     onClick={() => setActiveAL(workspace.id)}
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
   width: open ? '250px' : 116,
   transition: 'width 0.5s',
   height: '93.5vh',
   display: 'flex',
   flexDirection: 'column',
   paddingTop: 93,
   overflowY: 'auto',
   overflowX: 'hidden',
   background: 'rgba(255, 255, 255, 0.6)',
   alignItems: 'center',

   scrollbarWidth: 'none',
   msOverflowStyle: 'none',

   '&::-webkit-scrollbar': {
      display: 'none',
   },
}))

const TopSection = styled('div')(({ open }) => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: open ? 'space-between' : 'center',
   width: '100%',
   padding: open ? '0 20px' : '0',
   boxSizing: 'border-box',
   marginBottom: 22,
   gap: open ? 0 : 10,
}))

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

const LMSSpan = styled('span')({
   width: 135,
   whiteSpace: 'nowrap',
   overflow: 'hidden',
   textOverflow: 'ellipsis',
   fontWeight: 600,
})

const MenuButton = styled(IconButton)({
   width: 23,
   height: 22,
   padding: 0,
   '& svg': { width: 20, height: 20 },
})

const Divider = styled('div')(({ open }) => ({
   width: open ? 170 : 36,
   border: '1px solid rgba(224,224,224,1)',
}))

const SelectedMenuItem = styled('div')(({ open, isActive }) => ({
   width: open ? '90%' : 100,
   height: 37,
   borderRadius: '0 24px 24px 0',
   display: 'flex',
   alignItems: 'center',
   justifyContent: open ? 'space-between' : 'center',
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
   minHeight: 40,
})

const TitleItem = styled('div')(({ isActive }) => ({
   width: '100%',
   maxWidth: 180,
   height: 36,
   display: 'flex',
   alignItems: 'center',
   padding: '0 16px',
   cursor: 'pointer',
   borderRadius: '0 18px 18px 0',
   background: isActive ? 'rgba(230,234,237,1)' : undefined,
   whiteSpace: 'nowrap',
   overflow: 'hidden',
   textOverflow: 'ellipsis',
   fontSize: 14,
   lineHeight: '16px',
   color: '#2d2d2d',
   transition: 'background 0.2s',
   '&:hover': {
      background: 'rgba(230,234,237,0.6)',
   },
}))

const MainIcons = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   margin: '20px 0',
   gap: 16,
}))

const PlusIconWrapper = styled('div')({
   marginLeft: 6,
   '& svg': { width: 20, height: 20 },
})

const CustomModalCrate = styled(CustomModal)({})

const HeaderLabelContainer = styled('div')(({ open }) => ({
   display: 'flex',
   alignItems: 'center',
   marginLeft: 12,
   opacity: open ? 1 : 0,
   visibility: open ? 'visible' : 'hidden',
   transform: open ? 'translateX(0)' : 'translateX(-10px)',
   transition: 'opacity 0.3s, transform 0.3s, visibility 0.3s',
   transitionDelay: '0.1s',
}))

const LabelText = styled('div')({ marginLeft: 12 })

const Workspaces = styled('div')(({ open }) => ({
   width: '100%',
   paddingLeft: open ? '40px' : '45px',
   marginTop: 21.5,
   display: 'flex',
   flexDirection: 'column',
   gap: 16,
   transition: 'padding-left 0.5s',
}))
const WorkspaceHeader = styled('div')({
   display: 'flex',
   alignItems: 'center',
})

const GraphicIconWrapper = styled('div')(({ open }) => ({
   paddingLeft: open ? '3px' : '4px',
   width: 20,
   height: 20,
   transition: 'padding-left 0.5s',
}))

const DownButton = styled(IconButton)({ padding: 0, marginLeft: 7 })

const ShowMore = styled('div')({
   display: 'flex',
   alignItems: 'center',
   gap: '12px',
   cursor: 'pointer',
})
