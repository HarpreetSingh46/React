import React, { useState } from 'react'
import axios  from 'axios'
import Card  from './components/Card'
const App = () => {
  const [alldata, setalldata] = useState([])
 async function getdata(){
   const respones = await axios.get("https://picsum.photos/v2/list")
    setalldata(respones.data)
    console.log(respones)
  }
  return (
    <div>
      <button onClick={getdata}>Get data</button>
      <div className='card'>
          {alldata.map(function(elem,idx){
        return  <div key={idx}><Card elem={elem} /></div>
      }
    )}
      </div>
    </div>
  )
}

export default App
