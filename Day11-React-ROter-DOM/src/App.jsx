import React from 'react'
import Home from './pages/Home'
import About from  './pages/About'
import { Link,Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Men from './pages/Men'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/About/Men' element={<Men/>}/>
      </Routes>
      
    </div>
  )
}

export default App
