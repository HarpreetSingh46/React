import React from 'react'
import {Link }from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <div className='flex justify-between px-8 py-4 bg-red-900 mb-10'>
        <h2>Navbar</h2>
        <div className='gap-4 flex'>
          <Link to='/' > Home</Link>
          <Link to="/About">About</Link>
          <Link to="/About/Men">Men</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
