import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'

const App = () => {

  return (
    
    <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Courses" element={<Courses/>}/>
        </Routes>


    </div>
  )
}

export default App
