import { createTheme } from '@mui/material'

export const themeColors = createTheme({
   palette: {
      primary: {
         main: '#0079BF',
         white: '#FFFFFF',
         black: '#111111',
         blue: '#0079BF',
      },
      secondary: {
         main: '#919191',
         grey: '#919191',
         grey2: '#B2B2B2',
         // grey[400] = #B2B2B2
         lightGrey: '#F0F0F0',
      },
      teriary: {
         main: '#D91212',
         red: '#D91212',
         green: '#2CB107',
         litelgreen: '#66C74B',
      },
   },
})
