import React from 'react'
import logo from "./../../assets/images/logo.PNG"
import { NavLink, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-md mx-4 my-3">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          <img src={logo} alt="...." />
        </a>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav me-auto mb-2 mb-md-0 w-100 justify-content-end">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#"> About Us </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> Learn </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> Blog </a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/app/sign-up'}> My Account </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      <Outlet />
    </div>
   
    
  )
}

export default Header