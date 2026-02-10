import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      <NavLink style={({ isActive }) => ({
    color: isActive ? "red" : "white",
  })} 
          to="/">Home </NavLink>
       <NavLink style={({ isActive }) => ({
    color: isActive ? "red" : "white",
  })}  to="/About">About</NavLink>
       <NavLink style={({ isActive }) => ({
    color: isActive ? "red" : "white",
  })}  to="/Courses">Courses</NavLink>
      
    </div>
  )
}

export default Navbar
