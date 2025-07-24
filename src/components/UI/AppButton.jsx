import { Button } from '@mui/material'
import React from 'react'
import { themeColors } from '../../styles/appColors'

export const AppButton = ({
   children,
   onClick,
   disabled,
   type = 'button',
   ...rest
}) => {
   const bluee = themeColors.palette.primary.blue
   const white = themeColors.palette.primary.white
   return (
      <div>
         <Button
            sx={{
               padding: '8px 16px',
               borderRadius: '24px',
               backgroundColor: `${bluee}`,
               color: `${white}`,
               fontSize: '14px',
               fontWeight: '400',
               '&:hover': {
                  backgroundColor: 'rgba(0, 86, 136, 1)',
               },

               '&:active': {
                  backgroundColor: 'rgba(87, 174, 224, 1)',
               },
            }}
            onClick={onClick}
            disabled={disabled}
            type={type}
            {...rest}
         >
            {children}
         </Button>
      </div>
   )
}
