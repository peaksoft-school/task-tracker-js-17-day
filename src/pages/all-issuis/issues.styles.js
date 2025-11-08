import styled from '@emotion/styled'
import {
   Avatar,
   Box,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@mui/material'
import { Input } from '../../components/UI/Input'

export const StyledChekbox = {
   '& input': {
      appearance: 'none',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      width: '18px',
      height: '18px',
      border: '1px solid rgba(208,208,208,1)',
      borderRadius: '4px',
      cursor: 'pointer',
      background: 'rgba(248,248,248,0.6)',
      position: 'relative',
   },
   '& input:checked': { backgroundColor: '#1976d2', borderColor: '#1976d2' },
   '& input:checked::after': {
      content: '""',
      position: 'absolute',
      left: '5px',
      top: '2px',
      width: '5px',
      height: '10px',
      border: 'solid white',
      borderWidth: '0 2px 2px 0',
      transform: 'rotate(45deg)',
   },
}
export const StyledBagrauntLables = {
   width: '230px',
   height: '32px',

   marginLeft: '6px',
   borderRadius: '6px',
   marginBottom: '12px',
}
export const baseHeaderCell = {
   border: 'none !important',
   height: '44px',
   fontWeight: 500,
   fontSize: '16px',
   color: '#1C1C1C',
   lineHeight: '20px',
   background: 'transparent',
   textAlign: 'left',
   verticalAlign: 'middle',
}

export const commonButtonStyle = {
   height: '36px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   borderRadius: '8px',
   border: '1px solid rgba(208,208,208,1)',
   padding: '7px 14px 7px 16px',
}

export const StyledBackground = styled('div')({
   backgroundColor: '#537081',
   minHeight: '100vh',
})
export const MainLayout = styled(Box)({ display: 'flex' })
export const IssuesContainer = styled(TableContainer)({
   width: '91.9%',
   margin: '12px 24px 12px 20px',
   borderRadius: '8px',
   background: 'rgba(248, 248, 248, 0.9)',
})

export const FilterSection = styled(Box)({ margin: '22px 0 0 16px' })
export const FilterHeader = styled(Box)({
   width: '80%',
   height: '36px',
   display: 'flex',
   alignItems: 'center',
})
export const FilterTitle = styled(Box)({
   minWidth: '134px',
   height: '25px',
   display: 'flex',
   alignItems: 'center',
   marginRight: '33px',
   '& p': {
      fontWeight: 500,
      fontSize: '20px',
      fontFamily: 'Cera Pro',
      color: '#0d0d0d',
   },
})
export const FilterControls = styled(Box)({
   width: '90%',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
})
export const TotalBox = styled(Box)({
   width: '80px',
   height: '24px',
   '& span': {
      color: 'rgba(145,145,145,1)',
      fontSize: '16px',
      '& span': {
         color: 'white',
         background: 'rgba(178,178,178,1)',
         padding: '0 5px',
         borderRadius: '16px',
      },
   },
})

export const TableIssues = styled(Table)({
   borderCollapse: 'collapse',
   width: '100%',
   tableLayout: 'fixed',
   '& thead': { display: 'table', width: '100%', tableLayout: 'fixed' },
   '& tbody tr': { display: 'table', width: '100%', tableLayout: 'fixed' },
})
export const TableHeadGrayLine = styled(TableHead)({
   width: '100%',
   borderBottom: '1px solid rgba(215,215,215,1)',
})

export const StyledTableCellCreated = styled(TableCell)({
   ...baseHeaderCell,
   width: '8.37%',
})
export const StyledTableCellPeriod = styled(TableCell)({
   ...baseHeaderCell,
   width: '6.97%',
})
export const StyledTableCellCreator = styled(TableCell)({
   ...baseHeaderCell,
   width: '11%',
})
export const StyledTableCellColumn = styled(TableCell)({
   ...baseHeaderCell,
   width: '11%',
})
export const StyledTableCellAssignee = styled(TableCell)({
   ...baseHeaderCell,
   width: '10%',
})
export const StyledTableCellLabels = styled(TableCell)({
   ...baseHeaderCell,
   width: '11%',
})
export const StyledTableCellChecklist = styled(TableCell)({
   ...baseHeaderCell,
   width: '8%',
})
export const StyledTableCellDescription = styled(TableCell)({
   ...baseHeaderCell,
   width: '32%',
})

export const StyledTableBody = styled(TableBody)({
   display: 'block',
   maxHeight: '766px',
   overflowY: 'auto',
   overflowX: 'hidden',
   width: '100%',
   '&::-webkit-scrollbar': { width: '6px' },
   '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(180,180,180,0.5)',
      borderRadius: '8px',
   },
})
export const StyledTableRow = styled(TableRow)({
   transition: 'background 0.2s ease',
   verticalAlign: 'top',
   '&:hover': { backgroundColor: 'rgba(243,244,246,0.5)' },
   '& td': {
      borderBottom: '1px solid #f0f0f0',
      padding: '14px 16px',
      fontSize: '14px',
      color: '#374151',
      verticalAlign: 'top',
   },
})
export const StyledTableCellBodyCreated = styled(TableCell)({
   width: '8.37%',
   '& span': { width: '74px' },
})
export const StyledTableCellBodyPeriod = styled(TableCell)({ width: '6.97%' })
export const StyledTableCellBodyCreator = styled(TableCell)({ width: '11%' })
export const StyledTableCellBodyColumn = styled(TableCell)({ width: '11%' })
export const StyledTableCellBodyAssignee = styled(TableCell)({ width: '10%' })
export const StyledTableCellBodyLabels = styled(TableCell)({ width: '11%' })
export const StyledTableCellBodyChecklist = styled(TableCell)({ width: '8%' })
export const StyledTableCellBodyDescription = styled(TableCell)({
   width: '32%',
})

export const Label = styled('span')(({ color }) => ({
   display: 'inline-block',
   width: '32px',
   height: '6px',
   borderRadius: '8px',
   backgroundColor: color,
   marginRight: '4px',
}))

export const StartDateButton = styled(Box)({
   ...commonButtonStyle,
   width: '109px',
   gap: '4px',
})

export const EndDateButton = styled(Box)({
   ...commonButtonStyle,
   width: '110px',
})
export const LabelsSelect = styled(Box)({
   ...commonButtonStyle,
   width: '154px',
   padding: '9px 14px 9px 16px',
})

export const CheksNoLabeles = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   marginLeft: '6px',
   marginBottom: '12px',

   '& span': {
      marginLeft: '6px',
   },
   ...StyledChekbox,
})

export const CheksColorsLabeles = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   marginLeft: '6px',
   ...StyledChekbox,
})

export const StyleBoxGreen = styled(Box)({
   backgroundColor: '#61BD4F',
   ...StyledBagrauntLables,
})
export const StyleBoxOreng = styled(Box)({
   backgroundColor: '#EB8900',
   ...StyledBagrauntLables,
})
export const StyleBoxBlue = styled(Box)({
   backgroundColor: '#0079BF',
   ...StyledBagrauntLables,
})
export const StyleBoxRed = styled(Box)({
   backgroundColor: '#EB5A46',
   ...StyledBagrauntLables,
})

export const AssigneeSelect = styled(Box)({
   ...commonButtonStyle,

   width: '219px',
   padding: '9px 14px 9px 16px',
})

export const StylesInput = styled(Input)({
   width: '270px',
   margin: '0',
})

export const StylesConteinerBoxProfilesUser = styled(Box)({
   height: '456px',

   overflow: 'auto',

   scrollbarWidth: 'none',
   msOverflowStyle: 'none',

   '&::-webkit-scrollbar': {
      display: 'none',
   },
})

export const StylesBoxUsers = styled(Box)({
   width: '100%',
   height: '56px',
   display: 'flex',
   alignItems: 'center',
   gap: '8px',
   padding: '0 4px',

   ...StyledChekbox,

   '& .user-info': {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: '1.3',
   },
   '& .user-name': {
      fontSize: '14px',
      color: '#1C1C1C',
   },
   '& .user-email': {
      fontSize: '12px',
      color: '#919191',
   },
})

export const StylesAvatar = styled(Avatar)({})

export const ChecklistWrapper = styled(Box)({
   width: '140px',
   height: '36px',
   display: 'flex',
   alignItems: 'center',
   gap: '8px',
   borderRadius: '8px',
   padding: '9px 14px 9px 16px',
   ...StyledChekbox,
   '& span': { fontSize: '14px', color: '#0d0d0d', userSelect: 'none' },
})
