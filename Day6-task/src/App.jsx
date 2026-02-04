import  { useState } from 'react'

const App = () => {
  const [allusers, setallusers] = useState([])
  const [name, setname] = useState('')
  const [email, setemail] = useState("")
  const [address, setaddress] = useState("")

  function submitHandler(e){
      e.preventDefault()
      const newAllUsers=[...allusers]
      newAllUsers.push({name,email,address})
      setallusers(newAllUsers)
      setaddress("")
      setname('')
      setemail("")
  }
 return (
  <div>
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="enter name"
        required
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <input
        type="email"
        placeholder="enter email"
        required
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter address"
        required
        value={address}
        onChange={(e) => setaddress(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>

    <div className="container">
      {allusers.map((user, index) => (
        <div className="card" key={index}>
          <div className="text">
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
            <h3>{user.address}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
)
}

export default App
