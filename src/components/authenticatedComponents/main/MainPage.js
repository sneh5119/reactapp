import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

const MainPage = () => {
  return (
    <React.Fragment>
        {/* <Navbar /> */}
        {/* <div> */}
            
        {/* </div> */}
        <div class="root-container d-flex">
        <Navbar />
        <Outlet />
        </div>
        
    </React.Fragment>
  )
}

export default MainPage