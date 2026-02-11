import React from 'react'
import Navbar from './components/Navbar'
import AllSection from './components/AllSection'
import Footer from './components/Footer'
const App = () => {
  const courseData =[{
    courseName:"Cohort 2.0",
    Instructor :"Hapreet singh",
    duration :"6 months"
  }]
  return (
    <div>
      <Navbar/>
      <AllSection courseData={courseData}/>
      <Footer/>
    </div>
  )
}

export default App
