import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
//  const [king, setking] = useState("harpreet")
//  const [Queen, setQueen] = useState("jashan")

//  const changeking = ()=>{
//   setking("happy")
//  }
//  const changeQueen = ()=>{
//   setQueen("Tania")
//  }
  // let a=0
  return (
    <div>
      {/* <h2>{king}</h2>
      <h3>{Queen}</h3>
      <button onClick={changeking}>king</button>
      <button onClick={changeQueen}>Queen</button>
      <h1>{a}</h1>
      <button onClick={function(){
        a++
        console.log("btn clicked")
        let h1=document.querySelector("h1")
        h1.innerHTML=a
      }}>Clicked</button>
      <button onClick={function(){
        a--
        console.log("btn clicked")
        let h1=document.querySelector("h1")
        h1.innerHTML=a
        // }}>decrease</button> */   
        }
      
      <div className="box">
          {num}
      </div>
      <button onClick={()=>{
        const num =Math.floor(Math.random()*100)
        setnum(num)
      }}>Click me</button>
  
    </div>
  )
}

export default App
 