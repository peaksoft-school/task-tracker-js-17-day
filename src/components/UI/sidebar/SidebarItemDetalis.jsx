import styled from '@emotion/styled'

function SidebarItemDetalis({ icon, label, count, open, isActive, onClick }) {
   return (
      <ItemContainer open={open} isActive={isActive} onClick={onClick}>
         <IconWrapper>{icon}</IconWrapper>

         {open && (
            <>
               <LabelText>{label}</LabelText>
               {count && <CountText>{count}</CountText>}
            </>
         )}
      </ItemContainer>
   )
}

export default SidebarItemDetalis

const ItemContainer = styled('div')(({ open, isActive }) => ({
   transition: 'width 0.5s',
   display: 'flex',
   alignItems: 'center',
   width: open && isActive ? 227 : undefined,
   background: open && isActive ? 'rgba(58,104,131,0.6)' : undefined,
   borderRadius: open && isActive ? '0 24px 24px 0' : undefined,
   padding: open ? '8px 32px 9px 32px' : undefined,
   cursor: 'pointer',
}))

const CountText = styled('span')({ marginLeft: 6 })

const IconWrapper = styled('div')({
   display: 'flex',
   alignItems: 'center',
   '& svg': { width: 20, height: 20 },
})

const LabelText = styled('span')({ marginLeft: 12 })
