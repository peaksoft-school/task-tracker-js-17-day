import { useDispatch, useSelector } from 'react-redux'
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
import { Header } from '../../layouts/header/Header'
import { AppButton } from '../../components/UI/AppButton'
import {
   FavoriteIconstarBlue,
   FavoriteIconstarSilver,
} from '../../assets/AllExportIcon'
import { useEffect, useState } from 'react'
import { MAIN_THUNK } from '../../store/slices/workspaces/mainThunk'
import { CustomModal } from '../../components/UI/modal/Modal'
import CreateModal from './mainModal/CreateModal'

function Main() {
   const { token } = useSelector((state) => state.auth)
   // const { main } = useSelector((state) => state.main)

   const dispach = useDispatch()
   const [CrateModal, setCrateModal] = useState(false)
   const OpenModalCrate = () => setCrateModal((prev) => !prev)

   // get запрос должен работать

   useEffect(() => {
      dispach(MAIN_THUNK.getAllMain({ token })) // это сигнал мы отправляем
   }, [])

   return (
      <ConteinerBoxMain>
         <Header status={true} />
         <Content>
            <TopBar>
               <H2Workspaces>Workspaces</H2Workspaces>
               <MainAppButton onClick={OpenModalCrate}>Create</MainAppButton>
               <CustomModalCrate
                  isVisible={CrateModal}
                  handleVisible={OpenModalCrate}
               >
                  <CreateModal />
               </CustomModalCrate>
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
                     {/* {main.map((row) => (
                        <TableRow key={row.id}>
                           <TableCell>{row.id}</TableCell>
                           <TableCell>
                              <a href="#">{row.name}</a>
                           </TableCell>
                           <TableCell>
                              <LeadBox>
                                 <Avatar
                                    src={
                                       row.urlPhoto ||
                                       'https://i.pravatar.cc/40'
                                    }
                                 />
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
                     ))} */}
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

const CustomModalCrate = styled(CustomModal)({})

const StyledTableContainer = styled(Box)(() => ({
   maxHeight: '700px',
   overflowY: 'auto',
   '& th': {
      position: 'sticky',
      top: 0,
      zIndex: 2,
      backgroundColor: '#fafafa',
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
