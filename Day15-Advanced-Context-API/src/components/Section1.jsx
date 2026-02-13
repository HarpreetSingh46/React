import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'

const Section1 = () => {
   const data = useContext(ThemeDataContext)
      
  return (
    <div>
        <h1>section1</h1>
        <h2>{data}</h2>      
    </div>
  )
}

export default Section1
