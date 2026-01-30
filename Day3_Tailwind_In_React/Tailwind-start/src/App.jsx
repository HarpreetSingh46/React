import Card from'./components/Cards'
const App = () => {
  
  
  const users = ['Harpreet ','Lovepreet','Tejinder','babbu']
  return (
    <div className='p-3 h-screen bg-black'>
      {users.map((elem)=>{
        return  <Card  user={elem}/>
      })}
      
    </div>
  
  )
}

export default App
