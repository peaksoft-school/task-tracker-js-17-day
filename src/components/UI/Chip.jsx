import { Chip, styled } from '@mui/material'
import { ExitIcon } from '../../assets/AllExportIcon'

export const Chipp = ({
   label,
   color = 'gray',
   icon,
   isRound = false,
   onClick,
   removable = false,
   onDelete,
}) => (
   <StyledChip
      label={
         <ChipContent>
            {icon && <IconWrapper>{icon}</IconWrapper>}

            <span>{label}</span>

            {removable && (
               <ExitIconWrapper
                  onClick={(e) => {
                     e.stopPropagation()
                     onDelete && onDelete()
                  }}
               >
                  <ExitIcon />
               </ExitIconWrapper>
            )}
         </ChipContent>
      }
      onClick={onClick}
      colorProp={color}
      isRound={isRound}
   />
)

const StyledChip = styled(Chip, {
   shouldForwardProp: (prop) => prop !== 'colorProp' && prop !== 'isRound',
})(({ colorProp, isRound }) => ({
   borderRadius: isRound ? '50%' : '6px',
   width: isRound ? '40px' : 'auto',
   height: isRound ? '40px' : 'auto',
   padding: isRound ? '0' : '10px',
   backgroundColor:
      colorProp === 'GREEN'
         ? 'rgb(48,176,9)'
         : colorProp === 'RED'
           ? 'rgb(217,21,17)'
           : colorProp === 'orange'
             ? 'rgb(237,138,0)'
             : colorProp === 'BLUE'
               ? 'rgb(0,121,191)'
               : colorProp === 'YELLOW'
                 ? 'rgb(243, 243, 7)'
                 : 'rgb(201,201,201)',
   color: 'white',
   fontWeight: 500,
   fontSize: 16,
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))

const ChipContent = styled('span')({
   display: 'flex',
   alignItems: 'center',
   gap: 6,
})

const IconWrapper = styled('span')({
   display: 'flex',
   alignItems: 'center',
   '& svg': { width: 19, height: 19 },
})

const ExitIconWrapper = styled('span')({
   display: 'flex',
   alignItems: 'center',
   cursor: 'pointer',
})
