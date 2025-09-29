import {
   Avatar,
   Box,
   styled,
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableRow,
} from '@mui/material'
import { Header } from '../layouts/header/Header'
import { AppButton } from '../components/UI/AppButton'
import {
   FavoriteIconstarBlue,
   FavoriteIconstarSilver,
} from '../assets/AllExportIcon'

const rows = [
   { id: 1, name: 'Taigan', lead: 'Almaz ALmazov', fav: true },
   { id: 2, name: 'Shoppix', lead: 'Almaz ALmazov', fav: false },
   { id: 3, name: 'Task Tracker', lead: 'Almaz ALmazov', fav: false },
   { id: 4, name: 'Mobile UX-UI', lead: 'Almaz ALmazov', fav: false },
   { id: 5, name: 'Mobile UX-UI', lead: 'Almaz ALmazov', fav: false },
   { id: 6, name: 'Mobile UX-UI', lead: 'Almaz ALmazov', fav: false },
   { id: 7, name: 'Mobile UX-UI', lead: 'Almaz ALmazov', fav: false },
   { id: 8, name: 'Mobile UX-UI', lead: 'Almaz ALmazov', fav: false },
   { id: 9, name: 'Mobile UX-UI', lead: 'Almaz ALmazov', fav: false },
   { id: 10, name: 'Mobile UX-UI', lead: 'Almaz ALmazov', fav: false },
   { id: 11, name: 'Mobile UX-UI', lead: 'Almaz ALmazov', fav: false },
   { id: 12, name: 'Mobile UX-UI', lead: 'Almaz ALmazov', fav: false },
   { id: 13, name: 'Mobile UX-UI', lead: 'Almaz ALmazov', fav: false },
   { id: 14, name: 'Mobile UX-UI', lead: 'Almaz ALmazov', fav: false },
]

function Main() {
   return (
      <ConteinerBoxMain>
         <Header />

         <Content>
            <TopBar>
               <H2Workspaces>Workspaces</H2Workspaces>
               <MainAppButton>Create</MainAppButton>
            </TopBar>

            <StyledTableContainer>
               <Table stickyHeader>
                  <TableHead>
                     <TableRow>
                        <NowemberTableCell>№</NowemberTableCell>
                        <NameTableCell>Name</NameTableCell>
                        <LeadTableCell>Lead</LeadTableCell>
                        <ActionTableCell>Action</ActionTableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {rows.map((row) => (
                        <TableRow key={row.id}>
                           <TableCell>{row.id}</TableCell>
                           <TableCell>
                              <a href="#">{row.name}</a>
                           </TableCell>
                           <TableCell>
                              <LeadBox>
                                 <Avatar src="https://i.pravatar.cc/40" />
                                 <span>{row.lead}</span>
                              </LeadBox>
                           </TableCell>
                           <TableCell>
                              {row.fav ? (
                                 <FavoriteIconstarBlue color="primary" />
                              ) : (
                                 <FavoriteIconstarSilver color="action" />
                              )}
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </StyledTableContainer>
         </Content>
      </ConteinerBoxMain>
   )
}

export default Main

const ConteinerBoxMain = styled(Box)({
   width: null,
})

const Content = styled(Box)({
   height: '930px',
   margin: '16px 40px 10px 40px',
})

const TopBar = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginBottom: '20px',
}))

const H2Workspaces = styled('h2')({
   margin: '20px 0px 0px 20px',
})

const MainAppButton = styled(AppButton)({
   margin: '16px 16px 0px 0px ',
})

const StyledTableContainer = styled(Box)(() => ({
   maxHeight: '700px', // фиксируем высоту для скролла
   overflowY: 'auto',
   '& th': {
      position: 'sticky',
      top: 0,
      zIndex: 2,
      backgroundColor: '#fafafa', // фон, чтобы не смешивался при скролле
   },
}))

const NowemberTableCell = styled(TableCell)({
   width: '60px',
})

const NameTableCell = styled(TableCell)({
   width: '791px',
})

const LeadTableCell = styled(TableCell)({
   width: '340px',
})

const ActionTableCell = styled(TableCell)({
   width: '169px',
})

const LeadBox = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '10px',
}))
