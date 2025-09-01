import { IconButton, styled } from '@mui/material'
import { useState } from 'react'
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

export default function Sidebar() {
   const [open, setOpen] = useState(false)
   const handleToggle = () => setOpen((prev) => !prev)

   const [activeIndex, setActiveIndex] = useState(null)
   const [downAL, setDownAL] = useState({})
   const toggleDownAL = (id) => {
      setDownAL((prev) => ({
         ...prev,
         [id]: !prev[id],
      }))
   }

   const [down, setUp] = useState(false)
   const DownUpTitle = () => setUp((prev) => !prev)

   const [activeAL, setActiveAL] = useState(null)

   return (
      <SidebarContainer open={open}>
         <TopSection open={open}>
            <CircleIconButton onClick={handleToggle} open={open}>
               {open ? (
                  <ConteinerMiniLMS>
                     <LeftIcon style={{ width: 24, height: 24 }} />
                     <LMSSpan>LMS</LMSSpan>
                  </ConteinerMiniLMS>
               ) : (
                  <span>L</span>
               )}
            </CircleIconButton>

            <NoRippleIconButton onClick={handleToggle}>
               <MenuIconRight />
            </NoRippleIconButton>
         </TopSection>

         <Divider open={open} />

         <SelectedMenuItem open={open}>
            <LayoutIcon />
            {open && (
               <>
                  <span style={{ marginLeft: 12 }}>Boards</span>
                  <PlusIcon
                     style={{
                        width: '20px',
                        height: '20px',
                        marginLeft: '30px',
                     }}
                  />
                  <DownIconButtonBoards open={open}>
                     <DownIcon
                        style={{ marginLeft: 7 }}
                        onClick={DownUpTitle}
                     />
                  </DownIconButtonBoards>
               </>
            )}
         </SelectedMenuItem>

         {open && down && (
            <TitleBoards>
               {['Title', 'Title', 'Title', 'Title', 'Title'].map(
                  (label, idx) => (
                     <TitleMap
                        key={idx}
                        label={label}
                        isActive={activeIndex === idx}
                        onClick={() => setActiveIndex(idx)}
                     />
                  )
               )}
            </TitleBoards>
         )}

         <Divider open={open} />

         <MainIcons open={open}>
            <SidebarItem
               id={122}
               isActive={activeIndex === 122}
               onClick={() => setActiveIndex(122)}
               open={open}
               icon={<FilesAndFoldersIcon />}
               label="All issues"
               count="(267)"
            />
            <SidebarItem
               id={288}
               isActive={activeIndex === 288}
               onClick={() => setActiveIndex(288)}
               open={open}
               icon={<PeopleIcon />}
               label="Participants"
               count="(17)"
            />
            <SidebarItem
               id={377}
               onClick={() => setActiveIndex(377)}
               open={open}
               icon={<ToolsIcon />}
               label="Setting"
            />
         </MainIcons>

         <Divider open={open} />

         <WorkSpaces>
            <DivGraph>
               <GraphIconButton open={open}>
                  <GraphicIcon />
               </GraphIconButton>
               {open && (
                  <>
                     <span style={{ marginLeft: 12, marginRight: 24 }}>
                        Workspaces
                     </span>
                     <PlusIcon style={{ width: 20, height: 20 }} />
                  </>
               )}
            </DivGraph>

            {[
               'Accounting',
               'LMS',
               'Accounting',
               'LMS',
               'Accounting',
               'LMS',
            ].map((label, idAL) => (
               <Section
                  key={idAL}
                  id={idAL}
                  label={label}
                  open={open}
                  isActive={activeAL === idAL}
                  onClick={() => setActiveAL(idAL)}
                  downAL={!!downAL[idAL]}
                  toggleDownAL={() => toggleDownAL(idAL)}
               />
            ))}
            <DicConteiner open={open}>
               <DownIconButton>
                  <DownIcon />
               </DownIconButton>
               {open && <span style={{ marginLeft: '12px' }}>Show more</span>}
            </DicConteiner>
         </WorkSpaces>
      </SidebarContainer>
   )
}

function TitleMap({ label, isActive, onClick }) {
   return (
      <DivTile isActive={isActive} onClick={onClick}>
         {label}
      </DivTile>
   )
}

function SidebarItem({ icon, label, count, open, isActive, onClick }) {
   return (
      <InteriorConteinerSidebarItem
         isActive={isActive}
         onClick={onClick}
         open={open}
      >
         <NoRippleBasicIconButton>{icon}</NoRippleBasicIconButton>
         {open && (
            <>
               <span style={{ margin: '0 12px' }}>{label}</span>
               {count && <span>{count}</span>}
            </>
         )}
      </InteriorConteinerSidebarItem>
   )
}

function Section({ id, label, open, downAL, toggleDownAL }) {
   const isAccounting = label === 'Accounting'
   const Wrapper = isAccounting ? SectionWrapperA : SectionWrapperL
   const Text = isAccounting ? SpanAccounting : SpanLMS

   return (
      <>
         <InteriorConteinerSection>
            <Wrapper open={open}>
               <span>{label[0]}</span>
            </Wrapper>
            {open && (
               <>
                  <Text>{label}</Text>
                  <DivSectionDownIconButtton onClick={toggleDownAL}>
                     <DownIcon />
                  </DivSectionDownIconButtton>
               </>
            )}
         </InteriorConteinerSection>

         {open && downAL && (
            <div>
               <SidebarTechnicalPartAL
                  id={id}
                  icon={<LayoutIcon />}
                  label="Boards"
               />
               <SidebarTechnicalPartAL
                  id={id}
                  icon={<PeopleIcon />}
                  label="Participants"
                  iconPlus={<PlusIcon />}
               />
               <SidebarTechnicalPartAL
                  id={id}
                  icon={<ToolsIcon />}
                  label="Setting"
               />
            </div>
         )}
      </>
   )
}

function SidebarTechnicalPartAL({ icon, label, iconPlus }) {
   return (
      <BoxAL>
         <div>{icon}</div>
         <span>{label}</span>
         <DivPlusIcon>{iconPlus}</DivPlusIcon>
      </BoxAL>
   )
}

/* ---------- styled ---------- */
const SidebarContainer = styled('div')(({ open }) => ({
   overflow: 'auto',
   width: open ? 250 : 116,
   height: '100vh',
   background: 'rgba(248, 248, 248, 0.6)',
   paddingTop: 93,
   display: 'flex',
   flexDirection: 'column',
   scrollbarWidth: 'thin',
}))

const TopSection = styled('div')(({ open }) => ({
   display: 'flex',
   alignItems: 'center',
   marginLeft: 40,
   marginBottom: open ? 22.5 : 17.5,
}))

const CircleIconButton = styled('div')(({ open }) => ({
   borderRadius: 24,
   backgroundColor: open ? null : 'rgba(0, 121, 191, 1)',
   padding: open ? null : '5px 13px',
   '& span': {
      color: open ? 'black' : '#fff',
      fontSize: open ? 18 : 20,
      fontWeight: open ? 500 : 400,
   },
}))

const ConteinerMiniLMS = styled('div')({
   display: 'flex',
   gap: 11,
   alignItems: 'center',
})

const LMSSpan = styled('span')({
   display: 'inline-block',
   width: 135,
})

const NoRippleIconButton = styled(IconButton)({
   width: 23,
   height: 22,
   padding: 0,
   marginLeft: 23,
   '& svg': { width: 20, height: 20 },
})

const DownIconButtonBoards = styled(IconButton)({
   padding: 0,
   width: 30,
   height: 30,
})

const SelectedMenuItem = styled('div')(({ open }) => ({
   width: open ? 227 : 100,
   height: 37,
   borderRadius: '0 24px 24px 0',
   background: 'rgba(58, 104, 131, 0.6)',
   padding: open ? '8px 17px 8px 43px' : '8px 32px 9px 48px',
   margin: '11.5px 0 20.5px 0',
   display: 'flex',
   alignItems: 'center',
}))

const TitleBoards = styled('div')({
   margin: '9px 0 19.5px 54px',
   display: 'flex',
   flexDirection: 'column',
   borderLeft: '1px solid rgba(224, 224, 224, 1)',
   minHeight: '200px',
})

const DivTile = styled('div')(({ isActive }) => ({
   maxWidth: isActive ? '172px' : '54px',
   borderRadius: isActive ? '0 24px 24px 0' : null,
   background: isActive ? 'rgba(230, 234, 237, 1)' : null,
   height: '36px',
   display: 'flex',
   alignItems: 'center',
   paddingLeft: '21px',
}))

const MainIcons = styled('div')(({ open }) => ({
   display: 'flex',
   flexDirection: 'column',
   margin: '20.5px 0 19.5px',
   gap: open ? null : 20,
   marginLeft: open ? null : 48,
}))

const InteriorConteinerSidebarItem = styled('div')(({ isActive, open }) => ({
   display: 'flex',
   alignItems: 'center',
   width: isActive ? 227 : null,
   background: open ? (isActive ? 'rgba(58, 104, 131, 0.6)' : null) : null,
   borderRadius: open ? (isActive ? '0 24px 24px 0' : null) : null,
   padding: open ? '8px 32px 9px 43px' : null,
}))

const NoRippleBasicIconButton = styled(IconButton)({
   padding: 0,
   '& svg': { width: 20, height: 20 },
})

const WorkSpaces = styled('div')({
   marginTop: 21.5,
   display: 'flex',
   flexDirection: 'column',
   gap: 16,
})

const DivGraph = styled('div')({ display: 'flex' })

const GraphIconButton = styled('div')(({ open }) => ({
   width: 20,
   height: 20,
   marginLeft: open ? 44 : 47,
}))

const SectionWrapperL = styled('div')(({ open }) => ({
   width: 27,
   height: 27,
   padding: '4px 9px 3px',
   borderRadius: 16,
   background: 'rgba(44, 177, 7, 1)',
   marginLeft: open ? 40 : 44,
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   '& span': { color: '#fff' },
}))

const SectionWrapperA = styled(SectionWrapperL)({
   padding: '4px 8px 3px',
})

const SpanAccounting = styled('div')({ margin: '0 37px 0 8px' })
const SpanLMS = styled('div')({ margin: '0 83px 0 8px' })

const Divider = styled('div')(({ open }) => ({
   width: open ? 170 : 36,
   border: '1px solid rgba(224, 224, 224, 1)',
   marginLeft: 40,
}))

const InteriorConteinerSection = styled('div')({
   display: 'flex',
   alignItems: 'center',
})

const BoxAL = styled('div')({
   display: 'flex',
   alignItems: 'center',
   marginLeft: 75,
   gap: 8,
})

const DivPlusIcon = styled('div')({
   '& svg': { width: 20, height: 20 },
   marginLeft: 6,
})

const DivSectionDownIconButtton = styled(IconButton)({ padding: 0 })

const DicConteiner = styled('div')({
   display: 'flex',
})

const DownIconButton = styled(IconButton)({
   padding: 0,
   width: 20,
   height: 20,
   marginLeft: 47,
   display: 'flex',
})
