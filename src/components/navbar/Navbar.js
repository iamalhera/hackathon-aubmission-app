import React from 'react'
import "./navbar.css";
import logo from  "../../assets/images/logo.png";
const Navbar = () => {
  return (
    <div className="app__navbar">
      <img src={logo} alt="navbar" />
    </div>
  )
}

export default Navbar