import React from 'react'
import axios  from 'axios'
const App = () => {
 async function getdata(){
   const respones = await axios.get("https://jsonplaceholder.typicode.com/todos/100")
    console.log(respones)
  }
  return (
    <div>
      <button onClick={getdata}>Get data</button>
    </div>
  )
}

export default App
