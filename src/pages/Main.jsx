import React, { useEffect, useMemo } from 'react'
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
import { Header } from '../layouts/header/Header'
import { AppButton } from '../components/UI/AppButton'
import {
   FavoriteIconstarBlue,
   FavoriteIconstarSilver,
} from '../assets/AllExportIcon'
import { getWorkspaces } from '../store/slices/workspaces/WorkspacesThunk'

// 📢 ФУНКЦИЯ-МАППЕР для приведения API-данных к формату компонента
const mapApiToComponentData = (apiItem) => ({
   id: apiItem.id,

   name: apiItem.name, // Объединяем userName и userFullName, или берем полное имя

   lead: apiItem.userFullName || apiItem.userName || 'Unknown Lead',

   fav: apiItem.favorite, // Дополнительное поле для аватара лида

   urlPhoto: apiItem.urlPhoto,
})

function Main() {
   const dispatch = useDispatch()
   const {
      list: rawWorkspaces,

      isLoading,

      error,
   } = useSelector((state) => state.workspaces)
   const token = useSelector((state) => state.auth.token)
   useEffect(() => {
      if (token) {
         dispatch(getWorkspaces({ token }))
      }
   }, [dispatch, token])

   const rows = useMemo(() => {
      return rawWorkspaces.map(mapApiToComponentData)
   }, [rawWorkspaces])
   if (isLoading && rows.length === 0) {
      return <p>Загрузка воркспейсов...</p>
   }

   if (error) {
      return <p>Ошибка при загрузке: {error.message || 'Неизвестная ошибка'}</p>
   }

   return (
      <ConteinerBoxMain>
         <Header status={true} />
         <Content>
            <TopBar>
               <H2Workspaces>Workspaces</H2Workspaces>
               <MainAppButton>Create</MainAppButton>{' '}
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
