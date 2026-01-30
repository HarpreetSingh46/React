import React from 'react'

const Cards = (props) => {
  return (
    <div className='bg-white border-2 border-red-600 m-2  rounded h-40  px-5  py-3 w-40'>
      <h1 className='text-2xl font-semibold text-center ' >{props.user}</h1>
    </div>
  )
}

export default Cards
