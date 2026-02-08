import { useEffect, useState } from 'react'
import axios from  'axios'
const App =  () => {
  const [alldata, setalldata] = useState([])

  const getData = async ()=>{

    const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
    
    setalldata(response.data.results)
    
  }

  useEffect( function(){
      getData()
    },[])
  return (
    <div>
      <button onClick={getData}>click</button>
      {alldata.map(function(e,i){
        return <h1 key={i} >{e.name}</h1>
      })}

    </div>
  )
}

export default App
