import styled from '@emotion/styled'

function SidebarItem({ icon, label, count, open, isActive, onClick }) {
   return (
      <ItemContainer open={open} isActive={isActive} onClick={onClick}>
         <IconWrapper>{icon}</IconWrapper>

         {open && (
            <LabelContainer open={open}>
               <LabelText>{label}</LabelText>
               {count && <CountText>{count}</CountText>}
            </LabelContainer>
         )}
      </ItemContainer>
   )
}

export default SidebarItem

const ItemContainer = styled('div')(({ open, isActive }) => ({
   display: 'flex',
   alignItems: 'center',
   width: open && isActive ? '100%' : undefined,
   background: open && isActive ? 'rgba(58,104,131,0.6)' : undefined,
   borderRadius: open && isActive ? '0 24px 24px 0' : undefined,
   padding: open ? '8px 32px 9px 35px' : '8px 0px 9px 0px',
}))

const CountText = styled('span')({ marginLeft: 6 })

const IconWrapper = styled('div')({
   display: 'flex',
   alignItems: 'center',
   '& svg': { width: 20, height: 20 },
})

const LabelContainer = styled('div')(({ open }) => ({
   opacity: open ? 1 : 0,
   visibility: open ? 'visible' : 'hidden',
   transform: open ? 'translateX(0)' : 'translateX(-10px)',
   transition: 'opacity 0.3s, transform 0.3s, visibility 0.3s',
   transitionDelay: '0.1s',
}))

const LabelText = styled('span')({ marginLeft: 12 })
