import React, { useState } from 'react'
import Card  from './components/card'

const App = () => {

  const [username, setusername] = useState("")
  const [userRole, setuserRole] = useState('')
  const [imageURL, setimageURL] = useState("")
  const [userDisc, setuserDisc] = useState("")
  const [allUser, setallUser] = useState([])
  const submitHandler=(e)=>{
      e.preventDefault()
      const oldusers =[...allUser]
      oldusers.push({userDisc,username,imageURL,userRole})
      setallUser(oldusers)
      console.log(oldusers)
      setusername('')
      setimageURL("")
      setuserDisc("")
      setuserRole("")
  }

  const deleteElem=(idx)=>{
      const copyuser =[...allUser]
      copyuser.splice(idx,1)
      setallUser(copyuser)

    }


  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={submitHandler} className='flex  flex-wrap p-4 gap-5 ' >

        <input 
        value={username}
        onChange={function(e){
          setusername(e.target.value)
        }}
        className='border-2  text-xl font-semibold   px-4 py-5 rounded m-5 w-[45%]' 
        type="text" 
        placeholder='enter your name ' 
        />

        <input 
           value={imageURL}
        onChange={function(e){
          setimageURL(e.target.value)
        }}
        className='border-2 text-xl font-semibold  px-4 py-5 rounded m-5 w-[45%]' 
        type="text"
        placeholder='Profile image' 
        />

        <input 
           value={userRole}
        onChange={function(e){
          setuserRole(e.target.value)
        }}
        className='border-2 text-xl font-semibold  px-4 py-5 rounded m-5 w-[45%]' 
        type="text" 
        placeholder='Enter Role' 
        />

        <input
           value={userDisc}
        onChange={function(e){
          setuserDisc(e.target.value)
        }} 

        className='border-2 text-xl font-semibold  px-4 py-5 rounded m-5 w-[45%]' 
        type="text" 
        placeholder='Enter Discription'
        />
        <button className='border-2 active:scale-95 flex justify-center items-center text-xl font-semibold bg-emerald-500 cursor-pointer px-5 py-2 rounded m-2 w-fit'>Create User</button>

      </form>
      <div className='flex gap-5 py-2 flex-wrap px-5 '>
        {allUser.map(function(elem,idx){
          return <Card idx={idx} elem={elem}/>
        })}
      </div>
    </div>

  )

}

export default App
