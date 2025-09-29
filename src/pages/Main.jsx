import * as React from 'react'
import {
   Box,
   Button,
   Typography,
   Avatar,
   IconButton,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Paper,
   styled,
} from '@mui/material'
import {
   FavoriteIconstarBlue,
   FavoriteIconstarSilver,
} from '../assets/AllExportIcon'

// Данные
const workspaces = [
   { id: 1, name: 'Taigan', lead: 'Almaz ALmazov', favorite: true },
   { id: 2, name: 'Shoppix', lead: 'Almaz ALmazov', favorite: false },
   { id: 3, name: 'Task Tracker', lead: 'Almaz ALmazov', favorite: false },
   { id: 4, name: 'Mobile UX-UI', lead: 'Almaz ALmazov', favorite: false },
   { id: 4, name: 'Mobile UX-UI', lead: 'Almaz ALmazov', favorite: false },
   { id: 4, name: 'Mobile UX-UI', lead: 'Almaz ALmazov', favorite: false },
   { id: 4, name: 'Mobile UX-UI', lead: 'Almaz ALmazov', favorite: false },
   { id: 4, name: 'Mobile UX-UI', lead: 'Almaz ALmazov', favorite: false },
   { id: 4, name: 'Mobile UX-UI', lead: 'Almaz ALmazov', favorite: false },
   { id: 4, name: 'Mobile UX-UI', lead: 'Almaz ALmazov', favorite: false },
   { id: 4, name: 'Mobile UX-UI', lead: 'Almaz ALmazov', favorite: false },
   { id: 4, name: 'Mobile UX-UI', lead: 'Almaz ALmazov', favorite: false },
   { id: 4, name: 'Mobile UX-UI', lead: 'Almaz ALmazov', favorite: false },
]

export default function Main() {
   return (
      <BoxConteiner>
         {/* Header */}

         <HeaderBox>
            <Typography variant="h6" fontWeight="bold">
               Workspaces
            </Typography>
            <Button variant="contained" color="primary">
               Create
            </Button>
         </HeaderBox>

         {/* Table */}
         <TableContainer component={Paper} sx={{ flex: 1 }}>
            <Table>
               <TableHead>
                  <TableRow>
                     <TableCell>№</TableCell>
                     <TableCell>Name</TableCell>
                     <TableCell>Lead</TableCell>
                     <TableCell>Action</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {workspaces.map((ws) => (
                     <TableRow key={ws.id}>
                        <TableCell>{ws.id}</TableCell>
                        <TableCell>
                           <WorkspaceLink>{ws.name}</WorkspaceLink>
                        </TableCell>
                        <LeadCell>
                           <Avatar
                              src="https://i.pravatar.cc/40"
                              alt={ws.lead}
                              sx={{ width: 32, height: 32 }}
                           />
                           <Typography>{ws.lead}</Typography>
                        </LeadCell>
                        <TableCell>
                           <IconButton>
                              {ws.favorite ? (
                                 <FavoriteIconstarBlue color="primary" />
                              ) : (
                                 <FavoriteIconstarSilver color="action" />
                              )}
                           </IconButton>
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </BoxConteiner>
   )
}

const BoxConteiner = styled(Box)({
   width: '1360px',
   height: '930px',
   margin: '0 auto',
   padding: 24, // 3 * 8px (MUI spacing)
   backgroundColor: '#fff',
   borderRadius: 16, // 2 * 8px (MUI spacing)
   boxShadow: 3,
   display: 'flex',
   flexDirection: 'column',
})

const HeaderBox = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginBottom: 16, // mb: 2 * 8px
})

const WorkspaceLink = styled(Typography)({
   color: '#1976d2', // primary.main
   textDecoration: 'underline',
   cursor: 'pointer',
   display: 'inline-block',
})

const LeadCell = styled(TableCell)({
   display: 'flex',
   alignItems: 'center',
   gap: 8, // 1 * 8px
   height: '83px',
})
