import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './home/Home'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import MyFooter from './components/MyFooter'

function App() {
 

  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Outlet/>

    </div>
    
    <MyFooter/>

    
      
    </>
  )
}

export default App