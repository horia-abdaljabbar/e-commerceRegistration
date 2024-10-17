import React from 'react'
//import NavBar from '../Components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'

function Root() {
  return (
    <>
    
      <Header/>
     <Outlet/>
    </>
  )
}

export default Root