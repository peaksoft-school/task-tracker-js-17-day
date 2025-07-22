import { Button } from '@mui/material'
import React from 'react'

export const AppButton = ({ children }) => {
   return (
      <div>
         <Button
            sx={{
               width: '122px',
               height: '34px',
               borderRadius: '24px',
               backgroundColor: 'rgba(0, 121, 191, 1)',
               color: 'rgba(255, 255, 255, 1)',
               fontSize: '14px',
               fontWeight: '400',
               fontFamily: 'Cera Pro',
               '&:hover': {
                  backgroundColor: 'rgba(0, 86, 136, 1)',
               },

               '&:active': {
                  backgroundColor: 'rgba(87, 174, 224, 1)',
               },
            }}
         >
            {children}
         </Button>
      </div>
   )
}
