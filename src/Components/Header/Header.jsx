import { Slider } from '@mui/material';
import './Header.css'
import  React from 'react'
import Hero from '../Hero/Hero';
import { NavLink } from 'react-router-dom';

function Header() {

    
  return (
    <>
<div>
  <nav className="navbar navbar-expand-lg px-0 py-3 text-dark">
    <div className="container-xl">
      {/* Logo */}
      <a className="navbar-brand" href="#">
        <img src="./vite.svg" className="h-8" alt="..." />
      </a>
      {/* Navbar toggle */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      {/* Collapse */}
      <div className="collapse navbar-collapse" id="navbarCollapse">
        {/* Nav */}
        {/* <div className="navbar-nav mx-lg-auto">
          <NavLink className="nav-item nav-link" to="/Home" aria-current="page">Home</NavLink>
          <NavLink className="nav-item nav-link" to="#">Product</NavLink>
          <NavLink className="nav-item nav-link" to="#">Features</NavLink>
          <NavLink className="nav-item nav-link" to="#">Pricing</NavLink>
        </div> */}
        {/* Right navigation */}
        {/* <div className="navbar-nav ms-lg-4">
          <NavLink className="nav-account nav-link" to="">Sign In</NavLink>
        </div> */}
        {/* Action */}
        <div className="d-flex mt-3 mt-lg-0 nav-btn">
          <NavLink className="nav-account  btn" to="Login">Login</NavLink>
          <NavLink to="SignUp" className="nav-account btn">
            Register
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
  
</div>

    </>
  )
}

export default Header