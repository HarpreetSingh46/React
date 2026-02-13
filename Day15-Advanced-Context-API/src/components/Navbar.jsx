import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'

const Navbar = () => {

const [theme,setTheme]= useContext(ThemeDataContext)
    return (
    <div className='navbar'>
        <h1>Navbar</h1>
    <h2>{theme}</h2>
     <button onClick={function(){
       if(theme=="light"){
        setTheme("dark")
       }else{
        setTheme("light")
       }
     }}>Change theme</button>
    </div>
  )
}

export default Navbar
