import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebarcom from './Sidebarcom'

const DashBoardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
      <Sidebarcom/>
        <Outlet/>
      
    </div>
  )
}

export default DashBoardLayout
