import SidebarItem from './SidebarItem'
import { IconButton, styled } from '@mui/material'
import {
   DownIcon,
   LayoutIcon,
   PeopleIcon,
   PlusIcon,
   ToolsIcon,
} from '../../../assets/AllExportIcon'
import SidebarItemDetalis from './SidebarItemDetalis'
import { useNavigate, useParams } from 'react-router-dom'
import SidebarSettingModal from './SidebarModal'
import { CustomModal } from '../modal/Modal'

function Section({
   label,
   open,
   downAL,
   toggleDownAL,
   onClick,
   OpenSidebarModalSetting,
   OpenSidebarModal,
}) {
   // const navigate = useNavigate()
   const { id } = useParams()

   const pathBoards = `/workspace/${id}/boards`
   return (
      <>
         <SectionContainer>
            <SectionWrapperL onClick={onClick}>
               <LabelSpan>{label[0]}</LabelSpan>
            </SectionWrapperL>

            <BoxLabel open={open}>
               <SpanLMS>{label}</SpanLMS>

               <DownButton onClick={toggleDownAL}>
                  <DownIcon />
               </DownButton>
            </BoxLabel>
         </SectionContainer>

         {open && downAL && (
            <SectionDetails>
               <SidebarItemDetalis
                  icon={<LayoutIcon />}
                  label="Boards"
                  onClick={() => navigate(pathBoards)}
                  open={open}
               />

               <SidebarItemDetalis
                  icon={<PeopleIcon />}
                  label="Participants"
                  iconPlus={<PlusIcon />}
                  open={open}
               />

               

               <SidebarItemDetalis
                  icon={<ToolsIcon />}
                  label="Setting"
                  onClick={OpenSidebarModalSetting}
                  open={open}
               />
               <CustomModal
                  isVisible={OpenSidebarModal}
                  handleVisible={OpenSidebarModalSetting}
               >
                  <SidebarSettingModal />
               </CustomModal>
            </SectionDetails>
         )}
      </>
   )
}

export default Section

const SectionContainer = styled('div')({
   display: 'flex',
   alignItems: 'center',
   marginBottom: 8,
})

const SectionWrapperL = styled('div')({
   width: 27,
   height: 27,
   padding: '4px 9px 3px',
   borderRadius: 16,
   background: 'rgba(44,177,7,1)',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   cursor: 'pointer',
   '& span': { color: '#fff' },
})

const BoxLabel = styled('div')(({ open }) => ({
   width: '118px',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginLeft: '8px',

   opacity: open ? 1 : 0,
   visibility: open ? 'visible' : 'hidden',
   transform: open ? 'translateX(0)' : 'translateX(-10px)',
   transition: 'opacity 0.3s, transform 0.3s, visibility 0.3s',
   transitionDelay: '0.1s',
}))

const SpanLMS = styled('div')({})

const LabelSpan = styled('span')({
   width: '27px',
   height: '27px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
})

const DownButton = styled(IconButton)({ padding: 0, marginLeft: 7 })

const SectionDetails = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: 8,
   color: 'gray',
})
