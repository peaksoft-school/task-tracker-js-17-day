import { styled } from '@mui/material'
import TableMui from './pages/text'
import Workspaces from './pages/Main'

function App() {
   return (
      <ConteinerMain>
         {/* <TableMui /> */}
         <Workspaces />
      </ConteinerMain>
   )
}

export default App
const ConteinerMain = styled('div')({
   height: '1000px',
   display: 'flex',
   alignItems: 'end',
   border: '1px solid red',
})
