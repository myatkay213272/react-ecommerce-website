import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="navbar-nav">
        <NavLink className="nav-link" to="">Women</NavLink>
        <NavLink className="nav-link" to="">Men</NavLink>
        <NavLink className="nav-link" to="">Kids</NavLink>
        <NavLink className="nav-link" to="">Sports</NavLink>
        <NavLink className="nav-link" to="">Brands</NavLink>
        <NavLink className="nav-link" to="">New</NavLink>
        <NavLink className="nav-link" to="">Sale</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
