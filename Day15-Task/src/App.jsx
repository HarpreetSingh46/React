import React from 'react'
import axios from 'axios'


const App = () => {
async  function getdata(){
    const response  = await axios.get("https://fakestoreapi.com/products" )
    console.log(response.data);
  }
  return (
    <div>
     <button onClick={getdata}>GetData</button>
    </div>
  )
}

export default App
