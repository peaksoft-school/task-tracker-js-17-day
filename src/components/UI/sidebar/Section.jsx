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
function Section({ label, open, downAL, toggleDownAL, onClick }) {
   return (
      <>
         <SectionContainer>
            <SectionWrapperL onClick={onClick}>
               <LabelSpan>{label[0]}</LabelSpan>
            </SectionWrapperL>

            {open && (
               <>
                  <SpanLMS>{label}</SpanLMS>

                  <DownButton onClick={toggleDownAL}>
                     <DownIcon />
                  </DownButton>
               </>
            )}
         </SectionContainer>

         {open && downAL && (
            <SectionDetails>
               <SidebarItemDetalis icon={<LayoutIcon />} label="Boards" open={open} />

               <SidebarItemDetalis
                  icon={<PeopleIcon />}
                  label="Participants"
                  iconPlus={<PlusIcon />}
                  open={open}
               />

               <SidebarItemDetalis icon={<ToolsIcon />} label="Setting" open={open} />
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

const SpanLMS = styled('div')({
   marginLeft: '8px',
})

const LabelSpan = styled('span')({})

const DownButton = styled(IconButton)({ padding: 0, marginLeft: 7 })

const SectionDetails = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: 8,
   color: 'gray',
})
