import React from 'react'
import Sidebar from '../components/UI/sidebar/Sidebar'
import { Header } from '../layouts/header/Header'

function ParticipantsPage() {
   return (
      <div>
         <Header />
         <div style={{ display: 'flex' }}>
            <Sidebar />
            <h1>ParticipantsPage</h1>
         </div>
      </div>
   )
}

export default ParticipantsPage
