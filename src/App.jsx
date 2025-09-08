import React from 'react'
import { Header } from './layouts/header/Header'

function App() {
   return (
      <div>
         <Header favouritesCount={1} notificationCount={2} />
      </div>
   )
}

export default App
