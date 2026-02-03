import  { useState } from 'react'

const App = () => {

  const [username, setusername] = useState("")
  const [allUsers, setallUsers] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault()
    const newAllUsers = [...allUsers]
    newAllUsers.push(username)
    console.log(newAllUsers)
    setallUsers(newAllUsers)
    setusername('')
  }
  return (
    <div>
      <form onSubmit={submitHandler} >
        <input type="text" placeholder='enter name 'required value={username} onChange={function(e){
          setusername(e.target.value)
        }}
         />
        <button>submit</button>
      </form>
      {allUsers.map((e)=>{
        return <h1>{e}</h1>
      })}
    </div>
  )
}

export default App
