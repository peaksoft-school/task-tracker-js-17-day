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
import { useNavigate } from 'react-router-dom'

function Main() {
   const { token } = useSelector((state) => state.auth)
   const { main } = useSelector((state) => state.main)

   const dispach = useDispatch()
   const navigate = useNavigate()

   const [CrateModal, setCrateModal] = useState(false)
   const OpenModalCrate = () => setCrateModal((prev) => !prev)

   useEffect(() => {
      dispach(MAIN_THUNK.getAllMain({ token }))
   }, [])

   const handleFavoriteToogle = (id) => {
      dispach(MAIN_THUNK.favoritesWorkSpase({ id, token }))
   }

   const openoardMain = (id) => {
      dispach(MAIN_THUNK.getAllBoards({ id }))
         .unwrap()
         .then(() => {
            navigate(`/workspace/${id}/boards`)
         })
         .catch((error) => {
            console.error('Ошибка при переходе к доскам:', error)
         })
   }

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
                  <CreateModal onClose={OpenModalCrate} />
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
                     {main && main.length > 0 ? (
                        main.map((row, i) => (
                           <TableRow key={row.id}>
                              <TableCell>{i + 1}</TableCell>
                              <TableCell>
                                 <a onClick={() => openoardMain(row.id)}>
                                    {row.name}
                                 </a>
                              </TableCell>
                              <TableCell>
                                 <LeadBox>
                                    <Avatar src={row.urlPhoto} />
                                    <span>{row.lead}</span>
                                 </LeadBox>
                              </TableCell>
                              <TableCell>
                                 <FavoriteIconBox
                                    onClick={() => handleFavoriteToogle(row.id)}
                                 >
                                    {row.favorite ? (
                                       <FavoriteIconstarBlue color="primary" />
                                    ) : (
                                       <FavoriteIconstarSilver color="action" />
                                    )}
                                 </FavoriteIconBox>
                              </TableCell>
                           </TableRow>
                        ))
                     ) : (
                        <TableRow>
                           <TableCell colSpan={4} align="center">
                              <Box sx={{ padding: '40px' }}>
                                 <p>
                                    <ImgData
                                       src="https://cdn-icons-png.flaticon.com/512/7466/7466073.png"
                                       alt="нету данных"
                                    />
                                 </p>
                                 <h3 style={{ marginTop: '10px' }}>
                                    Нет данных
                                 </h3>
                                 <p style={{ color: '#666' }}>
                                    У вас пока нет рабочих пространств.
                                 </p>
                              </Box>
                           </TableCell>
                        </TableRow>
                     )}
                  </TableBody>
               </Table>
            </StyledTableContainer>
         </Content>
      </ConteinerBoxMain>
   )
}

export default Main
const ImgData = styled('img')({})

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

const FavoriteIconBox = styled(Box)({
   cursor: 'pointer',
})
