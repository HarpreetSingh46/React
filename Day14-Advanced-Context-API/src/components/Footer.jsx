import React, { useCallback, useContext } from 'react'
import UserContext, { UserDataContext } from '../Context/UserContext'

const Footer = () => {
  const user =  useContext(UserDataContext)
  return (
    <div className='absolute bottom-0 bg-blue-900 w-screen'>
    <h1>footer</h1>
    {user}
    </div>
  )
}

export default Footer
