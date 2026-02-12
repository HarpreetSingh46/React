import React, { useContext } from 'react'
import { UserDataContext } from '../Context/UserContext'

const Navbar = () => {
   const data = useContext(UserDataContext)

  return (
    <div className='h-10 w-full bg-emerald-900'>
      <h1>Navbar {data}</h1>
    </div>
  )
}

export default Navbar
