import React from 'react'
import UserContext, { UserDataContext } from '../Context/UserContext'

const Section = () => {
  const data = UserContext(UserDataContext)
  console.log(data);
  
  return (
    <div className='h-90 bg-zinc-900'>
      <h1>All section </h1>
    </div>
  )
}

export default Section
