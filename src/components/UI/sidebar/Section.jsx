import { IconButton, styled } from '@mui/material'
import SidebarTechnical from './SidebarTechnical'
import {
   DownIcon,
   LayoutIcon,
   PeopleIcon,
   PlusIcon,
   ToolsIcon,
} from '../../../assets/AllExportIcon'

function Section({ label, open, downAL, toggleDownAL, onClick }) {
   const isAccounting = label === 'Accounting'
   const Wrapper = isAccounting ? SectionWrapperA : SectionWrapperL
   const Text = isAccounting ? SpanAccounting : SpanLMS

   return (
      <>
         <SectionContainer>
            <Wrapper onClick={onClick}>
               <span>{label[0]}</span>
            </Wrapper>

            {open && (
               <>
                  <Text>{label}</Text>

                  <DownButton onClick={toggleDownAL}>
                     <DownIcon />
                  </DownButton>
               </>
            )}
         </SectionContainer>

         {open && downAL && (
            <SectionDetails>
               <SidebarTechnical icon={<LayoutIcon />} label="Boards" />

               <SidebarTechnical
                  icon={<PeopleIcon />}
                  label="Participants"
                  iconPlus={<PlusIcon />}
               />

               <SidebarTechnical icon={<ToolsIcon />} label="Setting" />
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

const DownButton = styled(IconButton)({ padding: 0, marginLeft: 7 })

const SectionDetails = styled('div')({
   marginLeft: 75,
   display: 'flex',
   flexDirection: 'column',
   gap: 8,
   color: 'gray',
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

const SectionWrapperA = styled(SectionWrapperL)({
   padding: '4px 8px 3px',
})

const SpanAccounting = styled('div')({
   margin: '0 37px 0 8px',
})

const SpanLMS = styled('div')({
   margin: '0 83px 0 8px',
})
