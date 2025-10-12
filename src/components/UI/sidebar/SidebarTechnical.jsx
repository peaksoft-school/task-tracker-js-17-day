import { styled } from '@mui/material'

function SidebarTechnical({ icon, label, iconPlus }) {
   return (
      <TechnicalBox>
         <IconWrapper>{icon}</IconWrapper>

         <LabelText>{label}</LabelText>

         {iconPlus && <PlusIconWrapper>{iconPlus}</PlusIconWrapper>}
      </TechnicalBox>
   )
}

export default SidebarTechnical

const TechnicalBox = styled('div')({
   display: 'flex',
   alignItems: 'center',
   gap: 8,
})

const LabelText = styled('span')({ marginLeft: 12 })

const PlusIconWrapper = styled('div')({
   marginLeft: 6,
   '& svg': { width: 20, height: 20 },
})

const IconWrapper = styled('div')({
   display: 'flex',
   alignItems: 'center',
   '& svg': { width: 20, height: 20 },
})
