import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-logo">Fruitopia 🍓🍉🍒🍎🍑</div>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink> 
            <NavLink to="/search">🔍</NavLink> 
            <NavLink to="/contact">Contact</NavLink>
        </div>
    )
}

export default Navbar